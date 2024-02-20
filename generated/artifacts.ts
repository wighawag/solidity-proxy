export default {
  "ERC165": {
    "_format": "hh-sol-artifact-1",
    "contractName": "ERC165",
    "sourceName": "solc_0.8/ERC173/ERC173Proxy.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "id",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "deployedBytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "gasEstimates": null,
      "methodIdentifiers": {
        "supportsInterface(bytes4)": "01ffc9a7"
      }
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/ERC173/ERC173Proxy.sol\":\"ERC165\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/ERC173/ERC173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing ERC173 for ownership management\\ncontract ERC173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xe66459b598ec609af81ef013a7cbf4cc12eea4157190882fe15c4a3f2037b8d6\",\"license\":\"MIT\"},\"solc_0.8/ERC1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// ERC-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x7b91e396821b404ffd824b60396d4f561acb5e7e8ce611b5444dfe503cc693e4\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  },
  "ERC173Proxy": {
    "_format": "hh-sol-artifact-1",
    "contractName": "ERC173Proxy",
    "sourceName": "solc_0.8/ERC173/ERC173Proxy.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "implementationAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousImplementation",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "ProxyImplementationUpdated",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "id",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "bytecode": "0x608060405260405162000cb738038062000cb78339810160408190526200002691620001f3565b620000318262000046565b6200003d8382620000b8565b505050620002f1565b60006200006060008051602062000c978339815191525490565b90508160008051602062000c9783398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a381511562000195576000836001600160a01b0316836040516200013c9190620002d3565b600060405180830381855af49150503d806000811462000179576040519150601f19603f3d011682016040523d82523d6000602084013e6200017e565b606091505b505090508062000193573d806000803e806000fd5b505b505050565b80516001600160a01b0381168114620001b257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001ea578181015183820152602001620001d0565b50506000910152565b6000806000606084860312156200020957600080fd5b62000214846200019a565b925062000224602085016200019a565b60408501519092506001600160401b03808211156200024257600080fd5b818601915086601f8301126200025757600080fd5b8151818111156200026c576200026c620001b7565b604051601f8201601f19908116603f01168101908382118183101715620002975762000297620001b7565b81604052828152896020848701011115620002b157600080fd5b620002c4836020830160208801620001cd565b80955050505050509250925092565b60008251620002e7818460208701620001cd565b9190910192915050565b61099680620003016000396000f3fe60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146101295780638da5cb5b1461013c578063f2fde38b14610176576100ca565b806301ffc9a7146100d45780633659cfe614610109576100ca565b366100ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d2610196565b005b3480156100e057600080fd5b506100f46100ef366004610806565b6101e1565b60405190151581526020015b60405180910390f35b34801561011557600080fd5b506100d2610124366004610871565b6103af565b6100d261013736600461088c565b610481565b34801561014857600080fd5b5061015161057c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610100565b34801561018257600080fd5b506100d2610191366004610871565b6105ab565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e8280156101d7578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061027457507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561028157506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102b357506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561039b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103989181019061090f565b60015b6103a85750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e816040518060200160405280600081525061066a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b6105778383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066a92505050565b505050565b60006105a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e81610759565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105775760008373ffffffffffffffffffffffffffffffffffffffff16836040516107059190610931565b600060405180830381855af49150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b50509050806101db573d806000803e806000fd5b60006107837fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006020828403121561081857600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103a857600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461086c57600080fd5b919050565b60006020828403121561088357600080fd5b6103a882610848565b6000806000604084860312156108a157600080fd5b6108aa84610848565b9250602084013567ffffffffffffffff808211156108c757600080fd5b818601915086601f8301126108db57600080fd5b8135818111156108ea57600080fd5b8760208285010111156108fc57600080fd5b6020830194508093505050509250925092565b60006020828403121561092157600080fd5b815180151581146103a857600080fd5b6000825160005b818110156109525760208186018101518583015201610938565b50600092019182525091905056fea26469706673582212207e5889c7251b5ed64ea94946536bbd6963ea83990bc875c194dfbed56ffa0cb164736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146101295780638da5cb5b1461013c578063f2fde38b14610176576100ca565b806301ffc9a7146100d45780633659cfe614610109576100ca565b366100ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d2610196565b005b3480156100e057600080fd5b506100f46100ef366004610806565b6101e1565b60405190151581526020015b60405180910390f35b34801561011557600080fd5b506100d2610124366004610871565b6103af565b6100d261013736600461088c565b610481565b34801561014857600080fd5b5061015161057c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610100565b34801561018257600080fd5b506100d2610191366004610871565b6105ab565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e8280156101d7578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061027457507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561028157506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102b357506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561039b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103989181019061090f565b60015b6103a85750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e816040518060200160405280600081525061066a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b6105778383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066a92505050565b505050565b60006105a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e81610759565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105775760008373ffffffffffffffffffffffffffffffffffffffff16836040516107059190610931565b600060405180830381855af49150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b50509050806101db573d806000803e806000fd5b60006107837fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006020828403121561081857600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103a857600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461086c57600080fd5b919050565b60006020828403121561088357600080fd5b6103a882610848565b6000806000604084860312156108a157600080fd5b6108aa84610848565b9250602084013567ffffffffffffffff808211156108c757600080fd5b818601915086601f8301126108db57600080fd5b8135818111156108ea57600080fd5b8760208285010111156108fc57600080fd5b6020830194508093505050509250925092565b60006020828403121561092157600080fd5b815180151581146103a857600080fd5b6000825160005b818110156109525760208186018101518583015201610938565b50600092019182525091905056fea26469706673582212207e5889c7251b5ed64ea94946536bbd6963ea83990bc875c194dfbed56ffa0cb164736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {
          "@_38": {
            "entryPoint": null,
            "id": 38,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@_owner_154": {
            "entryPoint": null,
            "id": 154,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@_setImplementation_313": {
            "entryPoint": 184,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 70,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 410,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
            "entryPoint": 499,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 723,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "copy_memory_to_memory_with_cleanup": {
            "entryPoint": 461,
            "id": null,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 439,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:1943:4",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:4",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "74:117:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "84:22:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "99:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "93:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "93:13:4"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "84:5:4"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "169:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "178:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "181:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "171:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "171:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "171:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "128:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "139:5:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "154:3:4",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "159:1:4",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "150:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "150:11:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "163:1:4",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "146:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "146:19:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "135:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "135:31:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "125:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "125:42:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "118:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "118:50:4"
                        },
                        "nodeType": "YulIf",
                        "src": "115:70:4"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "53:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "64:5:4",
                      "type": ""
                    }
                  ],
                  "src": "14:177:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "228:95:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "245:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "252:3:4",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "257:10:4",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "248:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "248:20:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "238:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "238:31:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "238:31:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "285:1:4",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "288:4:4",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "278:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "278:15:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "278:15:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "309:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "312:4:4",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "302:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "302:15:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "302:15:4"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "196:127:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "394:184:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "404:10:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "413:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "408:1:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "473:63:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "498:3:4"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "503:1:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "494:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "494:11:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "517:3:4"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "522:1:4"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "513:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "513:11:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "507:5:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "507:18:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "487:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "487:39:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "487:39:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "434:1:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "437:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "431:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "431:13:4"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "445:19:4",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "447:15:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "456:1:4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "459:2:4",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "452:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "452:10:4"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "447:1:4"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "427:3:4",
                          "statements": []
                        },
                        "src": "423:113:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "556:3:4"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "561:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "552:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:16:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "570:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:27:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "545:27:4"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory_with_cleanup",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "372:3:4",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "377:3:4",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "382:6:4",
                      "type": ""
                    }
                  ],
                  "src": "328:250:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "707:942:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "753:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "762:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "765:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "755:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "755:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "755:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "728:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "737:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "724:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "724:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "749:2:4",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "720:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "720:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "717:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "778:50:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "818:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "788:29:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "788:40:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "778:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "837:59:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "881:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "892:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "877:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "877:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "847:29:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "847:49:4"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "837:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "905:39:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "929:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "940:2:4",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "925:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "925:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "919:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "919:25:4"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "909:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "953:28:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "971:2:4",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "975:1:4",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "967:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "967:10:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "979:1:4",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "963:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "963:18:4"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "957:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1008:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1017:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1020:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1010:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1010:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1010:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "996:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1004:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "993:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "993:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "990:34:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1033:32:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1047:9:4"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1058:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1043:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1043:22:4"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1037:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1113:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1122:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1125:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1115:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1115:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1115:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1092:2:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1096:4:4",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1088:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1088:13:4"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1103:7:4"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1084:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1084:27:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1077:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1077:35:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1074:55:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1138:19:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1154:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1148:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1148:9:4"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "1142:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1180:22:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:16:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1182:18:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1182:18:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1172:2:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1176:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1169:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1169:10:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1166:36:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1211:17:4",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1225:2:4",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1221:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1221:7:4"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "1215:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1237:23:4",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1257:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1251:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:9:4"
                        },
                        "variables": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1241:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1269:71:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1291:6:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "_3",
                                              "nodeType": "YulIdentifier",
                                              "src": "1315:2:4"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1319:4:4",
                                              "type": "",
                                              "value": "0x1f"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1311:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1311:13:4"
                                        },
                                        {
                                          "name": "_4",
                                          "nodeType": "YulIdentifier",
                                          "src": "1326:2:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "1307:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1307:22:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1331:2:4",
                                      "type": "",
                                      "value": "63"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1303:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1303:31:4"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1336:2:4"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1299:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1299:40:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1287:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:53:4"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "1273:10:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1399:22:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1401:16:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1401:18:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1401:18:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1358:10:4"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1370:2:4"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "1355:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1355:18:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1378:10:4"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1390:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "1375:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1375:22:4"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1352:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1352:46:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1349:72:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1437:2:4",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1441:10:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1430:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1430:22:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1430:22:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1468:6:4"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1476:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1461:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1461:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1461:18:4"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1525:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1534:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1537:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1527:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1527:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1527:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1502:2:4"
                                    },
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "1506:2:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1498:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1498:11:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1511:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1494:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1494:20:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1516:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1491:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1491:33:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1488:53:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "1589:2:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1593:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1585:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1585:11:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1602:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1610:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1598:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1598:15:4"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1615:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1550:34:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1550:68:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1550:68:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1627:16:4",
                        "value": {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1637:6:4"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1627:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "657:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "668:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "680:6:4",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "688:6:4",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "696:6:4",
                      "type": ""
                    }
                  ],
                  "src": "583:1066:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1791:150:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1801:27:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1821:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1815:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1815:13:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1805:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1876:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1884:4:4",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1872:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1872:17:4"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1891:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1896:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1837:34:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1837:66:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1837:66:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1912:23:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1923:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1928:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1919:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1919:16:4"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1912:3:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "1767:3:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1772:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1783:3:4",
                      "type": ""
                    }
                  ],
                  "src": "1654:287:4"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address_fromMemory(headStart)\n        value1 := abi_decode_address_fromMemory(add(headStart, 32))\n        let offset := mload(add(headStart, 64))\n        let _1 := sub(shl(64, 1), 1)\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := mload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        copy_memory_to_memory_with_cleanup(add(_2, 32), add(memPtr, 32), _3)\n        value2 := memPtr\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        end := add(pos, length)\n    }\n}",
            "id": 4,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "608060405260405162000cb738038062000cb78339810160408190526200002691620001f3565b620000318262000046565b6200003d8382620000b8565b505050620002f1565b60006200006060008051602062000c978339815191525490565b90508160008051602062000c9783398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a381511562000195576000836001600160a01b0316836040516200013c9190620002d3565b600060405180830381855af49150503d806000811462000179576040519150601f19603f3d011682016040523d82523d6000602084013e6200017e565b606091505b505090508062000193573d806000803e806000fd5b505b505050565b80516001600160a01b0381168114620001b257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001ea578181015183820152602001620001d0565b50506000910152565b6000806000606084860312156200020957600080fd5b62000214846200019a565b925062000224602085016200019a565b60408501519092506001600160401b03808211156200024257600080fd5b818601915086601f8301126200025757600080fd5b8151818111156200026c576200026c620001b7565b604051601f8201601f19908116603f01168101908382118183101715620002975762000297620001b7565b81604052828152896020848701011115620002b157600080fd5b620002c4836020830160208801620001cd565b80955050505050509250925092565b60008251620002e7818460208701620001cd565b9190910192915050565b61099680620003016000396000f3fe60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146101295780638da5cb5b1461013c578063f2fde38b14610176576100ca565b806301ffc9a7146100d45780633659cfe614610109576100ca565b366100ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d2610196565b005b3480156100e057600080fd5b506100f46100ef366004610806565b6101e1565b60405190151581526020015b60405180910390f35b34801561011557600080fd5b506100d2610124366004610871565b6103af565b6100d261013736600461088c565b610481565b34801561014857600080fd5b5061015161057c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610100565b34801561018257600080fd5b506100d2610191366004610871565b6105ab565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e8280156101d7578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061027457507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561028157506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102b357506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561039b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103989181019061090f565b60015b6103a85750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e816040518060200160405280600081525061066a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b6105778383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066a92505050565b505050565b60006105a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e81610759565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105775760008373ffffffffffffffffffffffffffffffffffffffff16836040516107059190610931565b600060405180830381855af49150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b50509050806101db573d806000803e806000fd5b60006107837fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006020828403121561081857600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103a857600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461086c57600080fd5b919050565b60006020828403121561088357600080fd5b6103a882610848565b6000806000604084860312156108a157600080fd5b6108aa84610848565b9250602084013567ffffffffffffffff808211156108c757600080fd5b818601915086601f8301126108db57600080fd5b8135818111156108ea57600080fd5b8760208285010111156108fc57600080fd5b6020830194508093505050509250925092565b60006020828403121561092157600080fd5b815180151581146103a857600080fd5b6000825160005b818110156109525760208186018101518583015201610938565b50600092019182525091905056fea26469706673582212207e5889c7251b5ed64ea94946536bbd6963ea83990bc875c194dfbed56ffa0cb164736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xCB7 CODESIZE SUB DUP1 PUSH3 0xCB7 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1F3 JUMP JUMPDEST PUSH3 0x31 DUP3 PUSH3 0x46 JUMP JUMPDEST PUSH3 0x3D DUP4 DUP3 PUSH3 0xB8 JUMP JUMPDEST POP POP POP PUSH3 0x2F1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x60 PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC97 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC97 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x195 JUMPI PUSH1 0x0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0x13C SWAP2 SWAP1 PUSH3 0x2D3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH3 0x179 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x17E JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x193 JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1B2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1EA JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1D0 JUMP JUMPDEST POP POP PUSH1 0x0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x209 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x214 DUP5 PUSH3 0x19A JUMP JUMPDEST SWAP3 POP PUSH3 0x224 PUSH1 0x20 DUP6 ADD PUSH3 0x19A JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x242 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x257 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x26C JUMPI PUSH3 0x26C PUSH3 0x1B7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x297 JUMPI PUSH3 0x297 PUSH3 0x1B7 JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x2B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x2C4 DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1CD JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH3 0x2E7 DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1CD JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x996 DUP1 PUSH3 0x301 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5E JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x43 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x129 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x13C JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x176 JUMPI PUSH2 0xCA JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x109 JUMPI PUSH2 0xCA JUMP JUMPDEST CALLDATASIZE PUSH2 0xCA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD2 PUSH2 0x196 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF4 PUSH2 0xEF CALLDATASIZE PUSH1 0x4 PUSH2 0x806 JUMP JUMPDEST PUSH2 0x1E1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x115 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD2 PUSH2 0x124 CALLDATASIZE PUSH1 0x4 PUSH2 0x871 JUMP JUMPDEST PUSH2 0x3AF JUMP JUMPDEST PUSH2 0xD2 PUSH2 0x137 CALLDATASIZE PUSH1 0x4 PUSH2 0x88C JUMP JUMPDEST PUSH2 0x481 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x148 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x151 PUSH2 0x57C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x100 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x182 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD2 PUSH2 0x191 CALLDATASIZE PUSH1 0x4 PUSH2 0x871 JUMP JUMPDEST PUSH2 0x5AB JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D7 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x274 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x281 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2B3 JUMPI POP PUSH1 0x0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x39B JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x398 SWAP2 DUP2 ADD SWAP1 PUSH2 0x90F JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x3A8 JUMPI POP PUSH1 0x0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x465 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x47E DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x66A JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x537 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x577 DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x66A SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5A6 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x661 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x47E DUP2 PUSH2 0x759 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x577 JUMPI PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x705 SWAP2 SWAP1 PUSH2 0x931 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x740 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x745 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1DB JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x783 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x818 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x3A8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x86C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x883 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x3A8 DUP3 PUSH2 0x848 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x8A1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8AA DUP5 PUSH2 0x848 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8C7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8DB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8EA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8FC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x921 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x3A8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x952 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x938 JUMP JUMPDEST POP PUSH1 0x0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH31 0x5889C7251B5ED64EA94946536BBD6963EA83990BC875C194DFBED56FFA0CB1 PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "245:3511:0:-:0;;;805:189;;;;;;;;;;;;;;;;;;:::i;:::-;907:23;917:12;907:9;:23::i;:::-;940:47;959:21;982:4;940:18;:47::i;:::-;805:189;;;245:3511;;3408:346;3464:21;3488:8;-1:-1:-1;;;;;;;;;;;3313:73:0;;3136:266;3488:8;3464:32;;3669:8;-1:-1:-1;;;;;;;;;;;3594:84:0;3738:8;-1:-1:-1;;;;;3702:45:0;3723:13;-1:-1:-1;;;;;3702:45:0;;;;;;;;;;;3454:300;3408:346;:::o;1634:1067:3:-;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;14:177:4:-;93:13;;-1:-1:-1;;;;;135:31:4;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:4;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:4;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:4;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:4:o;:::-;245:3511:0;;;;;;"
      },
      "deployedBytecode": {
        "functionDebugData": {
          "@_265": {
            "entryPoint": null,
            "id": 265,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_272": {
            "entryPoint": null,
            "id": 272,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_fallback_277": {
            "entryPoint": 406,
            "id": 277,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_owner_154": {
            "entryPoint": null,
            "id": 154,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@_setImplementation_313": {
            "entryPoint": 1642,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 1881,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@owner_47": {
            "entryPoint": 1404,
            "id": 47,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@supportsInterface_94": {
            "entryPoint": 481,
            "id": 94,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "@transferOwnership_106": {
            "entryPoint": 1451,
            "id": 106,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@upgradeToAndCall_134": {
            "entryPoint": 1153,
            "id": 134,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@upgradeTo_119": {
            "entryPoint": 943,
            "id": 119,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address": {
            "entryPoint": 2120,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_address": {
            "entryPoint": 2161,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_bytes_calldata_ptr": {
            "entryPoint": 2188,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_decode_tuple_t_bool_fromMemory": {
            "entryPoint": 2319,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_bytes4": {
            "entryPoint": 2054,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 2353,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_ef8a4c3fcfbfa959f184421d0ef9a577b18116cafbc5879aff4e2f1881c7c1f0__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:3471:4",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:4",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "188:164:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "205:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "216:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "198:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "198:21:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "198:21:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "239:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "250:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "235:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "235:18:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "255:2:4",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "228:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "228:30:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "228:30:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "278:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "289:2:4",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "274:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "274:18:4"
                            },
                            {
                              "hexValue": "45544845525f52454a4543544544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "294:16:4",
                              "type": "",
                              "value": "ETHER_REJECTED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "267:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "267:44:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "267:44:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "320:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "332:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "343:2:4",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "328:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "328:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "320:4:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_ef8a4c3fcfbfa959f184421d0ef9a577b18116cafbc5879aff4e2f1881c7c1f0__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "165:9:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "179:4:4",
                      "type": ""
                    }
                  ],
                  "src": "14:338:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "426:263:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "472:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "481:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "484:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "474:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "474:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "474:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "447:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "456:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "443:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "443:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "468:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "439:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "439:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "436:52:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "497:36:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "523:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "510:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "510:23:4"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "501:5:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "643:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "652:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "655:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "645:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "645:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "645:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "555:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "566:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "573:66:4",
                                      "type": "",
                                      "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "562:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "562:78:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "552:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:89:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:97:4"
                        },
                        "nodeType": "YulIf",
                        "src": "542:117:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "668:15:4",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "678:5:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "668:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "392:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "403:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "415:6:4",
                      "type": ""
                    }
                  ],
                  "src": "357:332:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "789:92:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "799:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "811:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "822:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "807:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "807:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "799:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "841:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "866:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "859:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "859:14:4"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "852:6:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "852:22:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "834:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "834:41:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "834:41:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "758:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "769:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "780:4:4",
                      "type": ""
                    }
                  ],
                  "src": "694:187:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "935:147:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "945:29:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "967:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "954:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "954:20:4"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "945:5:4"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1060:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1069:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1072:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1062:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1062:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1062:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "996:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "1007:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1014:42:4",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "1003:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1003:54:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "993:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "993:65:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "986:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "986:73:4"
                        },
                        "nodeType": "YulIf",
                        "src": "983:93:4"
                      }
                    ]
                  },
                  "name": "abi_decode_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "914:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "925:5:4",
                      "type": ""
                    }
                  ],
                  "src": "886:196:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1157:116:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1203:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1212:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1215:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1205:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1205:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1205:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1178:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1187:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1174:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1174:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1199:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1170:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1170:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1167:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1228:39:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1257:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1238:18:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1238:29:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1228:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1123:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1134:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1146:6:4",
                      "type": ""
                    }
                  ],
                  "src": "1087:186:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1384:559:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1430:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1439:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1442:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1432:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1432:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1432:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1405:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1414:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1401:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1401:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1426:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1397:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1397:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1394:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1455:39:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1484:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1465:18:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1465:29:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1455:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1503:46:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1534:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1545:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1530:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1530:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1517:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1517:32:4"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1507:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1558:28:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1568:18:4",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1562:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1613:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1622:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1625:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1615:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1615:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1615:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1601:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1609:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1598:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1598:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1595:34:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1638:32:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1652:9:4"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1663:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1648:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1648:22:4"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1642:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1718:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1727:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1730:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1720:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1720:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1720:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1697:2:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1701:4:4",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1693:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1693:13:4"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1708:7:4"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1689:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1689:27:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1682:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1682:35:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1679:55:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1743:30:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1770:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1757:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1757:16:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1747:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1800:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1809:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1812:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1802:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1802:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1802:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1788:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1796:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1785:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1785:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1782:34:4"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1866:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1875:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1878:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1868:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1868:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1868:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1839:2:4"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1843:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1835:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1835:15:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1852:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1831:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1831:24:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1857:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1828:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1828:37:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1825:57:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1891:21:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1905:2:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1909:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1901:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1901:11:4"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1891:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1921:16:4",
                        "value": {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1931:6:4"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1921:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_bytes_calldata_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1334:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1345:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1357:6:4",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "1365:6:4",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "1373:6:4",
                      "type": ""
                    }
                  ],
                  "src": "1278:665:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2049:125:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2059:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2071:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2082:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2067:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2067:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2059:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2101:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2116:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2124:42:4",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2112:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2112:55:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2094:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2094:74:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2094:74:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2018:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2029:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2040:4:4",
                      "type": ""
                    }
                  ],
                  "src": "1948:226:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2278:149:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2288:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2300:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2311:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2296:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2296:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2288:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2330:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2345:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2353:66:4",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2341:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2341:79:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2323:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2323:98:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2323:98:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2247:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2258:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2269:4:4",
                      "type": ""
                    }
                  ],
                  "src": "2179:248:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2510:199:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2556:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2565:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2568:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2558:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2558:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2558:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2531:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2540:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2527:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2527:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2552:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2523:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2523:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "2520:52:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2581:29:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2600:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2594:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2594:16:4"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2585:5:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2663:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2672:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2675:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2665:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2665:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2665:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2632:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "2653:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "2646:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2646:13:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2639:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2639:21:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2629:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2629:32:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2622:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2622:40:4"
                        },
                        "nodeType": "YulIf",
                        "src": "2619:60:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2688:15:4",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2698:5:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2688:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bool_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2476:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2487:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2499:6:4",
                      "type": ""
                    }
                  ],
                  "src": "2432:277:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2888:164:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2905:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2916:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2898:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2898:21:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2898:21:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2939:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2950:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2935:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2935:18:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2955:2:4",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2928:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2928:30:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2928:30:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2978:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2989:2:4",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2974:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2974:18:4"
                            },
                            {
                              "hexValue": "4e4f545f415554484f52495a4544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "2994:16:4",
                              "type": "",
                              "value": "NOT_AUTHORIZED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2967:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2967:44:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2967:44:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3020:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3032:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3043:2:4",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3028:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3028:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3020:4:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2865:9:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2879:4:4",
                      "type": ""
                    }
                  ],
                  "src": "2714:338:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3194:275:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3204:27:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3224:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3218:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3218:13:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "3208:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3240:10:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3249:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "3244:1:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3311:77:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "pos",
                                        "nodeType": "YulIdentifier",
                                        "src": "3336:3:4"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "3341:1:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3332:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3332:11:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "value0",
                                                "nodeType": "YulIdentifier",
                                                "src": "3359:6:4"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "3367:1:4"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "3355:3:4"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3355:14:4"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3371:4:4",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3351:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3351:25:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3345:5:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3345:32:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "3325:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3325:53:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3325:53:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "3270:1:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3273:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "3267:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3267:13:4"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "3281:21:4",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3283:17:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "3292:1:4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3295:4:4",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3288:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3288:12:4"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "3283:1:4"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "3263:3:4",
                          "statements": []
                        },
                        "src": "3259:129:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3397:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3411:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3416:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3407:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3407:16:4"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "3401:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3439:2:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3443:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3432:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3432:13:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3432:13:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3454:9:4",
                        "value": {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3461:2:4"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3454:3:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3170:3:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3175:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "3186:3:4",
                      "type": ""
                    }
                  ],
                  "src": "3057:412:4"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_encode_tuple_t_stringliteral_ef8a4c3fcfbfa959f184421d0ef9a577b18116cafbc5879aff4e2f1881c7c1f0__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"ETHER_REJECTED\")\n        tail := add(headStart, 96)\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let offset := calldataload(add(headStart, 32))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value1 := add(_2, 32)\n        value2 := length\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"NOT_AUTHORIZED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            mstore(add(pos, i), mload(add(add(value0, i), 0x20)))\n        }\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
            "id": 4,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146101295780638da5cb5b1461013c578063f2fde38b14610176576100ca565b806301ffc9a7146100d45780633659cfe614610109576100ca565b366100ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d2610196565b005b3480156100e057600080fd5b506100f46100ef366004610806565b6101e1565b60405190151581526020015b60405180910390f35b34801561011557600080fd5b506100d2610124366004610871565b6103af565b6100d261013736600461088c565b610481565b34801561014857600080fd5b5061015161057c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610100565b34801561018257600080fd5b506100d2610191366004610871565b6105ab565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e8280156101d7578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061027457507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561028157506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102b357506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561039b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103989181019061090f565b60015b6103a85750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e816040518060200160405280600081525061066a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b6105778383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061066a92505050565b505050565b60006105a67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c1565b61047e81610759565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105775760008373ffffffffffffffffffffffffffffffffffffffff16836040516107059190610931565b600060405180830381855af49150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b50509050806101db573d806000803e806000fd5b60006107837fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006020828403121561081857600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146103a857600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461086c57600080fd5b919050565b60006020828403121561088357600080fd5b6103a882610848565b6000806000604084860312156108a157600080fd5b6108aa84610848565b9250602084013567ffffffffffffffff808211156108c757600080fd5b818601915086601f8301126108db57600080fd5b8135818111156108ea57600080fd5b8760208285010111156108fc57600080fd5b6020830194508093505050509250925092565b60006020828403121561092157600080fd5b815180151581146103a857600080fd5b6000825160005b818110156109525760208186018101518583015201610938565b50600092019182525091905056fea26469706673582212207e5889c7251b5ed64ea94946536bbd6963ea83990bc875c194dfbed56ffa0cb164736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5E JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x43 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x129 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x13C JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x176 JUMPI PUSH2 0xCA JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x109 JUMPI PUSH2 0xCA JUMP JUMPDEST CALLDATASIZE PUSH2 0xCA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD2 PUSH2 0x196 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF4 PUSH2 0xEF CALLDATASIZE PUSH1 0x4 PUSH2 0x806 JUMP JUMPDEST PUSH2 0x1E1 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x115 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD2 PUSH2 0x124 CALLDATASIZE PUSH1 0x4 PUSH2 0x871 JUMP JUMPDEST PUSH2 0x3AF JUMP JUMPDEST PUSH2 0xD2 PUSH2 0x137 CALLDATASIZE PUSH1 0x4 PUSH2 0x88C JUMP JUMPDEST PUSH2 0x481 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x148 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x151 PUSH2 0x57C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x100 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x182 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD2 PUSH2 0x191 CALLDATASIZE PUSH1 0x4 PUSH2 0x871 JUMP JUMPDEST PUSH2 0x5AB JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D7 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x274 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x281 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2B3 JUMPI POP PUSH1 0x0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x39B JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x398 SWAP2 DUP2 ADD SWAP1 PUSH2 0x90F JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x3A8 JUMPI POP PUSH1 0x0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x465 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x47E DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x66A JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x537 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x577 DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x66A SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5A6 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x661 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC1 JUMP JUMPDEST PUSH2 0x47E DUP2 PUSH2 0x759 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x577 JUMPI PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x705 SWAP2 SWAP1 PUSH2 0x931 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x740 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x745 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1DB JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x783 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x818 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x3A8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x86C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x883 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x3A8 DUP3 PUSH2 0x848 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x8A1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x8AA DUP5 PUSH2 0x848 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8C7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8DB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8EA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8FC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x921 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x3A8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x952 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x938 JUMP JUMPDEST POP PUSH1 0x0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH31 0x5889C7251B5ED64EA94946536BBD6963EA83990BC875C194DFBED56FFA0CB1 PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "245:3511:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;698:24:3;;;;;216:2:4;698:24:3;;;198:21:4;255:2;235:18;;;228:30;294:16;274:18;;;267:44;328:18;;698:24:3;;;;;;;;245:3511:0;803:11:3;:9;:11::i;:::-;245:3511:0;1312:877;;;;;;;;;;-1:-1:-1;1312:877:0;;;;;:::i;:::-;;:::i;:::-;;;859:14:4;;852:22;834:41;;822:2;807:18;1312:877:0;;;;;;;;2301:123;;;;;;;;;;-1:-1:-1;2301:123:0;;;;;:::i;:::-;;:::i;2430:161::-;;;;;;:::i;:::-;;:::i;1225:81::-;;;;;;;;;;;;;:::i;:::-;;;2124:42:4;2112:55;;;2094:74;;2082:2;2067:18;1225:81:0;1948:226:4;2195:100:0;;;;;;;;;;-1:-1:-1;2195:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1312:877:0:-;1373:4;1393:16;;;;;;:36;;-1:-1:-1;1413:16:0;;;;;1393:36;1389:78;;;-1:-1:-1;1452:4:0;;1312:877;-1:-1:-1;1312:877:0:o;1389:78::-;1480:16;;;;;;1476:59;;-1:-1:-1;1519:5:0;;1312:877;-1:-1:-1;1312:877:0:o;1476:59::-;1688:66;1682:73;2040:36;;;;;2353:66:4;2341:79;;2040:36:0;;;2323:98:4;2040:32:0;;;;;;2296:18:4;;2040:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2040:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2036:147;;-1:-1:-1;2167:5:0;;1312:877;-1:-1:-1;;1312:877:0:o;2036:147::-;2121:7;1312:877;-1:-1:-1;;;1312:877:0:o;2301:123::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:4;2846:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:4;2846:49:0;2376:41:::1;2395:17;2376:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2301:123:::0;:::o;2430:161::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:4;2846:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:4;2846:49:0;2541:43:::1;2560:17;2579:4;;2541:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2541:18:0::1;::::0;-1:-1:-1;;;2541:43:0:i:1;:::-;2430:161:::0;;;:::o;1225:81::-;1265:7;1291:8;3319:66;3313:73;;3136:266;1291:8;1284:15;;1225:81;:::o;2195:100::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:4;2846:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:4;2846:49:0;2269:19:::1;2279:8;2269:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3408:346:0;3464:21;3488:8;3319:66;3313:73;;3136:266;3488:8;3464:32;;3669:8;3601:66;3594:84;3738:8;3702:45;;3723:13;3702:45;;;;;;;;;;;;3454:300;3408:346;:::o;357:332:4:-;415:6;468:2;456:9;447:7;443:23;439:32;436:52;;;484:1;481;474:12;436:52;523:9;510:23;573:66;566:5;562:78;555:5;552:89;542:117;;655:1;652;645:12;886:196;954:20;;1014:42;1003:54;;993:65;;983:93;;1072:1;1069;1062:12;983:93;886:196;;;:::o;1087:186::-;1146:6;1199:2;1187:9;1178:7;1174:23;1170:32;1167:52;;;1215:1;1212;1205:12;1167:52;1238:29;1257:9;1238:29;:::i;1278:665::-;1357:6;1365;1373;1426:2;1414:9;1405:7;1401:23;1397:32;1394:52;;;1442:1;1439;1432:12;1394:52;1465:29;1484:9;1465:29;:::i;:::-;1455:39;;1545:2;1534:9;1530:18;1517:32;1568:18;1609:2;1601:6;1598:14;1595:34;;;1625:1;1622;1615:12;1595:34;1663:6;1652:9;1648:22;1638:32;;1708:7;1701:4;1697:2;1693:13;1689:27;1679:55;;1730:1;1727;1720:12;1679:55;1770:2;1757:16;1796:2;1788:6;1785:14;1782:34;;;1812:1;1809;1802:12;1782:34;1857:7;1852:2;1843:6;1839:2;1835:15;1831:24;1828:37;1825:57;;;1878:1;1875;1868:12;1825:57;1909:2;1905;1901:11;1891:21;;1931:6;1921:16;;;;;1278:665;;;;;:::o;2432:277::-;2499:6;2552:2;2540:9;2531:7;2527:23;2523:32;2520:52;;;2568:1;2565;2558:12;2520:52;2600:9;2594:16;2653:5;2646:13;2639:21;2632:5;2629:32;2619:60;;2675:1;2672;2665:12;3057:412;3186:3;3224:6;3218:13;3249:1;3259:129;3273:6;3270:1;3267:13;3259:129;;;3371:4;3355:14;;;3351:25;;3345:32;3332:11;;;3325:53;3288:12;3259:129;;;-1:-1:-1;3443:1:4;3407:16;;3432:13;;;-1:-1:-1;3407:16:4;3057:412;-1:-1:-1;3057:412:4:o"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "490800",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite",
          "owner()": "2361",
          "supportsInterface(bytes4)": "infinite",
          "transferOwnership(address)": "28278",
          "upgradeTo(address)": "28306",
          "upgradeToAndCall(address,bytes)": "infinite"
        },
        "internal": {
          "_owner()": "infinite",
          "_setOwner(address)": "25799"
        }
      },
      "methodIdentifiers": {
        "owner()": "8da5cb5b",
        "supportsInterface(bytes4)": "01ffc9a7",
        "transferOwnership(address)": "f2fde38b",
        "upgradeTo(address)": "3659cfe6",
        "upgradeToAndCall(address,bytes)": "4f1ef286"
      }
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing ERC173 for ownership management\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/ERC173/ERC173Proxy.sol\":\"ERC173Proxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/ERC173/ERC173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing ERC173 for ownership management\\ncontract ERC173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xe66459b598ec609af81ef013a7cbf4cc12eea4157190882fe15c4a3f2037b8d6\",\"license\":\"MIT\"},\"solc_0.8/ERC1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// ERC-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x7b91e396821b404ffd824b60396d4f561acb5e7e8ce611b5444dfe503cc693e4\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "notice": "Proxy implementing ERC173 for ownership management",
      "version": 1
    }
  },
  "ERC173ProxyWithReceive": {
    "_format": "hh-sol-artifact-1",
    "contractName": "ERC173ProxyWithReceive",
    "sourceName": "solc_0.8/ERC173/ERC173ProxyWithReceive.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "implementationAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousImplementation",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "ProxyImplementationUpdated",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "id",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "bytecode": "0x608060405260405162000c5d38038062000c5d8339810160408190526200002691620001f9565b82828262000034826200004c565b620000408382620000be565b505050505050620002f7565b60006200006660008051602062000c3d8339815191525490565b90508160008051602062000c3d83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156200019b576000836001600160a01b031683604051620001429190620002d9565b600060405180830381855af49150503d80600081146200017f576040519150601f19603f3d011682016040523d82523d6000602084013e62000184565b606091505b505090508062000199573d806000803e806000fd5b505b505050565b80516001600160a01b0381168114620001b857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001f0578181015183820152602001620001d6565b50506000910152565b6000806000606084860312156200020f57600080fd5b6200021a84620001a0565b92506200022a60208501620001a0565b60408501519092506001600160401b03808211156200024857600080fd5b818601915086601f8301126200025d57600080fd5b815181811115620002725762000272620001bd565b604051601f8201601f19908116603f011681019083821181831017156200029d576200029d620001bd565b81604052828152896020848701011115620002b757600080fd5b620002ca836020830160208801620001d3565b80955050505050509250925092565b60008251620002ed818460208701620001d3565b9190910192915050565b61093680620003076000396000f3fe60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146100c45780638da5cb5b146100d7578063f2fde38b1461011157610065565b806301ffc9a71461006f5780633659cfe6146100a457610065565b3661006557005b61006d610131565b005b34801561007b57600080fd5b5061008f61008a3660046107a6565b61017c565b60405190151581526020015b60405180910390f35b3480156100b057600080fd5b5061006d6100bf366004610811565b61034a565b61006d6100d236600461082c565b610421565b3480156100e357600080fd5b506100ec61051c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b34801561011d57600080fd5b5061006d61012c366004610811565b61054b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e828015610172578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020f57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021c57506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024e57506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610336575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610333918101906108af565b60015b6103435750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610405576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b61041e816040518060200160405280600081525061060a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b6105178383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060a92505050565b505050565b60006105467fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b61041e816106f9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105175760008373ffffffffffffffffffffffffffffffffffffffff16836040516106a591906108d1565b600060405180830381855af49150503d80600081146106e0576040519150601f19603f3d011682016040523d82523d6000602084013e6106e5565b606091505b5050905080610176573d806000803e806000fd5b60006107237fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000602082840312156107b857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461034357600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461080c57600080fd5b919050565b60006020828403121561082357600080fd5b610343826107e8565b60008060006040848603121561084157600080fd5b61084a846107e8565b9250602084013567ffffffffffffffff8082111561086757600080fd5b818601915086601f83011261087b57600080fd5b81358181111561088a57600080fd5b87602082850101111561089c57600080fd5b6020830194508093505050509250925092565b6000602082840312156108c157600080fd5b8151801515811461034357600080fd5b6000825160005b818110156108f257602081860181015185830152016108d8565b50600092019182525091905056fea26469706673582212202509744de731f668378f29d8b3b89d8625063fb9c4cb591e6d3195f9c6c1370564736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146100c45780638da5cb5b146100d7578063f2fde38b1461011157610065565b806301ffc9a71461006f5780633659cfe6146100a457610065565b3661006557005b61006d610131565b005b34801561007b57600080fd5b5061008f61008a3660046107a6565b61017c565b60405190151581526020015b60405180910390f35b3480156100b057600080fd5b5061006d6100bf366004610811565b61034a565b61006d6100d236600461082c565b610421565b3480156100e357600080fd5b506100ec61051c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b34801561011d57600080fd5b5061006d61012c366004610811565b61054b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e828015610172578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020f57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021c57506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024e57506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610336575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610333918101906108af565b60015b6103435750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610405576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b61041e816040518060200160405280600081525061060a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b6105178383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060a92505050565b505050565b60006105467fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b61041e816106f9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105175760008373ffffffffffffffffffffffffffffffffffffffff16836040516106a591906108d1565b600060405180830381855af49150503d80600081146106e0576040519150601f19603f3d011682016040523d82523d6000602084013e6106e5565b606091505b5050905080610176573d806000803e806000fd5b60006107237fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000602082840312156107b857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461034357600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461080c57600080fd5b919050565b60006020828403121561082357600080fd5b610343826107e8565b60008060006040848603121561084157600080fd5b61084a846107e8565b9250602084013567ffffffffffffffff8082111561086757600080fd5b818601915086601f83011261087b57600080fd5b81358181111561088a57600080fd5b87602082850101111561089c57600080fd5b6020830194508093505050509250925092565b6000602082840312156108c157600080fd5b8151801515811461034357600080fd5b6000825160005b818110156108f257602081860181015185830152016108d8565b50600092019182525091905056fea26469706673582212202509744de731f668378f29d8b3b89d8625063fb9c4cb591e6d3195f9c6c1370564736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {
          "@_193": {
            "entryPoint": null,
            "id": 193,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@_38": {
            "entryPoint": null,
            "id": 38,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@_owner_154": {
            "entryPoint": null,
            "id": 154,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@_setImplementation_313": {
            "entryPoint": 190,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 76,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 416,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
            "entryPoint": 505,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 729,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "copy_memory_to_memory_with_cleanup": {
            "entryPoint": 467,
            "id": null,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 445,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:1943:4",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:4",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "74:117:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "84:22:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "99:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "93:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "93:13:4"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "84:5:4"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "169:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "178:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "181:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "171:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "171:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "171:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "128:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "139:5:4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "154:3:4",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "159:1:4",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "150:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "150:11:4"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "163:1:4",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "146:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "146:19:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "135:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "135:31:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "125:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "125:42:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "118:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "118:50:4"
                        },
                        "nodeType": "YulIf",
                        "src": "115:70:4"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "53:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "64:5:4",
                      "type": ""
                    }
                  ],
                  "src": "14:177:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "228:95:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "245:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "252:3:4",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "257:10:4",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "248:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "248:20:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "238:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "238:31:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "238:31:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "285:1:4",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "288:4:4",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "278:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "278:15:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "278:15:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "309:1:4",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "312:4:4",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "302:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "302:15:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "302:15:4"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "196:127:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "394:184:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "404:10:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "413:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "408:1:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "473:63:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "498:3:4"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "503:1:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "494:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "494:11:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "517:3:4"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "522:1:4"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "513:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "513:11:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "507:5:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "507:18:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "487:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "487:39:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "487:39:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "434:1:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "437:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "431:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "431:13:4"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "445:19:4",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "447:15:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "456:1:4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "459:2:4",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "452:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "452:10:4"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "447:1:4"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "427:3:4",
                          "statements": []
                        },
                        "src": "423:113:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "556:3:4"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "561:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "552:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:16:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "570:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:27:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "545:27:4"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory_with_cleanup",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "372:3:4",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "377:3:4",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "382:6:4",
                      "type": ""
                    }
                  ],
                  "src": "328:250:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "707:942:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "753:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "762:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "765:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "755:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "755:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "755:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "728:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "737:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "724:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "724:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "749:2:4",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "720:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "720:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "717:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "778:50:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "818:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "788:29:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "788:40:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "778:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "837:59:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "881:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "892:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "877:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "877:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "847:29:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "847:49:4"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "837:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "905:39:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "929:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "940:2:4",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "925:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "925:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "919:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "919:25:4"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "909:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "953:28:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "971:2:4",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "975:1:4",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "967:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "967:10:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "979:1:4",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "963:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "963:18:4"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "957:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1008:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1017:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1020:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1010:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1010:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1010:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "996:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1004:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "993:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "993:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "990:34:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1033:32:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1047:9:4"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1058:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1043:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1043:22:4"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1037:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1113:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1122:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1125:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1115:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1115:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1115:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1092:2:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1096:4:4",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1088:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1088:13:4"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1103:7:4"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1084:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1084:27:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1077:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1077:35:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1074:55:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1138:19:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1154:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1148:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1148:9:4"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "1142:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1180:22:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:16:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1182:18:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1182:18:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1172:2:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1176:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1169:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1169:10:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1166:36:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1211:17:4",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1225:2:4",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1221:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1221:7:4"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "1215:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1237:23:4",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1257:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1251:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:9:4"
                        },
                        "variables": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1241:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1269:71:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1291:6:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "_3",
                                              "nodeType": "YulIdentifier",
                                              "src": "1315:2:4"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1319:4:4",
                                              "type": "",
                                              "value": "0x1f"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1311:3:4"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1311:13:4"
                                        },
                                        {
                                          "name": "_4",
                                          "nodeType": "YulIdentifier",
                                          "src": "1326:2:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "1307:3:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1307:22:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1331:2:4",
                                      "type": "",
                                      "value": "63"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1303:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1303:31:4"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1336:2:4"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1299:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1299:40:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1287:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:53:4"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "1273:10:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1399:22:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1401:16:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1401:18:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1401:18:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1358:10:4"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1370:2:4"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "1355:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1355:18:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1378:10:4"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1390:6:4"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "1375:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1375:22:4"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1352:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1352:46:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1349:72:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1437:2:4",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1441:10:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1430:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1430:22:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1430:22:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1468:6:4"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1476:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1461:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1461:18:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1461:18:4"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1525:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1534:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1537:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1527:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1527:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1527:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1502:2:4"
                                    },
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "1506:2:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1498:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1498:11:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1511:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1494:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1494:20:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1516:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1491:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1491:33:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1488:53:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "1589:2:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1593:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1585:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1585:11:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1602:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1610:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1598:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1598:15:4"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1615:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1550:34:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1550:68:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1550:68:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1627:16:4",
                        "value": {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1637:6:4"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1627:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "657:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "668:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "680:6:4",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "688:6:4",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "696:6:4",
                      "type": ""
                    }
                  ],
                  "src": "583:1066:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1791:150:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1801:27:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1821:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1815:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1815:13:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1805:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1876:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1884:4:4",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1872:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1872:17:4"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1891:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1896:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1837:34:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1837:66:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1837:66:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1912:23:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1923:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1928:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1919:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1919:16:4"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1912:3:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "1767:3:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1772:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1783:3:4",
                      "type": ""
                    }
                  ],
                  "src": "1654:287:4"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address_fromMemory(headStart)\n        value1 := abi_decode_address_fromMemory(add(headStart, 32))\n        let offset := mload(add(headStart, 64))\n        let _1 := sub(shl(64, 1), 1)\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := mload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        copy_memory_to_memory_with_cleanup(add(_2, 32), add(memPtr, 32), _3)\n        value2 := memPtr\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        end := add(pos, length)\n    }\n}",
            "id": 4,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "608060405260405162000c5d38038062000c5d8339810160408190526200002691620001f9565b82828262000034826200004c565b620000408382620000be565b505050505050620002f7565b60006200006660008051602062000c3d8339815191525490565b90508160008051602062000c3d83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156200019b576000836001600160a01b031683604051620001429190620002d9565b600060405180830381855af49150503d80600081146200017f576040519150601f19603f3d011682016040523d82523d6000602084013e62000184565b606091505b505090508062000199573d806000803e806000fd5b505b505050565b80516001600160a01b0381168114620001b857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001f0578181015183820152602001620001d6565b50506000910152565b6000806000606084860312156200020f57600080fd5b6200021a84620001a0565b92506200022a60208501620001a0565b60408501519092506001600160401b03808211156200024857600080fd5b818601915086601f8301126200025d57600080fd5b815181811115620002725762000272620001bd565b604051601f8201601f19908116603f011681019083821181831017156200029d576200029d620001bd565b81604052828152896020848701011115620002b757600080fd5b620002ca836020830160208801620001d3565b80955050505050509250925092565b60008251620002ed818460208701620001d3565b9190910192915050565b61093680620003076000396000f3fe60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146100c45780638da5cb5b146100d7578063f2fde38b1461011157610065565b806301ffc9a71461006f5780633659cfe6146100a457610065565b3661006557005b61006d610131565b005b34801561007b57600080fd5b5061008f61008a3660046107a6565b61017c565b60405190151581526020015b60405180910390f35b3480156100b057600080fd5b5061006d6100bf366004610811565b61034a565b61006d6100d236600461082c565b610421565b3480156100e357600080fd5b506100ec61051c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b34801561011d57600080fd5b5061006d61012c366004610811565b61054b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e828015610172578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020f57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021c57506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024e57506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610336575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610333918101906108af565b60015b6103435750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610405576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b61041e816040518060200160405280600081525061060a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b6105178383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060a92505050565b505050565b60006105467fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b61041e816106f9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105175760008373ffffffffffffffffffffffffffffffffffffffff16836040516106a591906108d1565b600060405180830381855af49150503d80600081146106e0576040519150601f19603f3d011682016040523d82523d6000602084013e6106e5565b606091505b5050905080610176573d806000803e806000fd5b60006107237fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000602082840312156107b857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461034357600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461080c57600080fd5b919050565b60006020828403121561082357600080fd5b610343826107e8565b60008060006040848603121561084157600080fd5b61084a846107e8565b9250602084013567ffffffffffffffff8082111561086757600080fd5b818601915086601f83011261087b57600080fd5b81358181111561088a57600080fd5b87602082850101111561089c57600080fd5b6020830194508093505050509250925092565b6000602082840312156108c157600080fd5b8151801515811461034357600080fd5b6000825160005b818110156108f257602081860181015185830152016108d8565b50600092019182525091905056fea26469706673582212202509744de731f668378f29d8b3b89d8625063fb9c4cb591e6d3195f9c6c1370564736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xC5D CODESIZE SUB DUP1 PUSH3 0xC5D DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1F9 JUMP JUMPDEST DUP3 DUP3 DUP3 PUSH3 0x34 DUP3 PUSH3 0x4C JUMP JUMPDEST PUSH3 0x40 DUP4 DUP3 PUSH3 0xBE JUMP JUMPDEST POP POP POP POP POP POP PUSH3 0x2F7 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x66 PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC3D DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC3D DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x19B JUMPI PUSH1 0x0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0x142 SWAP2 SWAP1 PUSH3 0x2D9 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH3 0x17F JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x184 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x199 JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1B8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1F0 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1D6 JUMP JUMPDEST POP POP PUSH1 0x0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x20F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x21A DUP5 PUSH3 0x1A0 JUMP JUMPDEST SWAP3 POP PUSH3 0x22A PUSH1 0x20 DUP6 ADD PUSH3 0x1A0 JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x248 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x25D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x272 JUMPI PUSH3 0x272 PUSH3 0x1BD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x29D JUMPI PUSH3 0x29D PUSH3 0x1BD JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x2B7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x2CA DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1D3 JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH3 0x2ED DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1D3 JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x936 DUP1 PUSH3 0x307 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5E JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x43 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC4 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD7 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x111 JUMPI PUSH2 0x65 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6F JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA4 JUMPI PUSH2 0x65 JUMP JUMPDEST CALLDATASIZE PUSH2 0x65 JUMPI STOP JUMPDEST PUSH2 0x6D PUSH2 0x131 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x7B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8F PUSH2 0x8A CALLDATASIZE PUSH1 0x4 PUSH2 0x7A6 JUMP JUMPDEST PUSH2 0x17C JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6D PUSH2 0xBF CALLDATASIZE PUSH1 0x4 PUSH2 0x811 JUMP JUMPDEST PUSH2 0x34A JUMP JUMPDEST PUSH2 0x6D PUSH2 0xD2 CALLDATASIZE PUSH1 0x4 PUSH2 0x82C JUMP JUMPDEST PUSH2 0x421 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xEC PUSH2 0x51C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x9B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x11D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6D PUSH2 0x12C CALLDATASIZE PUSH1 0x4 PUSH2 0x811 JUMP JUMPDEST PUSH2 0x54B JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x172 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x20F JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x21C JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x24E JUMPI POP PUSH1 0x0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x336 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x333 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8AF JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x343 JUMPI POP PUSH1 0x0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x405 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x41E DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x60A JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4D7 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FC JUMP JUMPDEST PUSH2 0x517 DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x60A SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x546 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x601 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FC JUMP JUMPDEST PUSH2 0x41E DUP2 PUSH2 0x6F9 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x517 JUMPI PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6A5 SWAP2 SWAP1 PUSH2 0x8D1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x6E0 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6E5 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x176 JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x723 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7B8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x343 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x80C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x823 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x343 DUP3 PUSH2 0x7E8 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x841 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x84A DUP5 PUSH2 0x7E8 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x867 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x87B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x88A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x89C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8C1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x343 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8F2 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8D8 JUMP JUMPDEST POP PUSH1 0x0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x25 MULMOD PUSH21 0x4DE731F668378F29D8B3B89D8625063FB9C4CB591E PUSH14 0x3195F9C6C1370564736F6C634300 ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "176:268:1:-:0;;;229:169;;;;;;;;;;;;;;;;;;:::i;:::-;349:21;372:12;386:4;907:23:0;372:12:1;907:9:0;:23::i;:::-;940:47;959:21;982:4;940:18;:47::i;:::-;805:189;;;229:169:1;;;176:268;;3408:346:0;3464:21;3488:8;-1:-1:-1;;;;;;;;;;;3313:73:0;;3136:266;3488:8;3464:32;;3669:8;-1:-1:-1;;;;;;;;;;;3594:84:0;3738:8;-1:-1:-1;;;;;3702:45:0;3723:13;-1:-1:-1;;;;;3702:45:0;;;;;;;;;;;3454:300;3408:346;:::o;1634:1067:3:-;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;14:177:4:-;93:13;;-1:-1:-1;;;;;135:31:4;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:4;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:4;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:4;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:4:o;:::-;176:268:1;;;;;;"
      },
      "deployedBytecode": {
        "functionDebugData": {
          "@_198": {
            "entryPoint": null,
            "id": 198,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_272": {
            "entryPoint": null,
            "id": 272,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_fallback_277": {
            "entryPoint": 305,
            "id": 277,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "@_owner_154": {
            "entryPoint": null,
            "id": 154,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@_setImplementation_313": {
            "entryPoint": 1546,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 1785,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@owner_47": {
            "entryPoint": 1308,
            "id": 47,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@supportsInterface_94": {
            "entryPoint": 380,
            "id": 94,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "@transferOwnership_106": {
            "entryPoint": 1355,
            "id": 106,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@upgradeToAndCall_134": {
            "entryPoint": 1057,
            "id": 134,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@upgradeTo_119": {
            "entryPoint": 842,
            "id": 119,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address": {
            "entryPoint": 2024,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_address": {
            "entryPoint": 2065,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_bytes_calldata_ptr": {
            "entryPoint": 2092,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_decode_tuple_t_bool_fromMemory": {
            "entryPoint": 2223,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_bytes4": {
            "entryPoint": 1958,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 2257,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:3128:4",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:4",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "83:263:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "129:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "138:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "141:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "131:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "131:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "131:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "104:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "113:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "100:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "100:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "125:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "96:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "96:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "93:52:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "154:36:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "180:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "167:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "167:23:4"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "158:5:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "300:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "309:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "312:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "302:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "302:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "302:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "212:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "223:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "230:66:4",
                                      "type": "",
                                      "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "219:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "219:78:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "209:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "209:89:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "202:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "202:97:4"
                        },
                        "nodeType": "YulIf",
                        "src": "199:117:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "325:15:4",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "335:5:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "325:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "49:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "60:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "72:6:4",
                      "type": ""
                    }
                  ],
                  "src": "14:332:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "446:92:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "456:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "468:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "479:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "464:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "464:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "456:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "498:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "523:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "516:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "516:14:4"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "509:6:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "509:22:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "491:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "491:41:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "491:41:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "415:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "426:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "437:4:4",
                      "type": ""
                    }
                  ],
                  "src": "351:187:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "592:147:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "602:29:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "624:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "611:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "611:20:4"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "602:5:4"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "717:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "726:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "729:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "719:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "719:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "719:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "653:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "664:5:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "671:42:4",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "660:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "660:54:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "650:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "650:65:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "643:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "643:73:4"
                        },
                        "nodeType": "YulIf",
                        "src": "640:93:4"
                      }
                    ]
                  },
                  "name": "abi_decode_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "571:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "582:5:4",
                      "type": ""
                    }
                  ],
                  "src": "543:196:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "814:116:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "860:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "869:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "872:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "862:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "862:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "862:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "835:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "844:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "831:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "831:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "856:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "827:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "827:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "824:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "885:39:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "914:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "895:18:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "895:29:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "885:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "780:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "791:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "803:6:4",
                      "type": ""
                    }
                  ],
                  "src": "744:186:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1041:559:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1087:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1096:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1099:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1089:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1089:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1089:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1062:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1071:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1058:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1058:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1083:2:4",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1054:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1054:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1051:52:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1112:39:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1141:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1122:18:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1122:29:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1112:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1160:46:4",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1191:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1202:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1187:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1187:18:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1174:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1174:32:4"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1164:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1215:28:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1225:18:4",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1219:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1270:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1279:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1282:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1272:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1272:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1272:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1258:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1266:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1255:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1255:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1252:34:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1295:32:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1309:9:4"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1320:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1305:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1305:22:4"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1299:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1375:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1384:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1387:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1377:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1377:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1377:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1354:2:4"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1358:4:4",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1350:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1350:13:4"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1365:7:4"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1346:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1346:27:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1339:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1339:35:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1336:55:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1400:30:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1427:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1414:12:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1414:16:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1404:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1457:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1466:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1469:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1459:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1459:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1459:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1445:6:4"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1453:2:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1442:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1442:14:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1439:34:4"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1523:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1532:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1535:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1525:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1525:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1525:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "1496:2:4"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1500:6:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1492:3:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1492:15:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1509:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1488:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1488:24:4"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1514:7:4"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1485:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1485:37:4"
                        },
                        "nodeType": "YulIf",
                        "src": "1482:57:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1548:21:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1562:2:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1566:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1558:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1558:11:4"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1548:6:4"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1578:16:4",
                        "value": {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1588:6:4"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1578:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_bytes_calldata_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "991:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1002:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1014:6:4",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "1022:6:4",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "1030:6:4",
                      "type": ""
                    }
                  ],
                  "src": "935:665:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1706:125:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1716:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1728:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1739:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1724:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1724:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1716:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1758:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1773:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1781:42:4",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1769:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1769:55:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1751:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1751:74:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1751:74:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1675:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1686:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1697:4:4",
                      "type": ""
                    }
                  ],
                  "src": "1605:226:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1935:149:4",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1945:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1957:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1968:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1953:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1953:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1945:4:4"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1987:9:4"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2002:6:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2010:66:4",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1998:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1998:79:4"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1980:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1980:98:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1980:98:4"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1904:9:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1915:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1926:4:4",
                      "type": ""
                    }
                  ],
                  "src": "1836:248:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2167:199:4",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2213:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2222:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2225:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2215:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2215:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2215:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2188:7:4"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2197:9:4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2184:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2184:23:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2209:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2180:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2180:32:4"
                        },
                        "nodeType": "YulIf",
                        "src": "2177:52:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2238:29:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2257:9:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2251:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2251:16:4"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2242:5:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2320:16:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2329:1:4",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2332:1:4",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2322:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2322:12:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2322:12:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2289:5:4"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "2310:5:4"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "2303:6:4"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2303:13:4"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2296:6:4"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2296:21:4"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2286:2:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2286:32:4"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2279:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2279:40:4"
                        },
                        "nodeType": "YulIf",
                        "src": "2276:60:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2345:15:4",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2355:5:4"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2345:6:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bool_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2133:9:4",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2144:7:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2156:6:4",
                      "type": ""
                    }
                  ],
                  "src": "2089:277:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2545:164:4",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2562:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2573:2:4",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2555:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2555:21:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2555:21:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2596:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2607:2:4",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2592:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2592:18:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2612:2:4",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2585:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2585:30:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2585:30:4"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2635:9:4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2646:2:4",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2631:3:4"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2631:18:4"
                            },
                            {
                              "hexValue": "4e4f545f415554484f52495a4544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "2651:16:4",
                              "type": "",
                              "value": "NOT_AUTHORIZED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2624:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2624:44:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2624:44:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2677:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2689:9:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2700:2:4",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2685:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2685:18:4"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2677:4:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2522:9:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2536:4:4",
                      "type": ""
                    }
                  ],
                  "src": "2371:338:4"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2851:275:4",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2861:27:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2881:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2875:5:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2875:13:4"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "2865:6:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2897:10:4",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2906:1:4",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "2901:1:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2968:77:4",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "pos",
                                        "nodeType": "YulIdentifier",
                                        "src": "2993:3:4"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2998:1:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2989:3:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2989:11:4"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "value0",
                                                "nodeType": "YulIdentifier",
                                                "src": "3016:6:4"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "3024:1:4"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "3012:3:4"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3012:14:4"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3028:4:4",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3008:3:4"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3008:25:4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3002:5:4"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3002:32:4"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2982:6:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2982:53:4"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2982:53:4"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2927:1:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2930:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2924:2:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2924:13:4"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2938:21:4",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2940:17:4",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "2949:1:4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2952:4:4",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2945:3:4"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2945:12:4"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "2940:1:4"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2920:3:4",
                          "statements": []
                        },
                        "src": "2916:129:4"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3054:26:4",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3068:3:4"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3073:6:4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3064:3:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3064:16:4"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "3058:2:4",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3096:2:4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3100:1:4",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3089:6:4"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3089:13:4"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3089:13:4"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3111:9:4",
                        "value": {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3118:2:4"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3111:3:4"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2827:3:4",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2832:6:4",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2843:3:4",
                      "type": ""
                    }
                  ],
                  "src": "2714:412:4"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let offset := calldataload(add(headStart, 32))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value1 := add(_2, 32)\n        value2 := length\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"NOT_AUTHORIZED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            mstore(add(pos, i), mload(add(add(value0, i), 0x20)))\n        }\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
            "id": 4,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "60806040526004361061005e5760003560e01c80634f1ef286116100435780634f1ef286146100c45780638da5cb5b146100d7578063f2fde38b1461011157610065565b806301ffc9a71461006f5780633659cfe6146100a457610065565b3661006557005b61006d610131565b005b34801561007b57600080fd5b5061008f61008a3660046107a6565b61017c565b60405190151581526020015b60405180910390f35b3480156100b057600080fd5b5061006d6100bf366004610811565b61034a565b61006d6100d236600461082c565b610421565b3480156100e357600080fd5b506100ec61051c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b34801561011d57600080fd5b5061006d61012c366004610811565b61054b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460003681823780813683855af491503d8082833e828015610172578183f35b8183fd5b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020f57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021c57506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024e57506000919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610336575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610333918101906108af565b60015b6103435750600092915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610405576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b61041e816040518060200160405280600081525061060a565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b6105178383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060a92505050565b505050565b60006105467fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103fc565b61041e816106f9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b737906829690600090a38151156105175760008373ffffffffffffffffffffffffffffffffffffffff16836040516106a591906108d1565b600060405180830381855af49150503d80600081146106e0576040519150601f19603f3d011682016040523d82523d6000602084013e6106e5565b606091505b5050905080610176573d806000803e806000fd5b60006107237fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000602082840312156107b857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461034357600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461080c57600080fd5b919050565b60006020828403121561082357600080fd5b610343826107e8565b60008060006040848603121561084157600080fd5b61084a846107e8565b9250602084013567ffffffffffffffff8082111561086757600080fd5b818601915086601f83011261087b57600080fd5b81358181111561088a57600080fd5b87602082850101111561089c57600080fd5b6020830194508093505050509250925092565b6000602082840312156108c157600080fd5b8151801515811461034357600080fd5b6000825160005b818110156108f257602081860181015185830152016108d8565b50600092019182525091905056fea26469706673582212202509744de731f668378f29d8b3b89d8625063fb9c4cb591e6d3195f9c6c1370564736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5E JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x43 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC4 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD7 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x111 JUMPI PUSH2 0x65 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6F JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA4 JUMPI PUSH2 0x65 JUMP JUMPDEST CALLDATASIZE PUSH2 0x65 JUMPI STOP JUMPDEST PUSH2 0x6D PUSH2 0x131 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x7B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8F PUSH2 0x8A CALLDATASIZE PUSH1 0x4 PUSH2 0x7A6 JUMP JUMPDEST PUSH2 0x17C JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6D PUSH2 0xBF CALLDATASIZE PUSH1 0x4 PUSH2 0x811 JUMP JUMPDEST PUSH2 0x34A JUMP JUMPDEST PUSH2 0x6D PUSH2 0xD2 CALLDATASIZE PUSH1 0x4 PUSH2 0x82C JUMP JUMPDEST PUSH2 0x421 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xEC PUSH2 0x51C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x9B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x11D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6D PUSH2 0x12C CALLDATASIZE PUSH1 0x4 PUSH2 0x811 JUMP JUMPDEST PUSH2 0x54B JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x172 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x20F JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x21C JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x24E JUMPI POP PUSH1 0x0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x336 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x333 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8AF JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x343 JUMPI POP PUSH1 0x0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x405 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x41E DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 DUP2 MSTORE POP PUSH2 0x60A JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4D7 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FC JUMP JUMPDEST PUSH2 0x517 DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x60A SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x546 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x601 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3FC JUMP JUMPDEST PUSH2 0x41E DUP2 PUSH2 0x6F9 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH1 0x0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x517 JUMPI PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6A5 SWAP2 SWAP1 PUSH2 0x8D1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x6E0 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6E5 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x176 JUMPI RETURNDATASIZE DUP1 PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x723 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7B8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x343 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x80C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x823 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x343 DUP3 PUSH2 0x7E8 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x841 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x84A DUP5 PUSH2 0x7E8 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x867 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x87B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x88A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x89C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8C1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x343 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP3 MLOAD PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8F2 JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8D8 JUMP JUMPDEST POP PUSH1 0x0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x25 MULMOD PUSH21 0x4DE731F668378F29D8B3B89D8625063FB9C4CB591E PUSH14 0x3195F9C6C1370564736F6C634300 ADDMOD EQ STOP CALLER ",
        "sourceMap": "176:268:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;803:11:3;:9;:11::i;:::-;176:268:1;1312:877:0;;;;;;;;;;-1:-1:-1;1312:877:0;;;;;:::i;:::-;;:::i;:::-;;;516:14:4;;509:22;491:41;;479:2;464:18;1312:877:0;;;;;;;;2301:123;;;;;;;;;;-1:-1:-1;2301:123:0;;;;;:::i;:::-;;:::i;2430:161::-;;;;;;:::i;:::-;;:::i;1225:81::-;;;;;;;;;;;;;:::i;:::-;;;1781:42:4;1769:55;;;1751:74;;1739:2;1724:18;1225:81:0;1605:226:4;2195:100:0;;;;;;;;;;-1:-1:-1;2195:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1312:877:0:-;1373:4;1393:16;;;;;;:36;;-1:-1:-1;1413:16:0;;;;;1393:36;1389:78;;;-1:-1:-1;1452:4:0;;1312:877;-1:-1:-1;1312:877:0:o;1389:78::-;1480:16;;;;;;1476:59;;-1:-1:-1;1519:5:0;;1312:877;-1:-1:-1;1312:877:0:o;1476:59::-;1688:66;1682:73;2040:36;;;;;2010:66:4;1998:79;;2040:36:0;;;1980:98:4;2040:32:0;;;;;;1953:18:4;;2040:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2040:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2036:147;;-1:-1:-1;2167:5:0;;1312:877;-1:-1:-1;;1312:877:0:o;2036:147::-;2121:7;1312:877;-1:-1:-1;;;1312:877:0:o;2301:123::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:4;2846:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;;;;;;;;;2376:41:::1;2395:17;2376:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2301:123:::0;:::o;2430:161::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:4;2846:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;2371:338:4;2846:49:0;2541:43:::1;2560:17;2579:4;;2541:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2541:18:0::1;::::0;-1:-1:-1;;;2541:43:0:i:1;:::-;2430:161:::0;;;:::o;1225:81::-;1265:7;1291:8;3319:66;3313:73;;3136:266;1291:8;1284:15;;1225:81;:::o;2195:100::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:4;2846:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;2371:338:4;2846:49:0;2269:19:::1;2279:8;2269:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3408:346:0;3464:21;3488:8;3319:66;3313:73;;3136:266;3488:8;3464:32;;3669:8;3601:66;3594:84;3738:8;3702:45;;3723:13;3702:45;;;;;;;;;;;;3454:300;3408:346;:::o;14:332:4:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;180:9;167:23;230:66;223:5;219:78;212:5;209:89;199:117;;312:1;309;302:12;543:196;611:20;;671:42;660:54;;650:65;;640:93;;729:1;726;719:12;640:93;543:196;;;:::o;744:186::-;803:6;856:2;844:9;835:7;831:23;827:32;824:52;;;872:1;869;862:12;824:52;895:29;914:9;895:29;:::i;935:665::-;1014:6;1022;1030;1083:2;1071:9;1062:7;1058:23;1054:32;1051:52;;;1099:1;1096;1089:12;1051:52;1122:29;1141:9;1122:29;:::i;:::-;1112:39;;1202:2;1191:9;1187:18;1174:32;1225:18;1266:2;1258:6;1255:14;1252:34;;;1282:1;1279;1272:12;1252:34;1320:6;1309:9;1305:22;1295:32;;1365:7;1358:4;1354:2;1350:13;1346:27;1336:55;;1387:1;1384;1377:12;1336:55;1427:2;1414:16;1453:2;1445:6;1442:14;1439:34;;;1469:1;1466;1459:12;1439:34;1514:7;1509:2;1500:6;1496:2;1492:15;1488:24;1485:37;1482:57;;;1535:1;1532;1525:12;1482:57;1566:2;1562;1558:11;1548:21;;1588:6;1578:16;;;;;935:665;;;;;:::o;2089:277::-;2156:6;2209:2;2197:9;2188:7;2184:23;2180:32;2177:52;;;2225:1;2222;2215:12;2177:52;2257:9;2251:16;2310:5;2303:13;2296:21;2289:5;2286:32;2276:60;;2332:1;2329;2322:12;2714:412;2843:3;2881:6;2875:13;2906:1;2916:129;2930:6;2927:1;2924:13;2916:129;;;3028:4;3012:14;;;3008:25;;3002:32;2989:11;;;2982:53;2945:12;2916:129;;;-1:-1:-1;3100:1:4;3064:16;;3089:13;;;-1:-1:-1;3064:16:4;2714:412;-1:-1:-1;2714:412:4:o"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "471600",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite",
          "owner()": "2361",
          "supportsInterface(bytes4)": "infinite",
          "transferOwnership(address)": "28278",
          "upgradeTo(address)": "28306",
          "upgradeToAndCall(address,bytes)": "infinite"
        }
      },
      "methodIdentifiers": {
        "owner()": "8da5cb5b",
        "supportsInterface(bytes4)": "01ffc9a7",
        "transferOwnership(address)": "f2fde38b",
        "upgradeTo(address)": "3659cfe6",
        "upgradeToAndCall(address,bytes)": "4f1ef286"
      }
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing ERC173 for ownership management that accept ETH via receive\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/ERC173/ERC173ProxyWithReceive.sol\":\"ERC173ProxyWithReceive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/ERC173/ERC173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing ERC173 for ownership management\\ncontract ERC173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xe66459b598ec609af81ef013a7cbf4cc12eea4157190882fe15c4a3f2037b8d6\",\"license\":\"MIT\"},\"solc_0.8/ERC173/ERC173ProxyWithReceive.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./ERC173Proxy.sol\\\";\\n\\n///@notice Proxy implementing ERC173 for ownership management that accept ETH via receive\\ncontract ERC173ProxyWithReceive is ERC173Proxy {\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data)\\n        payable\\n        ERC173Proxy(implementationAddress, ownerAddress, data)\\n    {}\\n\\n    receive() external payable override {}\\n}\\n\",\"keccak256\":\"0x438c4be4faaedea50f5fbbd03c26c99c03ce6435a539bd192d42271102633515\",\"license\":\"MIT\"},\"solc_0.8/ERC1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// ERC-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x7b91e396821b404ffd824b60396d4f561acb5e7e8ce611b5444dfe503cc693e4\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "notice": "Proxy implementing ERC173 for ownership management that accept ETH via receive",
      "version": 1
    }
  },
  "Proxied": {
    "_format": "hh-sol-artifact-1",
    "contractName": "Proxied",
    "sourceName": "solc_0.8/ERC1967/Proxied.sol",
    "abi": [],
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "deployedBytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "gasEstimates": null,
      "methodIdentifiers": {}
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/ERC1967/Proxied.sol\":\"Proxied\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/ERC1967/Proxied.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nabstract contract Proxied {\\n    /// @notice to be used by initialisation / postUpgrade function so that only the proxy's admin can execute them\\n    /// It also allows these functions to be called inside a contructor\\n    /// even if the contract is meant to be used without proxy\\n    modifier proxied() {\\n        address proxyAdminAddress = _proxyAdmin();\\n        // With hardhat-deploy proxies\\n        // the proxyAdminAddress is zero only for the implementation contract\\n        // if the implementation contract want to be used as a standalone/immutable contract\\n        // it simply has to execute the `proxied` function\\n        // This ensure the proxyAdminAddress is never zero post deployment\\n        // And allow you to keep the same code for both proxied contract and immutable contract\\n        if (proxyAdminAddress == address(0)) {\\n            // ensure can not be called twice when used outside of proxy : no admin\\n            // solhint-disable-next-line security/no-inline-assembly\\n            assembly {\\n                sstore(\\n                    0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103,\\n                    0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\\n                )\\n            }\\n        } else {\\n            require(msg.sender == proxyAdminAddress);\\n        }\\n        _;\\n    }\\n\\n    modifier onlyProxyAdmin() {\\n        require(msg.sender == _proxyAdmin(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    function _proxyAdmin() internal view returns (address ownerAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            ownerAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xaaceeafeeaf0d200ca3942d8bf14c1c4f787a77f79cc87c08bb668e65acdee29\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  },
  "Proxy": {
    "_format": "hh-sol-artifact-1",
    "contractName": "Proxy",
    "sourceName": "solc_0.8/ERC1967/Proxy.sol",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousImplementation",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "ProxyImplementationUpdated",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "deployedBytecode": {
        "functionDebugData": {},
        "generatedSources": [],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "",
        "opcodes": "",
        "sourceMap": ""
      },
      "gasEstimates": null,
      "methodIdentifiers": {}
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/ERC1967/Proxy.sol\":\"Proxy\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/ERC1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// ERC-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x7b91e396821b404ffd824b60396d4f561acb5e7e8ce611b5444dfe503cc693e4\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  },
  "Router10X60": {
    "_format": "hh-sol-artifact-1",
    "contractName": "Router10X60",
    "sourceName": "solc_0.8/router/Router10X60.sol",
    "abi": [
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address[]",
                "name": "implementations",
                "type": "address[]"
              },
              {
                "internalType": "bytes5[]",
                "name": "sigMap",
                "type": "bytes5[]"
              },
              {
                "internalType": "address",
                "name": "fallbackImplementation",
                "type": "address"
              }
            ],
            "internalType": "struct Router10X60.Routes",
            "name": "routes",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      }
    ],
    "bytecode": "0x6103406040523480156200001257600080fd5b50604051620010d6380380620010d68339810160408190526200003591620006f5565b602081015151815151600a811115620000955760405162461bcd60e51b815260206004820152601b60248201527f4d41585f494d504c454d454e544154494f4e535f52454143484544000000000060448201526064015b60405180910390fd5b603c821115620000db5760405162461bcd60e51b815260206004820152601060248201526f13505617d4d251d4d7d4915050d2115160821b60448201526064016200008c565b60008360000151600081518110620000f757620000f762000803565b60200260200101519050600080600080600080600080600060018b11156200013c578c518051600190811062000131576200013162000803565b602002602001015198505b60028b111562000169578c51805160029081106200015e576200015e62000803565b602002602001015197505b60038b111562000196578c51805160039081106200018b576200018b62000803565b602002602001015196505b60048b1115620001c3578c5180516004908110620001b857620001b862000803565b602002602001015195505b60058b1115620001f0578c5180516005908110620001e557620001e562000803565b602002602001015194505b60068b11156200021d578c518051600690811062000212576200021262000803565b602002602001015193505b60078b11156200024a578c51805160079081106200023f576200023f62000803565b602002602001015192505b60088b111562000277578c51805160089081106200026c576200026c62000803565b602002602001015191505b60098b1115620002a4578c518051600990811062000299576200029962000803565b602002602001015190505b6001600160a01b03998a1660805297891660a05295881660c05293871660e05291861661010052851661012052841661014052831661016052821661018052166101a052600080808080808080808080805b8d8110156200055e5760008f6020015182815181106200031a576200031a62000803565b602090810291909101015160d881901c915060e01c8084106200036f5760405162461bcd60e51b815260206004820152600c60248201526b2727aa2fa4a72fa7a92222a960a11b60448201526064016200008c565b8063ffffffff16935060068310156200039c576200038f8360286200082f565b82901b8e179d5062000546565b600c831015620003cd57620003b36006846200084f565b620003c09060286200082f565b82901b8d179c5062000546565b6012831015620003fe57620003e4600c846200084f565b620003f19060286200082f565b82901b8c179b5062000546565b60188310156200042f57620004156012846200084f565b620004229060286200082f565b82901b8b179a5062000546565b601e8310156200046057620004466018846200084f565b620004539060286200082f565b82901b8a17995062000546565b6024831015620004915762000477601e846200084f565b620004849060286200082f565b82901b8917985062000546565b602a831015620004c257620004a86024846200084f565b620004b59060286200082f565b82901b8817975062000546565b6030831015620004f357620004d9602a846200084f565b620004e69060286200082f565b82901b8717965062000546565b603683101562000524576200050a6030846200084f565b620005179060286200082f565b82901b8617965062000546565b620005316036846200084f565b6200053e9060286200082f565b82901b851796505b50508080620005559062000865565b915050620002f6565b50506101e09990995261020097909752610220959095526102409390935261026091909152610280526102a0526102c0526102e052610300525061032052604001516001600160a01b03166101c05262000881565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715620005ee57620005ee620005b3565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200061f576200061f620005b3565b604052919050565b60006001600160401b03821115620006435762000643620005b3565b5060051b60200190565b80516001600160a01b03811681146200066557600080fd5b919050565b600082601f8301126200067c57600080fd5b81516020620006956200068f8362000627565b620005f4565b82815260059290921b84018101918181019086841115620006b557600080fd5b8286015b84811015620006ea5780516001600160d81b031981168114620006dc5760008081fd5b8352918301918301620006b9565b509695505050505050565b600060208083850312156200070957600080fd5b82516001600160401b03808211156200072157600080fd5b90840190606082870312156200073657600080fd5b62000740620005c9565b8251828111156200075057600080fd5b8301601f810188136200076257600080fd5b8051620007736200068f8262000627565b81815260059190911b8201860190868101908a8311156200079357600080fd5b928701925b82841015620007bc57620007ac846200064d565b8252928701929087019062000798565b84525050508284015182811115620007d357600080fd5b620007e1888286016200066a565b8583015250620007f4604084016200064d565b60408201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762000849576200084962000819565b92915050565b8181038181111562000849576200084962000819565b6000600182016200087a576200087a62000819565b5060010190565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051610320516107586200097e600039600060150152600061033c015260006102f5015260006102a50152600061025501526000610205015260006101b501526000610165015260006101150152600060c5015260006075015260006105b0015260006105890152600061055a0152600061052b015260006104fc015260006104cd0152600061049e0152600061046f0152600061044001526000610411015260006103e201526107586000f3fe60806040526000803560e01c90808061003960017f00000000000000000000000000000000000000000000000000000000000000006106a4565b90505b8082116103d5576000600261005183856106bd565b61005b91906106d0565b9050600060068210156100a45761007382602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b600c8210156100f4576100b86006836106a4565b6100c390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601282101561014457610108600c836106a4565b61011390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6018821015610194576101586012836106a4565b61016390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601e8210156101e4576101a86018836106a4565b6101b390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6024821015610234576101f8601e836106a4565b61020390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b602a821015610284576102486024836106a4565b61025390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b60308210156102d457610298602a836106a4565b6102a390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6036821015610324576102e86030836106a4565b6102f390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b61032f6036836106a4565b61033a90602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561038f576103886001846106a4565b93506103cd565b8663ffffffff168163ffffffff1610156103b5576103ae8360016106bd565b94506103cd565b6103c360ff831660016106bd565b95505050506103d5565b50505061003c565b60008360010361040657507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360020361043557507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360030361046457507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360040361049357507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836005036104c257507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836006036104f157507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360070361052057507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360080361054f57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360090361057e57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b83600a036105ad57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff8116610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b3660008037600080366000845af43d6000803e808015610670573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156106b7576106b7610675565b92915050565b808201808211156106b7576106b7610675565b600082610706577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176106b7576106b761067556fea26469706673582212206889e9ee23e4ab5343426ac513f4fdc78f5300056e7d2ce9ecacde5bc8f1d43d64736f6c63430008140033",
    "deployedBytecode": "0x60806040526000803560e01c90808061003960017f00000000000000000000000000000000000000000000000000000000000000006106a4565b90505b8082116103d5576000600261005183856106bd565b61005b91906106d0565b9050600060068210156100a45761007382602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b600c8210156100f4576100b86006836106a4565b6100c390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601282101561014457610108600c836106a4565b61011390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6018821015610194576101586012836106a4565b61016390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601e8210156101e4576101a86018836106a4565b6101b390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6024821015610234576101f8601e836106a4565b61020390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b602a821015610284576102486024836106a4565b61025390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b60308210156102d457610298602a836106a4565b6102a390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6036821015610324576102e86030836106a4565b6102f390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b61032f6036836106a4565b61033a90602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561038f576103886001846106a4565b93506103cd565b8663ffffffff168163ffffffff1610156103b5576103ae8360016106bd565b94506103cd565b6103c360ff831660016106bd565b95505050506103d5565b50505061003c565b60008360010361040657507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360020361043557507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360030361046457507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360040361049357507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836005036104c257507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836006036104f157507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360070361052057507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360080361054f57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360090361057e57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b83600a036105ad57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff8116610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b3660008037600080366000845af43d6000803e808015610670573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156106b7576106b7610675565b92915050565b808201808211156106b7576106b7610675565b600082610706577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176106b7576106b761067556fea26469706673582212206889e9ee23e4ab5343426ac513f4fdc78f5300056e7d2ce9ecacde5bc8f1d43d64736f6c63430008140033",
    "linkReferences": {},
    "deployedLinkReferences": {},
    "devdoc": {
      "author": "Ronan Sandford",
      "kind": "dev",
      "methods": {
        "constructor": {
          "params": {
            "routes": "define the routing   each selector is represented by a bytes5, where the upper most bytes4 is the selector and   the lowest bytes represent the index of the implementations  implementations' addresses are given in an array"
          }
        }
      },
      "title": "Router for at max 10 Implementations and 60 function selectors",
      "version": 1
    },
    "evm": {
      "bytecode": {
        "functionDebugData": {
          "@_909": {
            "entryPoint": null,
            "id": 909,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 1613,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_array_bytes5_dyn_fromMemory": {
            "entryPoint": 1642,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_struct$_Routes_$371_memory_ptr_fromMemory": {
            "entryPoint": 1781,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_560af068831a2a2c470b3ee6886d6eecb8426c2c5c058e1f42b7375675688539__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_813478b8c451e10b731beb1a235e1ab973eabdeb4219c3b273060560b8669fff__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_encode_tuple_t_stringliteral_e27afc17c6bce956f65b40a78cab6f5d399333adf0eab4028ce1ba8089e5e409__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "allocate_memory": {
            "entryPoint": 1524,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "allocate_memory_905": {
            "entryPoint": 1481,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "array_allocation_size_array_address_dyn": {
            "entryPoint": 1575,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "checked_mul_t_uint256": {
            "entryPoint": 2095,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_sub_t_uint256": {
            "entryPoint": 2127,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "increment_t_uint256": {
            "entryPoint": 2149,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "panic_error_0x11": {
            "entryPoint": 2073,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "panic_error_0x32": {
            "entryPoint": 2051,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 1459,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:5086:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "46:95:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "63:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "70:3:5",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "75:10:5",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "66:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "66:20:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "56:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "56:31:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "56:31:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "103:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "106:4:5",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "96:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "96:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "96:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "127:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "130:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "120:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "120:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "120:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "14:127:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "191:207:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "201:19:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "217:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "211:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "211:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "201:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "229:35:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "251:6:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "259:4:5",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "247:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "247:17:5"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "233:10:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "339:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "341:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "341:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "341:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "282:10:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "302:2:5",
                                          "type": "",
                                          "value": "64"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "306:1:5",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "298:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "298:10:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "310:1:5",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "294:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "294:18:5"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "279:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "279:34:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "318:10:5"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "330:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "315:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "315:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "276:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "276:62:5"
                        },
                        "nodeType": "YulIf",
                        "src": "273:88:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "377:2:5",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "381:10:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "370:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "370:22:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "370:22:5"
                      }
                    ]
                  },
                  "name": "allocate_memory_905",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "180:6:5",
                      "type": ""
                    }
                  ],
                  "src": "146:252:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "448:230:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "458:19:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "474:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "468:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "468:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "458:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "486:58:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "508:6:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "size",
                                      "nodeType": "YulIdentifier",
                                      "src": "524:4:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "530:2:5",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "520:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "520:13:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "539:2:5",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "535:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "535:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "516:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "516:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "504:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "504:40:5"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "490:10:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "619:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "621:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "621:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "621:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "562:10:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "582:2:5",
                                          "type": "",
                                          "value": "64"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "586:1:5",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "578:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "578:10:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "590:1:5",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "574:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "574:18:5"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "559:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "559:34:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "598:10:5"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "610:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "595:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "595:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "556:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "556:62:5"
                        },
                        "nodeType": "YulIf",
                        "src": "553:88:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "657:2:5",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "661:10:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "650:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "650:22:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "650:22:5"
                      }
                    ]
                  },
                  "name": "allocate_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "428:4:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "437:6:5",
                      "type": ""
                    }
                  ],
                  "src": "403:275:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "752:114:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "796:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "798:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "798:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "798:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "768:6:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "784:2:5",
                                      "type": "",
                                      "value": "64"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "788:1:5",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "780:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "780:10:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "792:1:5",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "776:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "776:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "765:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "765:30:5"
                        },
                        "nodeType": "YulIf",
                        "src": "762:56:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "827:33:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "843:1:5",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "846:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "839:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "839:14:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "855:4:5",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "835:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "835:25:5"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "827:4:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_allocation_size_array_address_dyn",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "732:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "743:4:5",
                      "type": ""
                    }
                  ],
                  "src": "683:183:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "931:117:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "941:22:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "956:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "950:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "950:13:5"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "941:5:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1026:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1035:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1038:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1028:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1028:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1028:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "985:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "996:5:5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1011:3:5",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1016:1:5",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "1007:3:5"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1007:11:5"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1020:1:5",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "1003:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1003:19:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "992:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "992:31:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "982:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "982:42:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "975:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "975:50:5"
                        },
                        "nodeType": "YulIf",
                        "src": "972:70:5"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "910:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "921:5:5",
                      "type": ""
                    }
                  ],
                  "src": "871:177:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1127:771:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1176:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1185:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1188:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1178:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1178:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1178:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "1155:6:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1163:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1151:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1151:17:5"
                                },
                                {
                                  "name": "end",
                                  "nodeType": "YulIdentifier",
                                  "src": "1170:3:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1147:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1147:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1140:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1140:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1137:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1201:23:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1217:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1211:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1211:13:5"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1205:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1233:14:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1243:4:5",
                          "type": "",
                          "value": "0x20"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1237:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1256:71:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1323:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_array_address_dyn",
                                "nodeType": "YulIdentifier",
                                "src": "1283:39:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1283:43:5"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "1267:15:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1267:60:5"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "1260:3:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1336:16:5",
                        "value": {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "1349:3:5"
                        },
                        "variables": [
                          {
                            "name": "dst_1",
                            "nodeType": "YulTypedName",
                            "src": "1340:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1368:3:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1373:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1361:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1361:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1361:15:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1385:19:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1396:3:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1401:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1392:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1392:12:5"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1385:3:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1413:46:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1435:6:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1447:1:5",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1450:2:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "1443:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1443:10:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1431:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1431:23:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1456:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1427:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1427:32:5"
                        },
                        "variables": [
                          {
                            "name": "srcEnd",
                            "nodeType": "YulTypedName",
                            "src": "1417:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1487:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1496:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1499:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1489:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1489:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1489:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1474:6:5"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "1482:3:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1471:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1471:15:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1468:35:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1512:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1527:6:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1535:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1523:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1523:15:5"
                        },
                        "variables": [
                          {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "1516:3:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1603:266:5",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "1617:23:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "1636:3:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1630:5:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1630:10:5"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "1621:5:5",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "1722:74:5",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "1740:11:5",
                                    "value": {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1750:1:5",
                                      "type": "",
                                      "value": "0"
                                    },
                                    "variables": [
                                      {
                                        "name": "_3",
                                        "nodeType": "YulTypedName",
                                        "src": "1744:2:5",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "_3",
                                          "nodeType": "YulIdentifier",
                                          "src": "1775:2:5"
                                        },
                                        {
                                          "name": "_3",
                                          "nodeType": "YulIdentifier",
                                          "src": "1779:2:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "1768:6:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1768:14:5"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1768:14:5"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "1666:5:5"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "1677:5:5"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1688:3:5",
                                                "type": "",
                                                "value": "216"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1693:12:5",
                                                "type": "",
                                                "value": "0xffffffffff"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "shl",
                                              "nodeType": "YulIdentifier",
                                              "src": "1684:3:5"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1684:22:5"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "1673:3:5"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1673:34:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "eq",
                                      "nodeType": "YulIdentifier",
                                      "src": "1663:2:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1663:45:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "1656:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1656:53:5"
                              },
                              "nodeType": "YulIf",
                              "src": "1653:143:5"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1816:3:5"
                                  },
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1821:5:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1809:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1809:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1809:18:5"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "1840:19:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1851:3:5"
                                  },
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "1856:2:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1847:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1847:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1840:3:5"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "1558:3:5"
                            },
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1563:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1555:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1555:15:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1571:23:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1573:19:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "1584:3:5"
                                  },
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "1589:2:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1580:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1580:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "1573:3:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1551:3:5",
                          "statements": []
                        },
                        "src": "1547:322:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1878:14:5",
                        "value": {
                          "name": "dst_1",
                          "nodeType": "YulIdentifier",
                          "src": "1887:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "1878:5:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_array_bytes5_dyn_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1101:6:5",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1109:3:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "1117:5:5",
                      "type": ""
                    }
                  ],
                  "src": "1053:845:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2007:1325:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2017:12:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2027:2:5",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "2021:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2074:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2083:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2086:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2076:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2076:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2076:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2049:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2058:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2045:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2045:23:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2070:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2041:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2041:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2038:52:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2099:30:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2119:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2113:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2113:16:5"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2103:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2138:28:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2156:2:5",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2160:1:5",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "2152:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2152:10:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2164:1:5",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2148:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2148:18:5"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "2142:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2193:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2202:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2205:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2195:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2195:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2195:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2181:6:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2189:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2178:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2178:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2175:34:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2218:32:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2232:9:5"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2243:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2228:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2228:22:5"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "2222:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2290:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2299:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2302:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2292:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2292:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2292:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2270:7:5"
                                },
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "2279:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2266:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2266:16:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2284:4:5",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2262:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2262:27:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2259:47:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2315:34:5",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "allocate_memory_905",
                            "nodeType": "YulIdentifier",
                            "src": "2328:19:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2328:21:5"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2319:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2358:25:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "2380:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2374:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2374:9:5"
                        },
                        "variables": [
                          {
                            "name": "offset_1",
                            "nodeType": "YulTypedName",
                            "src": "2362:8:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2412:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2421:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2424:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2414:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2414:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2414:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset_1",
                              "nodeType": "YulIdentifier",
                              "src": "2398:8:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2408:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2395:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2395:16:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2392:36:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2437:27:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "2451:2:5"
                            },
                            {
                              "name": "offset_1",
                              "nodeType": "YulIdentifier",
                              "src": "2455:8:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2447:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2447:17:5"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "2441:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2512:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2521:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2524:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2514:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2514:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2514:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_4",
                                      "nodeType": "YulIdentifier",
                                      "src": "2491:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2495:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2487:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2487:13:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2502:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "2483:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2483:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2476:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2476:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2473:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2537:19:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "2553:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2547:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2547:9:5"
                        },
                        "variables": [
                          {
                            "name": "_5",
                            "nodeType": "YulTypedName",
                            "src": "2541:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2565:71:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_5",
                                  "nodeType": "YulIdentifier",
                                  "src": "2632:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_array_address_dyn",
                                "nodeType": "YulIdentifier",
                                "src": "2592:39:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2592:43:5"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "2576:15:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2576:60:5"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "2569:3:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2645:16:5",
                        "value": {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "2658:3:5"
                        },
                        "variables": [
                          {
                            "name": "dst_1",
                            "nodeType": "YulTypedName",
                            "src": "2649:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "2677:3:5"
                            },
                            {
                              "name": "_5",
                              "nodeType": "YulIdentifier",
                              "src": "2682:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2670:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2670:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2670:15:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2694:19:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "2705:3:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2710:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2701:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2701:12:5"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "2694:3:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2722:42:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "2744:2:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2752:1:5",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "name": "_5",
                                      "nodeType": "YulIdentifier",
                                      "src": "2755:2:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "2748:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2748:10:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2740:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2740:19:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2761:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2736:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2736:28:5"
                        },
                        "variables": [
                          {
                            "name": "srcEnd",
                            "nodeType": "YulTypedName",
                            "src": "2726:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2796:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2805:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2808:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2798:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2798:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2798:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2779:6:5"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2787:7:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2776:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2776:19:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2773:39:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2821:22:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "2836:2:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2840:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2832:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2832:11:5"
                        },
                        "variables": [
                          {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "2825:3:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2908:103:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2929:3:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "2964:3:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "abi_decode_address_fromMemory",
                                      "nodeType": "YulIdentifier",
                                      "src": "2934:29:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2934:34:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2922:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2922:47:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2922:47:5"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "2982:19:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2993:3:5"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2998:2:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2989:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2989:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2982:3:5"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "2863:3:5"
                            },
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2868:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2860:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2860:15:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2876:23:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2878:19:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "2889:3:5"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2894:2:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2885:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2885:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "2878:3:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2856:3:5",
                          "statements": []
                        },
                        "src": "2852:159:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3027:5:5"
                            },
                            {
                              "name": "dst_1",
                              "nodeType": "YulIdentifier",
                              "src": "3034:5:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3020:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3020:20:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3020:20:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3049:34:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "3075:2:5"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3079:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3071:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3071:11:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3065:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3065:18:5"
                        },
                        "variables": [
                          {
                            "name": "offset_2",
                            "nodeType": "YulTypedName",
                            "src": "3053:8:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3112:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3121:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3124:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3114:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3114:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3114:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset_2",
                              "nodeType": "YulIdentifier",
                              "src": "3098:8:5"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3108:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "3095:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3095:16:5"
                        },
                        "nodeType": "YulIf",
                        "src": "3092:36:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3148:5:5"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3155:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3144:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3144:14:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "3203:2:5"
                                    },
                                    {
                                      "name": "offset_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "3207:8:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3199:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3199:17:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3218:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_array_bytes5_dyn_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "3160:38:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3160:66:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3137:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3137:90:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3137:90:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3247:5:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3254:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3243:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3243:14:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "3293:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3297:2:5",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3289:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3289:11:5"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_address_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "3259:29:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3259:42:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3236:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3236:66:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3236:66:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3311:15:5",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3321:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3311:6:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_struct$_Routes_$371_memory_ptr_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1973:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1984:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1996:6:5",
                      "type": ""
                    }
                  ],
                  "src": "1903:1429:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3511:177:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3528:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3539:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3521:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3521:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3521:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3562:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3573:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3558:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3558:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3578:2:5",
                              "type": "",
                              "value": "27"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3551:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3551:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3551:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3601:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3612:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3597:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3597:18:5"
                            },
                            {
                              "hexValue": "4d41585f494d504c454d454e544154494f4e535f52454143484544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "3617:29:5",
                              "type": "",
                              "value": "MAX_IMPLEMENTATIONS_REACHED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3590:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3590:57:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3590:57:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3656:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3668:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3679:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3664:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3664:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3656:4:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_e27afc17c6bce956f65b40a78cab6f5d399333adf0eab4028ce1ba8089e5e409__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3488:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3502:4:5",
                      "type": ""
                    }
                  ],
                  "src": "3337:351:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3867:166:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3884:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3895:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3877:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3877:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3877:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3918:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3929:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3914:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3914:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3934:2:5",
                              "type": "",
                              "value": "16"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3907:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3907:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3907:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3957:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3968:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3953:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3953:18:5"
                            },
                            {
                              "hexValue": "4d41585f534947535f52454143484544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "3973:18:5",
                              "type": "",
                              "value": "MAX_SIGS_REACHED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3946:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3946:46:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3946:46:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4001:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4013:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4024:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4009:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4009:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4001:4:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_560af068831a2a2c470b3ee6886d6eecb8426c2c5c058e1f42b7375675688539__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3844:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3858:4:5",
                      "type": ""
                    }
                  ],
                  "src": "3693:340:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4070:95:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4087:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4094:3:5",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4099:10:5",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4090:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4090:20:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4080:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4080:31:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4080:31:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4127:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4130:4:5",
                              "type": "",
                              "value": "0x32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4120:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4120:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4120:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4151:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4154:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4144:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4144:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4144:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x32",
                  "nodeType": "YulFunctionDefinition",
                  "src": "4038:127:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4344:162:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4361:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4372:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4354:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4354:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4354:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4395:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4406:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4391:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4391:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4411:2:5",
                              "type": "",
                              "value": "12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4384:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4384:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4384:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4434:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4445:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4430:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4430:18:5"
                            },
                            {
                              "hexValue": "4e4f545f494e5f4f52444552",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "4450:14:5",
                              "type": "",
                              "value": "NOT_IN_ORDER"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4423:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4423:42:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4423:42:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4474:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4486:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4497:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4482:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4482:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4474:4:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_813478b8c451e10b731beb1a235e1ab973eabdeb4219c3b273060560b8669fff__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4321:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4335:4:5",
                      "type": ""
                    }
                  ],
                  "src": "4170:336:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4543:95:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4560:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4567:3:5",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4572:10:5",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4563:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4563:20:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4553:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4553:31:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4553:31:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4600:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4603:4:5",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4593:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4593:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4593:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4624:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4627:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4617:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4617:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4617:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "4511:127:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4695:116:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4705:20:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4720:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4723:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "4716:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4716:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "4705:7:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4783:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "4785:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4785:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4785:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "4754:1:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "4747:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4747:9:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "4761:1:5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "product",
                                          "nodeType": "YulIdentifier",
                                          "src": "4768:7:5"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "4777:1:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "div",
                                        "nodeType": "YulIdentifier",
                                        "src": "4764:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4764:15:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nodeType": "YulIdentifier",
                                    "src": "4758:2:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4758:22:5"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "4744:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4744:37:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "4737:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4737:45:5"
                        },
                        "nodeType": "YulIf",
                        "src": "4734:71:5"
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "4674:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "4677:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nodeType": "YulTypedName",
                      "src": "4683:7:5",
                      "type": ""
                    }
                  ],
                  "src": "4643:168:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4865:79:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4875:17:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4887:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4890:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4883:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4883:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "4875:4:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4916:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "4918:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4918:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4918:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "4907:4:5"
                            },
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4913:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4904:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4904:11:5"
                        },
                        "nodeType": "YulIf",
                        "src": "4901:37:5"
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "4847:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "4850:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "4856:4:5",
                      "type": ""
                    }
                  ],
                  "src": "4816:128:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4996:88:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5027:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "5029:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5029:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5029:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5012:5:5"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5023:1:5",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "5019:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5019:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5009:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5009:17:5"
                        },
                        "nodeType": "YulIf",
                        "src": "5006:43:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5058:20:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5069:5:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5076:1:5",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5065:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5065:13:5"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "5058:3:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "increment_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4978:5:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "4988:3:5",
                      "type": ""
                    }
                  ],
                  "src": "4949:135:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function allocate_memory_905() -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, 0x60)\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function array_allocation_size_array_address_dyn(length) -> size\n    {\n        if gt(length, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        size := add(shl(5, length), 0x20)\n    }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_array_bytes5_dyn_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := mload(offset)\n        let _2 := 0x20\n        let dst := allocate_memory(array_allocation_size_array_address_dyn(_1))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let srcEnd := add(add(offset, shl(5, _1)), _2)\n        if gt(srcEnd, end) { revert(0, 0) }\n        let src := add(offset, _2)\n        for { } lt(src, srcEnd) { src := add(src, _2) }\n        {\n            let value := mload(src)\n            if iszero(eq(value, and(value, shl(216, 0xffffffffff))))\n            {\n                let _3 := 0\n                revert(_3, _3)\n            }\n            mstore(dst, value)\n            dst := add(dst, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_struct$_Routes_$371_memory_ptr_fromMemory(headStart, dataEnd) -> value0\n    {\n        let _1 := 32\n        if slt(sub(dataEnd, headStart), _1) { revert(0, 0) }\n        let offset := mload(headStart)\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset)\n        if slt(sub(dataEnd, _3), 0x60) { revert(0, 0) }\n        let value := allocate_memory_905()\n        let offset_1 := mload(_3)\n        if gt(offset_1, _2) { revert(0, 0) }\n        let _4 := add(_3, offset_1)\n        if iszero(slt(add(_4, 0x1f), dataEnd)) { revert(0, 0) }\n        let _5 := mload(_4)\n        let dst := allocate_memory(array_allocation_size_array_address_dyn(_5))\n        let dst_1 := dst\n        mstore(dst, _5)\n        dst := add(dst, _1)\n        let srcEnd := add(add(_4, shl(5, _5)), _1)\n        if gt(srcEnd, dataEnd) { revert(0, 0) }\n        let src := add(_4, _1)\n        for { } lt(src, srcEnd) { src := add(src, _1) }\n        {\n            mstore(dst, abi_decode_address_fromMemory(src))\n            dst := add(dst, _1)\n        }\n        mstore(value, dst_1)\n        let offset_2 := mload(add(_3, _1))\n        if gt(offset_2, _2) { revert(0, 0) }\n        mstore(add(value, _1), abi_decode_array_bytes5_dyn_fromMemory(add(_3, offset_2), dataEnd))\n        mstore(add(value, 64), abi_decode_address_fromMemory(add(_3, 64)))\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e27afc17c6bce956f65b40a78cab6f5d399333adf0eab4028ce1ba8089e5e409__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"MAX_IMPLEMENTATIONS_REACHED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_560af068831a2a2c470b3ee6886d6eecb8426c2c5c058e1f42b7375675688539__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"MAX_SIGS_REACHED\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function abi_encode_tuple_t_stringliteral_813478b8c451e10b731beb1a235e1ab973eabdeb4219c3b273060560b8669fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 12)\n        mstore(add(headStart, 64), \"NOT_IN_ORDER\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "6103406040523480156200001257600080fd5b50604051620010d6380380620010d68339810160408190526200003591620006f5565b602081015151815151600a811115620000955760405162461bcd60e51b815260206004820152601b60248201527f4d41585f494d504c454d454e544154494f4e535f52454143484544000000000060448201526064015b60405180910390fd5b603c821115620000db5760405162461bcd60e51b815260206004820152601060248201526f13505617d4d251d4d7d4915050d2115160821b60448201526064016200008c565b60008360000151600081518110620000f757620000f762000803565b60200260200101519050600080600080600080600080600060018b11156200013c578c518051600190811062000131576200013162000803565b602002602001015198505b60028b111562000169578c51805160029081106200015e576200015e62000803565b602002602001015197505b60038b111562000196578c51805160039081106200018b576200018b62000803565b602002602001015196505b60048b1115620001c3578c5180516004908110620001b857620001b862000803565b602002602001015195505b60058b1115620001f0578c5180516005908110620001e557620001e562000803565b602002602001015194505b60068b11156200021d578c518051600690811062000212576200021262000803565b602002602001015193505b60078b11156200024a578c51805160079081106200023f576200023f62000803565b602002602001015192505b60088b111562000277578c51805160089081106200026c576200026c62000803565b602002602001015191505b60098b1115620002a4578c518051600990811062000299576200029962000803565b602002602001015190505b6001600160a01b03998a1660805297891660a05295881660c05293871660e05291861661010052851661012052841661014052831661016052821661018052166101a052600080808080808080808080805b8d8110156200055e5760008f6020015182815181106200031a576200031a62000803565b602090810291909101015160d881901c915060e01c8084106200036f5760405162461bcd60e51b815260206004820152600c60248201526b2727aa2fa4a72fa7a92222a960a11b60448201526064016200008c565b8063ffffffff16935060068310156200039c576200038f8360286200082f565b82901b8e179d5062000546565b600c831015620003cd57620003b36006846200084f565b620003c09060286200082f565b82901b8d179c5062000546565b6012831015620003fe57620003e4600c846200084f565b620003f19060286200082f565b82901b8c179b5062000546565b60188310156200042f57620004156012846200084f565b620004229060286200082f565b82901b8b179a5062000546565b601e8310156200046057620004466018846200084f565b620004539060286200082f565b82901b8a17995062000546565b6024831015620004915762000477601e846200084f565b620004849060286200082f565b82901b8917985062000546565b602a831015620004c257620004a86024846200084f565b620004b59060286200082f565b82901b8817975062000546565b6030831015620004f357620004d9602a846200084f565b620004e69060286200082f565b82901b8717965062000546565b603683101562000524576200050a6030846200084f565b620005179060286200082f565b82901b8617965062000546565b620005316036846200084f565b6200053e9060286200082f565b82901b851796505b50508080620005559062000865565b915050620002f6565b50506101e09990995261020097909752610220959095526102409390935261026091909152610280526102a0526102c0526102e052610300525061032052604001516001600160a01b03166101c05262000881565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715620005ee57620005ee620005b3565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200061f576200061f620005b3565b604052919050565b60006001600160401b03821115620006435762000643620005b3565b5060051b60200190565b80516001600160a01b03811681146200066557600080fd5b919050565b600082601f8301126200067c57600080fd5b81516020620006956200068f8362000627565b620005f4565b82815260059290921b84018101918181019086841115620006b557600080fd5b8286015b84811015620006ea5780516001600160d81b031981168114620006dc5760008081fd5b8352918301918301620006b9565b509695505050505050565b600060208083850312156200070957600080fd5b82516001600160401b03808211156200072157600080fd5b90840190606082870312156200073657600080fd5b62000740620005c9565b8251828111156200075057600080fd5b8301601f810188136200076257600080fd5b8051620007736200068f8262000627565b81815260059190911b8201860190868101908a8311156200079357600080fd5b928701925b82841015620007bc57620007ac846200064d565b8252928701929087019062000798565b84525050508284015182811115620007d357600080fd5b620007e1888286016200066a565b8583015250620007f4604084016200064d565b60408201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762000849576200084962000819565b92915050565b8181038181111562000849576200084962000819565b6000600182016200087a576200087a62000819565b5060010190565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051610320516107586200097e600039600060150152600061033c015260006102f5015260006102a50152600061025501526000610205015260006101b501526000610165015260006101150152600060c5015260006075015260006105b0015260006105890152600061055a0152600061052b015260006104fc015260006104cd0152600061049e0152600061046f0152600061044001526000610411015260006103e201526107586000f3fe60806040526000803560e01c90808061003960017f00000000000000000000000000000000000000000000000000000000000000006106a4565b90505b8082116103d5576000600261005183856106bd565b61005b91906106d0565b9050600060068210156100a45761007382602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b600c8210156100f4576100b86006836106a4565b6100c390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601282101561014457610108600c836106a4565b61011390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6018821015610194576101586012836106a4565b61016390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601e8210156101e4576101a86018836106a4565b6101b390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6024821015610234576101f8601e836106a4565b61020390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b602a821015610284576102486024836106a4565b61025390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b60308210156102d457610298602a836106a4565b6102a390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6036821015610324576102e86030836106a4565b6102f390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b61032f6036836106a4565b61033a90602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561038f576103886001846106a4565b93506103cd565b8663ffffffff168163ffffffff1610156103b5576103ae8360016106bd565b94506103cd565b6103c360ff831660016106bd565b95505050506103d5565b50505061003c565b60008360010361040657507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360020361043557507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360030361046457507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360040361049357507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836005036104c257507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836006036104f157507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360070361052057507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360080361054f57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360090361057e57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b83600a036105ad57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff8116610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b3660008037600080366000845af43d6000803e808015610670573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156106b7576106b7610675565b92915050565b808201808211156106b7576106b7610675565b600082610706577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176106b7576106b761067556fea26469706673582212206889e9ee23e4ab5343426ac513f4fdc78f5300056e7d2ce9ecacde5bc8f1d43d64736f6c63430008140033",
        "opcodes": "PUSH2 0x340 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x12 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x10D6 CODESIZE SUB DUP1 PUSH3 0x10D6 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x35 SWAP2 PUSH3 0x6F5 JUMP JUMPDEST PUSH1 0x20 DUP2 ADD MLOAD MLOAD DUP2 MLOAD MLOAD PUSH1 0xA DUP2 GT ISZERO PUSH3 0x95 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4D41585F494D504C454D454E544154494F4E535F524541434845440000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3C DUP3 GT ISZERO PUSH3 0xDB JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x10 PUSH1 0x24 DUP3 ADD MSTORE PUSH16 0x13505617D4D251D4D7D4915050D21151 PUSH1 0x82 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH3 0x8C JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH1 0x0 ADD MLOAD PUSH1 0x0 DUP2 MLOAD DUP2 LT PUSH3 0xF7 JUMPI PUSH3 0xF7 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP1 POP PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x1 DUP12 GT ISZERO PUSH3 0x13C JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x1 SWAP1 DUP2 LT PUSH3 0x131 JUMPI PUSH3 0x131 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP9 POP JUMPDEST PUSH1 0x2 DUP12 GT ISZERO PUSH3 0x169 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x2 SWAP1 DUP2 LT PUSH3 0x15E JUMPI PUSH3 0x15E PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP8 POP JUMPDEST PUSH1 0x3 DUP12 GT ISZERO PUSH3 0x196 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x3 SWAP1 DUP2 LT PUSH3 0x18B JUMPI PUSH3 0x18B PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP7 POP JUMPDEST PUSH1 0x4 DUP12 GT ISZERO PUSH3 0x1C3 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x4 SWAP1 DUP2 LT PUSH3 0x1B8 JUMPI PUSH3 0x1B8 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP6 POP JUMPDEST PUSH1 0x5 DUP12 GT ISZERO PUSH3 0x1F0 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x5 SWAP1 DUP2 LT PUSH3 0x1E5 JUMPI PUSH3 0x1E5 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP5 POP JUMPDEST PUSH1 0x6 DUP12 GT ISZERO PUSH3 0x21D JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x6 SWAP1 DUP2 LT PUSH3 0x212 JUMPI PUSH3 0x212 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP4 POP JUMPDEST PUSH1 0x7 DUP12 GT ISZERO PUSH3 0x24A JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x7 SWAP1 DUP2 LT PUSH3 0x23F JUMPI PUSH3 0x23F PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP3 POP JUMPDEST PUSH1 0x8 DUP12 GT ISZERO PUSH3 0x277 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x8 SWAP1 DUP2 LT PUSH3 0x26C JUMPI PUSH3 0x26C PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP2 POP JUMPDEST PUSH1 0x9 DUP12 GT ISZERO PUSH3 0x2A4 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x9 SWAP1 DUP2 LT PUSH3 0x299 JUMPI PUSH3 0x299 PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP1 POP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP10 DUP11 AND PUSH1 0x80 MSTORE SWAP8 DUP10 AND PUSH1 0xA0 MSTORE SWAP6 DUP9 AND PUSH1 0xC0 MSTORE SWAP4 DUP8 AND PUSH1 0xE0 MSTORE SWAP2 DUP7 AND PUSH2 0x100 MSTORE DUP6 AND PUSH2 0x120 MSTORE DUP5 AND PUSH2 0x140 MSTORE DUP4 AND PUSH2 0x160 MSTORE DUP3 AND PUSH2 0x180 MSTORE AND PUSH2 0x1A0 MSTORE PUSH1 0x0 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 JUMPDEST DUP14 DUP2 LT ISZERO PUSH3 0x55E JUMPI PUSH1 0x0 DUP16 PUSH1 0x20 ADD MLOAD DUP3 DUP2 MLOAD DUP2 LT PUSH3 0x31A JUMPI PUSH3 0x31A PUSH3 0x803 JUMP JUMPDEST PUSH1 0x20 SWAP1 DUP2 MUL SWAP2 SWAP1 SWAP2 ADD ADD MLOAD PUSH1 0xD8 DUP2 SWAP1 SHR SWAP2 POP PUSH1 0xE0 SHR DUP1 DUP5 LT PUSH3 0x36F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xC PUSH1 0x24 DUP3 ADD MSTORE PUSH12 0x2727AA2FA4A72FA7A92222A9 PUSH1 0xA1 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH3 0x8C JUMP JUMPDEST DUP1 PUSH4 0xFFFFFFFF AND SWAP4 POP PUSH1 0x6 DUP4 LT ISZERO PUSH3 0x39C JUMPI PUSH3 0x38F DUP4 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP15 OR SWAP14 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0xC DUP4 LT ISZERO PUSH3 0x3CD JUMPI PUSH3 0x3B3 PUSH1 0x6 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x3C0 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP14 OR SWAP13 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x12 DUP4 LT ISZERO PUSH3 0x3FE JUMPI PUSH3 0x3E4 PUSH1 0xC DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x3F1 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP13 OR SWAP12 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x18 DUP4 LT ISZERO PUSH3 0x42F JUMPI PUSH3 0x415 PUSH1 0x12 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x422 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP12 OR SWAP11 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x1E DUP4 LT ISZERO PUSH3 0x460 JUMPI PUSH3 0x446 PUSH1 0x18 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x453 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP11 OR SWAP10 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x24 DUP4 LT ISZERO PUSH3 0x491 JUMPI PUSH3 0x477 PUSH1 0x1E DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x484 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP10 OR SWAP9 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x2A DUP4 LT ISZERO PUSH3 0x4C2 JUMPI PUSH3 0x4A8 PUSH1 0x24 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x4B5 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP9 OR SWAP8 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x30 DUP4 LT ISZERO PUSH3 0x4F3 JUMPI PUSH3 0x4D9 PUSH1 0x2A DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x4E6 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP8 OR SWAP7 POP PUSH3 0x546 JUMP JUMPDEST PUSH1 0x36 DUP4 LT ISZERO PUSH3 0x524 JUMPI PUSH3 0x50A PUSH1 0x30 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x517 SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP7 OR SWAP7 POP PUSH3 0x546 JUMP JUMPDEST PUSH3 0x531 PUSH1 0x36 DUP5 PUSH3 0x84F JUMP JUMPDEST PUSH3 0x53E SWAP1 PUSH1 0x28 PUSH3 0x82F JUMP JUMPDEST DUP3 SWAP1 SHL DUP6 OR SWAP7 POP JUMPDEST POP POP DUP1 DUP1 PUSH3 0x555 SWAP1 PUSH3 0x865 JUMP JUMPDEST SWAP2 POP POP PUSH3 0x2F6 JUMP JUMPDEST POP POP PUSH2 0x1E0 SWAP10 SWAP1 SWAP10 MSTORE PUSH2 0x200 SWAP8 SWAP1 SWAP8 MSTORE PUSH2 0x220 SWAP6 SWAP1 SWAP6 MSTORE PUSH2 0x240 SWAP4 SWAP1 SWAP4 MSTORE PUSH2 0x260 SWAP2 SWAP1 SWAP2 MSTORE PUSH2 0x280 MSTORE PUSH2 0x2A0 MSTORE PUSH2 0x2C0 MSTORE PUSH2 0x2E0 MSTORE PUSH2 0x300 MSTORE POP PUSH2 0x320 MSTORE PUSH1 0x40 ADD MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1C0 MSTORE PUSH3 0x881 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x60 DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH3 0x5EE JUMPI PUSH3 0x5EE PUSH3 0x5B3 JUMP JUMPDEST PUSH1 0x40 MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT AND DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH3 0x61F JUMPI PUSH3 0x61F PUSH3 0x5B3 JUMP JUMPDEST PUSH1 0x40 MSTORE SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP3 GT ISZERO PUSH3 0x643 JUMPI PUSH3 0x643 PUSH3 0x5B3 JUMP JUMPDEST POP PUSH1 0x5 SHL PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x665 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x67C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH1 0x20 PUSH3 0x695 PUSH3 0x68F DUP4 PUSH3 0x627 JUMP JUMPDEST PUSH3 0x5F4 JUMP JUMPDEST DUP3 DUP2 MSTORE PUSH1 0x5 SWAP3 SWAP1 SWAP3 SHL DUP5 ADD DUP2 ADD SWAP2 DUP2 DUP2 ADD SWAP1 DUP7 DUP5 GT ISZERO PUSH3 0x6B5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 DUP7 ADD JUMPDEST DUP5 DUP2 LT ISZERO PUSH3 0x6EA JUMPI DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xD8 SHL SUB NOT DUP2 AND DUP2 EQ PUSH3 0x6DC JUMPI PUSH1 0x0 DUP1 DUP2 REVERT JUMPDEST DUP4 MSTORE SWAP2 DUP4 ADD SWAP2 DUP4 ADD PUSH3 0x6B9 JUMP JUMPDEST POP SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP1 DUP4 DUP6 SUB SLT ISZERO PUSH3 0x709 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x721 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 DUP5 ADD SWAP1 PUSH1 0x60 DUP3 DUP8 SUB SLT ISZERO PUSH3 0x736 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x740 PUSH3 0x5C9 JUMP JUMPDEST DUP3 MLOAD DUP3 DUP2 GT ISZERO PUSH3 0x750 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP4 ADD PUSH1 0x1F DUP2 ADD DUP9 SGT PUSH3 0x762 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 MLOAD PUSH3 0x773 PUSH3 0x68F DUP3 PUSH3 0x627 JUMP JUMPDEST DUP2 DUP2 MSTORE PUSH1 0x5 SWAP2 SWAP1 SWAP2 SHL DUP3 ADD DUP7 ADD SWAP1 DUP7 DUP2 ADD SWAP1 DUP11 DUP4 GT ISZERO PUSH3 0x793 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP3 DUP8 ADD SWAP3 JUMPDEST DUP3 DUP5 LT ISZERO PUSH3 0x7BC JUMPI PUSH3 0x7AC DUP5 PUSH3 0x64D JUMP JUMPDEST DUP3 MSTORE SWAP3 DUP8 ADD SWAP3 SWAP1 DUP8 ADD SWAP1 PUSH3 0x798 JUMP JUMPDEST DUP5 MSTORE POP POP POP DUP3 DUP5 ADD MLOAD DUP3 DUP2 GT ISZERO PUSH3 0x7D3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x7E1 DUP9 DUP3 DUP7 ADD PUSH3 0x66A JUMP JUMPDEST DUP6 DUP4 ADD MSTORE POP PUSH3 0x7F4 PUSH1 0x40 DUP5 ADD PUSH3 0x64D JUMP JUMPDEST PUSH1 0x40 DUP3 ADD MSTORE SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH3 0x849 JUMPI PUSH3 0x849 PUSH3 0x819 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH3 0x849 JUMPI PUSH3 0x849 PUSH3 0x819 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP3 ADD PUSH3 0x87A JUMPI PUSH3 0x87A PUSH3 0x819 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH1 0xA0 MLOAD PUSH1 0xC0 MLOAD PUSH1 0xE0 MLOAD PUSH2 0x100 MLOAD PUSH2 0x120 MLOAD PUSH2 0x140 MLOAD PUSH2 0x160 MLOAD PUSH2 0x180 MLOAD PUSH2 0x1A0 MLOAD PUSH2 0x1C0 MLOAD PUSH2 0x1E0 MLOAD PUSH2 0x200 MLOAD PUSH2 0x220 MLOAD PUSH2 0x240 MLOAD PUSH2 0x260 MLOAD PUSH2 0x280 MLOAD PUSH2 0x2A0 MLOAD PUSH2 0x2C0 MLOAD PUSH2 0x2E0 MLOAD PUSH2 0x300 MLOAD PUSH2 0x320 MLOAD PUSH2 0x758 PUSH3 0x97E PUSH1 0x0 CODECOPY PUSH1 0x0 PUSH1 0x15 ADD MSTORE PUSH1 0x0 PUSH2 0x33C ADD MSTORE PUSH1 0x0 PUSH2 0x2F5 ADD MSTORE PUSH1 0x0 PUSH2 0x2A5 ADD MSTORE PUSH1 0x0 PUSH2 0x255 ADD MSTORE PUSH1 0x0 PUSH2 0x205 ADD MSTORE PUSH1 0x0 PUSH2 0x1B5 ADD MSTORE PUSH1 0x0 PUSH2 0x165 ADD MSTORE PUSH1 0x0 PUSH2 0x115 ADD MSTORE PUSH1 0x0 PUSH1 0xC5 ADD MSTORE PUSH1 0x0 PUSH1 0x75 ADD MSTORE PUSH1 0x0 PUSH2 0x5B0 ADD MSTORE PUSH1 0x0 PUSH2 0x589 ADD MSTORE PUSH1 0x0 PUSH2 0x55A ADD MSTORE PUSH1 0x0 PUSH2 0x52B ADD MSTORE PUSH1 0x0 PUSH2 0x4FC ADD MSTORE PUSH1 0x0 PUSH2 0x4CD ADD MSTORE PUSH1 0x0 PUSH2 0x49E ADD MSTORE PUSH1 0x0 PUSH2 0x46F ADD MSTORE PUSH1 0x0 PUSH2 0x440 ADD MSTORE PUSH1 0x0 PUSH2 0x411 ADD MSTORE PUSH1 0x0 PUSH2 0x3E2 ADD MSTORE PUSH2 0x758 PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 CALLDATALOAD PUSH1 0xE0 SHR SWAP1 DUP1 DUP1 PUSH2 0x39 PUSH1 0x1 PUSH32 0x0 PUSH2 0x6A4 JUMP JUMPDEST SWAP1 POP JUMPDEST DUP1 DUP3 GT PUSH2 0x3D5 JUMPI PUSH1 0x0 PUSH1 0x2 PUSH2 0x51 DUP4 DUP6 PUSH2 0x6BD JUMP JUMPDEST PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x6D0 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x6 DUP3 LT ISZERO PUSH2 0xA4 JUMPI PUSH2 0x73 DUP3 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0xC DUP3 LT ISZERO PUSH2 0xF4 JUMPI PUSH2 0xB8 PUSH1 0x6 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0xC3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x12 DUP3 LT ISZERO PUSH2 0x144 JUMPI PUSH2 0x108 PUSH1 0xC DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x113 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x18 DUP3 LT ISZERO PUSH2 0x194 JUMPI PUSH2 0x158 PUSH1 0x12 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x163 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x1E DUP3 LT ISZERO PUSH2 0x1E4 JUMPI PUSH2 0x1A8 PUSH1 0x18 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x1B3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x24 DUP3 LT ISZERO PUSH2 0x234 JUMPI PUSH2 0x1F8 PUSH1 0x1E DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x203 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x2A DUP3 LT ISZERO PUSH2 0x284 JUMPI PUSH2 0x248 PUSH1 0x24 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x253 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x30 DUP3 LT ISZERO PUSH2 0x2D4 JUMPI PUSH2 0x298 PUSH1 0x2A DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x2A3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x36 DUP3 LT ISZERO PUSH2 0x324 JUMPI PUSH2 0x2E8 PUSH1 0x30 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x2F3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH2 0x32F PUSH1 0x36 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x33A SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP JUMPDEST PUSH4 0xFFFFFFFF PUSH1 0x8 DUP3 SWAP1 SHR DUP2 AND SWAP1 DUP8 AND DUP2 GT ISZERO PUSH2 0x38F JUMPI PUSH2 0x388 PUSH1 0x1 DUP5 PUSH2 0x6A4 JUMP JUMPDEST SWAP4 POP PUSH2 0x3CD JUMP JUMPDEST DUP7 PUSH4 0xFFFFFFFF AND DUP2 PUSH4 0xFFFFFFFF AND LT ISZERO PUSH2 0x3B5 JUMPI PUSH2 0x3AE DUP4 PUSH1 0x1 PUSH2 0x6BD JUMP JUMPDEST SWAP5 POP PUSH2 0x3CD JUMP JUMPDEST PUSH2 0x3C3 PUSH1 0xFF DUP4 AND PUSH1 0x1 PUSH2 0x6BD JUMP JUMPDEST SWAP6 POP POP POP POP PUSH2 0x3D5 JUMP JUMPDEST POP POP POP PUSH2 0x3C JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH1 0x1 SUB PUSH2 0x406 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x2 SUB PUSH2 0x435 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x3 SUB PUSH2 0x464 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x4 SUB PUSH2 0x493 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x5 SUB PUSH2 0x4C2 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x6 SUB PUSH2 0x4F1 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x7 SUB PUSH2 0x520 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x8 SUB PUSH2 0x54F JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x9 SUB PUSH2 0x57E JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0xA SUB PUSH2 0x5AD JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST POP PUSH32 0x0 JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH2 0x651 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x554E4B4E4F574E5F4D4554484F44000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLDATASIZE PUSH1 0x0 DUP1 CALLDATACOPY PUSH1 0x0 DUP1 CALLDATASIZE PUSH1 0x0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x670 JUMPI RETURNDATASIZE PUSH1 0x0 RETURN JUMPDEST RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x706 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH9 0x89E9EE23E4AB534342 PUSH11 0xC513F4FDC78F5300056E7D 0x2C 0xE9 0xEC 0xAC 0xDE JUMPDEST 0xC8 CALL 0xD4 RETURNDATASIZE PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "259:8353:4:-:0;;;2102:3458;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2158:13;;;;:20;2200:22;;:29;2252:2;2241:13;;;2233:53;;;;-1:-1:-1;;;2233:53:4;;3539:2:5;2233:53:4;;;3521:21:5;3578:2;3558:18;;;3551:30;3617:29;3597:18;;;3590:57;3664:18;;2233:53:4;;;;;;;;;2309:2;2298:7;:13;;2290:42;;;;-1:-1:-1;;;2290:42:4;;3895:2:5;2290:42:4;;;3877:21:5;3934:2;3914:18;;;3907:30;-1:-1:-1;;;3953:18:5;;;3946:46;4009:18;;2290:42:4;3693:340:5;2290:42:4;2342:29;2374:6;:22;;;2397:1;2374:25;;;;;;;;:::i;:::-;;;;;;;2342:57;;2404:29;2438;2472;2506;2540;2574;2608;2642;2676;2724:1;2714:7;:11;2710:78;;;2757:22;;:25;;2780:1;;2757:25;;;;;;:::i;:::-;;;;;;;2733:49;;2710:78;2806:1;2796:7;:11;2792:78;;;2839:22;;:25;;2862:1;;2839:25;;;;;;:::i;:::-;;;;;;;2815:49;;2792:78;2888:1;2878:7;:11;2874:78;;;2921:22;;:25;;2944:1;;2921:25;;;;;;:::i;:::-;;;;;;;2897:49;;2874:78;2970:1;2960:7;:11;2956:78;;;3003:22;;:25;;3026:1;;3003:25;;;;;;:::i;:::-;;;;;;;2979:49;;2956:78;3052:1;3042:7;:11;3038:78;;;3085:22;;:25;;3108:1;;3085:25;;;;;;:::i;:::-;;;;;;;3061:49;;3038:78;3134:1;3124:7;:11;3120:78;;;3167:22;;:25;;3190:1;;3167:25;;;;;;:::i;:::-;;;;;;;3143:49;;3120:78;3216:1;3206:7;:11;3202:78;;;3249:22;;:25;;3272:1;;3249:25;;;;;;:::i;:::-;;;;;;;3225:49;;3202:78;3298:1;3288:7;:11;3284:78;;;3331:22;;:25;;3354:1;;3331:25;;;;;;:::i;:::-;;;;;;;3307:49;;3284:78;3380:1;3370:7;:11;3366:78;;;3413:22;;:25;;3436:1;;3413:25;;;;;;:::i;:::-;;;;;;;3389:49;;3366:78;-1:-1:-1;;;;;3449:41:4;;;;;3495;;;;;3541;;;;;3587;;;;;3633;;;;;3679;;;;3725;;;;3771;;;;3817;;;;3863;;;3918:19;;;;;;;;;;;;4182:1025;4206:7;4202:1;:11;4182:1025;;;4226:12;4256:6;:13;;;4270:1;4256:16;;;;;;;;:::i;:::-;;;;;;;;;;;4249:24;;;;;-1:-1:-1;4300:9:4;;4324:13;;;4316:38;;;;-1:-1:-1;;;4316:38:4;;4372:2:5;4316:38:4;;;4354:21:5;4411:2;4391:18;;;4384:30;-1:-1:-1;;;4430:18:5;;;4423:42;4482:18;;4316:38:4;4170:336:5;4316:38:4;4370:3;4360:13;;;;4387:1;4383;:5;4379:823;;;4435:6;:1;4439:2;4435:6;:::i;:::-;4426:4;:16;;4411:11;:32;4397:46;;4379:823;;;4464:2;4460:1;:6;4456:746;;;4514:5;4518:1;4514;:5;:::i;:::-;4513:12;;4523:2;4513:12;:::i;:::-;4504:4;:22;;4489:11;:38;4475:52;;4456:746;;;4548:2;4544:1;:6;4540:662;;;4598:6;4602:2;4598:1;:6;:::i;:::-;4597:13;;4608:2;4597:13;:::i;:::-;4588:4;:23;;4573:11;:39;4559:53;;4540:662;;;4633:2;4629:1;:6;4625:577;;;4683:6;4687:2;4683:1;:6;:::i;:::-;4682:13;;4693:2;4682:13;:::i;:::-;4673:4;:23;;4658:11;:39;4644:53;;4625:577;;;4718:2;4714:1;:6;4710:492;;;4768:6;4772:2;4768:1;:6;:::i;:::-;4767:13;;4778:2;4767:13;:::i;:::-;4758:4;:23;;4743:11;:39;4729:53;;4710:492;;;4803:2;4799:1;:6;4795:407;;;4853:6;4857:2;4853:1;:6;:::i;:::-;4852:13;;4863:2;4852:13;:::i;:::-;4843:4;:23;;4828:11;:39;4814:53;;4795:407;;;4888:2;4884:1;:6;4880:322;;;4938:6;4942:2;4938:1;:6;:::i;:::-;4937:13;;4948:2;4937:13;:::i;:::-;4928:4;:23;;4913:11;:39;4899:53;;4880:322;;;4973:2;4969:1;:6;4965:237;;;5023:6;5027:2;5023:1;:6;:::i;:::-;5022:13;;5033:2;5022:13;:::i;:::-;5013:4;:23;;4998:11;:39;4984:53;;4965:237;;;5058:2;5054:1;:6;5050:152;;;5108:6;5112:2;5108:1;:6;:::i;:::-;5107:13;;5118:2;5107:13;:::i;:::-;5098:4;:23;;5083:11;:39;5069:53;;5050:152;;;5181:6;5185:2;5181:1;:6;:::i;:::-;5180:13;;5191:2;5180:13;:::i;:::-;5171:4;:23;;5156:11;:39;5142:53;;5050:152;4220:987;;4215:3;;;;;:::i;:::-;;;;4182:1025;;;-1:-1:-1;;5211:21:4;;;;;5237;;;;;5263;;;;;5289;;;;;5315;;;;;5341;;5367;;5393;;5419;;5445;;-1:-1:-1;5472:20:4;;5527:29;;;-1:-1:-1;;;;;5501:55:4;;;259:8353;;14:127:5;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:252;217:2;211:9;259:4;247:17;;-1:-1:-1;;;;;279:34:5;;315:22;;;276:62;273:88;;;341:18;;:::i;:::-;377:2;370:22;146:252;:::o;403:275::-;474:2;468:9;539:2;520:13;;-1:-1:-1;;516:27:5;504:40;;-1:-1:-1;;;;;559:34:5;;595:22;;;556:62;553:88;;;621:18;;:::i;:::-;657:2;650:22;403:275;;-1:-1:-1;403:275:5:o;683:183::-;743:4;-1:-1:-1;;;;;765:30:5;;762:56;;;798:18;;:::i;:::-;-1:-1:-1;843:1:5;839:14;855:4;835:25;;683:183::o;871:177::-;950:13;;-1:-1:-1;;;;;992:31:5;;982:42;;972:70;;1038:1;1035;1028:12;972:70;871:177;;;:::o;1053:845::-;1117:5;1170:3;1163:4;1155:6;1151:17;1147:27;1137:55;;1188:1;1185;1178:12;1137:55;1217:6;1211:13;1243:4;1267:60;1283:43;1323:2;1283:43;:::i;:::-;1267:60;:::i;:::-;1361:15;;;1447:1;1443:10;;;;1431:23;;1427:32;;;1392:12;;;;1471:15;;;1468:35;;;1499:1;1496;1489:12;1468:35;1535:2;1527:6;1523:15;1547:322;1563:6;1558:3;1555:15;1547:322;;;1630:10;;-1:-1:-1;;;;;;1673:34:5;;1663:45;;1653:143;;1750:1;1779:2;1775;1768:14;1653:143;1809:18;;1847:12;;;;1580;;1547:322;;;-1:-1:-1;1887:5:5;1053:845;-1:-1:-1;;;;;;1053:845:5:o;1903:1429::-;1996:6;2027:2;2070;2058:9;2049:7;2045:23;2041:32;2038:52;;;2086:1;2083;2076:12;2038:52;2113:16;;-1:-1:-1;;;;;2178:14:5;;;2175:34;;;2205:1;2202;2195:12;2175:34;2228:22;;;;2284:4;2266:16;;;2262:27;2259:47;;;2302:1;2299;2292:12;2259:47;2328:21;;:::i;:::-;2380:2;2374:9;2408:2;2398:8;2395:16;2392:36;;;2424:1;2421;2414:12;2392:36;2447:17;;2495:4;2487:13;;2483:27;-1:-1:-1;2473:55:5;;2524:1;2521;2514:12;2473:55;2553:2;2547:9;2576:60;2592:43;2632:2;2592:43;:::i;2576:60::-;2670:15;;;2752:1;2748:10;;;;2740:19;;2736:28;;;2701:12;;;;2776:19;;;2773:39;;;2808:1;2805;2798:12;2773:39;2832:11;;;;2852:159;2868:6;2863:3;2860:15;2852:159;;;2934:34;2964:3;2934:34;:::i;:::-;2922:47;;2885:12;;;;2989;;;;2852:159;;;3020:20;;-1:-1:-1;;;3071:11:5;;;3065:18;3095:16;;;3092:36;;;3124:1;3121;3114:12;3092:36;3160:66;3218:7;3207:8;3203:2;3199:17;3160:66;:::i;:::-;3155:2;3148:5;3144:14;3137:90;;3259:42;3297:2;3293;3289:11;3259:42;:::i;:::-;3254:2;3243:14;;3236:66;3247:5;1903:1429;-1:-1:-1;;;;;;1903:1429:5:o;4038:127::-;4099:10;4094:3;4090:20;4087:1;4080:31;4130:4;4127:1;4120:15;4154:4;4151:1;4144:15;4511:127;4572:10;4567:3;4563:20;4560:1;4553:31;4603:4;4600:1;4593:15;4627:4;4624:1;4617:15;4643:168;4716:9;;;4747;;4764:15;;;4758:22;;4744:37;4734:71;;4785:18;;:::i;:::-;4643:168;;;;:::o;4816:128::-;4883:9;;;4904:11;;;4901:37;;;4918:18;;:::i;4949:135::-;4988:3;5009:17;;;5006:43;;5029:18;;:::i;:::-;-1:-1:-1;5076:1:5;5065:13;;4949:135::o;:::-;259:8353:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
      },
      "deployedBytecode": {
        "functionDebugData": {
          "@_1327": {
            "entryPoint": null,
            "id": 1327,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "abi_encode_tuple_t_stringliteral_508dbca8c04b36cad14aa2535edb3ebdcdfe4050e17653a7e4c2ad31ab21563e__to_t_string_memory_ptr__fromStack_reversed": {
            "entryPoint": null,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "checked_add_t_uint256": {
            "entryPoint": 1725,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_div_t_uint256": {
            "entryPoint": 1744,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_mul_t_uint256": {
            "entryPoint": 1803,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_sub_t_uint256": {
            "entryPoint": 1700,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "panic_error_0x11": {
            "entryPoint": 1653,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:1258:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "46:152:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "63:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "66:77:5",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "56:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "56:88:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "56:88:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "160:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "163:4:5",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "153:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "153:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "153:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "184:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "187:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "177:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "177:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "177:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "14:184:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "252:79:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "262:17:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "274:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "277:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "270:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "270:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "262:4:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "303:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "305:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "305:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "305:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "294:4:5"
                            },
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "300:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "291:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "291:11:5"
                        },
                        "nodeType": "YulIf",
                        "src": "288:37:5"
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "234:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "237:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "243:4:5",
                      "type": ""
                    }
                  ],
                  "src": "203:128:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "384:77:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "394:16:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "405:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "408:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "401:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "401:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "394:3:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "433:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "435:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "435:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "435:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "425:1:5"
                            },
                            {
                              "name": "sum",
                              "nodeType": "YulIdentifier",
                              "src": "428:3:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "422:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "422:10:5"
                        },
                        "nodeType": "YulIf",
                        "src": "419:36:5"
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "367:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "370:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "376:3:5",
                      "type": ""
                    }
                  ],
                  "src": "336:125:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "512:228:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "543:168:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "564:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "567:77:5",
                                    "type": "",
                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "557:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "557:88:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "557:88:5"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "665:1:5",
                                    "type": "",
                                    "value": "4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "668:4:5",
                                    "type": "",
                                    "value": "0x12"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "658:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "658:15:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "658:15:5"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "693:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "696:4:5",
                                    "type": "",
                                    "value": "0x24"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "686:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "686:15:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "686:15:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "532:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "525:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "525:9:5"
                        },
                        "nodeType": "YulIf",
                        "src": "522:189:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "720:14:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "729:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "732:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "725:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "725:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "720:1:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_div_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "497:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "500:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "r",
                      "nodeType": "YulTypedName",
                      "src": "506:1:5",
                      "type": ""
                    }
                  ],
                  "src": "466:274:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "797:116:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "807:20:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "822:1:5"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "825:1:5"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "818:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "818:9:5"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "807:7:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "885:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "887:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "887:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "887:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "856:1:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "849:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "849:9:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "863:1:5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "product",
                                          "nodeType": "YulIdentifier",
                                          "src": "870:7:5"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "879:1:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "div",
                                        "nodeType": "YulIdentifier",
                                        "src": "866:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "866:15:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nodeType": "YulIdentifier",
                                    "src": "860:2:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "860:22:5"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "846:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "846:37:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "839:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "839:45:5"
                        },
                        "nodeType": "YulIf",
                        "src": "836:71:5"
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "776:1:5",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "779:1:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nodeType": "YulTypedName",
                      "src": "785:7:5",
                      "type": ""
                    }
                  ],
                  "src": "745:168:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1092:164:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1109:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1120:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1102:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1102:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1102:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1143:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1154:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1139:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1139:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1159:2:5",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1132:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1132:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1132:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1193:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1178:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1178:18:5"
                            },
                            {
                              "hexValue": "554e4b4e4f574e5f4d4554484f44",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "1198:16:5",
                              "type": "",
                              "value": "UNKNOWN_METHOD"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1171:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1171:44:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1171:44:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1224:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1236:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1247:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1232:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1232:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1224:4:5"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_508dbca8c04b36cad14aa2535edb3ebdcdfe4050e17653a7e4c2ad31ab21563e__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1069:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1083:4:5",
                      "type": ""
                    }
                  ],
                  "src": "918:338:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x12)\n            revert(0, 0x24)\n        }\n        r := div(x, y)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_508dbca8c04b36cad14aa2535edb3ebdcdfe4050e17653a7e4c2ad31ab21563e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"UNKNOWN_METHOD\")\n        tail := add(headStart, 96)\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {
          "319": [
            {
              "length": 32,
              "start": 994
            }
          ],
          "321": [
            {
              "length": 32,
              "start": 1041
            }
          ],
          "323": [
            {
              "length": 32,
              "start": 1088
            }
          ],
          "325": [
            {
              "length": 32,
              "start": 1135
            }
          ],
          "327": [
            {
              "length": 32,
              "start": 1182
            }
          ],
          "329": [
            {
              "length": 32,
              "start": 1229
            }
          ],
          "331": [
            {
              "length": 32,
              "start": 1276
            }
          ],
          "333": [
            {
              "length": 32,
              "start": 1323
            }
          ],
          "335": [
            {
              "length": 32,
              "start": 1370
            }
          ],
          "337": [
            {
              "length": 32,
              "start": 1417
            }
          ],
          "339": [
            {
              "length": 32,
              "start": 1456
            }
          ],
          "341": [
            {
              "length": 32,
              "start": 117
            }
          ],
          "343": [
            {
              "length": 32,
              "start": 197
            }
          ],
          "345": [
            {
              "length": 32,
              "start": 277
            }
          ],
          "347": [
            {
              "length": 32,
              "start": 357
            }
          ],
          "349": [
            {
              "length": 32,
              "start": 437
            }
          ],
          "351": [
            {
              "length": 32,
              "start": 517
            }
          ],
          "353": [
            {
              "length": 32,
              "start": 597
            }
          ],
          "355": [
            {
              "length": 32,
              "start": 677
            }
          ],
          "357": [
            {
              "length": 32,
              "start": 757
            }
          ],
          "359": [
            {
              "length": 32,
              "start": 828
            }
          ],
          "361": [
            {
              "length": 32,
              "start": 21
            }
          ]
        },
        "linkReferences": {},
        "object": "60806040526000803560e01c90808061003960017f00000000000000000000000000000000000000000000000000000000000000006106a4565b90505b8082116103d5576000600261005183856106bd565b61005b91906106d0565b9050600060068210156100a45761007382602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b600c8210156100f4576100b86006836106a4565b6100c390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601282101561014457610108600c836106a4565b61011390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6018821015610194576101586012836106a4565b61016390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b601e8210156101e4576101a86018836106a4565b6101b390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6024821015610234576101f8601e836106a4565b61020390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b602a821015610284576102486024836106a4565b61025390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b60308210156102d457610298602a836106a4565b6102a390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b6036821015610324576102e86030836106a4565b6102f390602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610367565b61032f6036836106a4565b61033a90602861070b565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561038f576103886001846106a4565b93506103cd565b8663ffffffff168163ffffffff1610156103b5576103ae8360016106bd565b94506103cd565b6103c360ff831660016106bd565b95505050506103d5565b50505061003c565b60008360010361040657507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360020361043557507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360030361046457507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360040361049357507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836005036104c257507f00000000000000000000000000000000000000000000000000000000000000006105d0565b836006036104f157507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360070361052057507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360080361054f57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b8360090361057e57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b83600a036105ad57507f00000000000000000000000000000000000000000000000000000000000000006105d0565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff8116610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b3660008037600080366000845af43d6000803e808015610670573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156106b7576106b7610675565b92915050565b808201808211156106b7576106b7610675565b600082610706577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176106b7576106b761067556fea26469706673582212206889e9ee23e4ab5343426ac513f4fdc78f5300056e7d2ce9ecacde5bc8f1d43d64736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 CALLDATALOAD PUSH1 0xE0 SHR SWAP1 DUP1 DUP1 PUSH2 0x39 PUSH1 0x1 PUSH32 0x0 PUSH2 0x6A4 JUMP JUMPDEST SWAP1 POP JUMPDEST DUP1 DUP3 GT PUSH2 0x3D5 JUMPI PUSH1 0x0 PUSH1 0x2 PUSH2 0x51 DUP4 DUP6 PUSH2 0x6BD JUMP JUMPDEST PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x6D0 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x6 DUP3 LT ISZERO PUSH2 0xA4 JUMPI PUSH2 0x73 DUP3 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0xC DUP3 LT ISZERO PUSH2 0xF4 JUMPI PUSH2 0xB8 PUSH1 0x6 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0xC3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x12 DUP3 LT ISZERO PUSH2 0x144 JUMPI PUSH2 0x108 PUSH1 0xC DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x113 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x18 DUP3 LT ISZERO PUSH2 0x194 JUMPI PUSH2 0x158 PUSH1 0x12 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x163 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x1E DUP3 LT ISZERO PUSH2 0x1E4 JUMPI PUSH2 0x1A8 PUSH1 0x18 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x1B3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x24 DUP3 LT ISZERO PUSH2 0x234 JUMPI PUSH2 0x1F8 PUSH1 0x1E DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x203 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x2A DUP3 LT ISZERO PUSH2 0x284 JUMPI PUSH2 0x248 PUSH1 0x24 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x253 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x30 DUP3 LT ISZERO PUSH2 0x2D4 JUMPI PUSH2 0x298 PUSH1 0x2A DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x2A3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH1 0x36 DUP3 LT ISZERO PUSH2 0x324 JUMPI PUSH2 0x2E8 PUSH1 0x30 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x2F3 SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x367 JUMP JUMPDEST PUSH2 0x32F PUSH1 0x36 DUP4 PUSH2 0x6A4 JUMP JUMPDEST PUSH2 0x33A SWAP1 PUSH1 0x28 PUSH2 0x70B JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP JUMPDEST PUSH4 0xFFFFFFFF PUSH1 0x8 DUP3 SWAP1 SHR DUP2 AND SWAP1 DUP8 AND DUP2 GT ISZERO PUSH2 0x38F JUMPI PUSH2 0x388 PUSH1 0x1 DUP5 PUSH2 0x6A4 JUMP JUMPDEST SWAP4 POP PUSH2 0x3CD JUMP JUMPDEST DUP7 PUSH4 0xFFFFFFFF AND DUP2 PUSH4 0xFFFFFFFF AND LT ISZERO PUSH2 0x3B5 JUMPI PUSH2 0x3AE DUP4 PUSH1 0x1 PUSH2 0x6BD JUMP JUMPDEST SWAP5 POP PUSH2 0x3CD JUMP JUMPDEST PUSH2 0x3C3 PUSH1 0xFF DUP4 AND PUSH1 0x1 PUSH2 0x6BD JUMP JUMPDEST SWAP6 POP POP POP POP PUSH2 0x3D5 JUMP JUMPDEST POP POP POP PUSH2 0x3C JUMP JUMPDEST PUSH1 0x0 DUP4 PUSH1 0x1 SUB PUSH2 0x406 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x2 SUB PUSH2 0x435 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x3 SUB PUSH2 0x464 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x4 SUB PUSH2 0x493 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x5 SUB PUSH2 0x4C2 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x6 SUB PUSH2 0x4F1 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x7 SUB PUSH2 0x520 JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x8 SUB PUSH2 0x54F JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0x9 SUB PUSH2 0x57E JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST DUP4 PUSH1 0xA SUB PUSH2 0x5AD JUMPI POP PUSH32 0x0 PUSH2 0x5D0 JUMP JUMPDEST POP PUSH32 0x0 JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH2 0x651 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x554E4B4E4F574E5F4D4554484F44000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLDATASIZE PUSH1 0x0 DUP1 CALLDATACOPY PUSH1 0x0 DUP1 CALLDATASIZE PUSH1 0x0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x670 JUMPI RETURNDATASIZE PUSH1 0x0 RETURN JUMPDEST RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x706 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0x6B7 JUMPI PUSH2 0x6B7 PUSH2 0x675 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH9 0x89E9EE23E4AB534342 PUSH11 0xC513F4FDC78F5300056E7D 0x2C 0xE9 0xEC 0xAC 0xDE JUMPDEST 0xC8 CALL 0xD4 RETURNDATASIZE PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "259:8353:4:-:0;;;5595:10;5615:7;;5608:15;;;5595:10;;5697:14;5710:1;5697:10;:14;:::i;:::-;5681:30;;5715:1142;5730:5;5722:4;:13;5715:1142;;5742:9;5771:1;5755:12;5762:5;5755:4;:12;:::i;:::-;5754:18;;;;:::i;:::-;5742:30;;5777:11;5801:1;5797;:5;5793:856;;;5837:6;:1;5841:2;5837:6;:::i;:::-;5825:7;:19;;5848:12;5824:36;5810:51;;5793:856;;;5881:2;5877:1;:6;5873:776;;;5919:5;5923:1;5919;:5;:::i;:::-;5918:12;;5928:2;5918:12;:::i;:::-;5906:7;:25;;5935:12;5905:42;5891:57;;5873:776;;;5968:2;5964:1;:6;5960:689;;;6006:6;6010:2;6006:1;:6;:::i;:::-;6005:13;;6016:2;6005:13;:::i;:::-;5993:7;:26;;6023:12;5992:43;5978:58;;5960:689;;;6056:2;6052:1;:6;6048:601;;;6094:6;6098:2;6094:1;:6;:::i;:::-;6093:13;;6104:2;6093:13;:::i;:::-;6081:7;:26;;6111:12;6080:43;6066:58;;6048:601;;;6144:2;6140:1;:6;6136:513;;;6182:6;6186:2;6182:1;:6;:::i;:::-;6181:13;;6192:2;6181:13;:::i;:::-;6169:7;:26;;6199:12;6168:43;6154:58;;6136:513;;;6232:2;6228:1;:6;6224:425;;;6270:6;6274:2;6270:1;:6;:::i;:::-;6269:13;;6280:2;6269:13;:::i;:::-;6257:7;:26;;6287:12;6256:43;6242:58;;6224:425;;;6320:2;6316:1;:6;6312:337;;;6358:6;6362:2;6358:1;:6;:::i;:::-;6357:13;;6368:2;6357:13;:::i;:::-;6345:7;:26;;6375:12;6344:43;6330:58;;6312:337;;;6409:2;6405:1;:6;6401:248;;;6447:6;6451:2;6447:1;:6;:::i;:::-;6446:13;;6457:2;6446:13;:::i;:::-;6434:7;:26;;6464:12;6433:43;6419:58;;6401:248;;;6498:2;6494:1;:6;6490:159;;;6536:6;6540:2;6536:1;:6;:::i;:::-;6535:13;;6546:2;6535:13;:::i;:::-;6523:7;:26;;6553:12;6522:43;6508:58;;6490:159;;;6613:6;6617:2;6613:1;:6;:::i;:::-;6612:13;;6623:2;6612:13;:::i;:::-;6600:7;:26;;6630:12;6599:43;6585:58;;6490:159;6675:9;6683:1;6675:9;;;;;;6694:11;;;;6690:163;;;6721:4;6724:1;6721;:4;:::i;:::-;6713:12;;6690:163;;;6749:3;6741:11;;:5;:11;;;6737:116;;;6767:5;:1;6771;6767:5;:::i;:::-;6760:12;;6737:116;;;6812:24;6827:4;6820:11;;6835:1;6812:24;:::i;:::-;6790:46;;6842:5;;;;;6737:116;5737:1120;;;5715:1142;;;6861:22;6891:19;6914:1;6891:24;6887:851;;-1:-1:-1;6939:17:4;6887:851;;;6971:19;6994:1;6971:24;6967:771;;-1:-1:-1;7019:17:4;6967:771;;;7051:19;7074:1;7051:24;7047:691;;-1:-1:-1;7099:17:4;7047:691;;;7131:19;7154:1;7131:24;7127:611;;-1:-1:-1;7179:17:4;7127:611;;;7211:19;7234:1;7211:24;7207:531;;-1:-1:-1;7259:17:4;7207:531;;;7291:19;7314:1;7291:24;7287:451;;-1:-1:-1;7339:17:4;7287:451;;;7371:19;7394:1;7371:24;7367:371;;-1:-1:-1;7419:17:4;7367:371;;;7451:19;7474:1;7451:24;7447:291;;-1:-1:-1;7499:17:4;7447:291;;;7531:19;7554:1;7531:24;7527:211;;-1:-1:-1;7579:17:4;7527:211;;;7611:19;7634:2;7611:25;7607:131;;-1:-1:-1;7660:17:4;7607:131;;;-1:-1:-1;7710:23:4;7607:131;7750:28;;;7742:55;;;;;;;1120:2:5;7742:55:4;;;1102:21:5;1159:2;1139:18;;;1132:30;1198:16;1178:18;;;1171:44;1232:18;;7742:55:4;;;;;;;;8185:14;8182:1;8179;8166:34;8372:1;8369;8353:14;8350:1;8334:14;8327:5;8314:60;8430:16;8427:1;8424;8409:38;8459:6;8508:45;;;;8581:16;8578:1;8571:27;8508:45;8531:16;8528:1;8521:27;14:184:5;66:77;63:1;56:88;163:4;160:1;153:15;187:4;184:1;177:15;203:128;270:9;;;291:11;;;288:37;;;305:18;;:::i;:::-;203:128;;;;:::o;336:125::-;401:9;;;422:10;;;419:36;;;435:18;;:::i;466:274::-;506:1;532;522:189;;567:77;564:1;557:88;668:4;665:1;658:15;696:4;693:1;686:15;522:189;-1:-1:-1;725:9:5;;466:274::o;745:168::-;818:9;;;849;;866:15;;;860:22;;846:37;836:71;;887:18;;:::i"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "376000",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite"
        }
      },
      "methodIdentifiers": {}
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address[]\",\"name\":\"implementations\",\"type\":\"address[]\"},{\"internalType\":\"bytes5[]\",\"name\":\"sigMap\",\"type\":\"bytes5[]\"},{\"internalType\":\"address\",\"name\":\"fallbackImplementation\",\"type\":\"address\"}],\"internalType\":\"struct Router10X60.Routes\",\"name\":\"routes\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"}],\"devdoc\":{\"author\":\"Ronan Sandford\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"routes\":\"define the routing   each selector is represented by a bytes5, where the upper most bytes4 is the selector and   the lowest bytes represent the index of the implementations  implementations' addresses are given in an array\"}}},\"title\":\"Router for at max 10 Implementations and 60 function selectors\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"This Router implementation only support at max 10 implementations and 60 function selectors\"}},\"notice\":\"Create an immutable route and delegate function call to their respective implementations\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/router/Router10X60.sol\":\"Router10X60\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/router/Router10X60.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n/// @title Router for at max 10 Implementations and 60 function selectors\\n/// @author Ronan Sandford\\n/// @notice Create an immutable route and delegate function call to their respective implementations\\ncontract Router10X60 {\\n\\taddress internal immutable implementation_00;\\n\\taddress internal immutable implementation_01;\\n\\taddress internal immutable implementation_02;\\n\\taddress internal immutable implementation_03;\\n\\taddress internal immutable implementation_04;\\n\\taddress internal immutable implementation_05;\\n\\taddress internal immutable implementation_06;\\n\\taddress internal immutable implementation_07;\\n\\taddress internal immutable implementation_08;\\n\\taddress internal immutable implementation_09;\\n\\n\\taddress internal immutable fallback_implementation;\\n\\n\\tuint256 internal immutable sigs_00;\\n\\tuint256 internal immutable sigs_01;\\n\\tuint256 internal immutable sigs_02;\\n\\tuint256 internal immutable sigs_03;\\n\\tuint256 internal immutable sigs_04;\\n\\tuint256 internal immutable sigs_05;\\n\\tuint256 internal immutable sigs_06;\\n\\tuint256 internal immutable sigs_07;\\n\\tuint256 internal immutable sigs_08;\\n\\tuint256 internal immutable sigs_09;\\n\\n\\tuint256 internal immutable sigs_count;\\n\\n\\t// This is the interface for routes specification\\n\\tstruct Routes {\\n\\t\\taddress[] implementations;\\n\\t\\t/// The sigmap is represented as an array of entry\\n\\t\\t// each entry is 5 bytes\\n\\t\\t/// the upmost bytes are the bytes4 function selector\\n\\t\\t// the lowest byte represent the index in the implementation's address array provided aling\\n\\t\\t// This measn there is at max 256 implementation possible\\n\\t\\t// The entry needs to be ordered so binary search can be executed on them\\n\\t\\tbytes5[] sigMap;\\n\\t\\taddress fallbackImplementation;\\n\\t}\\n\\n\\t/// @notice This Router implementation only support at max 10 implementations and 60 function selectors\\n\\t/// @param routes define the routing \\n\\t///  each selector is represented by a bytes5, where the upper most bytes4 is the selector and \\n\\t///  the lowest bytes represent the index of the implementations\\n\\t///  implementations' addresses are given in an array\\n\\tconstructor(Routes memory routes) {\\n\\t\\tuint256 numSigs = routes.sigMap.length;\\n\\t\\tuint256 numImpl = routes.implementations.length;\\n\\t\\trequire(numImpl <= 10, 'MAX_IMPLEMENTATIONS_REACHED');\\n\\t\\trequire(numSigs <= 60, 'MAX_SIGS_REACHED');\\n\\n\\t\\t{\\n\\t\\t\\taddress tmp_implementation_00 = routes.implementations[0];\\n\\t\\t\\taddress tmp_implementation_01;\\n\\t\\t\\taddress tmp_implementation_02;\\n\\t\\t\\taddress tmp_implementation_03;\\n\\t\\t\\taddress tmp_implementation_04;\\n\\t\\t\\taddress tmp_implementation_05;\\n\\t\\t\\taddress tmp_implementation_06;\\n\\t\\t\\taddress tmp_implementation_07;\\n\\t\\t\\taddress tmp_implementation_08;\\n\\t\\t\\taddress tmp_implementation_09;\\n\\t\\t\\tif (numImpl > 1) {\\n\\t\\t\\t\\ttmp_implementation_01 = routes.implementations[1];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 2) {\\n\\t\\t\\t\\ttmp_implementation_02 = routes.implementations[2];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 3) {\\n\\t\\t\\t\\ttmp_implementation_03 = routes.implementations[3];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 4) {\\n\\t\\t\\t\\ttmp_implementation_04 = routes.implementations[4];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 5) {\\n\\t\\t\\t\\ttmp_implementation_05 = routes.implementations[5];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 6) {\\n\\t\\t\\t\\ttmp_implementation_06 = routes.implementations[6];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 7) {\\n\\t\\t\\t\\ttmp_implementation_07 = routes.implementations[7];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 8) {\\n\\t\\t\\t\\ttmp_implementation_08 = routes.implementations[8];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 9) {\\n\\t\\t\\t\\ttmp_implementation_09 = routes.implementations[9];\\n\\t\\t\\t}\\n\\n\\t\\t\\timplementation_00 = tmp_implementation_00;\\n\\t\\t\\timplementation_01 = tmp_implementation_01;\\n\\t\\t\\timplementation_02 = tmp_implementation_02;\\n\\t\\t\\timplementation_03 = tmp_implementation_03;\\n\\t\\t\\timplementation_04 = tmp_implementation_04;\\n\\t\\t\\timplementation_05 = tmp_implementation_05;\\n\\t\\t\\timplementation_06 = tmp_implementation_06;\\n\\t\\t\\timplementation_07 = tmp_implementation_07;\\n\\t\\t\\timplementation_08 = tmp_implementation_08;\\n\\t\\t\\timplementation_09 = tmp_implementation_09;\\n\\t\\t}\\n\\n\\t\\t{\\n\\t\\t\\tuint256 tmp_sigs_00;\\n\\t\\t\\tuint256 tmp_sigs_01;\\n\\t\\t\\tuint256 tmp_sigs_02;\\n\\t\\t\\tuint256 tmp_sigs_03;\\n\\t\\t\\tuint256 tmp_sigs_04;\\n\\t\\t\\tuint256 tmp_sigs_05;\\n\\t\\t\\tuint256 tmp_sigs_06;\\n\\t\\t\\tuint256 tmp_sigs_07;\\n\\t\\t\\tuint256 tmp_sigs_08;\\n\\t\\t\\tuint256 tmp_sigs_09;\\n\\t\\t\\t\\n\\t\\t\\tuint256 lastSig;\\n\\t\\t\\tfor (uint256 i = 0; i < numSigs; i++) {\\n\\t\\t\\t\\tuint256 pair = uint256(uint40(routes.sigMap[i]));\\n\\t\\t\\t\\tuint32 sig = uint32(pair >> 8);\\n\\t\\t\\t\\trequire(lastSig < sig, \\\"NOT_IN_ORDER\\\");\\n\\t\\t\\t\\tlastSig = sig;\\n\\t\\t\\t\\tif (i < 6) {\\n\\t\\t\\t\\t\\ttmp_sigs_00 = tmp_sigs_00 | (pair << (i * 40));\\n\\t\\t\\t\\t} else if (i < 12) {\\n\\t\\t\\t\\t\\ttmp_sigs_01 = tmp_sigs_01 | (pair << ((i - 6) * 40));\\n\\t\\t\\t\\t} else if (i < 18) {\\n\\t\\t\\t\\t\\ttmp_sigs_02 = tmp_sigs_02 | (pair << ((i - 12) * 40));\\n\\t\\t\\t\\t} else if (i < 24) {\\n\\t\\t\\t\\t\\ttmp_sigs_03 = tmp_sigs_03 | (pair << ((i - 18) * 40));\\n\\t\\t\\t\\t} else if (i < 30) {\\n\\t\\t\\t\\t\\ttmp_sigs_04 = tmp_sigs_04 | (pair << ((i - 24) * 40));\\n\\t\\t\\t\\t} else if (i < 36) {\\n\\t\\t\\t\\t\\ttmp_sigs_05 = tmp_sigs_05 | (pair << ((i - 30) * 40));\\n\\t\\t\\t\\t} else if (i < 42) {\\n\\t\\t\\t\\t\\ttmp_sigs_06 = tmp_sigs_06 | (pair << ((i - 36) * 40));\\n\\t\\t\\t\\t} else if (i < 48) {\\n\\t\\t\\t\\t\\ttmp_sigs_07 = tmp_sigs_07 | (pair << ((i - 42) * 40));\\n\\t\\t\\t\\t} else if (i < 54) {\\n\\t\\t\\t\\t\\ttmp_sigs_07 = tmp_sigs_08 | (pair << ((i - 48) * 40));\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\ttmp_sigs_07 = tmp_sigs_09 | (pair << ((i - 54) * 40));\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\tsigs_00 = tmp_sigs_00;\\n\\t\\t\\tsigs_01 = tmp_sigs_01;\\n\\t\\t\\tsigs_02 = tmp_sigs_02;\\n\\t\\t\\tsigs_03 = tmp_sigs_03;\\n\\t\\t\\tsigs_04 = tmp_sigs_04;\\n\\t\\t\\tsigs_05 = tmp_sigs_05;\\n\\t\\t\\tsigs_06 = tmp_sigs_06;\\n\\t\\t\\tsigs_07 = tmp_sigs_07;\\n\\t\\t\\tsigs_08 = tmp_sigs_08;\\n\\t\\t\\tsigs_09 = tmp_sigs_09;\\n\\n\\t\\t\\tsigs_count = numSigs;\\n\\t\\t}\\n\\n\\t\\tfallback_implementation = routes.fallbackImplementation;\\n\\t}\\n\\n\\tfallback() external payable {\\n\\t\\tuint32 sig = uint32(msg.sig);\\n\\t\\tuint256 implementationIndex;\\n\\t\\tuint256 left = 0;\\n    \\tuint256 right = sigs_count - 1;\\n\\t\\twhile (left <= right) {\\n\\t\\t\\tuint256 i = (left + right) / 2;\\n\\t\\t\\tuint40 pair;\\n\\t\\t\\tif (i < 6) {\\n\\t\\t\\t\\tpair = uint40((sigs_00 >> (i * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 12) {\\n\\t\\t\\t\\tpair = uint40((sigs_01 >> ((i - 6) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 18) {\\n\\t\\t\\t\\tpair = uint40((sigs_02 >> ((i - 12) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 24) {\\n\\t\\t\\t\\tpair = uint40((sigs_03 >> ((i - 18) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 30) {\\n\\t\\t\\t\\tpair = uint40((sigs_04 >> ((i - 24) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 36) {\\n\\t\\t\\t\\tpair = uint40((sigs_05 >> ((i - 30) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 42) {\\n\\t\\t\\t\\tpair = uint40((sigs_06 >> ((i - 36) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else if (i < 48) {\\n\\t\\t\\t\\tpair = uint40((sigs_07 >> ((i - 42) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else if (i < 54) {\\n\\t\\t\\t\\tpair = uint40((sigs_08 >> ((i - 48) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else {\\n\\t\\t\\t\\tpair = uint40((sigs_09 >> ((i - 54) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}\\n\\t\\t\\tuint32 value = uint32(pair >> 8);\\n\\t\\t\\tif (value > sig) {\\n\\t\\t\\t\\tright = i -1;\\n\\t\\t\\t} else if (value < sig) {\\n\\t\\t\\t\\tleft = i + 1;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\timplementationIndex = uint256(pair & 0xFF) + 1;\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\taddress implementation;\\n\\t\\tif (implementationIndex == 1) {\\n\\t\\t\\timplementation = implementation_00;\\n\\t\\t} else if (implementationIndex == 2) {\\n\\t\\t\\timplementation = implementation_01;\\n\\t\\t} else if (implementationIndex == 3) {\\n\\t\\t\\timplementation = implementation_02;\\n\\t\\t} else if (implementationIndex == 4) {\\n\\t\\t\\timplementation = implementation_03;\\n\\t\\t} else if (implementationIndex == 5) {\\n\\t\\t\\timplementation = implementation_04;\\n\\t\\t} else if (implementationIndex == 6) {\\n\\t\\t\\timplementation = implementation_05;\\n\\t\\t} else if (implementationIndex == 7) {\\n\\t\\t\\timplementation = implementation_06;\\n\\t\\t} else if (implementationIndex == 8) {\\n\\t\\t\\timplementation = implementation_07;\\n\\t\\t} else if (implementationIndex == 9) {\\n\\t\\t\\timplementation = implementation_08;\\n\\t\\t} else if (implementationIndex == 10) {\\n\\t\\t\\timplementation = implementation_09;\\n\\t\\t} else {\\n\\t\\t\\timplementation = fallback_implementation;\\n\\t\\t}\\n\\n\\t\\trequire(implementation != address(0), 'UNKNOWN_METHOD');\\n\\n\\t\\t// taken from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/8cab922347e79732f6a532a75da5081ba7447a71/contracts/proxy/Proxy.sol#L22-L45\\n\\t\\tassembly {\\n\\t\\t\\t// Copy msg.data. We take full control of memory in this inline assembly\\n\\t\\t\\t// block because it will not return to Solidity code. We overwrite the\\n\\t\\t\\t// Solidity scratch pad at memory position 0.\\n\\t\\t\\tcalldatacopy(0, 0, calldatasize())\\n\\n\\t\\t\\t// Call the implementation.\\n\\t\\t\\t// out and outsize are 0 because we don't know the size yet.\\n\\t\\t\\tlet result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n\\t\\t\\t// Copy the returned data.\\n\\t\\t\\treturndatacopy(0, 0, returndatasize())\\n\\n\\t\\t\\tswitch result\\n\\t\\t\\t// delegatecall returns 0 on error.\\n\\t\\t\\tcase 0 {\\n\\t\\t\\t\\trevert(0, returndatasize())\\n\\t\\t\\t}\\n\\t\\t\\tdefault {\\n\\t\\t\\t\\treturn(0, returndatasize())\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"keccak256\":\"0x8f51b7932023299088698f99c6f75f54cf880417d4a42c38548e17b7850d8646\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {
        "constructor": {
          "notice": "This Router implementation only support at max 10 implementations and 60 function selectors"
        }
      },
      "notice": "Create an immutable route and delegate function call to their respective implementations",
      "version": 1
    }
  }
} as const;