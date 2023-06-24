export default /** @type {const} **/ ({
  "EIP173Proxy": {
    "_format": "hh-sol-artifact-1",
    "contractName": "EIP173Proxy",
    "sourceName": "src/EIP173Proxy.sol",
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
    "bytecode": "0x608060405260405162000c7838038062000c788339810160408190526200002691620001e4565b62000032838262000046565b6200003d8262000121565b505050620002db565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a38151156200011c575f836001600160a01b031683604051620000c89190620002be565b5f60405180830381855af49150503d805f811462000102576040519150601f19603f3d011682016040523d82523d5f602084013e62000107565b606091505b50509050806200011a573d805f803e805ffd5b505b505050565b5f620001395f8051602062000c588339815191525490565b9050815f8051602062000c5883398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001a7575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001dc578181015183820152602001620001c2565b50505f910152565b5f805f60608486031215620001f7575f80fd5b620002028462000190565b9250620002126020850162000190565b60408501519092506001600160401b03808211156200022f575f80fd5b818601915086601f83011262000243575f80fd5b815181811115620002585762000258620001ac565b604051601f8201601f19908116603f01168101908382118183101715620002835762000283620001ac565b816040528281528960208487010111156200029c575f80fd5b620002af836020830160208801620001c0565b80955050505050509250925092565b5f8251620002d1818460208701620001c0565b9190910192915050565b61096f80620002e95f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033",
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
            "entryPoint": 70,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 289,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 400,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
            "entryPoint": 484,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 702,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "copy_memory_to_memory_with_cleanup": {
            "entryPoint": 448,
            "id": null,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 428,
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
        "object": "608060405260405162000c7838038062000c788339810160408190526200002691620001e4565b62000032838262000046565b6200003d8262000121565b505050620002db565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a38151156200011c575f836001600160a01b031683604051620000c89190620002be565b5f60405180830381855af49150503d805f811462000102576040519150601f19603f3d011682016040523d82523d5f602084013e62000107565b606091505b50509050806200011a573d805f803e805ffd5b505b505050565b5f620001395f8051602062000c588339815191525490565b9050815f8051602062000c5883398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001a7575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001dc578181015183820152602001620001c2565b50505f910152565b5f805f60608486031215620001f7575f80fd5b620002028462000190565b9250620002126020850162000190565b60408501519092506001600160401b03808211156200022f575f80fd5b818601915086601f83011262000243575f80fd5b815181811115620002585762000258620001ac565b604051601f8201601f19908116603f01168101908382118183101715620002835762000283620001ac565b816040528281528960208487010111156200029c575f80fd5b620002af836020830160208801620001c0565b80955050505050509250925092565b5f8251620002d1818460208701620001c0565b9190910192915050565b61096f80620002e95f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xC78 CODESIZE SUB DUP1 PUSH3 0xC78 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1E4 JUMP JUMPDEST PUSH3 0x32 DUP4 DUP3 PUSH3 0x46 JUMP JUMPDEST PUSH3 0x3D DUP3 PUSH3 0x121 JUMP JUMPDEST POP POP POP PUSH3 0x2DB JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x11C JUMPI PUSH0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0xC8 SWAP2 SWAP1 PUSH3 0x2BE JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH3 0x102 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x107 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x11A JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH3 0x139 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC58 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC58 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1A7 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1DC JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1C2 JUMP JUMPDEST POP POP PUSH0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x1F7 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x202 DUP5 PUSH3 0x190 JUMP JUMPDEST SWAP3 POP PUSH3 0x212 PUSH1 0x20 DUP6 ADD PUSH3 0x190 JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x22F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x243 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x258 JUMPI PUSH3 0x258 PUSH3 0x1AC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x283 JUMPI PUSH3 0x283 PUSH3 0x1AC JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x29C JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x2AF DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1C0 JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP3 MLOAD PUSH3 0x2D1 DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1C0 JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x96F DUP1 PUSH3 0x2E9 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x172 JUMPI PUSH2 0xC9 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x107 JUMPI PUSH2 0xC9 JUMP JUMPDEST CALLDATASIZE PUSH2 0xC9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD1 PUSH2 0x191 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0xED CALLDATASIZE PUSH1 0x4 PUSH2 0x7F2 JUMP JUMPDEST PUSH2 0x1DB JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x112 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x121 CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x3A6 JUMP JUMPDEST PUSH2 0xD1 PUSH2 0x134 CALLDATASIZE PUSH1 0x4 PUSH2 0x872 JUMP JUMPDEST PUSH2 0x477 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x144 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x14D PUSH2 0x571 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xFE JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x18C CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x59F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D1 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x26D JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x27A JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2AB JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x393 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x390 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8EE JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x39F JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x45C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x65E JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x52D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x56C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x65E SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x59A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x655 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH2 0x746 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x56C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6F7 SWAP2 SWAP1 PUSH2 0x90D JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x72F JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x734 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1D5 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x76F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x802 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x854 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x869 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x39F DUP3 PUSH2 0x831 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x884 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x88D DUP5 PUSH2 0x831 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8A9 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8BC JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8CA JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8DB JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8FE JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x92C JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x912 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x27 SWAP4 PUSH13 0x1A0742EBD98C1D033C0B21FAB6 0x2F LOG2 0x5E 0x4E SWAP12 0xB4 0xF7 SWAP16 PUSH13 0xA158A4CB0E146D64736F6C6343 STOP ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "236:3511:0:-:0;;;796:189;;;;;;;;;;;;;;;;;;:::i;:::-;898:47;917:21;940:4;898:18;:47::i;:::-;955:23;965:12;955:9;:23::i;:::-;796:189;;;236:3511;;1634:1067:3;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;3399:346:0:-;3455:21;3479:8;-1:-1:-1;;;;;;;;;;;3304:73:0;;3127:266;3479:8;3455:32;;3660:8;-1:-1:-1;;;;;;;;;;;3585:84:0;3729:8;-1:-1:-1;;;;;3693:45:0;3714:13;-1:-1:-1;;;;;3693:45:0;;;;;;;;;;;3445:300;3399:346;:::o;14:177:4:-;93:13;;-1:-1:-1;;;;;135:31:4;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:4;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:4;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:4;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:4:o;:::-;236:3511:0;;;;;;"
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
            "entryPoint": 401,
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
            "entryPoint": 1630,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 1862,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@owner_47": {
            "entryPoint": 1393,
            "id": 47,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@supportsInterface_94": {
            "entryPoint": 475,
            "id": 94,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "@transferOwnership_106": {
            "entryPoint": 1439,
            "id": 106,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@upgradeToAndCall_134": {
            "entryPoint": 1143,
            "id": 134,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@upgradeTo_119": {
            "entryPoint": 934,
            "id": 119,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address": {
            "entryPoint": 2097,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_address": {
            "entryPoint": 2137,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_bytes_calldata_ptr": {
            "entryPoint": 2162,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_decode_tuple_t_bool_fromMemory": {
            "entryPoint": 2286,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_bytes4": {
            "entryPoint": 2034,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 2317,
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
        "object": "60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x172 JUMPI PUSH2 0xC9 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x107 JUMPI PUSH2 0xC9 JUMP JUMPDEST CALLDATASIZE PUSH2 0xC9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD1 PUSH2 0x191 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0xED CALLDATASIZE PUSH1 0x4 PUSH2 0x7F2 JUMP JUMPDEST PUSH2 0x1DB JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x112 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x121 CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x3A6 JUMP JUMPDEST PUSH2 0xD1 PUSH2 0x134 CALLDATASIZE PUSH1 0x4 PUSH2 0x872 JUMP JUMPDEST PUSH2 0x477 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x144 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x14D PUSH2 0x571 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xFE JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x18C CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x59F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D1 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x26D JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x27A JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2AB JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x393 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x390 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8EE JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x39F JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x45C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x65E JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x52D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x56C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x65E SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x59A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x655 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH2 0x746 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x56C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6F7 SWAP2 SWAP1 PUSH2 0x90D JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x72F JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x734 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1D5 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x76F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x802 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x854 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x869 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x39F DUP3 PUSH2 0x831 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x884 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x88D DUP5 PUSH2 0x831 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8A9 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8BC JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8CA JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8DB JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8FE JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x92C JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x912 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x27 SWAP4 PUSH13 0x1A0742EBD98C1D033C0B21FAB6 0x2F LOG2 0x5E 0x4E SWAP12 0xB4 0xF7 SWAP16 PUSH13 0xA158A4CB0E146D64736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "236:3511:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;698:24:3;;;;;216:2:4;698:24:3;;;198:21:4;255:2;235:18;;;228:30;294:16;274:18;;;267:44;328:18;;698:24:3;;;;;;;;236:3511:0;803:11:3;:9;:11::i;:::-;236:3511:0;1303:877;;;;;;;;;;-1:-1:-1;1303:877:0;;;;;:::i;:::-;;:::i;:::-;;;859:14:4;;852:22;834:41;;822:2;807:18;1303:877:0;;;;;;;;2292:123;;;;;;;;;;-1:-1:-1;2292:123:0;;;;;:::i;:::-;;:::i;2421:161::-;;;;;;:::i;:::-;;:::i;1216:81::-;;;;;;;;;;;;;:::i;:::-;;;2124:42:4;2112:55;;;2094:74;;2082:2;2067:18;1216:81:0;1948:226:4;2186:100:0;;;;;;;;;;-1:-1:-1;2186:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1303:877:0:-;1364:4;1384:16;;;;;;:36;;-1:-1:-1;1404:16:0;;;;;1384:36;1380:78;;;-1:-1:-1;1443:4:0;;1303:877;-1:-1:-1;1303:877:0:o;1380:78::-;1471:16;;;;;;1467:59;;-1:-1:-1;1510:5:0;;1303:877;-1:-1:-1;1303:877:0:o;1467:59::-;1679:66;1673:73;2031:36;;;;;2353:66:4;2341:79;;2031:36:0;;;2323:98:4;2031:32:0;;;;;;2296:18:4;;2031:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2031:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2027:147;;-1:-1:-1;2158:5:0;;1303:877;-1:-1:-1;;1303:877:0:o;2027:147::-;2112:7;1303:877;-1:-1:-1;;;1303:877:0:o;2292:123::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2916:2:4;2837:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2837:49:0;2714:338:4;2837:49:0;2367:41:::1;2386:17;2367:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2292:123:::0;:::o;2421:161::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2916:2:4;2837:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2837:49:0;2714:338:4;2837:49:0;2532:43:::1;2551:17;2570:4;;2532:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2532:18:0::1;::::0;-1:-1:-1;;;2532:43:0:i:1;:::-;2421:161:::0;;;:::o;1216:81::-;1256:7;1282:8;3310:66;3304:73;;3127:266;1282:8;1275:15;;1216:81;:::o;2186:100::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2916:2:4;2837:49:0;;;2898:21:4;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2837:49:0;2714:338:4;2837:49:0;2260:19:::1;2270:8;2260:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3399:346:0;3455:21;3479:8;3310:66;3304:73;;3127:266;3479:8;3455:32;;3660:8;3592:66;3585:84;3729:8;3693:45;;3714:13;3693:45;;;;;;;;;;;;3445:300;3399:346;:::o;357:332:4:-;415:6;468:2;456:9;447:7;443:23;439:32;436:52;;;484:1;481;474:12;436:52;523:9;510:23;573:66;566:5;562:78;555:5;552:89;542:117;;655:1;652;645:12;886:196;954:20;;1014:42;1003:54;;993:65;;983:93;;1072:1;1069;1062:12;983:93;886:196;;;:::o;1087:186::-;1146:6;1199:2;1187:9;1178:7;1174:23;1170:32;1167:52;;;1215:1;1212;1205:12;1167:52;1238:29;1257:9;1238:29;:::i;1278:665::-;1357:6;1365;1373;1426:2;1414:9;1405:7;1401:23;1397:32;1394:52;;;1442:1;1439;1432:12;1394:52;1465:29;1484:9;1465:29;:::i;:::-;1455:39;;1545:2;1534:9;1530:18;1517:32;1568:18;1609:2;1601:6;1598:14;1595:34;;;1625:1;1622;1615:12;1595:34;1663:6;1652:9;1648:22;1638:32;;1708:7;1701:4;1697:2;1693:13;1689:27;1679:55;;1730:1;1727;1720:12;1679:55;1770:2;1757:16;1796:2;1788:6;1785:14;1782:34;;;1812:1;1809;1802:12;1782:34;1857:7;1852:2;1843:6;1839:2;1835:15;1831:24;1828:37;1825:57;;;1878:1;1875;1868:12;1825:57;1909:2;1905;1901:11;1891:21;;1931:6;1921:16;;;;;1278:665;;;;;:::o;2432:277::-;2499:6;2552:2;2540:9;2531:7;2527:23;2523:32;2520:52;;;2568:1;2565;2558:12;2520:52;2600:9;2594:16;2653:5;2646:13;2639:21;2632:5;2629:32;2619:60;;2675:1;2672;2665:12;3057:412;3186:3;3224:6;3218:13;3249:1;3259:129;3273:6;3270:1;3267:13;3259:129;;;3371:4;3355:14;;;3351:25;;3345:32;3332:11;;;3325:53;3288:12;3259:129;;;-1:-1:-1;3443:1:4;3407:16;;3432:13;;;-1:-1:-1;3407:16:4;3057:412;-1:-1:-1;3057:412:4:o"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "483000",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite",
          "owner()": "2359",
          "supportsInterface(bytes4)": "infinite",
          "transferOwnership(address)": "28275",
          "upgradeTo(address)": "28302",
          "upgradeToAndCall(address,bytes)": "infinite"
        },
        "internal": {
          "_owner()": "infinite",
          "_setOwner(address)": "25798"
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing EIP173 for ownership management\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/EIP173Proxy.sol\":\"EIP173Proxy\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"src/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setImplementation(implementationAddress, data);\\n        _setOwner(ownerAddress);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x68de37b2199238a5bde4a278941cf62acb787bb0477417322fa15d976b1cd2ea\",\"license\":\"MIT\"},\"src/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "notice": "Proxy implementing EIP173 for ownership management",
      "version": 1
    }
  },
  "ERC165": {
    "_format": "hh-sol-artifact-1",
    "contractName": "EIP173Proxy",
    "sourceName": "src/EIP173Proxy.sol",
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
    "bytecode": "0x608060405260405162000c7838038062000c788339810160408190526200002691620001e4565b62000032838262000046565b6200003d8262000121565b505050620002db565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a38151156200011c575f836001600160a01b031683604051620000c89190620002be565b5f60405180830381855af49150503d805f811462000102576040519150601f19603f3d011682016040523d82523d5f602084013e62000107565b606091505b50509050806200011a573d805f803e805ffd5b505b505050565b5f620001395f8051602062000c588339815191525490565b9050815f8051602062000c5883398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001a7575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001dc578181015183820152602001620001c2565b50505f910152565b5f805f60608486031215620001f7575f80fd5b620002028462000190565b9250620002126020850162000190565b60408501519092506001600160401b03808211156200022f575f80fd5b818601915086601f83011262000243575f80fd5b815181811115620002585762000258620001ac565b604051601f8201601f19908116603f01168101908382118183101715620002835762000283620001ac565b816040528281528960208487010111156200029c575f80fd5b620002af836020830160208801620001c0565b80955050505050509250925092565b5f8251620002d1818460208701620001c0565b9190910192915050565b61096f80620002e95f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea264697066735822122027936c1a0742ebd98c1d033c0b21fab62fa25e4e9bb4f79f6ca158a4cb0e146d64736f6c63430008140033",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/EIP173Proxy.sol\":\"ERC165\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"src/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setImplementation(implementationAddress, data);\\n        _setOwner(ownerAddress);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x68de37b2199238a5bde4a278941cf62acb787bb0477417322fa15d976b1cd2ea\",\"license\":\"MIT\"},\"src/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
    "sourceName": "src/Proxy.sol",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Proxy.sol\":\"Proxy\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"src/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
  "EIP173ProxyWithReceive": {
    "_format": "hh-sol-artifact-1",
    "contractName": "EIP173ProxyWithReceive",
    "sourceName": "src/EIP173ProxyWithReceive.sol",
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
    "bytecode": "0x608060405260405162000c1e38038062000c1e8339810160408190526200002691620001ea565b8282826200003583826200004c565b620000408262000127565b505050505050620002e1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511562000122575f836001600160a01b031683604051620000ce9190620002c4565b5f60405180830381855af49150503d805f811462000108576040519150601f19603f3d011682016040523d82523d5f602084013e6200010d565b606091505b505090508062000120573d805f803e805ffd5b505b505050565b5f6200013f5f8051602062000bfe8339815191525490565b9050815f8051602062000bfe83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001ad575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001e2578181015183820152602001620001c8565b50505f910152565b5f805f60608486031215620001fd575f80fd5b620002088462000196565b9250620002186020850162000196565b60408501519092506001600160401b038082111562000235575f80fd5b818601915086601f83011262000249575f80fd5b8151818111156200025e576200025e620001b2565b604051601f8201601f19908116603f01168101908382118183101715620002895762000289620001b2565b81604052828152896020848701011115620002a2575f80fd5b620002b5836020830160208801620001c6565b80955050505050509250925092565b5f8251620002d7818460208701620001c6565b9190910192915050565b61090f80620002ef5f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212207d67632b3a48b695b9c0ad9b959d279c22e479fe5ae5300d1b3ab294ee2154aa64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212207d67632b3a48b695b9c0ad9b959d279c22e479fe5ae5300d1b3ab294ee2154aa64736f6c63430008140033",
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
            "entryPoint": 76,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 295,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 406,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory": {
            "entryPoint": 490,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 708,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "copy_memory_to_memory_with_cleanup": {
            "entryPoint": 454,
            "id": null,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 434,
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
        "object": "608060405260405162000c1e38038062000c1e8339810160408190526200002691620001ea565b8282826200003583826200004c565b620000408262000127565b505050505050620002e1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511562000122575f836001600160a01b031683604051620000ce9190620002c4565b5f60405180830381855af49150503d805f811462000108576040519150601f19603f3d011682016040523d82523d5f602084013e6200010d565b606091505b505090508062000120573d805f803e805ffd5b505b505050565b5f6200013f5f8051602062000bfe8339815191525490565b9050815f8051602062000bfe83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80516001600160a01b0381168114620001ad575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001e2578181015183820152602001620001c8565b50505f910152565b5f805f60608486031215620001fd575f80fd5b620002088462000196565b9250620002186020850162000196565b60408501519092506001600160401b038082111562000235575f80fd5b818601915086601f83011262000249575f80fd5b8151818111156200025e576200025e620001b2565b604051601f8201601f19908116603f01168101908382118183101715620002895762000289620001b2565b81604052828152896020848701011115620002a2575f80fd5b620002b5836020830160208801620001c6565b80955050505050509250925092565b5f8251620002d7818460208701620001c6565b9190910192915050565b61090f80620002ef5f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212207d67632b3a48b695b9c0ad9b959d279c22e479fe5ae5300d1b3ab294ee2154aa64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xC1E CODESIZE SUB DUP1 PUSH3 0xC1E DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1EA JUMP JUMPDEST DUP3 DUP3 DUP3 PUSH3 0x35 DUP4 DUP3 PUSH3 0x4C JUMP JUMPDEST PUSH3 0x40 DUP3 PUSH3 0x127 JUMP JUMPDEST POP POP POP POP POP POP PUSH3 0x2E1 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x122 JUMPI PUSH0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0xCE SWAP2 SWAP1 PUSH3 0x2C4 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH3 0x108 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x10D JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x120 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH3 0x13F PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xBFE DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xBFE DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1AD JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1E2 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1C8 JUMP JUMPDEST POP POP PUSH0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x1FD JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x208 DUP5 PUSH3 0x196 JUMP JUMPDEST SWAP3 POP PUSH3 0x218 PUSH1 0x20 DUP6 ADD PUSH3 0x196 JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x235 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x249 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x25E JUMPI PUSH3 0x25E PUSH3 0x1B2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x289 JUMPI PUSH3 0x289 PUSH3 0x1B2 JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x2A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x2B5 DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1C6 JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP3 MLOAD PUSH3 0x2D7 DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1C6 JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x90F DUP1 PUSH3 0x2EF PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC1 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x10D JUMPI PUSH2 0x64 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA2 JUMPI PUSH2 0x64 JUMP JUMPDEST CALLDATASIZE PUSH2 0x64 JUMPI STOP JUMPDEST PUSH2 0x6C PUSH2 0x12C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x79 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x8D PUSH2 0x88 CALLDATASIZE PUSH1 0x4 PUSH2 0x792 JUMP JUMPDEST PUSH2 0x176 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAD JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0xBC CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x341 JUMP JUMPDEST PUSH2 0x6C PUSH2 0xCF CALLDATASIZE PUSH1 0x4 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x417 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x511 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x99 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x118 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0x127 CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x53F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x16C JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x208 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x215 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x246 JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x32E JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x32B SWAP2 DUP2 ADD SWAP1 PUSH2 0x88E JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x33A JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x3FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x414 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x5FE JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4CD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x50C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x5FE SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x53A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x5F5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x414 DUP2 PUSH2 0x6E6 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x50C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x697 SWAP2 SWAP1 PUSH2 0x8AD JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x6CF JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6D4 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x170 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x70F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x7F4 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x809 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x33A DUP3 PUSH2 0x7D1 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x824 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x82D DUP5 PUSH2 0x7D1 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x849 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x85C JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x86A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x87B JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x89E JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8CC JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8B2 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH30 0x67632B3A48B695B9C0AD9B959D279C22E479FE5AE5300D1B3AB294EE2154 0xAA PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "176:268:1:-:0;;;229:169;;;;;;;;;;;;;;;;;;:::i;:::-;349:21;372:12;386:4;898:47:0;349:21:1;386:4;898:18:0;:47::i;:::-;955:23;965:12;955:9;:23::i;:::-;796:189;;;229:169:1;;;176:268;;1634:1067:3;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;3399:346:0:-;3455:21;3479:8;-1:-1:-1;;;;;;;;;;;3304:73:0;;3127:266;3479:8;3455:32;;3660:8;-1:-1:-1;;;;;;;;;;;3585:84:0;3729:8;-1:-1:-1;;;;;3693:45:0;3714:13;-1:-1:-1;;;;;3693:45:0;;;;;;;;;;;3445:300;3399:346;:::o;14:177:4:-;93:13;;-1:-1:-1;;;;;135:31:4;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:4;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:4;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:4;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:4:o;:::-;176:268:1;;;;;;"
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
            "entryPoint": 300,
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
            "entryPoint": 1534,
            "id": 313,
            "parameterSlots": 2,
            "returnSlots": 0
          },
          "@_setOwner_171": {
            "entryPoint": 1766,
            "id": 171,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@owner_47": {
            "entryPoint": 1297,
            "id": 47,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "@supportsInterface_94": {
            "entryPoint": 374,
            "id": 94,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "@transferOwnership_106": {
            "entryPoint": 1343,
            "id": 106,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "@upgradeToAndCall_134": {
            "entryPoint": 1047,
            "id": 134,
            "parameterSlots": 3,
            "returnSlots": 0
          },
          "@upgradeTo_119": {
            "entryPoint": 833,
            "id": 119,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address": {
            "entryPoint": 2001,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_address": {
            "entryPoint": 2041,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_addresst_bytes_calldata_ptr": {
            "entryPoint": 2066,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 3
          },
          "abi_decode_tuple_t_bool_fromMemory": {
            "entryPoint": 2190,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_bytes4": {
            "entryPoint": 1938,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed": {
            "entryPoint": 2221,
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
        "object": "60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212207d67632b3a48b695b9c0ad9b959d279c22e479fe5ae5300d1b3ab294ee2154aa64736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC1 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x10D JUMPI PUSH2 0x64 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA2 JUMPI PUSH2 0x64 JUMP JUMPDEST CALLDATASIZE PUSH2 0x64 JUMPI STOP JUMPDEST PUSH2 0x6C PUSH2 0x12C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x79 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x8D PUSH2 0x88 CALLDATASIZE PUSH1 0x4 PUSH2 0x792 JUMP JUMPDEST PUSH2 0x176 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAD JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0xBC CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x341 JUMP JUMPDEST PUSH2 0x6C PUSH2 0xCF CALLDATASIZE PUSH1 0x4 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x417 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x511 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x99 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x118 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0x127 CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x53F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x16C JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x208 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x215 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x246 JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x32E JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x32B SWAP2 DUP2 ADD SWAP1 PUSH2 0x88E JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x33A JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x3FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x414 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x5FE JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4CD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x50C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x5FE SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x53A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x5F5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x414 DUP2 PUSH2 0x6E6 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x50C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x697 SWAP2 SWAP1 PUSH2 0x8AD JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x6CF JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6D4 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x170 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x70F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x7F4 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x809 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x33A DUP3 PUSH2 0x7D1 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x824 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x82D DUP5 PUSH2 0x7D1 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x849 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x85C JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x86A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x87B JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x89E JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8CC JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8B2 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH30 0x67632B3A48B695B9C0AD9B959D279C22E479FE5AE5300D1B3AB294EE2154 0xAA PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "176:268:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;803:11:3;:9;:11::i;:::-;176:268:1;1303:877:0;;;;;;;;;;-1:-1:-1;1303:877:0;;;;;:::i;:::-;;:::i;:::-;;;516:14:4;;509:22;491:41;;479:2;464:18;1303:877:0;;;;;;;;2292:123;;;;;;;;;;-1:-1:-1;2292:123:0;;;;;:::i;:::-;;:::i;2421:161::-;;;;;;:::i;:::-;;:::i;1216:81::-;;;;;;;;;;;;;:::i;:::-;;;1781:42:4;1769:55;;;1751:74;;1739:2;1724:18;1216:81:0;1605:226:4;2186:100:0;;;;;;;;;;-1:-1:-1;2186:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1303:877:0:-;1364:4;1384:16;;;;;;:36;;-1:-1:-1;1404:16:0;;;;;1384:36;1380:78;;;-1:-1:-1;1443:4:0;;1303:877;-1:-1:-1;1303:877:0:o;1380:78::-;1471:16;;;;;;1467:59;;-1:-1:-1;1510:5:0;;1303:877;-1:-1:-1;1303:877:0:o;1467:59::-;1679:66;1673:73;2031:36;;;;;2010:66:4;1998:79;;2031:36:0;;;1980:98:4;2031:32:0;;;;;;1953:18:4;;2031:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2031:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2027:147;;-1:-1:-1;2158:5:0;;1303:877;-1:-1:-1;;1303:877:0:o;2027:147::-;2112:7;1303:877;-1:-1:-1;;;1303:877:0:o;2292:123::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2573:2:4;2837:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2837:49:0;;;;;;;;;2367:41:::1;2386:17;2367:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2292:123:::0;:::o;2421:161::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2573:2:4;2837:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2837:49:0;2371:338:4;2837:49:0;2532:43:::1;2551:17;2570:4;;2532:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2532:18:0::1;::::0;-1:-1:-1;;;2532:43:0:i:1;:::-;2421:161:::0;;;:::o;1216:81::-;1256:7;1282:8;3310:66;3304:73;;3127:266;1282:8;1275:15;;1216:81;:::o;2186:100::-;3310:66;3304:73;2845:22;;:10;:22;;;2837:49;;;;;;;2573:2:4;2837:49:0;;;2555:21:4;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2837:49:0;2371:338:4;2837:49:0;2260:19:::1;2270:8;2260:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3399:346:0;3455:21;3479:8;3310:66;3304:73;;3127:266;3479:8;3455:32;;3660:8;3592:66;3585:84;3729:8;3693:45;;3714:13;3693:45;;;;;;;;;;;;3445:300;3399:346;:::o;14:332:4:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;180:9;167:23;230:66;223:5;219:78;212:5;209:89;199:117;;312:1;309;302:12;543:196;611:20;;671:42;660:54;;650:65;;640:93;;729:1;726;719:12;640:93;543:196;;;:::o;744:186::-;803:6;856:2;844:9;835:7;831:23;827:32;824:52;;;872:1;869;862:12;824:52;895:29;914:9;895:29;:::i;935:665::-;1014:6;1022;1030;1083:2;1071:9;1062:7;1058:23;1054:32;1051:52;;;1099:1;1096;1089:12;1051:52;1122:29;1141:9;1122:29;:::i;:::-;1112:39;;1202:2;1191:9;1187:18;1174:32;1225:18;1266:2;1258:6;1255:14;1252:34;;;1282:1;1279;1272:12;1252:34;1320:6;1309:9;1305:22;1295:32;;1365:7;1358:4;1354:2;1350:13;1346:27;1336:55;;1387:1;1384;1377:12;1336:55;1427:2;1414:16;1453:2;1445:6;1442:14;1439:34;;;1469:1;1466;1459:12;1439:34;1514:7;1509:2;1500:6;1496:2;1492:15;1488:24;1485:37;1482:57;;;1535:1;1532;1525:12;1482:57;1566:2;1562;1558:11;1548:21;;1588:6;1578:16;;;;;935:665;;;;;:::o;2089:277::-;2156:6;2209:2;2197:9;2188:7;2184:23;2180:32;2177:52;;;2225:1;2222;2215:12;2177:52;2257:9;2251:16;2310:5;2303:13;2296:21;2289:5;2286:32;2276:60;;2332:1;2329;2322:12;2714:412;2843:3;2881:6;2875:13;2906:1;2916:129;2930:6;2927:1;2924:13;2916:129;;;3028:4;3012:14;;;3008:25;;3002:32;2989:11;;;2982:53;2945:12;2916:129;;;-1:-1:-1;3100:1:4;3064:16;;3089:13;;;-1:-1:-1;3064:16:4;2714:412;-1:-1:-1;2714:412:4:o"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "463800",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite",
          "owner()": "2359",
          "supportsInterface(bytes4)": "infinite",
          "transferOwnership(address)": "28275",
          "upgradeTo(address)": "28302",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing EIP173 for ownership management that accept ETH via receive\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/EIP173ProxyWithReceive.sol\":\"EIP173ProxyWithReceive\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"src/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setImplementation(implementationAddress, data);\\n        _setOwner(ownerAddress);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x68de37b2199238a5bde4a278941cf62acb787bb0477417322fa15d976b1cd2ea\",\"license\":\"MIT\"},\"src/EIP173ProxyWithReceive.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./EIP173Proxy.sol\\\";\\n\\n///@notice Proxy implementing EIP173 for ownership management that accept ETH via receive\\ncontract EIP173ProxyWithReceive is EIP173Proxy {\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data)\\n        payable\\n        EIP173Proxy(implementationAddress, ownerAddress, data)\\n    {}\\n\\n    receive() external payable override {}\\n}\\n\",\"keccak256\":\"0x995969899b871520cc816a4e30860a55faeb90bc4a387a6e8c242ff40d2fa27a\",\"license\":\"MIT\"},\"src/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "notice": "Proxy implementing EIP173 for ownership management that accept ETH via receive",
      "version": 1
    }
  },
  "Proxied": {
    "_format": "hh-sol-artifact-1",
    "contractName": "Proxied",
    "sourceName": "src/Proxied.sol",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Proxied.sol\":\"Proxied\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"src/Proxied.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nabstract contract Proxied {\\n    /// @notice to be used by initialisation / postUpgrade function so that only the proxy's admin can execute them\\n    /// It also allows these functions to be called inside a contructor\\n    /// even if the contract is meant to be used without proxy\\n    modifier proxied() {\\n        address proxyAdminAddress = _proxyAdmin();\\n        // With hardhat-deploy proxies\\n        // the proxyAdminAddress is zero only for the implementation contract\\n        // if the implementation contract want to be used as a standalone/immutable contract\\n        // it simply has to execute the `proxied` function\\n        // This ensure the proxyAdminAddress is never zero post deployment\\n        // And allow you to keep the same code for both proxied contract and immutable contract\\n        if (proxyAdminAddress == address(0)) {\\n            // ensure can not be called twice when used outside of proxy : no admin\\n            // solhint-disable-next-line security/no-inline-assembly\\n            assembly {\\n                sstore(\\n                    0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103,\\n                    0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\\n                )\\n            }\\n        } else {\\n            require(msg.sender == proxyAdminAddress);\\n        }\\n        _;\\n    }\\n\\n    modifier onlyProxyAdmin() {\\n        require(msg.sender == _proxyAdmin(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    function _proxyAdmin() internal view returns (address ownerAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            ownerAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xaaceeafeeaf0d200ca3942d8bf14c1c4f787a77f79cc87c08bb668e65acdee29\",\"license\":\"MIT\"}},\"version\":1}",
    "storageLayout": {
      "storage": [],
      "types": null
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
});