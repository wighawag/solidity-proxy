// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Router4X24 {
	address internal immutable implementation_01;
	address internal immutable implementation_02;
	address internal immutable implementation_03;
	address internal immutable implementation_04;

	address internal immutable fallback_implementation;

	uint256 internal immutable sigs_01;
	uint256 internal immutable sigs_02;
	uint256 internal immutable sigs_03;
	uint256 internal immutable sigs_04;

	// This is the interface for routes specification
	struct Routes {
		address[] implementations;
		// 255 implementation max as index = 0 means no implementation (allow bytes4(0) to be valid)
		// first 4 bytes are the bytes4, rightmost is the index for implementation
		// should be ordered by bytes4 values
		bytes5[] sigMap;
		address fallbackImplementation;
	}

	constructor(Routes memory routes) {
		uint256 numSigs = routes.sigMap.length;
		uint256 numImpl = routes.implementations.length;
		require(numImpl <= 4, 'MAX_IMPLEMENTATIONS_REACHED');
		require(numSigs <= 24, 'MAX_SIGS_REACHED');

		address tmp_implementation_01 = routes.implementations[0];
		address tmp_implementation_02;
		address tmp_implementation_03;
		address tmp_implementation_04;
		if (numImpl > 1) {
			tmp_implementation_02 = routes.implementations[1];
		}
		if (numImpl > 2) {
			tmp_implementation_03 = routes.implementations[2];
		}
		if (numImpl > 3) {
			tmp_implementation_04 = routes.implementations[3];
		}

		implementation_01 = tmp_implementation_01;
		implementation_02 = tmp_implementation_02;
		implementation_03 = tmp_implementation_03;
		implementation_04 = tmp_implementation_04;

		uint256 tmp_sigs_01;
		uint256 tmp_sigs_02;
		uint256 tmp_sigs_03;
		uint256 tmp_sigs_04;
		// TODO order them
		for (uint256 i = 0; i < numSigs; i++) {
			if (i < 6) {
				tmp_sigs_01 = tmp_sigs_01 | (uint256(uint40(routes.sigMap[i])) << (i * 40));
			} else if (i < 12) {
				tmp_sigs_02 = tmp_sigs_02 | (uint256(uint40(routes.sigMap[i])) << ((i - 6) * 40));
			} else if (i < 18) {
				tmp_sigs_03 = tmp_sigs_03 | (uint256(uint40(routes.sigMap[i])) << ((i - 12) * 40));
			} else {
				tmp_sigs_04 = tmp_sigs_04 | (uint256(uint40(routes.sigMap[i])) << ((i - 18) * 40));
			}
		}
		sigs_01 = tmp_sigs_01;
		sigs_02 = tmp_sigs_02;
		sigs_03 = tmp_sigs_03;
		sigs_04 = tmp_sigs_04;

		fallback_implementation = routes.fallbackImplementation;
	}

	fallback() external {
		uint32 sig = uint32(msg.sig);
		uint256 implementationIndex;
		for (uint256 i = 0; i < 4 * 6; i++) {
			// TODO binary search
			uint40 pair;
			if (i < 6) {
				pair = uint40((sigs_01 >> (i * 40)) & 0xFFFFFF);
			} else if (i < 12) {
				pair = uint40((sigs_02 >> ((i - 6) * 40)) & 0xFFFFFF);
			} else if (i < 18) {
				pair = uint40((sigs_03 >> ((i - 12) * 40)) & 0xFFFFFF);
			} else {
				pair = uint40((sigs_04 >> ((i - 18) * 40)) & 0xFFFFFF);
			}
			if (pair == 0) {
				// we hit the zero flag value
				// no more sigs
				break;
			} else if (pair >> 8 == sig) {
				implementationIndex = pair & 0xFF;
			}
		}

		address implementation;
		if (implementationIndex == 1) {
			implementation = implementation_01;
		} else if (implementationIndex == 2) {
			implementation = implementation_02;
		} else if (implementationIndex == 3) {
			implementation = implementation_03;
		} else if (implementationIndex == 4) {
			implementation = implementation_04;
		} else {
			implementation = fallback_implementation;
		}

		require(implementation != address(0), 'UNKNOWN_METHOD');

		// taken from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/8cab922347e79732f6a532a75da5081ba7447a71/contracts/proxy/Proxy.sol#L22-L45
		assembly {
			// Copy msg.data. We take full control of memory in this inline assembly
			// block because it will not return to Solidity code. We overwrite the
			// Solidity scratch pad at memory position 0.
			calldatacopy(0, 0, calldatasize())

			// Call the implementation.
			// out and outsize are 0 because we don't know the size yet.
			let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)

			// Copy the returned data.
			returndatacopy(0, 0, returndatasize())

			switch result
			// delegatecall returns 0 on error.
			case 0 {
				revert(0, returndatasize())
			}
			default {
				return(0, returndatasize())
			}
		}
	}
}
