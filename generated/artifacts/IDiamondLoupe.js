export const Artifact_IDiamondLoupe = /** @type {const} **/ ({
  "contractName": "IDiamondLoupe",
  "sourceName": "solc_0_8/diamond/interfaces/IDiamondLoupe.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "facetAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "facetAddress_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "facetAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "facetAddresses_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facet",
          "type": "address"
        }
      ],
      "name": "facetFunctionSelectors",
      "outputs": [
        {
          "internalType": "bytes4[]",
          "name": "facetFunctionSelectors_",
          "type": "bytes4[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "facets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct IDiamondLoupe.Facet[]",
          "name": "facets_",
          "type": "tuple[]"
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
  "immutableReferences": {},
  "inputSourceName": "project/solc_0_8/diamond/interfaces/IDiamondLoupe.sol",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "facetAddress(bytes4)": {
        "details": "If facet is not found return address(0).",
        "params": {
          "_functionSelector": "The function selector."
        },
        "returns": {
          "facetAddress_": "The facet address."
        }
      },
      "facetAddresses()": {
        "returns": {
          "facetAddresses_": "facetAddresses_"
        }
      },
      "facetFunctionSelectors(address)": {
        "params": {
          "_facet": "The facet address."
        },
        "returns": {
          "facetFunctionSelectors_": "facetFunctionSelectors_"
        }
      },
      "facets()": {
        "returns": {
          "facets_": "Facet"
        }
      }
    },
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
      "facetAddress(bytes4)": "cdffacc6",
      "facetAddresses()": "52ef6b2c",
      "facetFunctionSelectors(address)": "adfca15e",
      "facets()": "7a0ed627"
    }
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"_functionSelector\",\"type\":\"bytes4\"}],\"name\":\"facetAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"facetAddress_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"facetAddresses\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"facetAddresses_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_facet\",\"type\":\"address\"}],\"name\":\"facetFunctionSelectors\",\"outputs\":[{\"internalType\":\"bytes4[]\",\"name\":\"facetFunctionSelectors_\",\"type\":\"bytes4[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"facets\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"facetAddress\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"functionSelectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct IDiamondLoupe.Facet[]\",\"name\":\"facets_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"facetAddress(bytes4)\":{\"details\":\"If facet is not found return address(0).\",\"params\":{\"_functionSelector\":\"The function selector.\"},\"returns\":{\"facetAddress_\":\"The facet address.\"}},\"facetAddresses()\":{\"returns\":{\"facetAddresses_\":\"facetAddresses_\"}},\"facetFunctionSelectors(address)\":{\"params\":{\"_facet\":\"The facet address.\"},\"returns\":{\"facetFunctionSelectors_\":\"facetFunctionSelectors_\"}},\"facets()\":{\"returns\":{\"facets_\":\"Facet\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"facetAddress(bytes4)\":{\"notice\":\"Gets the facet that supports the given selector.\"},\"facetAddresses()\":{\"notice\":\"Get all the facet addresses used by a diamond.\"},\"facetFunctionSelectors(address)\":{\"notice\":\"Gets all the function selectors supported by a specific facet.\"},\"facets()\":{\"notice\":\"Gets all facet addresses and their four byte function selectors.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project/solc_0_8/diamond/interfaces/IDiamondLoupe.sol\":\"IDiamondLoupe\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"project/solc_0_8/diamond/interfaces/IDiamondLoupe.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n/******************************************************************************\\\\\\n* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)\\n* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535\\n/******************************************************************************/\\n\\n// A loupe is a small magnifying glass used to look at diamonds.\\n// These functions look at diamonds\\ninterface IDiamondLoupe {\\n    /// These functions are expected to be called frequently\\n    /// by tools.\\n\\n    struct Facet {\\n        address facetAddress;\\n        bytes4[] functionSelectors;\\n    }\\n\\n    /// @notice Gets all facet addresses and their four byte function selectors.\\n    /// @return facets_ Facet\\n    function facets() external view returns (Facet[] memory facets_);\\n\\n    /// @notice Gets all the function selectors supported by a specific facet.\\n    /// @param _facet The facet address.\\n    /// @return facetFunctionSelectors_\\n    function facetFunctionSelectors(address _facet) external view returns (bytes4[] memory facetFunctionSelectors_);\\n\\n    /// @notice Get all the facet addresses used by a diamond.\\n    /// @return facetAddresses_\\n    function facetAddresses() external view returns (address[] memory facetAddresses_);\\n\\n    /// @notice Gets the facet that supports the given selector.\\n    /// @dev If facet is not found return address(0).\\n    /// @param _functionSelector The function selector.\\n    /// @return facetAddress_ The facet address.\\n    function facetAddress(bytes4 _functionSelector) external view returns (address facetAddress_);\\n}\\n\",\"keccak256\":\"0x10884024af2c0f7deca0fac4ddf84e76da5dba35b6e02fabeac8ea54c1a5c6f7\",\"license\":\"MIT\"}},\"version\":1}",
  "storageLayout": {
    "storage": [],
    "types": null
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "facetAddress(bytes4)": {
        "notice": "Gets the facet that supports the given selector."
      },
      "facetAddresses()": {
        "notice": "Get all the facet addresses used by a diamond."
      },
      "facetFunctionSelectors(address)": {
        "notice": "Gets all the function selectors supported by a specific facet."
      },
      "facets()": {
        "notice": "Gets all facet addresses and their four byte function selectors."
      }
    },
    "version": 1
  }
});