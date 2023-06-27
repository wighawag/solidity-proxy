export = {
  "EIP173Proxy": {
    "_format": "hh-sol-artifact-1",
    "contractName": "EIP173Proxy",
    "sourceName": "solc_0.8/EIP173/EIP173Proxy.sol",
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
    "bytecode": "0x608060405260405162000c7838038062000c788339810160408190526200002691620001e4565b620000318262000046565b6200003d8382620000b5565b505050620002db565b5f6200005e5f8051602062000c588339815191525490565b9050815f8051602062000c5883398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a38151156200018b575f836001600160a01b031683604051620001379190620002be565b5f60405180830381855af49150503d805f811462000171576040519150601f19603f3d011682016040523d82523d5f602084013e62000176565b606091505b505090508062000189573d805f803e805ffd5b505b505050565b80516001600160a01b0381168114620001a7575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001dc578181015183820152602001620001c2565b50505f910152565b5f805f60608486031215620001f7575f80fd5b620002028462000190565b9250620002126020850162000190565b60408501519092506001600160401b03808211156200022f575f80fd5b818601915086601f83011262000243575f80fd5b815181811115620002585762000258620001ac565b604051601f8201601f19908116603f01168101908382118183101715620002835762000283620001ac565b816040528281528960208487010111156200029c575f80fd5b620002af836020830160208801620001c0565b80955050505050509250925092565b5f8251620002d1818460208701620001c0565b9190910192915050565b61096f80620002e95f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea2646970667358221220b684f5b70c5366d5cfce68365932ccc48bc1e8ce159edd1546835e83f82a3f2964736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea2646970667358221220b684f5b70c5366d5cfce68365932ccc48bc1e8ce159edd1546835e83f82a3f2964736f6c63430008140033",
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
            "entryPoint": 181,
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
              "src": "0:1943:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "74:117:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "84:22:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "99:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "93:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "93:13:5"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "84:5:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "169:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "178:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "181:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "171:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "171:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "171:12:5"
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
                                  "src": "128:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "139:5:5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "154:3:5",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "159:1:5",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "150:3:5"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "150:11:5"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "163:1:5",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "146:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "146:19:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "135:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "135:31:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "125:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "125:42:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "118:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "118:50:5"
                        },
                        "nodeType": "YulIf",
                        "src": "115:70:5"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "53:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "64:5:5",
                      "type": ""
                    }
                  ],
                  "src": "14:177:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "228:95:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "245:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "252:3:5",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "257:10:5",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "248:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "248:20:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "238:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "238:31:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "238:31:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "285:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "288:4:5",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "278:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "278:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "278:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "309:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "312:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "302:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "302:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "302:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "196:127:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "394:184:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "404:10:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "413:1:5",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "408:1:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "473:63:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "498:3:5"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "503:1:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "494:3:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "494:11:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "517:3:5"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "522:1:5"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "513:3:5"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "513:11:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "507:5:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "507:18:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "487:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "487:39:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "487:39:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "434:1:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "437:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "431:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "431:13:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "445:19:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "447:15:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "456:1:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "459:2:5",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "452:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "452:10:5"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "447:1:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "427:3:5",
                          "statements": []
                        },
                        "src": "423:113:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "556:3:5"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "561:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "552:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:16:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "570:1:5",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:27:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "545:27:5"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory_with_cleanup",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "372:3:5",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "377:3:5",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "382:6:5",
                      "type": ""
                    }
                  ],
                  "src": "328:250:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "707:942:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "753:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "762:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "765:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "755:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "755:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "755:12:5"
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
                                  "src": "728:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "737:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "724:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "724:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "749:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "720:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "720:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "717:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "778:50:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "818:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "788:29:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "788:40:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "778:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "837:59:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "881:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "892:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "877:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "877:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "847:29:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "847:49:5"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "837:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "905:39:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "929:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "940:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "925:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "925:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "919:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "919:25:5"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "909:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "953:28:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "971:2:5",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "975:1:5",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "967:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "967:10:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "979:1:5",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "963:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "963:18:5"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "957:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1008:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1017:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1020:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1010:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1010:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1010:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "996:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1004:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "993:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "993:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "990:34:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1033:32:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1047:9:5"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1058:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1043:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1043:22:5"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1037:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1113:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1122:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1125:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1115:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1115:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1115:12:5"
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
                                      "src": "1092:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1096:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1088:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1088:13:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1103:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1084:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1084:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1077:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1077:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1074:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1138:19:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1154:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1148:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1148:9:5"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "1142:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1180:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1182:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1182:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1172:2:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1176:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1169:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1169:10:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1166:36:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1211:17:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1225:2:5",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1221:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1221:7:5"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "1215:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1237:23:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1257:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1251:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:9:5"
                        },
                        "variables": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1241:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1269:71:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1291:6:5"
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
                                              "src": "1315:2:5"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1319:4:5",
                                              "type": "",
                                              "value": "0x1f"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1311:3:5"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1311:13:5"
                                        },
                                        {
                                          "name": "_4",
                                          "nodeType": "YulIdentifier",
                                          "src": "1326:2:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "1307:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1307:22:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1331:2:5",
                                      "type": "",
                                      "value": "63"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1303:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1303:31:5"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1336:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1299:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1299:40:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1287:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:53:5"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "1273:10:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1399:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1401:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1401:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1401:18:5"
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
                                  "src": "1358:10:5"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1370:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "1355:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1355:18:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1378:10:5"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1390:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "1375:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1375:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1352:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1352:46:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1349:72:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1437:2:5",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1441:10:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1430:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1430:22:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1430:22:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1468:6:5"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1476:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1461:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1461:18:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1461:18:5"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1525:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1534:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1537:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1527:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1527:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1527:12:5"
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
                                      "src": "1502:2:5"
                                    },
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "1506:2:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1498:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1498:11:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1511:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1494:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1494:20:5"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1516:7:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1491:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1491:33:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1488:53:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "1589:2:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1593:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1585:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1585:11:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1602:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1610:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1598:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1598:15:5"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1615:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1550:34:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1550:68:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1550:68:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1627:16:5",
                        "value": {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1637:6:5"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1627:6:5"
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
                      "src": "657:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "668:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "680:6:5",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "688:6:5",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "696:6:5",
                      "type": ""
                    }
                  ],
                  "src": "583:1066:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1791:150:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1801:27:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1821:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1815:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1815:13:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1805:6:5",
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
                                  "src": "1876:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1884:4:5",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1872:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1872:17:5"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1891:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1896:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1837:34:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1837:66:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1837:66:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1912:23:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1923:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1928:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1919:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1919:16:5"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1912:3:5"
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
                      "src": "1767:3:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1772:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1783:3:5",
                      "type": ""
                    }
                  ],
                  "src": "1654:287:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address_fromMemory(headStart)\n        value1 := abi_decode_address_fromMemory(add(headStart, 32))\n        let offset := mload(add(headStart, 64))\n        let _1 := sub(shl(64, 1), 1)\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := mload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        copy_memory_to_memory_with_cleanup(add(_2, 32), add(memPtr, 32), _3)\n        value2 := memPtr\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        end := add(pos, length)\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "608060405260405162000c7838038062000c788339810160408190526200002691620001e4565b620000318262000046565b6200003d8382620000b5565b505050620002db565b5f6200005e5f8051602062000c588339815191525490565b9050815f8051602062000c5883398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a38151156200018b575f836001600160a01b031683604051620001379190620002be565b5f60405180830381855af49150503d805f811462000171576040519150601f19603f3d011682016040523d82523d5f602084013e62000176565b606091505b505090508062000189573d805f803e805ffd5b505b505050565b80516001600160a01b0381168114620001a7575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001dc578181015183820152602001620001c2565b50505f910152565b5f805f60608486031215620001f7575f80fd5b620002028462000190565b9250620002126020850162000190565b60408501519092506001600160401b03808211156200022f575f80fd5b818601915086601f83011262000243575f80fd5b815181811115620002585762000258620001ac565b604051601f8201601f19908116603f01168101908382118183101715620002835762000283620001ac565b816040528281528960208487010111156200029c575f80fd5b620002af836020830160208801620001c0565b80955050505050509250925092565b5f8251620002d1818460208701620001c0565b9190910192915050565b61096f80620002e95f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea2646970667358221220b684f5b70c5366d5cfce68365932ccc48bc1e8ce159edd1546835e83f82a3f2964736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xC78 CODESIZE SUB DUP1 PUSH3 0xC78 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1E4 JUMP JUMPDEST PUSH3 0x31 DUP3 PUSH3 0x46 JUMP JUMPDEST PUSH3 0x3D DUP4 DUP3 PUSH3 0xB5 JUMP JUMPDEST POP POP POP PUSH3 0x2DB JUMP JUMPDEST PUSH0 PUSH3 0x5E PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC58 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xC58 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x18B JUMPI PUSH0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0x137 SWAP2 SWAP1 PUSH3 0x2BE JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH3 0x171 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x176 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x189 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1A7 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1DC JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1C2 JUMP JUMPDEST POP POP PUSH0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x1F7 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x202 DUP5 PUSH3 0x190 JUMP JUMPDEST SWAP3 POP PUSH3 0x212 PUSH1 0x20 DUP6 ADD PUSH3 0x190 JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x22F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x243 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x258 JUMPI PUSH3 0x258 PUSH3 0x1AC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x283 JUMPI PUSH3 0x283 PUSH3 0x1AC JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x29C JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x2AF DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1C0 JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP3 MLOAD PUSH3 0x2D1 DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1C0 JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x96F DUP1 PUSH3 0x2E9 PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x172 JUMPI PUSH2 0xC9 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x107 JUMPI PUSH2 0xC9 JUMP JUMPDEST CALLDATASIZE PUSH2 0xC9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD1 PUSH2 0x191 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0xED CALLDATASIZE PUSH1 0x4 PUSH2 0x7F2 JUMP JUMPDEST PUSH2 0x1DB JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x112 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x121 CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x3A6 JUMP JUMPDEST PUSH2 0xD1 PUSH2 0x134 CALLDATASIZE PUSH1 0x4 PUSH2 0x872 JUMP JUMPDEST PUSH2 0x477 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x144 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x14D PUSH2 0x571 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xFE JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x18C CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x59F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D1 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x26D JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x27A JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2AB JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x393 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x390 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8EE JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x39F JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x45C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x65E JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x52D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x56C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x65E SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x59A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x655 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH2 0x746 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x56C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6F7 SWAP2 SWAP1 PUSH2 0x90D JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x72F JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x734 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1D5 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x76F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x802 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x854 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x869 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x39F DUP3 PUSH2 0x831 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x884 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x88D DUP5 PUSH2 0x831 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8A9 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8BC JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8CA JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8DB JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8FE JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x92C JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x912 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB6 DUP5 CREATE2 0xB7 0xC MSTORE8 PUSH7 0xD5CFCE68365932 0xCC 0xC4 DUP12 0xC1 0xE8 0xCE ISZERO SWAP15 0xDD ISZERO CHAINID DUP4 0x5E DUP4 0xF8 0x2A EXTCODEHASH 0x29 PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "245:3511:0:-:0;;;805:189;;;;;;;;;;;;;;;;;;:::i;:::-;907:23;917:12;907:9;:23::i;:::-;940:47;959:21;982:4;940:18;:47::i;:::-;805:189;;;245:3511;;3408:346;3464:21;3488:8;-1:-1:-1;;;;;;;;;;;3313:73:0;;3136:266;3488:8;3464:32;;3669:8;-1:-1:-1;;;;;;;;;;;3594:84:0;3738:8;-1:-1:-1;;;;;3702:45:0;3723:13;-1:-1:-1;;;;;3702:45:0;;;;;;;;;;;3454:300;3408:346;:::o;1634:1067:3:-;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;14:177:5:-;93:13;;-1:-1:-1;;;;;135:31:5;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:5;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:5;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:5;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:5:o;:::-;245:3511:0;;;;;;"
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
              "src": "0:3471:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "188:164:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "205:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "216:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "198:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "198:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "198:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "239:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "250:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "235:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "235:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "255:2:5",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "228:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "228:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "228:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "278:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "289:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "274:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "274:18:5"
                            },
                            {
                              "hexValue": "45544845525f52454a4543544544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "294:16:5",
                              "type": "",
                              "value": "ETHER_REJECTED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "267:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "267:44:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "267:44:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "320:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "332:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "343:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "328:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "328:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "320:4:5"
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
                      "src": "165:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "179:4:5",
                      "type": ""
                    }
                  ],
                  "src": "14:338:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "426:263:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "472:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "481:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "484:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "474:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "474:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "474:12:5"
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
                                  "src": "447:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "456:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "443:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "443:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "468:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "439:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "439:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "436:52:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "497:36:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "523:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "510:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "510:23:5"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "501:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "643:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "652:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "655:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "645:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "645:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "645:12:5"
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
                                  "src": "555:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "566:5:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "573:66:5",
                                      "type": "",
                                      "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "562:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "562:78:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "552:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:89:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:97:5"
                        },
                        "nodeType": "YulIf",
                        "src": "542:117:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "668:15:5",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "678:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "668:6:5"
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
                      "src": "392:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "403:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "415:6:5",
                      "type": ""
                    }
                  ],
                  "src": "357:332:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "789:92:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "799:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "811:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "822:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "807:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "807:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "799:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "841:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "866:6:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "859:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "859:14:5"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "852:6:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "852:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "834:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "834:41:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "834:41:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "758:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "769:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "780:4:5",
                      "type": ""
                    }
                  ],
                  "src": "694:187:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "935:147:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "945:29:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "967:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "954:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "954:20:5"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "945:5:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1060:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1069:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1072:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1062:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1062:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1062:12:5"
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
                                  "src": "996:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "1007:5:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1014:42:5",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "1003:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1003:54:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "993:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "993:65:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "986:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "986:73:5"
                        },
                        "nodeType": "YulIf",
                        "src": "983:93:5"
                      }
                    ]
                  },
                  "name": "abi_decode_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "914:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "925:5:5",
                      "type": ""
                    }
                  ],
                  "src": "886:196:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1157:116:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1203:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1212:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1215:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1205:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1205:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1205:12:5"
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
                                  "src": "1178:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1187:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1174:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1174:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1199:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1170:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1170:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1167:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1228:39:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1257:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1238:18:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1238:29:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1228:6:5"
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
                      "src": "1123:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1134:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1146:6:5",
                      "type": ""
                    }
                  ],
                  "src": "1087:186:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1384:559:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1430:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1439:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1442:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1432:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1432:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1432:12:5"
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
                                  "src": "1405:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1414:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1401:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1401:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1426:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1397:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1397:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1394:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1455:39:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1484:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1465:18:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1465:29:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1455:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1503:46:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1534:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1545:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1530:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1530:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1517:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1517:32:5"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1507:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1558:28:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1568:18:5",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1562:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1613:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1622:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1625:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1615:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1615:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1615:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1601:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1609:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1598:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1598:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1595:34:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1638:32:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1652:9:5"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1663:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1648:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1648:22:5"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1642:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1718:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1727:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1730:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1720:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1720:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1720:12:5"
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
                                      "src": "1697:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1701:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1693:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1693:13:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1708:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1689:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1689:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1682:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1682:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1679:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1743:30:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1770:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1757:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1757:16:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1747:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1800:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1809:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1812:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1802:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1802:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1802:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1788:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1796:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1785:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1785:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1782:34:5"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1866:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1875:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1878:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1868:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1868:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1868:12:5"
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
                                      "src": "1839:2:5"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1843:6:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1835:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1835:15:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1852:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1831:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1831:24:5"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1857:7:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1828:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1828:37:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1825:57:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1891:21:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1905:2:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1909:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1901:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1901:11:5"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1891:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1921:16:5",
                        "value": {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1931:6:5"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1921:6:5"
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
                      "src": "1334:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1345:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1357:6:5",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "1365:6:5",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "1373:6:5",
                      "type": ""
                    }
                  ],
                  "src": "1278:665:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2049:125:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2059:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2071:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2082:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2067:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2067:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2059:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2101:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2116:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2124:42:5",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2112:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2112:55:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2094:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2094:74:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2094:74:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2018:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2029:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2040:4:5",
                      "type": ""
                    }
                  ],
                  "src": "1948:226:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2278:149:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2288:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2300:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2311:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2296:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2296:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2288:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2330:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2345:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2353:66:5",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2341:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2341:79:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2323:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2323:98:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2323:98:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2247:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2258:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2269:4:5",
                      "type": ""
                    }
                  ],
                  "src": "2179:248:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2510:199:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2556:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2565:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2568:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2558:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2558:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2558:12:5"
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
                                  "src": "2531:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2540:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2527:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2527:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2552:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2523:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2523:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2520:52:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2581:29:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2600:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2594:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2594:16:5"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2585:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2663:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2672:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2675:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2665:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2665:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2665:12:5"
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
                                  "src": "2632:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "2653:5:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "2646:6:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2646:13:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2639:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2639:21:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2629:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2629:32:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2622:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2622:40:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2619:60:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2688:15:5",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2698:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2688:6:5"
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
                      "src": "2476:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2487:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2499:6:5",
                      "type": ""
                    }
                  ],
                  "src": "2432:277:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2888:164:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2905:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2916:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2898:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2898:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2898:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2939:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2950:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2935:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2935:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2955:2:5",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2928:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2928:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2928:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2978:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2989:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2974:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2974:18:5"
                            },
                            {
                              "hexValue": "4e4f545f415554484f52495a4544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "2994:16:5",
                              "type": "",
                              "value": "NOT_AUTHORIZED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2967:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2967:44:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2967:44:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3020:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3032:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3043:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3028:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3028:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3020:4:5"
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
                      "src": "2865:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2879:4:5",
                      "type": ""
                    }
                  ],
                  "src": "2714:338:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3194:275:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3204:27:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3224:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3218:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3218:13:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "3208:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3240:10:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3249:1:5",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "3244:1:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3311:77:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "pos",
                                        "nodeType": "YulIdentifier",
                                        "src": "3336:3:5"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "3341:1:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3332:3:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3332:11:5"
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
                                                "src": "3359:6:5"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "3367:1:5"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "3355:3:5"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3355:14:5"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3371:4:5",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3351:3:5"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3351:25:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3345:5:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3345:32:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "3325:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3325:53:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3325:53:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "3270:1:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3273:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "3267:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3267:13:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "3281:21:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3283:17:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "3292:1:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3295:4:5",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "3288:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3288:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "3283:1:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "3263:3:5",
                          "statements": []
                        },
                        "src": "3259:129:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3397:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3411:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3416:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3407:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3407:16:5"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "3401:2:5",
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
                              "src": "3439:2:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3443:1:5",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3432:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3432:13:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3432:13:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3454:9:5",
                        "value": {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3461:2:5"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3454:3:5"
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
                      "src": "3170:3:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3175:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "3186:3:5",
                      "type": ""
                    }
                  ],
                  "src": "3057:412:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_encode_tuple_t_stringliteral_ef8a4c3fcfbfa959f184421d0ef9a577b18116cafbc5879aff4e2f1881c7c1f0__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"ETHER_REJECTED\")\n        tail := add(headStart, 96)\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let offset := calldataload(add(headStart, 32))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value1 := add(_2, 32)\n        value2 := length\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"NOT_AUTHORIZED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            mstore(add(pos, i), mload(add(add(value0, i), 0x20)))\n        }\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146101265780638da5cb5b14610139578063f2fde38b14610172576100c9565b806301ffc9a7146100d35780633659cfe614610107576100c9565b366100c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f45544845525f52454a454354454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6100d1610191565b005b3480156100de575f80fd5b506100f26100ed3660046107f2565b6101db565b60405190151581526020015b60405180910390f35b348015610112575f80fd5b506100d1610121366004610859565b6103a6565b6100d1610134366004610872565b610477565b348015610144575f80fd5b5061014d610571565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fe565b34801561017d575f80fd5b506100d161018c366004610859565b61059f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e8280156101d1578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061026d57507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561027a57506001919050565b7fffffffff0000000000000000000000000000000000000000000000000000000080831690036102ab57505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa925050508015610393575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610390918101906108ee565b60015b61039f57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b6104748160405180602001604052805f81525061065e565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61056c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061065e92505050565b505050565b5f61059a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016100c0565b61047481610746565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561056c575f8373ffffffffffffffffffffffffffffffffffffffff16836040516106f7919061090d565b5f60405180830381855af49150503d805f811461072f576040519150601f19603f3d011682016040523d82523d5f602084013e610734565b606091505b50509050806101d5573d805f803e805ffd5b5f61076f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f60208284031215610802575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461039f575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff81168114610854575f80fd5b919050565b5f60208284031215610869575f80fd5b61039f82610831565b5f805f60408486031215610884575f80fd5b61088d84610831565b9250602084013567ffffffffffffffff808211156108a9575f80fd5b818601915086601f8301126108bc575f80fd5b8135818111156108ca575f80fd5b8760208285010111156108db575f80fd5b6020830194508093505050509250925092565b5f602082840312156108fe575f80fd5b8151801515811461039f575f80fd5b5f82515f5b8181101561092c5760208186018101518583015201610912565b505f92019182525091905056fea2646970667358221220b684f5b70c5366d5cfce68365932ccc48bc1e8ce159edd1546835e83f82a3f2964736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x172 JUMPI PUSH2 0xC9 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0x107 JUMPI PUSH2 0xC9 JUMP JUMPDEST CALLDATASIZE PUSH2 0xC9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x45544845525F52454A4543544544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xD1 PUSH2 0x191 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDE JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0xED CALLDATASIZE PUSH1 0x4 PUSH2 0x7F2 JUMP JUMPDEST PUSH2 0x1DB JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x112 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x121 CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x3A6 JUMP JUMPDEST PUSH2 0xD1 PUSH2 0x134 CALLDATASIZE PUSH1 0x4 PUSH2 0x872 JUMP JUMPDEST PUSH2 0x477 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x144 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x14D PUSH2 0x571 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0xFE JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xD1 PUSH2 0x18C CALLDATASIZE PUSH1 0x4 PUSH2 0x859 JUMP JUMPDEST PUSH2 0x59F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x1D1 JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x26D JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x27A JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x2AB JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x393 JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x390 SWAP2 DUP2 ADD SWAP1 PUSH2 0x8EE JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x39F JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x45C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x65E JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x52D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x56C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x65E SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x59A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x655 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0xC0 JUMP JUMPDEST PUSH2 0x474 DUP2 PUSH2 0x746 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x56C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x6F7 SWAP2 SWAP1 PUSH2 0x90D JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x72F JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x734 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x1D5 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x76F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x802 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x854 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x869 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x39F DUP3 PUSH2 0x831 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x884 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x88D DUP5 PUSH2 0x831 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x8A9 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x8BC JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x8CA JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x8DB JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x8FE JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x39F JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x92C JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x912 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB6 DUP5 CREATE2 0xB7 0xC MSTORE8 PUSH7 0xD5CFCE68365932 0xCC 0xC4 DUP12 0xC1 0xE8 0xCE ISZERO SWAP15 0xDD ISZERO CHAINID DUP4 0x5E DUP4 0xF8 0x2A EXTCODEHASH 0x29 PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "245:3511:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;698:24:3;;;;;216:2:5;698:24:3;;;198:21:5;255:2;235:18;;;228:30;294:16;274:18;;;267:44;328:18;;698:24:3;;;;;;;;245:3511:0;803:11:3;:9;:11::i;:::-;245:3511:0;1312:877;;;;;;;;;;-1:-1:-1;1312:877:0;;;;;:::i;:::-;;:::i;:::-;;;859:14:5;;852:22;834:41;;822:2;807:18;1312:877:0;;;;;;;;2301:123;;;;;;;;;;-1:-1:-1;2301:123:0;;;;;:::i;:::-;;:::i;2430:161::-;;;;;;:::i;:::-;;:::i;1225:81::-;;;;;;;;;;;;;:::i;:::-;;;2124:42:5;2112:55;;;2094:74;;2082:2;2067:18;1225:81:0;1948:226:5;2195:100:0;;;;;;;;;;-1:-1:-1;2195:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1312:877:0:-;1373:4;1393:16;;;;;;:36;;-1:-1:-1;1413:16:0;;;;;1393:36;1389:78;;;-1:-1:-1;1452:4:0;;1312:877;-1:-1:-1;1312:877:0:o;1389:78::-;1480:16;;;;;;1476:59;;-1:-1:-1;1519:5:0;;1312:877;-1:-1:-1;1312:877:0:o;1476:59::-;1688:66;1682:73;2040:36;;;;;2353:66:5;2341:79;;2040:36:0;;;2323:98:5;2040:32:0;;;;;;2296:18:5;;2040:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2040:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2036:147;;-1:-1:-1;2167:5:0;;1312:877;-1:-1:-1;;1312:877:0:o;2036:147::-;2121:7;1312:877;-1:-1:-1;;;1312:877:0:o;2301:123::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:5;2846:49:0;;;2898:21:5;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:5;2846:49:0;2376:41:::1;2395:17;2376:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2301:123:::0;:::o;2430:161::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:5;2846:49:0;;;2898:21:5;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:5;2846:49:0;2541:43:::1;2560:17;2579:4;;2541:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2541:18:0::1;::::0;-1:-1:-1;;;2541:43:0:i:1;:::-;2430:161:::0;;;:::o;1225:81::-;1265:7;1291:8;3319:66;3313:73;;3136:266;1291:8;1284:15;;1225:81;:::o;2195:100::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2916:2:5;2846:49:0;;;2898:21:5;2955:2;2935:18;;;2928:30;2994:16;2974:18;;;2967:44;3028:18;;2846:49:0;2714:338:5;2846:49:0;2269:19:::1;2279:8;2269:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3408:346:0;3464:21;3488:8;3319:66;3313:73;;3136:266;3488:8;3464:32;;3669:8;3601:66;3594:84;3738:8;3702:45;;3723:13;3702:45;;;;;;;;;;;;3454:300;3408:346;:::o;357:332:5:-;415:6;468:2;456:9;447:7;443:23;439:32;436:52;;;484:1;481;474:12;436:52;523:9;510:23;573:66;566:5;562:78;555:5;552:89;542:117;;655:1;652;645:12;886:196;954:20;;1014:42;1003:54;;993:65;;983:93;;1072:1;1069;1062:12;983:93;886:196;;;:::o;1087:186::-;1146:6;1199:2;1187:9;1178:7;1174:23;1170:32;1167:52;;;1215:1;1212;1205:12;1167:52;1238:29;1257:9;1238:29;:::i;1278:665::-;1357:6;1365;1373;1426:2;1414:9;1405:7;1401:23;1397:32;1394:52;;;1442:1;1439;1432:12;1394:52;1465:29;1484:9;1465:29;:::i;:::-;1455:39;;1545:2;1534:9;1530:18;1517:32;1568:18;1609:2;1601:6;1598:14;1595:34;;;1625:1;1622;1615:12;1595:34;1663:6;1652:9;1648:22;1638:32;;1708:7;1701:4;1697:2;1693:13;1689:27;1679:55;;1730:1;1727;1720:12;1679:55;1770:2;1757:16;1796:2;1788:6;1785:14;1782:34;;;1812:1;1809;1802:12;1782:34;1857:7;1852:2;1843:6;1839:2;1835:15;1831:24;1828:37;1825:57;;;1878:1;1875;1868:12;1825:57;1909:2;1905;1901:11;1891:21;;1931:6;1921:16;;;;;1278:665;;;;;:::o;2432:277::-;2499:6;2552:2;2540:9;2531:7;2527:23;2523:32;2520:52;;;2568:1;2565;2558:12;2520:52;2600:9;2594:16;2653:5;2646:13;2639:21;2632:5;2629:32;2619:60;;2675:1;2672;2665:12;3057:412;3186:3;3224:6;3218:13;3249:1;3259:129;3273:6;3270:1;3267:13;3259:129;;;3371:4;3355:14;;;3351:25;;3345:32;3332:11;;;3325:53;3288:12;3259:129;;;-1:-1:-1;3443:1:5;3407:16;;3432:13;;;-1:-1:-1;3407:16:5;3057:412;-1:-1:-1;3057:412:5:o"
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing EIP173 for ownership management\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/EIP173/EIP173Proxy.sol\":\"EIP173Proxy\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/EIP173/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../EIP1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xf424b3ab9dd0c0328554e3ff27d6cae0681b81a107b2a9313ecadae374800f2c\",\"license\":\"MIT\"},\"solc_0.8/EIP1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
    "contractName": "ERC165",
    "sourceName": "solc_0.8/EIP173/EIP173Proxy.sol",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/EIP173/EIP173Proxy.sol\":\"ERC165\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/EIP173/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../EIP1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xf424b3ab9dd0c0328554e3ff27d6cae0681b81a107b2a9313ecadae374800f2c\",\"license\":\"MIT\"},\"solc_0.8/EIP1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
    "sourceName": "solc_0.8/EIP173/EIP173ProxyWithReceive.sol",
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
    "bytecode": "0x608060405260405162000c1e38038062000c1e8339810160408190526200002691620001ea565b82828262000034826200004c565b620000408382620000bb565b505050505050620002e1565b5f620000645f8051602062000bfe8339815191525490565b9050815f8051602062000bfe83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511562000191575f836001600160a01b0316836040516200013d9190620002c4565b5f60405180830381855af49150503d805f811462000177576040519150601f19603f3d011682016040523d82523d5f602084013e6200017c565b606091505b50509050806200018f573d805f803e805ffd5b505b505050565b80516001600160a01b0381168114620001ad575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001e2578181015183820152602001620001c8565b50505f910152565b5f805f60608486031215620001fd575f80fd5b620002088462000196565b9250620002186020850162000196565b60408501519092506001600160401b038082111562000235575f80fd5b818601915086601f83011262000249575f80fd5b8151818111156200025e576200025e620001b2565b604051601f8201601f19908116603f01168101908382118183101715620002895762000289620001b2565b81604052828152896020848701011115620002a2575f80fd5b620002b5836020830160208801620001c6565b80955050505050509250925092565b5f8251620002d7818460208701620001c6565b9190910192915050565b61090f80620002ef5f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212203c5c7cc467b7be475b2d0e54372f96db5b136991ded9da5b2c435e9a4447515f64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
    "deployedBytecode": "0x60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212203c5c7cc467b7be475b2d0e54372f96db5b136991ded9da5b2c435e9a4447515f64736f6c63430008140033",
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
            "entryPoint": 187,
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
              "src": "0:1943:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "74:117:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "84:22:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "99:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "93:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "93:13:5"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "84:5:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "169:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "178:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "181:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "171:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "171:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "171:12:5"
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
                                  "src": "128:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "139:5:5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "154:3:5",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "159:1:5",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "150:3:5"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "150:11:5"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "163:1:5",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "146:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "146:19:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "135:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "135:31:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "125:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "125:42:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "118:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "118:50:5"
                        },
                        "nodeType": "YulIf",
                        "src": "115:70:5"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "53:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "64:5:5",
                      "type": ""
                    }
                  ],
                  "src": "14:177:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "228:95:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "245:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "252:3:5",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "257:10:5",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "248:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "248:20:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "238:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "238:31:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "238:31:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "285:1:5",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "288:4:5",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "278:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "278:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "278:15:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "309:1:5",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "312:4:5",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "302:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "302:15:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "302:15:5"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "196:127:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "394:184:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "404:10:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "413:1:5",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "408:1:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "473:63:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "498:3:5"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "503:1:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "494:3:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "494:11:5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "517:3:5"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "522:1:5"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "513:3:5"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "513:11:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "507:5:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "507:18:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "487:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "487:39:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "487:39:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "434:1:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "437:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "431:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "431:13:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "445:19:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "447:15:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "456:1:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "459:2:5",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "452:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "452:10:5"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "447:1:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "427:3:5",
                          "statements": []
                        },
                        "src": "423:113:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "556:3:5"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "561:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "552:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "552:16:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "570:1:5",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "545:27:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "545:27:5"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory_with_cleanup",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "372:3:5",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "377:3:5",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "382:6:5",
                      "type": ""
                    }
                  ],
                  "src": "328:250:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "707:942:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "753:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "762:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "765:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "755:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "755:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "755:12:5"
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
                                  "src": "728:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "737:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "724:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "724:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "749:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "720:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "720:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "717:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "778:50:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "818:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "788:29:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "788:40:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "778:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "837:59:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "881:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "892:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "877:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "877:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "847:29:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "847:49:5"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "837:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "905:39:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "929:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "940:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "925:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "925:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "919:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "919:25:5"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "909:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "953:28:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "971:2:5",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "975:1:5",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "967:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "967:10:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "979:1:5",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "963:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "963:18:5"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "957:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1008:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1017:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1020:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1010:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1010:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1010:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "996:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1004:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "993:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "993:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "990:34:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1033:32:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1047:9:5"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1058:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1043:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1043:22:5"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1037:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1113:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1122:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1125:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1115:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1115:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1115:12:5"
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
                                      "src": "1092:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1096:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1088:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1088:13:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1103:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1084:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1084:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1077:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1077:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1074:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1138:19:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1154:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1148:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1148:9:5"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "1142:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1180:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1182:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1182:18:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1172:2:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1176:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1169:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1169:10:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1166:36:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1211:17:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1225:2:5",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "1221:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1221:7:5"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "1215:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1237:23:5",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1257:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1251:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:9:5"
                        },
                        "variables": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulTypedName",
                            "src": "1241:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1269:71:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1291:6:5"
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
                                              "src": "1315:2:5"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1319:4:5",
                                              "type": "",
                                              "value": "0x1f"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1311:3:5"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1311:13:5"
                                        },
                                        {
                                          "name": "_4",
                                          "nodeType": "YulIdentifier",
                                          "src": "1326:2:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "and",
                                        "nodeType": "YulIdentifier",
                                        "src": "1307:3:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1307:22:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1331:2:5",
                                      "type": "",
                                      "value": "63"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1303:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1303:31:5"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1336:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1299:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1299:40:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1287:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:53:5"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "1273:10:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1399:22:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "1401:16:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1401:18:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1401:18:5"
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
                                  "src": "1358:10:5"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1370:2:5"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "1355:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1355:18:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1378:10:5"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1390:6:5"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "1375:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1375:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1352:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1352:46:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1349:72:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1437:2:5",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1441:10:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1430:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1430:22:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1430:22:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1468:6:5"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1476:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1461:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1461:18:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1461:18:5"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1525:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1534:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1537:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1527:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1527:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1527:12:5"
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
                                      "src": "1502:2:5"
                                    },
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "1506:2:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1498:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1498:11:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1511:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1494:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1494:20:5"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1516:7:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1491:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1491:33:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1488:53:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "1589:2:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1593:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1585:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1585:11:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1602:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1610:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1598:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1598:15:5"
                            },
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "1615:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1550:34:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1550:68:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1550:68:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1627:16:5",
                        "value": {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1637:6:5"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1627:6:5"
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
                      "src": "657:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "668:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "680:6:5",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "688:6:5",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "696:6:5",
                      "type": ""
                    }
                  ],
                  "src": "583:1066:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1791:150:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1801:27:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1821:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1815:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1815:13:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1805:6:5",
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
                                  "src": "1876:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1884:4:5",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1872:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1872:17:5"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1891:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1896:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nodeType": "YulIdentifier",
                            "src": "1837:34:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1837:66:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1837:66:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1912:23:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1923:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1928:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1919:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1919:16:5"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1912:3:5"
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
                      "src": "1767:3:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1772:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1783:3:5",
                      "type": ""
                    }
                  ],
                  "src": "1654:287:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_bytes_memory_ptr_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address_fromMemory(headStart)\n        value1 := abi_decode_address_fromMemory(add(headStart, 32))\n        let offset := mload(add(headStart, 64))\n        let _1 := sub(shl(64, 1), 1)\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := mload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        copy_memory_to_memory_with_cleanup(add(_2, 32), add(memPtr, 32), _3)\n        value2 := memPtr\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        end := add(pos, length)\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "608060405260405162000c1e38038062000c1e8339810160408190526200002691620001ea565b82828262000034826200004c565b620000408382620000bb565b505050505050620002e1565b5f620000645f8051602062000bfe8339815191525490565b9050815f8051602062000bfe83398151915255816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8054908390556040516001600160a01b0380851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511562000191575f836001600160a01b0316836040516200013d9190620002c4565b5f60405180830381855af49150503d805f811462000177576040519150601f19603f3d011682016040523d82523d5f602084013e6200017c565b606091505b50509050806200018f573d805f803e805ffd5b505b505050565b80516001600160a01b0381168114620001ad575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015620001e2578181015183820152602001620001c8565b50505f910152565b5f805f60608486031215620001fd575f80fd5b620002088462000196565b9250620002186020850162000196565b60408501519092506001600160401b038082111562000235575f80fd5b818601915086601f83011262000249575f80fd5b8151818111156200025e576200025e620001b2565b604051601f8201601f19908116603f01168101908382118183101715620002895762000289620001b2565b81604052828152896020848701011115620002a2575f80fd5b620002b5836020830160208801620001c6565b80955050505050509250925092565b5f8251620002d7818460208701620001c6565b9190910192915050565b61090f80620002ef5f395ff3fe60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212203c5c7cc467b7be475b2d0e54372f96db5b136991ded9da5b2c435e9a4447515f64736f6c63430008140033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH3 0xC1E CODESIZE SUB DUP1 PUSH3 0xC1E DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x26 SWAP2 PUSH3 0x1EA JUMP JUMPDEST DUP3 DUP3 DUP3 PUSH3 0x34 DUP3 PUSH3 0x4C JUMP JUMPDEST PUSH3 0x40 DUP4 DUP3 PUSH3 0xBB JUMP JUMPDEST POP POP POP POP POP POP PUSH3 0x2E1 JUMP JUMPDEST PUSH0 PUSH3 0x64 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xBFE DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH0 DUP1 MLOAD PUSH1 0x20 PUSH3 0xBFE DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE SSTORE DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH3 0x191 JUMPI PUSH0 DUP4 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 PUSH1 0x40 MLOAD PUSH3 0x13D SWAP2 SWAP1 PUSH3 0x2C4 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH3 0x177 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH3 0x17C JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH3 0x18F JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST POP JUMPDEST POP POP POP JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x1AD JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x1E2 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH3 0x1C8 JUMP JUMPDEST POP POP PUSH0 SWAP2 ADD MSTORE JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x1FD JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x208 DUP5 PUSH3 0x196 JUMP JUMPDEST SWAP3 POP PUSH3 0x218 PUSH1 0x20 DUP6 ADD PUSH3 0x196 JUMP JUMPDEST PUSH1 0x40 DUP6 ADD MLOAD SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x235 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x249 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP2 DUP2 GT ISZERO PUSH3 0x25E JUMPI PUSH3 0x25E PUSH3 0x1B2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT SWAP1 DUP2 AND PUSH1 0x3F ADD AND DUP2 ADD SWAP1 DUP4 DUP3 GT DUP2 DUP4 LT OR ISZERO PUSH3 0x289 JUMPI PUSH3 0x289 PUSH3 0x1B2 JUMP JUMPDEST DUP2 PUSH1 0x40 MSTORE DUP3 DUP2 MSTORE DUP10 PUSH1 0x20 DUP5 DUP8 ADD ADD GT ISZERO PUSH3 0x2A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x2B5 DUP4 PUSH1 0x20 DUP4 ADD PUSH1 0x20 DUP9 ADD PUSH3 0x1C6 JUMP JUMPDEST DUP1 SWAP6 POP POP POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 DUP3 MLOAD PUSH3 0x2D7 DUP2 DUP5 PUSH1 0x20 DUP8 ADD PUSH3 0x1C6 JUMP JUMPDEST SWAP2 SWAP1 SWAP2 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x90F DUP1 PUSH3 0x2EF PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC1 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x10D JUMPI PUSH2 0x64 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA2 JUMPI PUSH2 0x64 JUMP JUMPDEST CALLDATASIZE PUSH2 0x64 JUMPI STOP JUMPDEST PUSH2 0x6C PUSH2 0x12C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x79 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x8D PUSH2 0x88 CALLDATASIZE PUSH1 0x4 PUSH2 0x792 JUMP JUMPDEST PUSH2 0x176 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAD JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0xBC CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x341 JUMP JUMPDEST PUSH2 0x6C PUSH2 0xCF CALLDATASIZE PUSH1 0x4 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x417 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x511 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x99 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x118 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0x127 CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x53F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x16C JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x208 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x215 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x246 JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x32E JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x32B SWAP2 DUP2 ADD SWAP1 PUSH2 0x88E JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x33A JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x3FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x414 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x5FE JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4CD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x50C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x5FE SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x53A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x5F5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x414 DUP2 PUSH2 0x6E6 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x50C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x697 SWAP2 SWAP1 PUSH2 0x8AD JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x6CF JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6D4 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x170 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x70F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x7F4 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x809 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x33A DUP3 PUSH2 0x7D1 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x824 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x82D DUP5 PUSH2 0x7D1 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x849 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x85C JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x86A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x87B JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x89E JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8CC JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8B2 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 EXTCODECOPY 0x5C PUSH29 0xC467B7BE475B2D0E54372F96DB5B136991DED9DA5B2C435E9A4447515F PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER 0xB5 BALANCE 0x27 PUSH9 0x4A568B3173AE13B9F8 0xA6 ADD PUSH15 0x243E63B6E8EE1178D6A717850B5D61 SUB ",
        "sourceMap": "176:268:1:-:0;;;229:169;;;;;;;;;;;;;;;;;;:::i;:::-;349:21;372:12;386:4;907:23:0;372:12:1;907:9:0;:23::i;:::-;940:47;959:21;982:4;940:18;:47::i;:::-;805:189;;;229:169:1;;;176:268;;3408:346:0;3464:21;3488:8;-1:-1:-1;;;;;;;;;;;3313:73:0;;3136:266;3488:8;3464:32;;3669:8;-1:-1:-1;;;;;;;;;;;3594:84:0;3738:8;-1:-1:-1;;;;;3702:45:0;3723:13;-1:-1:-1;;;;;3702:45:0;;;;;;;;;;;3454:300;3408:346;:::o;1634:1067:3:-;1887:66;1881:73;;2062:93;;;;2180:69;;-1:-1:-1;;;;;2180:69:3;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;-1:-1:-1;;;;;2313:30:3;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;2363:322;2281:414;2260:435;1717:984;1634:1067;;:::o;14:177:5:-;93:13;;-1:-1:-1;;;;;135:31:5;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:127::-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:250;413:1;423:113;437:6;434:1;431:13;423:113;;;513:11;;;507:18;494:11;;;487:39;459:2;452:10;423:113;;;-1:-1:-1;;570:1:5;552:16;;545:27;328:250::o;583:1066::-;680:6;688;696;749:2;737:9;728:7;724:23;720:32;717:52;;;765:1;762;755:12;717:52;788:40;818:9;788:40;:::i;:::-;778:50;;847:49;892:2;881:9;877:18;847:49;:::i;:::-;940:2;925:18;;919:25;837:59;;-1:-1:-1;;;;;;993:14:5;;;990:34;;;1020:1;1017;1010:12;990:34;1058:6;1047:9;1043:22;1033:32;;1103:7;1096:4;1092:2;1088:13;1084:27;1074:55;;1125:1;1122;1115:12;1074:55;1154:2;1148:9;1176:2;1172;1169:10;1166:36;;;1182:18;;:::i;:::-;1257:2;1251:9;1225:2;1311:13;;-1:-1:-1;;1307:22:5;;;1331:2;1303:31;1299:40;1287:53;;;1355:18;;;1375:22;;;1352:46;1349:72;;;1401:18;;:::i;:::-;1441:10;1437:2;1430:22;1476:2;1468:6;1461:18;1516:7;1511:2;1506;1502;1498:11;1494:20;1491:33;1488:53;;;1537:1;1534;1527:12;1488:53;1550:68;1615:2;1610;1602:6;1598:15;1593:2;1589;1585:11;1550:68;:::i;:::-;1637:6;1627:16;;;;;;;583:1066;;;;;:::o;1654:287::-;1783:3;1821:6;1815:13;1837:66;1896:6;1891:3;1884:4;1876:6;1872:17;1837:66;:::i;:::-;1919:16;;;;;1654:287;-1:-1:-1;;1654:287:5:o;:::-;176:268:1;;;;;;"
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
              "src": "0:3128:5",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:5",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "83:263:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "129:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "138:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "141:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "131:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "131:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "131:12:5"
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
                                  "src": "104:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "113:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "100:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "100:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "125:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "96:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "96:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "93:52:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "154:36:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "180:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "167:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "167:23:5"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "158:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "300:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "309:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "312:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "302:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "302:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "302:12:5"
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
                                  "src": "212:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "223:5:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "230:66:5",
                                      "type": "",
                                      "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "219:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "219:78:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "209:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "209:89:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "202:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "202:97:5"
                        },
                        "nodeType": "YulIf",
                        "src": "199:117:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "325:15:5",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "335:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "325:6:5"
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
                      "src": "49:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "60:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "72:6:5",
                      "type": ""
                    }
                  ],
                  "src": "14:332:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "446:92:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "456:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "468:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "479:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "464:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "464:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "456:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "498:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value0",
                                      "nodeType": "YulIdentifier",
                                      "src": "523:6:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "516:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "516:14:5"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "509:6:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "509:22:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "491:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "491:41:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "491:41:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "415:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "426:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "437:4:5",
                      "type": ""
                    }
                  ],
                  "src": "351:187:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "592:147:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "602:29:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "624:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "611:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "611:20:5"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "602:5:5"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "717:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "726:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "729:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "719:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "719:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "719:12:5"
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
                                  "src": "653:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "664:5:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "671:42:5",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "660:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "660:54:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "650:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "650:65:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "643:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "643:73:5"
                        },
                        "nodeType": "YulIf",
                        "src": "640:93:5"
                      }
                    ]
                  },
                  "name": "abi_decode_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "571:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "582:5:5",
                      "type": ""
                    }
                  ],
                  "src": "543:196:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "814:116:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "860:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "869:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "872:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "862:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "862:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "862:12:5"
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
                                  "src": "835:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "844:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "831:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "831:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "856:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "827:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "827:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "824:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "885:39:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "914:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "895:18:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "895:29:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "885:6:5"
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
                      "src": "780:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "791:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "803:6:5",
                      "type": ""
                    }
                  ],
                  "src": "744:186:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1041:559:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1087:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1096:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1099:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1089:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1089:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1089:12:5"
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
                                  "src": "1062:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1071:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1058:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1058:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1083:2:5",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1054:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1054:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1051:52:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1112:39:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1141:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_address",
                            "nodeType": "YulIdentifier",
                            "src": "1122:18:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1122:29:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1112:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1160:46:5",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1191:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1202:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1187:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1187:18:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1174:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1174:32:5"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1164:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1215:28:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1225:18:5",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1219:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1270:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1279:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1282:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1272:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1272:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1272:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1258:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1266:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1255:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1255:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1252:34:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1295:32:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1309:9:5"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1320:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1305:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1305:22:5"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1299:2:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1375:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1384:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1387:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1377:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1377:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1377:12:5"
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
                                      "src": "1354:2:5"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1358:4:5",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1350:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1350:13:5"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1365:7:5"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1346:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1346:27:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1339:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1339:35:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1336:55:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1400:30:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1427:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "1414:12:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1414:16:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "1404:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1457:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1466:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1469:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1459:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1459:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1459:12:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1445:6:5"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1453:2:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1442:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1442:14:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1439:34:5"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1523:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1532:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1535:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1525:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1525:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1525:12:5"
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
                                      "src": "1496:2:5"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1500:6:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1492:3:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1492:15:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1509:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1488:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1488:24:5"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1514:7:5"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1485:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1485:37:5"
                        },
                        "nodeType": "YulIf",
                        "src": "1482:57:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1548:21:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1562:2:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1566:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1558:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1558:11:5"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1548:6:5"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1578:16:5",
                        "value": {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1588:6:5"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1578:6:5"
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
                      "src": "991:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1002:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1014:6:5",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "1022:6:5",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "1030:6:5",
                      "type": ""
                    }
                  ],
                  "src": "935:665:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1706:125:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1716:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1728:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1739:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1724:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1724:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1716:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1758:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1773:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1781:42:5",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1769:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1769:55:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1751:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1751:74:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1751:74:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1675:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1686:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1697:4:5",
                      "type": ""
                    }
                  ],
                  "src": "1605:226:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1935:149:5",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1945:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1957:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1968:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1953:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1953:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1945:4:5"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1987:9:5"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "2002:6:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2010:66:5",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1998:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1998:79:5"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1980:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1980:98:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1980:98:5"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1904:9:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1915:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1926:4:5",
                      "type": ""
                    }
                  ],
                  "src": "1836:248:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2167:199:5",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2213:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2222:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2225:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2215:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2215:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2215:12:5"
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
                                  "src": "2188:7:5"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2197:9:5"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2184:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2184:23:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2209:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2180:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2180:32:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2177:52:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2238:29:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2257:9:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2251:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2251:16:5"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2242:5:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2320:16:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2329:1:5",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2332:1:5",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2322:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2322:12:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2322:12:5"
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
                                  "src": "2289:5:5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value",
                                          "nodeType": "YulIdentifier",
                                          "src": "2310:5:5"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nodeType": "YulIdentifier",
                                        "src": "2303:6:5"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2303:13:5"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2296:6:5"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2296:21:5"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2286:2:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2286:32:5"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2279:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2279:40:5"
                        },
                        "nodeType": "YulIf",
                        "src": "2276:60:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2345:15:5",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2355:5:5"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2345:6:5"
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
                      "src": "2133:9:5",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2144:7:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2156:6:5",
                      "type": ""
                    }
                  ],
                  "src": "2089:277:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2545:164:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2562:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2573:2:5",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2555:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2555:21:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2555:21:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2596:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2607:2:5",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2592:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2592:18:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2612:2:5",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2585:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2585:30:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2585:30:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2635:9:5"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2646:2:5",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2631:3:5"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2631:18:5"
                            },
                            {
                              "hexValue": "4e4f545f415554484f52495a4544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "2651:16:5",
                              "type": "",
                              "value": "NOT_AUTHORIZED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2624:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2624:44:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2624:44:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2677:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2689:9:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2700:2:5",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2685:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2685:18:5"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2677:4:5"
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
                      "src": "2522:9:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2536:4:5",
                      "type": ""
                    }
                  ],
                  "src": "2371:338:5"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2851:275:5",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2861:27:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2881:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2875:5:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2875:13:5"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "2865:6:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2897:10:5",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2906:1:5",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "2901:1:5",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2968:77:5",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "pos",
                                        "nodeType": "YulIdentifier",
                                        "src": "2993:3:5"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2998:1:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2989:3:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2989:11:5"
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
                                                "src": "3016:6:5"
                                              },
                                              {
                                                "name": "i",
                                                "nodeType": "YulIdentifier",
                                                "src": "3024:1:5"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "3012:3:5"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3012:14:5"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3028:4:5",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3008:3:5"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3008:25:5"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3002:5:5"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3002:32:5"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2982:6:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2982:53:5"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2982:53:5"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2927:1:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2930:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2924:2:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2924:13:5"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2938:21:5",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2940:17:5",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "2949:1:5"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2952:4:5",
                                    "type": "",
                                    "value": "0x20"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2945:3:5"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2945:12:5"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "2940:1:5"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2920:3:5",
                          "statements": []
                        },
                        "src": "2916:129:5"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3054:26:5",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3068:3:5"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3073:6:5"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3064:3:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3064:16:5"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "3058:2:5",
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
                              "src": "3096:2:5"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3100:1:5",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3089:6:5"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3089:13:5"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3089:13:5"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3111:9:5",
                        "value": {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3118:2:5"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3111:3:5"
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
                      "src": "2827:3:5",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2832:6:5",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2843:3:5",
                      "type": ""
                    }
                  ],
                  "src": "2714:412:5"
                }
              ]
            },
            "contents": "{\n    { }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let offset := calldataload(add(headStart, 32))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value1 := add(_2, 32)\n        value2 := length\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e7e213d5e2bee0acc2c7bf8bfda19ef0cae82e7b8c997e7e898919269971e7c4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"NOT_AUTHORIZED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_bytes_memory_ptr__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        let length := mload(value0)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 0x20) }\n        {\n            mstore(add(pos, i), mload(add(add(value0, i), 0x20)))\n        }\n        let _1 := add(pos, length)\n        mstore(_1, 0)\n        end := _1\n    }\n}",
            "id": 5,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {},
        "linkReferences": {},
        "object": "60806040526004361061005d575f3560e01c80634f1ef286116100425780634f1ef286146100c15780638da5cb5b146100d4578063f2fde38b1461010d57610064565b806301ffc9a71461006e5780633659cfe6146100a257610064565b3661006457005b61006c61012c565b005b348015610079575f80fd5b5061008d610088366004610792565b610176565b60405190151581526020015b60405180910390f35b3480156100ad575f80fd5b5061006c6100bc3660046107f9565b610341565b61006c6100cf366004610812565b610417565b3480156100df575f80fd5b506100e8610511565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b348015610118575f80fd5b5061006c6101273660046107f9565b61053f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545f3681823780813683855af491503d8082833e82801561016c578183f35b8183fd5b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061020857507f7f5828d0000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b1561021557506001919050565b7fffffffff00000000000000000000000000000000000000000000000000000000808316900361024657505f919050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008416600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa92505050801561032e575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261032b9181019061088e565b60015b61033a57505f92915050565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064015b60405180910390fd5b6104148160405180602001604052805f8152506105fe565b50565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b61050c8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506105fe92505050565b505050565b5f61053a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a454400000000000000000000000000000000000060448201526064016103f3565b610414816106e6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80549083905560405173ffffffffffffffffffffffffffffffffffffffff80851691908316907f5570d70a002632a7b0b3c9304cc89efb62d8da9eca0dbd7752c83b7379068296905f90a381511561050c575f8373ffffffffffffffffffffffffffffffffffffffff168360405161069791906108ad565b5f60405180830381855af49150503d805f81146106cf576040519150601f19603f3d011682016040523d82523d5f602084013e6106d4565b606091505b5050905080610170573d805f803e805ffd5b5f61070f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103558173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f602082840312156107a2575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461033a575f80fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146107f4575f80fd5b919050565b5f60208284031215610809575f80fd5b61033a826107d1565b5f805f60408486031215610824575f80fd5b61082d846107d1565b9250602084013567ffffffffffffffff80821115610849575f80fd5b818601915086601f83011261085c575f80fd5b81358181111561086a575f80fd5b87602082850101111561087b575f80fd5b6020830194508093505050509250925092565b5f6020828403121561089e575f80fd5b8151801515811461033a575f80fd5b5f82515f5b818110156108cc57602081860181015185830152016108b2565b505f92019182525091905056fea26469706673582212203c5c7cc467b7be475b2d0e54372f96db5b136991ded9da5b2c435e9a4447515f64736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x5D JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4F1EF286 GT PUSH2 0x42 JUMPI DUP1 PUSH4 0x4F1EF286 EQ PUSH2 0xC1 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xD4 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x10D JUMPI PUSH2 0x64 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0x6E JUMPI DUP1 PUSH4 0x3659CFE6 EQ PUSH2 0xA2 JUMPI PUSH2 0x64 JUMP JUMPDEST CALLDATASIZE PUSH2 0x64 JUMPI STOP JUMPDEST PUSH2 0x6C PUSH2 0x12C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x79 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x8D PUSH2 0x88 CALLDATASIZE PUSH1 0x4 PUSH2 0x792 JUMP JUMPDEST PUSH2 0x176 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xAD JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0xBC CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x341 JUMP JUMPDEST PUSH2 0x6C PUSH2 0xCF CALLDATASIZE PUSH1 0x4 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x417 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0xE8 PUSH2 0x511 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x99 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x118 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH2 0x6C PUSH2 0x127 CALLDATASIZE PUSH1 0x4 PUSH2 0x7F9 JUMP JUMPDEST PUSH2 0x53F JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH0 CALLDATASIZE DUP2 DUP3 CALLDATACOPY DUP1 DUP2 CALLDATASIZE DUP4 DUP6 GAS DELEGATECALL SWAP2 POP RETURNDATASIZE DUP1 DUP3 DUP4 RETURNDATACOPY DUP3 DUP1 ISZERO PUSH2 0x16C JUMPI DUP2 DUP4 RETURN JUMPDEST DUP2 DUP4 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ DUP1 PUSH2 0x208 JUMPI POP PUSH32 0x7F5828D000000000000000000000000000000000000000000000000000000000 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP4 AND EQ JUMPDEST ISZERO PUSH2 0x215 JUMPI POP PUSH1 0x1 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP1 DUP4 AND SWAP1 SUB PUSH2 0x246 JUMPI POP PUSH0 SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC SLOAD PUSH1 0x40 MLOAD PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP5 AND PUSH1 0x4 DUP3 ADD MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 PUSH4 0x1FFC9A7 SWAP1 PUSH1 0x24 ADD PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL SWAP3 POP POP POP DUP1 ISZERO PUSH2 0x32E JUMPI POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F RETURNDATASIZE SWAP1 DUP2 ADD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0 AND DUP3 ADD SWAP1 SWAP3 MSTORE PUSH2 0x32B SWAP2 DUP2 ADD SWAP1 PUSH2 0x88E JUMP JUMPDEST PUSH1 0x1 JUMPDEST PUSH2 0x33A JUMPI POP PUSH0 SWAP3 SWAP2 POP POP JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x3FC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x414 DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x20 ADD PUSH1 0x40 MSTORE DUP1 PUSH0 DUP2 MSTORE POP PUSH2 0x5FE JUMP JUMPDEST POP JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4CD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x50C DUP4 DUP4 DUP4 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP PUSH2 0x5FE SWAP3 POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x53A PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x5F5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E4F545F415554484F52495A4544000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x3F3 JUMP JUMPDEST PUSH2 0x414 DUP2 PUSH2 0x6E6 JUMP JUMPDEST PUSH32 0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP1 DUP6 AND SWAP2 SWAP1 DUP4 AND SWAP1 PUSH32 0x5570D70A002632A7B0B3C9304CC89EFB62D8DA9ECA0DBD7752C83B7379068296 SWAP1 PUSH0 SWAP1 LOG3 DUP2 MLOAD ISZERO PUSH2 0x50C JUMPI PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH1 0x40 MLOAD PUSH2 0x697 SWAP2 SWAP1 PUSH2 0x8AD JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 GAS DELEGATECALL SWAP2 POP POP RETURNDATASIZE DUP1 PUSH0 DUP2 EQ PUSH2 0x6CF JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x6D4 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x170 JUMPI RETURNDATASIZE DUP1 PUSH0 DUP1 RETURNDATACOPY DUP1 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x70F PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SLOAD SWAP1 JUMP JUMPDEST SWAP1 POP DUP2 PUSH32 0xB53127684A568B3173AE13B9F8A6016E243E63B6E8EE1178D6A717850B5D6103 SSTORE DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x7A2 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP2 AND DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0x7F4 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x809 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x33A DUP3 PUSH2 0x7D1 JUMP JUMPDEST PUSH0 DUP1 PUSH0 PUSH1 0x40 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x824 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x82D DUP5 PUSH2 0x7D1 JUMP JUMPDEST SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP1 DUP3 GT ISZERO PUSH2 0x849 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 DUP7 ADD SWAP2 POP DUP7 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x85C JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD DUP2 DUP2 GT ISZERO PUSH2 0x86A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP8 PUSH1 0x20 DUP3 DUP6 ADD ADD GT ISZERO PUSH2 0x87B JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH1 0x20 DUP4 ADD SWAP5 POP DUP1 SWAP4 POP POP POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x89E JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0x33A JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP3 MLOAD PUSH0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x8CC JUMPI PUSH1 0x20 DUP2 DUP7 ADD DUP2 ADD MLOAD DUP6 DUP4 ADD MSTORE ADD PUSH2 0x8B2 JUMP JUMPDEST POP PUSH0 SWAP3 ADD SWAP2 DUP3 MSTORE POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 EXTCODECOPY 0x5C PUSH29 0xC467B7BE475B2D0E54372F96DB5B136991DED9DA5B2C435E9A4447515F PUSH5 0x736F6C6343 STOP ADDMOD EQ STOP CALLER ",
        "sourceMap": "176:268:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;803:11:3;:9;:11::i;:::-;176:268:1;1312:877:0;;;;;;;;;;-1:-1:-1;1312:877:0;;;;;:::i;:::-;;:::i;:::-;;;516:14:5;;509:22;491:41;;479:2;464:18;1312:877:0;;;;;;;;2301:123;;;;;;;;;;-1:-1:-1;2301:123:0;;;;;:::i;:::-;;:::i;2430:161::-;;;;;;:::i;:::-;;:::i;1225:81::-;;;;;;;;;;;;;:::i;:::-;;;1781:42:5;1769:55;;;1751:74;;1739:2;1724:18;1225:81:0;1605:226:5;2195:100:0;;;;;;;;;;-1:-1:-1;2195:100:0;;;;;:::i;:::-;;:::i;1044:584:3:-;1207:66;1201:73;1305:3;1310:14;1305:3;;1287:38;1305:3;;1310:14;1305:3;1373:21;1366:5;1353:69;1338:84;;1448:16;1498:5;1305:3;;1477:27;1524:7;1544:27;;;;1604:5;1305:3;1594:16;1544:27;1563:5;1305:3;1553:16;1517:95;;;;;1044:584::o;1312:877:0:-;1373:4;1393:16;;;;;;:36;;-1:-1:-1;1413:16:0;;;;;1393:36;1389:78;;;-1:-1:-1;1452:4:0;;1312:877;-1:-1:-1;1312:877:0:o;1389:78::-;1480:16;;;;;;1476:59;;-1:-1:-1;1519:5:0;;1312:877;-1:-1:-1;1312:877:0:o;1476:59::-;1688:66;1682:73;2040:36;;;;;2010:66:5;1998:79;;2040:36:0;;;1980:98:5;2040:32:0;;;;;;1953:18:5;;2040:36:0;;;;;;;;;;;;;;;;;;-1:-1:-1;2040:36:0;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;2036:147;;-1:-1:-1;2167:5:0;;1312:877;-1:-1:-1;;1312:877:0:o;2036:147::-;2121:7;1312:877;-1:-1:-1;;;1312:877:0:o;2301:123::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:5;2846:49:0;;;2555:21:5;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;;;;;;;;;2376:41:::1;2395:17;2376:41;;;;;;;;;;;::::0;:18:::1;:41::i;:::-;2301:123:::0;:::o;2430:161::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:5;2846:49:0;;;2555:21:5;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;2371:338:5;2846:49:0;2541:43:::1;2560:17;2579:4;;2541:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2541:18:0::1;::::0;-1:-1:-1;;;2541:43:0:i:1;:::-;2430:161:::0;;;:::o;1225:81::-;1265:7;1291:8;3319:66;3313:73;;3136:266;1291:8;1284:15;;1225:81;:::o;2195:100::-;3319:66;3313:73;2854:22;;:10;:22;;;2846:49;;;;;;;2573:2:5;2846:49:0;;;2555:21:5;2612:2;2592:18;;;2585:30;2651:16;2631:18;;;2624:44;2685:18;;2846:49:0;2371:338:5;2846:49:0;2269:19:::1;2279:8;2269:9;:19::i;1634:1067:3:-:0;1887:66;1881:73;;2062:93;;;;2180:69;;;;;;;;;;;;;1727:30;;2180:69;2264:11;;:15;2260:435;;2296:12;2313:17;:30;;2344:4;2313:36;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:54;;;2368:7;2363:322;;2534:16;2592:14;2589:1;;2571:36;2638:14;2589:1;2628:25;3408:346:0;3464:21;3488:8;3319:66;3313:73;;3136:266;3488:8;3464:32;;3669:8;3601:66;3594:84;3738:8;3702:45;;3723:13;3702:45;;;;;;;;;;;;3454:300;3408:346;:::o;14:332:5:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;180:9;167:23;230:66;223:5;219:78;212:5;209:89;199:117;;312:1;309;302:12;543:196;611:20;;671:42;660:54;;650:65;;640:93;;729:1;726;719:12;640:93;543:196;;;:::o;744:186::-;803:6;856:2;844:9;835:7;831:23;827:32;824:52;;;872:1;869;862:12;824:52;895:29;914:9;895:29;:::i;935:665::-;1014:6;1022;1030;1083:2;1071:9;1062:7;1058:23;1054:32;1051:52;;;1099:1;1096;1089:12;1051:52;1122:29;1141:9;1122:29;:::i;:::-;1112:39;;1202:2;1191:9;1187:18;1174:32;1225:18;1266:2;1258:6;1255:14;1252:34;;;1282:1;1279;1272:12;1252:34;1320:6;1309:9;1305:22;1295:32;;1365:7;1358:4;1354:2;1350:13;1346:27;1336:55;;1387:1;1384;1377:12;1336:55;1427:2;1414:16;1453:2;1445:6;1442:14;1439:34;;;1469:1;1466;1459:12;1439:34;1514:7;1509:2;1500:6;1496:2;1492:15;1488:24;1485:37;1482:57;;;1535:1;1532;1525:12;1482:57;1566:2;1562;1558:11;1548:21;;1588:6;1578:16;;;;;935:665;;;;;:::o;2089:277::-;2156:6;2209:2;2197:9;2188:7;2184:23;2180:32;2177:52;;;2225:1;2222;2215:12;2177:52;2257:9;2251:16;2310:5;2303:13;2296:21;2289:5;2286:32;2276:60;;2332:1;2329;2322:12;2714:412;2843:3;2881:6;2875:13;2906:1;2916:129;2930:6;2927:1;2924:13;2916:129;;;3028:4;3012:14;;;3008:25;;3002:32;2989:11;;;2982:53;2945:12;2916:129;;;-1:-1:-1;3100:1:5;3064:16;;3089:13;;;-1:-1:-1;3064:16:5;2714:412;-1:-1:-1;2714:412:5:o"
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementationAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"id\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Proxy implementing EIP173 for ownership management that accept ETH via receive\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/EIP173/EIP173ProxyWithReceive.sol\":\"EIP173ProxyWithReceive\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/EIP173/EIP173Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"../EIP1967/Proxy.sol\\\";\\n\\ninterface ERC165 {\\n    function supportsInterface(bytes4 id) external view returns (bool);\\n}\\n\\n///@notice Proxy implementing EIP173 for ownership management\\ncontract EIP173Proxy is Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Constructor\\n    // --------------------------------------------------------------------------------------------\\n\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data) payable {\\n        _setOwner(ownerAddress);\\n        _setImplementation(implementationAddress, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    function owner() external view returns (address) {\\n        return _owner();\\n    }\\n\\n    function supportsInterface(bytes4 id) external view returns (bool) {\\n        if (id == 0x01ffc9a7 || id == 0x7f5828d0) {\\n            return true;\\n        }\\n        if (id == 0xFFFFFFFF) {\\n            return false;\\n        }\\n\\n        ERC165 implementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            implementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // Technically this is not standard compliant as ERC-165 require 30,000 gas which that call cannot ensure\\n        // because it is itself inside `supportsInterface` that might only get 30,000 gas.\\n        // In practise this is unlikely to be an issue.\\n        try implementation.supportsInterface(id) returns (bool support) {\\n            return support;\\n        } catch {\\n            return false;\\n        }\\n    }\\n\\n    function transferOwnership(address newOwner) external onlyOwner {\\n        _setOwner(newOwner);\\n    }\\n\\n    function upgradeTo(address newImplementation) external onlyOwner {\\n        _setImplementation(newImplementation, \\\"\\\");\\n    }\\n\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable onlyOwner {\\n        _setImplementation(newImplementation, data);\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Modifiers\\n    // --------------------------------------------------------------------------------------------\\n\\n    modifier onlyOwner() {\\n        require(msg.sender == _owner(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _owner() internal view returns (address adminAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            adminAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n\\n    function _setOwner(address newOwner) internal {\\n        address previousOwner = _owner();\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, newOwner)\\n        }\\n        emit OwnershipTransferred(previousOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0xf424b3ab9dd0c0328554e3ff27d6cae0681b81a107b2a9313ecadae374800f2c\",\"license\":\"MIT\"},\"solc_0.8/EIP173/EIP173ProxyWithReceive.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nimport \\\"./EIP173Proxy.sol\\\";\\n\\n///@notice Proxy implementing EIP173 for ownership management that accept ETH via receive\\ncontract EIP173ProxyWithReceive is EIP173Proxy {\\n    constructor(address implementationAddress, address ownerAddress, bytes memory data)\\n        payable\\n        EIP173Proxy(implementationAddress, ownerAddress, data)\\n    {}\\n\\n    receive() external payable override {}\\n}\\n\",\"keccak256\":\"0x995969899b871520cc816a4e30860a55faeb90bc4a387a6e8c242ff40d2fa27a\",\"license\":\"MIT\"},\"solc_0.8/EIP1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
    "sourceName": "solc_0.8/EIP1967/Proxied.sol",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/EIP1967/Proxied.sol\":\"Proxied\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/EIP1967/Proxied.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\nabstract contract Proxied {\\n    /// @notice to be used by initialisation / postUpgrade function so that only the proxy's admin can execute them\\n    /// It also allows these functions to be called inside a contructor\\n    /// even if the contract is meant to be used without proxy\\n    modifier proxied() {\\n        address proxyAdminAddress = _proxyAdmin();\\n        // With hardhat-deploy proxies\\n        // the proxyAdminAddress is zero only for the implementation contract\\n        // if the implementation contract want to be used as a standalone/immutable contract\\n        // it simply has to execute the `proxied` function\\n        // This ensure the proxyAdminAddress is never zero post deployment\\n        // And allow you to keep the same code for both proxied contract and immutable contract\\n        if (proxyAdminAddress == address(0)) {\\n            // ensure can not be called twice when used outside of proxy : no admin\\n            // solhint-disable-next-line security/no-inline-assembly\\n            assembly {\\n                sstore(\\n                    0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103,\\n                    0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\\n                )\\n            }\\n        } else {\\n            require(msg.sender == proxyAdminAddress);\\n        }\\n        _;\\n    }\\n\\n    modifier onlyProxyAdmin() {\\n        require(msg.sender == _proxyAdmin(), \\\"NOT_AUTHORIZED\\\");\\n        _;\\n    }\\n\\n    function _proxyAdmin() internal view returns (address ownerAddress) {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            ownerAddress := sload(0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103)\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xaaceeafeeaf0d200ca3942d8bf14c1c4f787a77f79cc87c08bb668e65acdee29\",\"license\":\"MIT\"}},\"version\":1}",
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
    "sourceName": "solc_0.8/EIP1967/Proxy.sol",
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousImplementation\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"ProxyImplementationUpdated\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/EIP1967/Proxy.sol\":\"Proxy\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/EIP1967/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n// EIP-1967\\nabstract contract Proxy {\\n    // --------------------------------------------------------------------------------------------\\n    // Events\\n    // --------------------------------------------------------------------------------------------\\n\\n    event ProxyImplementationUpdated(address indexed previousImplementation, address indexed newImplementation);\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Public Interface\\n    // --------------------------------------------------------------------------------------------\\n\\n    receive() external payable virtual {\\n        revert(\\\"ETHER_REJECTED\\\"); // explicit reject by default\\n    }\\n\\n    fallback() external payable {\\n        _fallback();\\n    }\\n\\n    // --------------------------------------------------------------------------------------------\\n    // Internal\\n    // --------------------------------------------------------------------------------------------\\n\\n    function _fallback() internal {\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            let implementationAddress := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n            calldatacopy(0x0, 0x0, calldatasize())\\n            let success := delegatecall(gas(), implementationAddress, 0x0, calldatasize(), 0, 0)\\n            let retSz := returndatasize()\\n            returndatacopy(0, 0, retSz)\\n            switch success\\n            case 0 { revert(0, retSz) }\\n            default { return(0, retSz) }\\n        }\\n    }\\n\\n    function _setImplementation(address newImplementation, bytes memory data) internal {\\n        address previousImplementation;\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            previousImplementation := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\n        }\\n\\n        // solhint-disable-next-line security/no-inline-assembly\\n        assembly {\\n            sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, newImplementation)\\n        }\\n\\n        emit ProxyImplementationUpdated(previousImplementation, newImplementation);\\n\\n        if (data.length > 0) {\\n            (bool success,) = newImplementation.delegatecall(data);\\n            if (!success) {\\n                assembly {\\n                    // This assembly ensure the revert contains the exact string data\\n                    let returnDataSize := returndatasize()\\n                    returndatacopy(0, 0, returnDataSize)\\n                    revert(0, returnDataSize)\\n                }\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xb2192ed12467c27c3f6035903c0350c709c88c5bfde520e016c99f46b389016d\",\"license\":\"MIT\"}},\"version\":1}",
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
        "stateMutability": "nonpayable",
        "type": "fallback"
      }
    ],
    "bytecode": "0x61034060405234801562000011575f80fd5b5060405162001087380380620010878339810160408190526200003491620006d9565b602081015151815151600a811115620000945760405162461bcd60e51b815260206004820152601b60248201527f4d41585f494d504c454d454e544154494f4e535f52454143484544000000000060448201526064015b60405180910390fd5b603c821115620000da5760405162461bcd60e51b815260206004820152601060248201526f13505617d4d251d4d7d4915050d2115160821b60448201526064016200008b565b5f835f01515f81518110620000f357620000f3620007df565b602002602001015190505f805f805f805f805f60018b111562000133578c5180516001908110620001285762000128620007df565b602002602001015198505b60028b111562000160578c5180516002908110620001555762000155620007df565b602002602001015197505b60038b11156200018d578c5180516003908110620001825762000182620007df565b602002602001015196505b60048b1115620001ba578c5180516004908110620001af57620001af620007df565b602002602001015195505b60058b1115620001e7578c5180516005908110620001dc57620001dc620007df565b602002602001015194505b60068b111562000214578c5180516006908110620002095762000209620007df565b602002602001015193505b60078b111562000241578c5180516007908110620002365762000236620007df565b602002602001015192505b60088b11156200026e578c5180516008908110620002635762000263620007df565b602002602001015191505b60098b11156200029b578c5180516009908110620002905762000290620007df565b602002602001015190505b6001600160a01b03998a1660805297891660a05295881660c05293871660e05291861661010052851661012052841661014052831661016052821661018052166101a0525f80808080808080808080805b8d8110156200054a575f8f6020015182815181106200030f576200030f620007df565b602002602001015160d81c64ffffffffff169050808310620003635760405162461bcd60e51b815260206004820152600c60248201526b2727aa2fa4a72fa7a92222a960a11b60448201526064016200008b565b80925060068210156200038a576200037d82602862000807565b81901b8d179c5062000534565b600c821015620003bb57620003a160068362000827565b620003ae90602862000807565b81901b8c179b5062000534565b6012821015620003ec57620003d2600c8362000827565b620003df90602862000807565b81901b8b179a5062000534565b60188210156200041d576200040360128362000827565b6200041090602862000807565b81901b8a17995062000534565b601e8210156200044e576200043460188362000827565b6200044190602862000807565b81901b8917985062000534565b60248210156200047f5762000465601e8362000827565b6200047290602862000807565b81901b8817975062000534565b602a821015620004b0576200049660248362000827565b620004a390602862000807565b81901b8717965062000534565b6030821015620004e157620004c7602a8362000827565b620004d490602862000807565b81901b8617955062000534565b60368210156200051257620004f860308362000827565b6200050590602862000807565b81901b8517955062000534565b6200051f60368362000827565b6200052c90602862000807565b81901b841795505b508062000541816200083d565b915050620002ec565b50506101e09990995261020097909752610220959095526102409390935261026091909152610280526102a0526102c0526102e052610300525061032052604001516001600160a01b03166101c05262000858565b634e487b7160e01b5f52604160045260245ffd5b604051606081016001600160401b0381118282101715620005d857620005d86200059f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200060957620006096200059f565b604052919050565b5f6001600160401b038211156200062c576200062c6200059f565b5060051b60200190565b80516001600160a01b03811681146200064d575f80fd5b919050565b5f82601f83011262000662575f80fd5b815160206200067b620006758362000611565b620005de565b82815260059290921b840181019181810190868411156200069a575f80fd5b8286015b84811015620006ce5780516001600160d81b031981168114620006c0575f8081fd5b83529183019183016200069e565b509695505050505050565b5f6020808385031215620006eb575f80fd5b82516001600160401b038082111562000702575f80fd5b908401906060828703121562000716575f80fd5b62000720620005b3565b8251828111156200072f575f80fd5b8301601f8101881362000740575f80fd5b805162000751620006758262000611565b81815260059190911b8201860190868101908a83111562000770575f80fd5b928701925b828410156200079957620007898462000636565b8252928701929087019062000775565b84525050508284015182811115620007af575f80fd5b620007bd8882860162000652565b8583015250620007d06040840162000636565b60408201529695505050505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620008215762000821620007f3565b92915050565b81810381811115620008215762000821620007f3565b5f60018201620008515762000851620007f3565b5060010190565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516103205161074a6200093d5f395f602001525f61034501525f6102fe01525f6102ae01525f61025e01525f61020e01525f6101be01525f61016e01525f61011e01525f60ce01525f607e01525f6105ad01525f61058601525f61055701525f61052801525f6104f901525f6104ca01525f61049b01525f61046c01525f61043d01525f61040e01525f6103df015261074a5ff3fe608060405234801561000f575f80fd5b505f803560e01c90808061004460017f0000000000000000000000000000000000000000000000000000000000000000610699565b90505b8082116103d3575f600261005b83856106b2565b61006591906106c5565b90505f60068210156100ad5761007c8260286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b600c8210156100fd576100c1600683610699565b6100cc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601282101561014d57610111600c83610699565b61011c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601882101561019d57610161601283610699565b61016c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601e8210156101ed576101b1601883610699565b6101bc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602482101561023d57610201601e83610699565b61020c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602a82101561028d57610251602483610699565b61025c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b60308210156102dd576102a1602a83610699565b6102ac9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b603682101561032d576102f1603083610699565b6102fc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b610338603683610699565b6103439060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561039857610391600184610699565b93506103cb565b8663ffffffff168163ffffffff1610156103be576103b78360016106b2565b94506103cb565b5060ff1693506103d39050565b505050610047565b5f8360010361040357507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360020361043257507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360030361046157507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360040361049057507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836005036104bf57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836006036104ee57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360070361051d57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360080361054c57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360090361057b57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b83600a036105aa57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff811661064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b365f80375f80365f845af43d5f803e808015610668573d5ff35b3d5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156106ac576106ac61066c565b92915050565b808201808211156106ac576106ac61066c565b5f826106f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176106ac576106ac61066c56fea2646970667358221220951ab0f7677ad17e29a3851e05fcd6dc22f2d01b4f3f93ad1356a9f517bb6b1664736f6c63430008140033",
    "deployedBytecode": "0x608060405234801561000f575f80fd5b505f803560e01c90808061004460017f0000000000000000000000000000000000000000000000000000000000000000610699565b90505b8082116103d3575f600261005b83856106b2565b61006591906106c5565b90505f60068210156100ad5761007c8260286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b600c8210156100fd576100c1600683610699565b6100cc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601282101561014d57610111600c83610699565b61011c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601882101561019d57610161601283610699565b61016c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601e8210156101ed576101b1601883610699565b6101bc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602482101561023d57610201601e83610699565b61020c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602a82101561028d57610251602483610699565b61025c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b60308210156102dd576102a1602a83610699565b6102ac9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b603682101561032d576102f1603083610699565b6102fc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b610338603683610699565b6103439060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561039857610391600184610699565b93506103cb565b8663ffffffff168163ffffffff1610156103be576103b78360016106b2565b94506103cb565b5060ff1693506103d39050565b505050610047565b5f8360010361040357507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360020361043257507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360030361046157507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360040361049057507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836005036104bf57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836006036104ee57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360070361051d57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360080361054c57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360090361057b57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b83600a036105aa57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff811661064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b365f80375f80365f845af43d5f803e808015610668573d5ff35b3d5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156106ac576106ac61066c565b92915050565b808201808211156106ac576106ac61066c565b5f826106f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176106ac576106ac61066c56fea2646970667358221220951ab0f7677ad17e29a3851e05fcd6dc22f2d01b4f3f93ad1356a9f517bb6b1664736f6c63430008140033",
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
          "@_584": {
            "entryPoint": null,
            "id": 584,
            "parameterSlots": 1,
            "returnSlots": 0
          },
          "abi_decode_address_fromMemory": {
            "entryPoint": 1590,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "abi_decode_array_bytes5_dyn_fromMemory": {
            "entryPoint": 1618,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "abi_decode_tuple_t_struct$_Routes_$55_memory_ptr_fromMemory": {
            "entryPoint": 1753,
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
            "entryPoint": 1502,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "allocate_memory_905": {
            "entryPoint": 1459,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 1
          },
          "array_allocation_size_array_address_dyn": {
            "entryPoint": 1553,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "checked_mul_t_uint256": {
            "entryPoint": 2055,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_sub_t_uint256": {
            "entryPoint": 2087,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "increment_t_uint256": {
            "entryPoint": 2109,
            "id": null,
            "parameterSlots": 1,
            "returnSlots": 1
          },
          "panic_error_0x11": {
            "entryPoint": 2035,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "panic_error_0x32": {
            "entryPoint": 2015,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          },
          "panic_error_0x41": {
            "entryPoint": 1439,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:5085:1",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:1",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "46:95:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "63:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "70:3:1",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "75:10:1",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "66:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "66:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "56:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "56:31:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "56:31:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "103:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "106:4:1",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "96:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "96:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "96:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "127:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "130:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "120:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "120:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "120:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "14:127:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "191:207:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "201:19:1",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "217:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "211:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "211:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "201:6:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "229:35:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "251:6:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "259:4:1",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "247:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "247:17:1"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "233:10:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "339:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "341:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "341:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "341:18:1"
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
                                  "src": "282:10:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "302:2:1",
                                          "type": "",
                                          "value": "64"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "306:1:1",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "298:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "298:10:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "310:1:1",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "294:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "294:18:1"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "279:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "279:34:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "318:10:1"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "330:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "315:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "315:22:1"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "276:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "276:62:1"
                        },
                        "nodeType": "YulIf",
                        "src": "273:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "377:2:1",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "381:10:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "370:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "370:22:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "370:22:1"
                      }
                    ]
                  },
                  "name": "allocate_memory_905",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "180:6:1",
                      "type": ""
                    }
                  ],
                  "src": "146:252:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "448:230:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "458:19:1",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "474:2:1",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "468:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "468:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "458:6:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "486:58:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "508:6:1"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "size",
                                      "nodeType": "YulIdentifier",
                                      "src": "524:4:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "530:2:1",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "520:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "520:13:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "539:2:1",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "535:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "535:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "516:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "516:27:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "504:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "504:40:1"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "490:10:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "619:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "621:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "621:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "621:18:1"
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
                                  "src": "562:10:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "582:2:1",
                                          "type": "",
                                          "value": "64"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "586:1:1",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "578:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "578:10:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "590:1:1",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "574:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "574:18:1"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "559:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "559:34:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "598:10:1"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "610:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "595:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "595:22:1"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "556:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "556:62:1"
                        },
                        "nodeType": "YulIf",
                        "src": "553:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "657:2:1",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "661:10:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "650:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "650:22:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "650:22:1"
                      }
                    ]
                  },
                  "name": "allocate_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "428:4:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "437:6:1",
                      "type": ""
                    }
                  ],
                  "src": "403:275:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "752:114:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "796:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "798:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "798:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "798:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "768:6:1"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "784:2:1",
                                      "type": "",
                                      "value": "64"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "788:1:1",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "780:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "780:10:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "792:1:1",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "776:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "776:18:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "765:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "765:30:1"
                        },
                        "nodeType": "YulIf",
                        "src": "762:56:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "827:33:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "843:1:1",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "846:6:1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "839:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "839:14:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "855:4:1",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "835:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "835:25:1"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "827:4:1"
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
                      "src": "732:6:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "743:4:1",
                      "type": ""
                    }
                  ],
                  "src": "683:183:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "931:117:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "941:22:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "956:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "950:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "950:13:1"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "941:5:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1026:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1035:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1038:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1028:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1028:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1028:12:1"
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
                                  "src": "985:5:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "996:5:1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1011:3:1",
                                              "type": "",
                                              "value": "160"
                                            },
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "1016:1:1",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shl",
                                            "nodeType": "YulIdentifier",
                                            "src": "1007:3:1"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1007:11:1"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1020:1:1",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sub",
                                        "nodeType": "YulIdentifier",
                                        "src": "1003:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1003:19:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "992:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "992:31:1"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "982:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "982:42:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "975:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "975:50:1"
                        },
                        "nodeType": "YulIf",
                        "src": "972:70:1"
                      }
                    ]
                  },
                  "name": "abi_decode_address_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "910:6:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "921:5:1",
                      "type": ""
                    }
                  ],
                  "src": "871:177:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1127:771:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1176:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1185:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1188:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1178:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1178:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1178:12:1"
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
                                      "src": "1155:6:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1163:4:1",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1151:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1151:17:1"
                                },
                                {
                                  "name": "end",
                                  "nodeType": "YulIdentifier",
                                  "src": "1170:3:1"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "1147:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1147:27:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1140:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1140:35:1"
                        },
                        "nodeType": "YulIf",
                        "src": "1137:55:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1201:23:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1217:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1211:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1211:13:1"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1205:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1233:14:1",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1243:4:1",
                          "type": "",
                          "value": "0x20"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1237:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1256:71:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1323:2:1"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_array_address_dyn",
                                "nodeType": "YulIdentifier",
                                "src": "1283:39:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1283:43:1"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "1267:15:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1267:60:1"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "1260:3:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1336:16:1",
                        "value": {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "1349:3:1"
                        },
                        "variables": [
                          {
                            "name": "dst_1",
                            "nodeType": "YulTypedName",
                            "src": "1340:5:1",
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
                              "src": "1368:3:1"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1373:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1361:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1361:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1361:15:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1385:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1396:3:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1401:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1392:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1392:12:1"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1385:3:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1413:46:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1435:6:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1447:1:1",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1450:2:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "1443:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1443:10:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1431:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1431:23:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1456:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1427:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1427:32:1"
                        },
                        "variables": [
                          {
                            "name": "srcEnd",
                            "nodeType": "YulTypedName",
                            "src": "1417:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1487:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1496:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1499:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1489:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1489:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1489:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1474:6:1"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "1482:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1471:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1471:15:1"
                        },
                        "nodeType": "YulIf",
                        "src": "1468:35:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1512:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1527:6:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1535:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1523:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1523:15:1"
                        },
                        "variables": [
                          {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "1516:3:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1603:266:1",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "1617:23:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "1636:3:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1630:5:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1630:10:1"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "1621:5:1",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "1722:74:1",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "1740:11:1",
                                    "value": {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1750:1:1",
                                      "type": "",
                                      "value": "0"
                                    },
                                    "variables": [
                                      {
                                        "name": "_3",
                                        "nodeType": "YulTypedName",
                                        "src": "1744:2:1",
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
                                          "src": "1775:2:1"
                                        },
                                        {
                                          "name": "_3",
                                          "nodeType": "YulIdentifier",
                                          "src": "1779:2:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "1768:6:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1768:14:1"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1768:14:1"
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
                                        "src": "1666:5:1"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "1677:5:1"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1688:3:1",
                                                "type": "",
                                                "value": "216"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1693:12:1",
                                                "type": "",
                                                "value": "0xffffffffff"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "shl",
                                              "nodeType": "YulIdentifier",
                                              "src": "1684:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1684:22:1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "1673:3:1"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1673:34:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "eq",
                                      "nodeType": "YulIdentifier",
                                      "src": "1663:2:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1663:45:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "1656:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1656:53:1"
                              },
                              "nodeType": "YulIf",
                              "src": "1653:143:1"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1816:3:1"
                                  },
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1821:5:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1809:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1809:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1809:18:1"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "1840:19:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1851:3:1"
                                  },
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "1856:2:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1847:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1847:12:1"
                              },
                              "variableNames": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1840:3:1"
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
                              "src": "1558:3:1"
                            },
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1563:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1555:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1555:15:1"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1571:23:1",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1573:19:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "1584:3:1"
                                  },
                                  {
                                    "name": "_2",
                                    "nodeType": "YulIdentifier",
                                    "src": "1589:2:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1580:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1580:12:1"
                              },
                              "variableNames": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "1573:3:1"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1551:3:1",
                          "statements": []
                        },
                        "src": "1547:322:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1878:14:1",
                        "value": {
                          "name": "dst_1",
                          "nodeType": "YulIdentifier",
                          "src": "1887:5:1"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "1878:5:1"
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
                      "src": "1101:6:1",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "1109:3:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "1117:5:1",
                      "type": ""
                    }
                  ],
                  "src": "1053:845:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2006:1325:1",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2016:12:1",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2026:2:1",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "2020:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2073:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2082:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2085:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2075:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2075:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2075:12:1"
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
                                  "src": "2048:7:1"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2057:9:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2044:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2044:23:1"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2069:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2040:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2040:32:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2037:52:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2098:30:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2118:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2112:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2112:16:1"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2102:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2137:28:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2155:2:1",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2159:1:1",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "2151:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2151:10:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2163:1:1",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2147:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2147:18:1"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "2141:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2192:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2201:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2204:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2194:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2194:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2194:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2180:6:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2188:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2177:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2177:14:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2174:34:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2217:32:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2231:9:1"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2242:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2227:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2227:22:1"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "2221:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2289:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2298:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2301:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2291:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2291:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2291:12:1"
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
                                  "src": "2269:7:1"
                                },
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "2278:2:1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2265:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2265:16:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2283:4:1",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2261:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2261:27:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2258:47:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2314:34:1",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "allocate_memory_905",
                            "nodeType": "YulIdentifier",
                            "src": "2327:19:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2327:21:1"
                        },
                        "variables": [
                          {
                            "name": "value",
                            "nodeType": "YulTypedName",
                            "src": "2318:5:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2357:25:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "2379:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2373:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2373:9:1"
                        },
                        "variables": [
                          {
                            "name": "offset_1",
                            "nodeType": "YulTypedName",
                            "src": "2361:8:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2411:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2420:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2423:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2413:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2413:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2413:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset_1",
                              "nodeType": "YulIdentifier",
                              "src": "2397:8:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2407:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2394:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2394:16:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2391:36:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2436:27:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "2450:2:1"
                            },
                            {
                              "name": "offset_1",
                              "nodeType": "YulIdentifier",
                              "src": "2454:8:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2446:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2446:17:1"
                        },
                        "variables": [
                          {
                            "name": "_4",
                            "nodeType": "YulTypedName",
                            "src": "2440:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2511:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2520:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2523:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2513:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2513:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2513:12:1"
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
                                      "src": "2490:2:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2494:4:1",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2486:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2486:13:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2501:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "2482:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2482:27:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2475:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2475:35:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2472:55:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2536:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "2552:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2546:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2546:9:1"
                        },
                        "variables": [
                          {
                            "name": "_5",
                            "nodeType": "YulTypedName",
                            "src": "2540:2:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2564:71:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_5",
                                  "nodeType": "YulIdentifier",
                                  "src": "2631:2:1"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_array_address_dyn",
                                "nodeType": "YulIdentifier",
                                "src": "2591:39:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2591:43:1"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "2575:15:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2575:60:1"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "2568:3:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2644:16:1",
                        "value": {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "2657:3:1"
                        },
                        "variables": [
                          {
                            "name": "dst_1",
                            "nodeType": "YulTypedName",
                            "src": "2648:5:1",
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
                              "src": "2676:3:1"
                            },
                            {
                              "name": "_5",
                              "nodeType": "YulIdentifier",
                              "src": "2681:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2669:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2669:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2669:15:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2693:19:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "2704:3:1"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2709:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2700:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2700:12:1"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "2693:3:1"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2721:42:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "2743:2:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2751:1:1",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "name": "_5",
                                      "nodeType": "YulIdentifier",
                                      "src": "2754:2:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "2747:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2747:10:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2739:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2739:19:1"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2760:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2735:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2735:28:1"
                        },
                        "variables": [
                          {
                            "name": "srcEnd",
                            "nodeType": "YulTypedName",
                            "src": "2725:6:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2795:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2804:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2807:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2797:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2797:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2797:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2778:6:1"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2786:7:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2775:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2775:19:1"
                        },
                        "nodeType": "YulIf",
                        "src": "2772:39:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2820:22:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "2835:2:1"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2839:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2831:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2831:11:1"
                        },
                        "variables": [
                          {
                            "name": "src",
                            "nodeType": "YulTypedName",
                            "src": "2824:3:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2907:103:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2928:3:1"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "2963:3:1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "abi_decode_address_fromMemory",
                                      "nodeType": "YulIdentifier",
                                      "src": "2933:29:1"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2933:34:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2921:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2921:47:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2921:47:1"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "2981:19:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2992:3:1"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2997:2:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2988:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2988:12:1"
                              },
                              "variableNames": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2981:3:1"
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
                              "src": "2862:3:1"
                            },
                            {
                              "name": "srcEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2867:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2859:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2859:15:1"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2875:23:1",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2877:19:1",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "2888:3:1"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2893:2:1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2884:3:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2884:12:1"
                              },
                              "variableNames": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "2877:3:1"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2855:3:1",
                          "statements": []
                        },
                        "src": "2851:159:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3026:5:1"
                            },
                            {
                              "name": "dst_1",
                              "nodeType": "YulIdentifier",
                              "src": "3033:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3019:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3019:20:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3019:20:1"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3048:34:1",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "3074:2:1"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3078:2:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3070:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3070:11:1"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "3064:5:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3064:18:1"
                        },
                        "variables": [
                          {
                            "name": "offset_2",
                            "nodeType": "YulTypedName",
                            "src": "3052:8:1",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3111:16:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3120:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3123:1:1",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3113:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3113:12:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3113:12:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset_2",
                              "nodeType": "YulIdentifier",
                              "src": "3097:8:1"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3107:2:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "3094:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3094:16:1"
                        },
                        "nodeType": "YulIf",
                        "src": "3091:36:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3147:5:1"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "3154:2:1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3143:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3143:14:1"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "3202:2:1"
                                    },
                                    {
                                      "name": "offset_2",
                                      "nodeType": "YulIdentifier",
                                      "src": "3206:8:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3198:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3198:17:1"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3217:7:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_array_bytes5_dyn_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "3159:38:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3159:66:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3136:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3136:90:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3136:90:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3246:5:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3253:2:1",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3242:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3242:14:1"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "3292:2:1"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3296:2:1",
                                      "type": "",
                                      "value": "64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3288:3:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3288:11:1"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_address_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "3258:29:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3258:42:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3235:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3235:66:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3235:66:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3310:15:1",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3320:5:1"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3310:6:1"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_struct$_Routes_$55_memory_ptr_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1972:9:1",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "1983:7:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1995:6:1",
                      "type": ""
                    }
                  ],
                  "src": "1903:1428:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3510:177:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3527:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3538:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3520:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3520:21:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3520:21:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3561:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3572:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3557:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3557:18:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3577:2:1",
                              "type": "",
                              "value": "27"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3550:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3550:30:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3550:30:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3600:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3611:2:1",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3596:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3596:18:1"
                            },
                            {
                              "hexValue": "4d41585f494d504c454d454e544154494f4e535f52454143484544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "3616:29:1",
                              "type": "",
                              "value": "MAX_IMPLEMENTATIONS_REACHED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3589:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3589:57:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3589:57:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3655:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3667:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3678:2:1",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3663:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3663:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3655:4:1"
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
                      "src": "3487:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3501:4:1",
                      "type": ""
                    }
                  ],
                  "src": "3336:351:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3866:166:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3883:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3894:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3876:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3876:21:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3876:21:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3917:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3928:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3913:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3913:18:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3933:2:1",
                              "type": "",
                              "value": "16"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3906:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3906:30:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3906:30:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3956:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3967:2:1",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3952:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3952:18:1"
                            },
                            {
                              "hexValue": "4d41585f534947535f52454143484544",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "3972:18:1",
                              "type": "",
                              "value": "MAX_SIGS_REACHED"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3945:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3945:46:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3945:46:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4000:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4012:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4023:2:1",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4008:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4008:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4000:4:1"
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
                      "src": "3843:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3857:4:1",
                      "type": ""
                    }
                  ],
                  "src": "3692:340:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4069:95:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4086:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4093:3:1",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4098:10:1",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4089:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4089:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4079:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4079:31:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4079:31:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4126:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4129:4:1",
                              "type": "",
                              "value": "0x32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4119:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4119:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4119:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4150:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4153:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4143:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4143:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4143:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x32",
                  "nodeType": "YulFunctionDefinition",
                  "src": "4037:127:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4343:162:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4360:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4371:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4353:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4353:21:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4353:21:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4394:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4405:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4390:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4390:18:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4410:2:1",
                              "type": "",
                              "value": "12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4383:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4383:30:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4383:30:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4433:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4444:2:1",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4429:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4429:18:1"
                            },
                            {
                              "hexValue": "4e4f545f494e5f4f52444552",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "4449:14:1",
                              "type": "",
                              "value": "NOT_IN_ORDER"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4422:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4422:42:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4422:42:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4473:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4485:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4496:2:1",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4481:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4481:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4473:4:1"
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
                      "src": "4320:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4334:4:1",
                      "type": ""
                    }
                  ],
                  "src": "4169:336:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4542:95:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4559:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4566:3:1",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4571:10:1",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4562:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4562:20:1"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4552:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4552:31:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4552:31:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4599:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4602:4:1",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4592:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4592:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4592:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4623:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4626:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4616:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4616:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4616:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "4510:127:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4694:116:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4704:20:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4719:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4722:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "4715:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4715:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "4704:7:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4782:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "4784:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4784:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4784:18:1"
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
                                      "src": "4753:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "4746:6:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4746:9:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "4760:1:1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "product",
                                          "nodeType": "YulIdentifier",
                                          "src": "4767:7:1"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "4776:1:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "div",
                                        "nodeType": "YulIdentifier",
                                        "src": "4763:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4763:15:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nodeType": "YulIdentifier",
                                    "src": "4757:2:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4757:22:1"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "4743:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4743:37:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "4736:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4736:45:1"
                        },
                        "nodeType": "YulIf",
                        "src": "4733:71:1"
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "4673:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "4676:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nodeType": "YulTypedName",
                      "src": "4682:7:1",
                      "type": ""
                    }
                  ],
                  "src": "4642:168:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4864:79:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4874:17:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4886:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4889:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4882:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4882:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "4874:4:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4915:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "4917:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4917:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4917:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "4906:4:1"
                            },
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4912:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4903:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4903:11:1"
                        },
                        "nodeType": "YulIf",
                        "src": "4900:37:1"
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "4846:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "4849:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "4855:4:1",
                      "type": ""
                    }
                  ],
                  "src": "4815:128:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4995:88:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5026:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "5028:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5028:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5028:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5011:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5022:1:1",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "5018:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5018:6:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5008:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5008:17:1"
                        },
                        "nodeType": "YulIf",
                        "src": "5005:43:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5057:20:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5068:5:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5075:1:1",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5064:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5064:13:1"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "5057:3:1"
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
                      "src": "4977:5:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "4987:3:1",
                      "type": ""
                    }
                  ],
                  "src": "4948:135:1"
                }
              ]
            },
            "contents": "{\n    { }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function allocate_memory_905() -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, 0x60)\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function array_allocation_size_array_address_dyn(length) -> size\n    {\n        if gt(length, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        size := add(shl(5, length), 0x20)\n    }\n    function abi_decode_address_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_array_bytes5_dyn_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := mload(offset)\n        let _2 := 0x20\n        let dst := allocate_memory(array_allocation_size_array_address_dyn(_1))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let srcEnd := add(add(offset, shl(5, _1)), _2)\n        if gt(srcEnd, end) { revert(0, 0) }\n        let src := add(offset, _2)\n        for { } lt(src, srcEnd) { src := add(src, _2) }\n        {\n            let value := mload(src)\n            if iszero(eq(value, and(value, shl(216, 0xffffffffff))))\n            {\n                let _3 := 0\n                revert(_3, _3)\n            }\n            mstore(dst, value)\n            dst := add(dst, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_struct$_Routes_$55_memory_ptr_fromMemory(headStart, dataEnd) -> value0\n    {\n        let _1 := 32\n        if slt(sub(dataEnd, headStart), _1) { revert(0, 0) }\n        let offset := mload(headStart)\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset)\n        if slt(sub(dataEnd, _3), 0x60) { revert(0, 0) }\n        let value := allocate_memory_905()\n        let offset_1 := mload(_3)\n        if gt(offset_1, _2) { revert(0, 0) }\n        let _4 := add(_3, offset_1)\n        if iszero(slt(add(_4, 0x1f), dataEnd)) { revert(0, 0) }\n        let _5 := mload(_4)\n        let dst := allocate_memory(array_allocation_size_array_address_dyn(_5))\n        let dst_1 := dst\n        mstore(dst, _5)\n        dst := add(dst, _1)\n        let srcEnd := add(add(_4, shl(5, _5)), _1)\n        if gt(srcEnd, dataEnd) { revert(0, 0) }\n        let src := add(_4, _1)\n        for { } lt(src, srcEnd) { src := add(src, _1) }\n        {\n            mstore(dst, abi_decode_address_fromMemory(src))\n            dst := add(dst, _1)\n        }\n        mstore(value, dst_1)\n        let offset_2 := mload(add(_3, _1))\n        if gt(offset_2, _2) { revert(0, 0) }\n        mstore(add(value, _1), abi_decode_array_bytes5_dyn_fromMemory(add(_3, offset_2), dataEnd))\n        mstore(add(value, 64), abi_decode_address_fromMemory(add(_3, 64)))\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_e27afc17c6bce956f65b40a78cab6f5d399333adf0eab4028ce1ba8089e5e409__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"MAX_IMPLEMENTATIONS_REACHED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_560af068831a2a2c470b3ee6886d6eecb8426c2c5c058e1f42b7375675688539__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"MAX_SIGS_REACHED\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function abi_encode_tuple_t_stringliteral_813478b8c451e10b731beb1a235e1ab973eabdeb4219c3b273060560b8669fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 12)\n        mstore(add(headStart, 64), \"NOT_IN_ORDER\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n}",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "linkReferences": {},
        "object": "61034060405234801562000011575f80fd5b5060405162001087380380620010878339810160408190526200003491620006d9565b602081015151815151600a811115620000945760405162461bcd60e51b815260206004820152601b60248201527f4d41585f494d504c454d454e544154494f4e535f52454143484544000000000060448201526064015b60405180910390fd5b603c821115620000da5760405162461bcd60e51b815260206004820152601060248201526f13505617d4d251d4d7d4915050d2115160821b60448201526064016200008b565b5f835f01515f81518110620000f357620000f3620007df565b602002602001015190505f805f805f805f805f60018b111562000133578c5180516001908110620001285762000128620007df565b602002602001015198505b60028b111562000160578c5180516002908110620001555762000155620007df565b602002602001015197505b60038b11156200018d578c5180516003908110620001825762000182620007df565b602002602001015196505b60048b1115620001ba578c5180516004908110620001af57620001af620007df565b602002602001015195505b60058b1115620001e7578c5180516005908110620001dc57620001dc620007df565b602002602001015194505b60068b111562000214578c5180516006908110620002095762000209620007df565b602002602001015193505b60078b111562000241578c5180516007908110620002365762000236620007df565b602002602001015192505b60088b11156200026e578c5180516008908110620002635762000263620007df565b602002602001015191505b60098b11156200029b578c5180516009908110620002905762000290620007df565b602002602001015190505b6001600160a01b03998a1660805297891660a05295881660c05293871660e05291861661010052851661012052841661014052831661016052821661018052166101a0525f80808080808080808080805b8d8110156200054a575f8f6020015182815181106200030f576200030f620007df565b602002602001015160d81c64ffffffffff169050808310620003635760405162461bcd60e51b815260206004820152600c60248201526b2727aa2fa4a72fa7a92222a960a11b60448201526064016200008b565b80925060068210156200038a576200037d82602862000807565b81901b8d179c5062000534565b600c821015620003bb57620003a160068362000827565b620003ae90602862000807565b81901b8c179b5062000534565b6012821015620003ec57620003d2600c8362000827565b620003df90602862000807565b81901b8b179a5062000534565b60188210156200041d576200040360128362000827565b6200041090602862000807565b81901b8a17995062000534565b601e8210156200044e576200043460188362000827565b6200044190602862000807565b81901b8917985062000534565b60248210156200047f5762000465601e8362000827565b6200047290602862000807565b81901b8817975062000534565b602a821015620004b0576200049660248362000827565b620004a390602862000807565b81901b8717965062000534565b6030821015620004e157620004c7602a8362000827565b620004d490602862000807565b81901b8617955062000534565b60368210156200051257620004f860308362000827565b6200050590602862000807565b81901b8517955062000534565b6200051f60368362000827565b6200052c90602862000807565b81901b841795505b508062000541816200083d565b915050620002ec565b50506101e09990995261020097909752610220959095526102409390935261026091909152610280526102a0526102c0526102e052610300525061032052604001516001600160a01b03166101c05262000858565b634e487b7160e01b5f52604160045260245ffd5b604051606081016001600160401b0381118282101715620005d857620005d86200059f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200060957620006096200059f565b604052919050565b5f6001600160401b038211156200062c576200062c6200059f565b5060051b60200190565b80516001600160a01b03811681146200064d575f80fd5b919050565b5f82601f83011262000662575f80fd5b815160206200067b620006758362000611565b620005de565b82815260059290921b840181019181810190868411156200069a575f80fd5b8286015b84811015620006ce5780516001600160d81b031981168114620006c0575f8081fd5b83529183019183016200069e565b509695505050505050565b5f6020808385031215620006eb575f80fd5b82516001600160401b038082111562000702575f80fd5b908401906060828703121562000716575f80fd5b62000720620005b3565b8251828111156200072f575f80fd5b8301601f8101881362000740575f80fd5b805162000751620006758262000611565b81815260059190911b8201860190868101908a83111562000770575f80fd5b928701925b828410156200079957620007898462000636565b8252928701929087019062000775565b84525050508284015182811115620007af575f80fd5b620007bd8882860162000652565b8583015250620007d06040840162000636565b60408201529695505050505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620008215762000821620007f3565b92915050565b81810381811115620008215762000821620007f3565b5f60018201620008515762000851620007f3565b5060010190565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610300516103205161074a6200093d5f395f602001525f61034501525f6102fe01525f6102ae01525f61025e01525f61020e01525f6101be01525f61016e01525f61011e01525f60ce01525f607e01525f6105ad01525f61058601525f61055701525f61052801525f6104f901525f6104ca01525f61049b01525f61046c01525f61043d01525f61040e01525f6103df015261074a5ff3fe608060405234801561000f575f80fd5b505f803560e01c90808061004460017f0000000000000000000000000000000000000000000000000000000000000000610699565b90505b8082116103d3575f600261005b83856106b2565b61006591906106c5565b90505f60068210156100ad5761007c8260286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b600c8210156100fd576100c1600683610699565b6100cc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601282101561014d57610111600c83610699565b61011c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601882101561019d57610161601283610699565b61016c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601e8210156101ed576101b1601883610699565b6101bc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602482101561023d57610201601e83610699565b61020c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602a82101561028d57610251602483610699565b61025c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b60308210156102dd576102a1602a83610699565b6102ac9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b603682101561032d576102f1603083610699565b6102fc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b610338603683610699565b6103439060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561039857610391600184610699565b93506103cb565b8663ffffffff168163ffffffff1610156103be576103b78360016106b2565b94506103cb565b5060ff1693506103d39050565b505050610047565b5f8360010361040357507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360020361043257507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360030361046157507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360040361049057507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836005036104bf57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836006036104ee57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360070361051d57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360080361054c57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360090361057b57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b83600a036105aa57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff811661064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b365f80375f80365f845af43d5f803e808015610668573d5ff35b3d5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156106ac576106ac61066c565b92915050565b808201808211156106ac576106ac61066c565b5f826106f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176106ac576106ac61066c56fea2646970667358221220951ab0f7677ad17e29a3851e05fcd6dc22f2d01b4f3f93ad1356a9f517bb6b1664736f6c63430008140033",
        "opcodes": "PUSH2 0x340 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x1087 CODESIZE SUB DUP1 PUSH3 0x1087 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 DUP2 SWAP1 MSTORE PUSH3 0x34 SWAP2 PUSH3 0x6D9 JUMP JUMPDEST PUSH1 0x20 DUP2 ADD MLOAD MLOAD DUP2 MLOAD MLOAD PUSH1 0xA DUP2 GT ISZERO PUSH3 0x94 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4D41585F494D504C454D454E544154494F4E535F524541434845440000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x3C DUP3 GT ISZERO PUSH3 0xDA JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x10 PUSH1 0x24 DUP3 ADD MSTORE PUSH16 0x13505617D4D251D4D7D4915050D21151 PUSH1 0x82 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH3 0x8B JUMP JUMPDEST PUSH0 DUP4 PUSH0 ADD MLOAD PUSH0 DUP2 MLOAD DUP2 LT PUSH3 0xF3 JUMPI PUSH3 0xF3 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP1 POP PUSH0 DUP1 PUSH0 DUP1 PUSH0 DUP1 PUSH0 DUP1 PUSH0 PUSH1 0x1 DUP12 GT ISZERO PUSH3 0x133 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x1 SWAP1 DUP2 LT PUSH3 0x128 JUMPI PUSH3 0x128 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP9 POP JUMPDEST PUSH1 0x2 DUP12 GT ISZERO PUSH3 0x160 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x2 SWAP1 DUP2 LT PUSH3 0x155 JUMPI PUSH3 0x155 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP8 POP JUMPDEST PUSH1 0x3 DUP12 GT ISZERO PUSH3 0x18D JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x3 SWAP1 DUP2 LT PUSH3 0x182 JUMPI PUSH3 0x182 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP7 POP JUMPDEST PUSH1 0x4 DUP12 GT ISZERO PUSH3 0x1BA JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x4 SWAP1 DUP2 LT PUSH3 0x1AF JUMPI PUSH3 0x1AF PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP6 POP JUMPDEST PUSH1 0x5 DUP12 GT ISZERO PUSH3 0x1E7 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x5 SWAP1 DUP2 LT PUSH3 0x1DC JUMPI PUSH3 0x1DC PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP5 POP JUMPDEST PUSH1 0x6 DUP12 GT ISZERO PUSH3 0x214 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x6 SWAP1 DUP2 LT PUSH3 0x209 JUMPI PUSH3 0x209 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP4 POP JUMPDEST PUSH1 0x7 DUP12 GT ISZERO PUSH3 0x241 JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x7 SWAP1 DUP2 LT PUSH3 0x236 JUMPI PUSH3 0x236 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP3 POP JUMPDEST PUSH1 0x8 DUP12 GT ISZERO PUSH3 0x26E JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x8 SWAP1 DUP2 LT PUSH3 0x263 JUMPI PUSH3 0x263 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP2 POP JUMPDEST PUSH1 0x9 DUP12 GT ISZERO PUSH3 0x29B JUMPI DUP13 MLOAD DUP1 MLOAD PUSH1 0x9 SWAP1 DUP2 LT PUSH3 0x290 JUMPI PUSH3 0x290 PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD SWAP1 POP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP10 DUP11 AND PUSH1 0x80 MSTORE SWAP8 DUP10 AND PUSH1 0xA0 MSTORE SWAP6 DUP9 AND PUSH1 0xC0 MSTORE SWAP4 DUP8 AND PUSH1 0xE0 MSTORE SWAP2 DUP7 AND PUSH2 0x100 MSTORE DUP6 AND PUSH2 0x120 MSTORE DUP5 AND PUSH2 0x140 MSTORE DUP4 AND PUSH2 0x160 MSTORE DUP3 AND PUSH2 0x180 MSTORE AND PUSH2 0x1A0 MSTORE PUSH0 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 DUP1 JUMPDEST DUP14 DUP2 LT ISZERO PUSH3 0x54A JUMPI PUSH0 DUP16 PUSH1 0x20 ADD MLOAD DUP3 DUP2 MLOAD DUP2 LT PUSH3 0x30F JUMPI PUSH3 0x30F PUSH3 0x7DF JUMP JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD PUSH1 0xD8 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP DUP1 DUP4 LT PUSH3 0x363 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xC PUSH1 0x24 DUP3 ADD MSTORE PUSH12 0x2727AA2FA4A72FA7A92222A9 PUSH1 0xA1 SHL PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH3 0x8B JUMP JUMPDEST DUP1 SWAP3 POP PUSH1 0x6 DUP3 LT ISZERO PUSH3 0x38A JUMPI PUSH3 0x37D DUP3 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP14 OR SWAP13 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0xC DUP3 LT ISZERO PUSH3 0x3BB JUMPI PUSH3 0x3A1 PUSH1 0x6 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x3AE SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP13 OR SWAP12 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x12 DUP3 LT ISZERO PUSH3 0x3EC JUMPI PUSH3 0x3D2 PUSH1 0xC DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x3DF SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP12 OR SWAP11 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x18 DUP3 LT ISZERO PUSH3 0x41D JUMPI PUSH3 0x403 PUSH1 0x12 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x410 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP11 OR SWAP10 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x1E DUP3 LT ISZERO PUSH3 0x44E JUMPI PUSH3 0x434 PUSH1 0x18 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x441 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP10 OR SWAP9 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x24 DUP3 LT ISZERO PUSH3 0x47F JUMPI PUSH3 0x465 PUSH1 0x1E DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x472 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP9 OR SWAP8 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x2A DUP3 LT ISZERO PUSH3 0x4B0 JUMPI PUSH3 0x496 PUSH1 0x24 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x4A3 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP8 OR SWAP7 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x30 DUP3 LT ISZERO PUSH3 0x4E1 JUMPI PUSH3 0x4C7 PUSH1 0x2A DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x4D4 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP7 OR SWAP6 POP PUSH3 0x534 JUMP JUMPDEST PUSH1 0x36 DUP3 LT ISZERO PUSH3 0x512 JUMPI PUSH3 0x4F8 PUSH1 0x30 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x505 SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP6 OR SWAP6 POP PUSH3 0x534 JUMP JUMPDEST PUSH3 0x51F PUSH1 0x36 DUP4 PUSH3 0x827 JUMP JUMPDEST PUSH3 0x52C SWAP1 PUSH1 0x28 PUSH3 0x807 JUMP JUMPDEST DUP2 SWAP1 SHL DUP5 OR SWAP6 POP JUMPDEST POP DUP1 PUSH3 0x541 DUP2 PUSH3 0x83D JUMP JUMPDEST SWAP2 POP POP PUSH3 0x2EC JUMP JUMPDEST POP POP PUSH2 0x1E0 SWAP10 SWAP1 SWAP10 MSTORE PUSH2 0x200 SWAP8 SWAP1 SWAP8 MSTORE PUSH2 0x220 SWAP6 SWAP1 SWAP6 MSTORE PUSH2 0x240 SWAP4 SWAP1 SWAP4 MSTORE PUSH2 0x260 SWAP2 SWAP1 SWAP2 MSTORE PUSH2 0x280 MSTORE PUSH2 0x2A0 MSTORE PUSH2 0x2C0 MSTORE PUSH2 0x2E0 MSTORE PUSH2 0x300 MSTORE POP PUSH2 0x320 MSTORE PUSH1 0x40 ADD MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x1C0 MSTORE PUSH3 0x858 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x60 DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH3 0x5D8 JUMPI PUSH3 0x5D8 PUSH3 0x59F JUMP JUMPDEST PUSH1 0x40 MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1F DUP3 ADD PUSH1 0x1F NOT AND DUP2 ADD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP2 GT DUP3 DUP3 LT OR ISZERO PUSH3 0x609 JUMPI PUSH3 0x609 PUSH3 0x59F JUMP JUMPDEST PUSH1 0x40 MSTORE SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP3 GT ISZERO PUSH3 0x62C JUMPI PUSH3 0x62C PUSH3 0x59F JUMP JUMPDEST POP PUSH1 0x5 SHL PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH3 0x64D JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x662 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH1 0x20 PUSH3 0x67B PUSH3 0x675 DUP4 PUSH3 0x611 JUMP JUMPDEST PUSH3 0x5DE JUMP JUMPDEST DUP3 DUP2 MSTORE PUSH1 0x5 SWAP3 SWAP1 SWAP3 SHL DUP5 ADD DUP2 ADD SWAP2 DUP2 DUP2 ADD SWAP1 DUP7 DUP5 GT ISZERO PUSH3 0x69A JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP3 DUP7 ADD JUMPDEST DUP5 DUP2 LT ISZERO PUSH3 0x6CE JUMPI DUP1 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xD8 SHL SUB NOT DUP2 AND DUP2 EQ PUSH3 0x6C0 JUMPI PUSH0 DUP1 DUP2 REVERT JUMPDEST DUP4 MSTORE SWAP2 DUP4 ADD SWAP2 DUP4 ADD PUSH3 0x69E JUMP JUMPDEST POP SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP1 DUP4 DUP6 SUB SLT ISZERO PUSH3 0x6EB JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP3 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0x40 SHL SUB DUP1 DUP3 GT ISZERO PUSH3 0x702 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP1 DUP5 ADD SWAP1 PUSH1 0x60 DUP3 DUP8 SUB SLT ISZERO PUSH3 0x716 JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x720 PUSH3 0x5B3 JUMP JUMPDEST DUP3 MLOAD DUP3 DUP2 GT ISZERO PUSH3 0x72F JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP4 ADD PUSH1 0x1F DUP2 ADD DUP9 SGT PUSH3 0x740 JUMPI PUSH0 DUP1 REVERT JUMPDEST DUP1 MLOAD PUSH3 0x751 PUSH3 0x675 DUP3 PUSH3 0x611 JUMP JUMPDEST DUP2 DUP2 MSTORE PUSH1 0x5 SWAP2 SWAP1 SWAP2 SHL DUP3 ADD DUP7 ADD SWAP1 DUP7 DUP2 ADD SWAP1 DUP11 DUP4 GT ISZERO PUSH3 0x770 JUMPI PUSH0 DUP1 REVERT JUMPDEST SWAP3 DUP8 ADD SWAP3 JUMPDEST DUP3 DUP5 LT ISZERO PUSH3 0x799 JUMPI PUSH3 0x789 DUP5 PUSH3 0x636 JUMP JUMPDEST DUP3 MSTORE SWAP3 DUP8 ADD SWAP3 SWAP1 DUP8 ADD SWAP1 PUSH3 0x775 JUMP JUMPDEST DUP5 MSTORE POP POP POP DUP3 DUP5 ADD MLOAD DUP3 DUP2 GT ISZERO PUSH3 0x7AF JUMPI PUSH0 DUP1 REVERT JUMPDEST PUSH3 0x7BD DUP9 DUP3 DUP7 ADD PUSH3 0x652 JUMP JUMPDEST DUP6 DUP4 ADD MSTORE POP PUSH3 0x7D0 PUSH1 0x40 DUP5 ADD PUSH3 0x636 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD MSTORE SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH3 0x821 JUMPI PUSH3 0x821 PUSH3 0x7F3 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH3 0x821 JUMPI PUSH3 0x821 PUSH3 0x7F3 JUMP JUMPDEST PUSH0 PUSH1 0x1 DUP3 ADD PUSH3 0x851 JUMPI PUSH3 0x851 PUSH3 0x7F3 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH1 0x80 MLOAD PUSH1 0xA0 MLOAD PUSH1 0xC0 MLOAD PUSH1 0xE0 MLOAD PUSH2 0x100 MLOAD PUSH2 0x120 MLOAD PUSH2 0x140 MLOAD PUSH2 0x160 MLOAD PUSH2 0x180 MLOAD PUSH2 0x1A0 MLOAD PUSH2 0x1C0 MLOAD PUSH2 0x1E0 MLOAD PUSH2 0x200 MLOAD PUSH2 0x220 MLOAD PUSH2 0x240 MLOAD PUSH2 0x260 MLOAD PUSH2 0x280 MLOAD PUSH2 0x2A0 MLOAD PUSH2 0x2C0 MLOAD PUSH2 0x2E0 MLOAD PUSH2 0x300 MLOAD PUSH2 0x320 MLOAD PUSH2 0x74A PUSH3 0x93D PUSH0 CODECOPY PUSH0 PUSH1 0x20 ADD MSTORE PUSH0 PUSH2 0x345 ADD MSTORE PUSH0 PUSH2 0x2FE ADD MSTORE PUSH0 PUSH2 0x2AE ADD MSTORE PUSH0 PUSH2 0x25E ADD MSTORE PUSH0 PUSH2 0x20E ADD MSTORE PUSH0 PUSH2 0x1BE ADD MSTORE PUSH0 PUSH2 0x16E ADD MSTORE PUSH0 PUSH2 0x11E ADD MSTORE PUSH0 PUSH1 0xCE ADD MSTORE PUSH0 PUSH1 0x7E ADD MSTORE PUSH0 PUSH2 0x5AD ADD MSTORE PUSH0 PUSH2 0x586 ADD MSTORE PUSH0 PUSH2 0x557 ADD MSTORE PUSH0 PUSH2 0x528 ADD MSTORE PUSH0 PUSH2 0x4F9 ADD MSTORE PUSH0 PUSH2 0x4CA ADD MSTORE PUSH0 PUSH2 0x49B ADD MSTORE PUSH0 PUSH2 0x46C ADD MSTORE PUSH0 PUSH2 0x43D ADD MSTORE PUSH0 PUSH2 0x40E ADD MSTORE PUSH0 PUSH2 0x3DF ADD MSTORE PUSH2 0x74A PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH0 DUP1 CALLDATALOAD PUSH1 0xE0 SHR SWAP1 DUP1 DUP1 PUSH2 0x44 PUSH1 0x1 PUSH32 0x0 PUSH2 0x699 JUMP JUMPDEST SWAP1 POP JUMPDEST DUP1 DUP3 GT PUSH2 0x3D3 JUMPI PUSH0 PUSH1 0x2 PUSH2 0x5B DUP4 DUP6 PUSH2 0x6B2 JUMP JUMPDEST PUSH2 0x65 SWAP2 SWAP1 PUSH2 0x6C5 JUMP JUMPDEST SWAP1 POP PUSH0 PUSH1 0x6 DUP3 LT ISZERO PUSH2 0xAD JUMPI PUSH2 0x7C DUP3 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0xC DUP3 LT ISZERO PUSH2 0xFD JUMPI PUSH2 0xC1 PUSH1 0x6 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0xCC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x12 DUP3 LT ISZERO PUSH2 0x14D JUMPI PUSH2 0x111 PUSH1 0xC DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x11C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x18 DUP3 LT ISZERO PUSH2 0x19D JUMPI PUSH2 0x161 PUSH1 0x12 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x16C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x1E DUP3 LT ISZERO PUSH2 0x1ED JUMPI PUSH2 0x1B1 PUSH1 0x18 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x1BC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x24 DUP3 LT ISZERO PUSH2 0x23D JUMPI PUSH2 0x201 PUSH1 0x1E DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x20C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x2A DUP3 LT ISZERO PUSH2 0x28D JUMPI PUSH2 0x251 PUSH1 0x24 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x25C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x30 DUP3 LT ISZERO PUSH2 0x2DD JUMPI PUSH2 0x2A1 PUSH1 0x2A DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x2AC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x36 DUP3 LT ISZERO PUSH2 0x32D JUMPI PUSH2 0x2F1 PUSH1 0x30 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x2FC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH2 0x338 PUSH1 0x36 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x343 SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP JUMPDEST PUSH4 0xFFFFFFFF PUSH1 0x8 DUP3 SWAP1 SHR DUP2 AND SWAP1 DUP8 AND DUP2 GT ISZERO PUSH2 0x398 JUMPI PUSH2 0x391 PUSH1 0x1 DUP5 PUSH2 0x699 JUMP JUMPDEST SWAP4 POP PUSH2 0x3CB JUMP JUMPDEST DUP7 PUSH4 0xFFFFFFFF AND DUP2 PUSH4 0xFFFFFFFF AND LT ISZERO PUSH2 0x3BE JUMPI PUSH2 0x3B7 DUP4 PUSH1 0x1 PUSH2 0x6B2 JUMP JUMPDEST SWAP5 POP PUSH2 0x3CB JUMP JUMPDEST POP PUSH1 0xFF AND SWAP4 POP PUSH2 0x3D3 SWAP1 POP JUMP JUMPDEST POP POP POP PUSH2 0x47 JUMP JUMPDEST PUSH0 DUP4 PUSH1 0x1 SUB PUSH2 0x403 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x2 SUB PUSH2 0x432 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x3 SUB PUSH2 0x461 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x4 SUB PUSH2 0x490 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x5 SUB PUSH2 0x4BF JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x6 SUB PUSH2 0x4EE JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x7 SUB PUSH2 0x51D JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x8 SUB PUSH2 0x54C JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x9 SUB PUSH2 0x57B JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0xA SUB PUSH2 0x5AA JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST POP PUSH32 0x0 JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH2 0x64E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x554E4B4E4F574E5F4D4554484F44000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLDATASIZE PUSH0 DUP1 CALLDATACOPY PUSH0 DUP1 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 DUP1 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x668 JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP JUMPDEST PUSH0 DUP3 PUSH2 0x6F8 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP6 BYTE 0xB0 0xF7 PUSH8 0x7AD17E29A3851E05 0xFC 0xD6 0xDC 0x22 CALLCODE 0xD0 SHL 0x4F EXTCODEHASH SWAP4 0xAD SGT JUMP 0xA9 CREATE2 OR 0xBB PUSH12 0x1664736F6C63430008140033 ",
        "sourceMap": "259:8130:0:-:0;;;1931:3427;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1987:13;;;;:20;2029:22;;:29;2081:2;2070:13;;;2062:53;;;;-1:-1:-1;;;2062:53:0;;3538:2:1;2062:53:0;;;3520:21:1;3577:2;3557:18;;;3550:30;3616:29;3596:18;;;3589:57;3663:18;;2062:53:0;;;;;;;;;2138:2;2127:7;:13;;2119:42;;;;-1:-1:-1;;;2119:42:0;;3894:2:1;2119:42:0;;;3876:21:1;3933:2;3913:18;;;3906:30;-1:-1:-1;;;3952:18:1;;;3945:46;4008:18;;2119:42:0;3692:340:1;2119:42:0;2171:29;2203:6;:22;;;2226:1;2203:25;;;;;;;;:::i;:::-;;;;;;;2171:57;;2233:29;2267;2301;2335;2369;2403;2437;2471;2505;2553:1;2543:7;:11;2539:78;;;2586:22;;:25;;2609:1;;2586:25;;;;;;:::i;:::-;;;;;;;2562:49;;2539:78;2635:1;2625:7;:11;2621:78;;;2668:22;;:25;;2691:1;;2668:25;;;;;;:::i;:::-;;;;;;;2644:49;;2621:78;2717:1;2707:7;:11;2703:78;;;2750:22;;:25;;2773:1;;2750:25;;;;;;:::i;:::-;;;;;;;2726:49;;2703:78;2799:1;2789:7;:11;2785:78;;;2832:22;;:25;;2855:1;;2832:25;;;;;;:::i;:::-;;;;;;;2808:49;;2785:78;2881:1;2871:7;:11;2867:78;;;2914:22;;:25;;2937:1;;2914:25;;;;;;:::i;:::-;;;;;;;2890:49;;2867:78;2963:1;2953:7;:11;2949:78;;;2996:22;;:25;;3019:1;;2996:25;;;;;;:::i;:::-;;;;;;;2972:49;;2949:78;3045:1;3035:7;:11;3031:78;;;3078:22;;:25;;3101:1;;3078:25;;;;;;:::i;:::-;;;;;;;3054:49;;3031:78;3127:1;3117:7;:11;3113:78;;;3160:22;;:25;;3183:1;;3160:25;;;;;;:::i;:::-;;;;;;;3136:49;;3113:78;3209:1;3199:7;:11;3195:78;;;3242:22;;:25;;3265:1;;3242:25;;;;;;:::i;:::-;;;;;;;3218:49;;3195:78;-1:-1:-1;;;;;3278:41:0;;;;;3324;;;;;3370;;;;;3416;;;;;3462;;;;;3508;;;;3554;;;;3600;;;;3646;;;;3692;;;3747:19;;;;;;;;;;;;4012:993;4036:7;4032:1;:11;4012:993;;;4056:12;4086:6;:13;;;4100:1;4086:16;;;;;;;;:::i;:::-;;;;;;;4079:24;;4071:33;;4056:48;;4129:4;4118:8;:15;4110:40;;;;-1:-1:-1;;;4110:40:0;;4371:2:1;4110:40:0;;;4353:21:1;4410:2;4390:18;;;4383:30;-1:-1:-1;;;4429:18:1;;;4422:42;4481:18;;4110:40:0;4169:336:1;4110:40:0;4167:4;4156:15;;4185:1;4181;:5;4177:823;;;4233:6;:1;4237:2;4233:6;:::i;:::-;4224:4;:16;;4209:11;:32;4195:46;;4177:823;;;4262:2;4258:1;:6;4254:746;;;4312:5;4316:1;4312;:5;:::i;:::-;4311:12;;4321:2;4311:12;:::i;:::-;4302:4;:22;;4287:11;:38;4273:52;;4254:746;;;4346:2;4342:1;:6;4338:662;;;4396:6;4400:2;4396:1;:6;:::i;:::-;4395:13;;4406:2;4395:13;:::i;:::-;4386:4;:23;;4371:11;:39;4357:53;;4338:662;;;4431:2;4427:1;:6;4423:577;;;4481:6;4485:2;4481:1;:6;:::i;:::-;4480:13;;4491:2;4480:13;:::i;:::-;4471:4;:23;;4456:11;:39;4442:53;;4423:577;;;4516:2;4512:1;:6;4508:492;;;4566:6;4570:2;4566:1;:6;:::i;:::-;4565:13;;4576:2;4565:13;:::i;:::-;4556:4;:23;;4541:11;:39;4527:53;;4508:492;;;4601:2;4597:1;:6;4593:407;;;4651:6;4655:2;4651:1;:6;:::i;:::-;4650:13;;4661:2;4650:13;:::i;:::-;4641:4;:23;;4626:11;:39;4612:53;;4593:407;;;4686:2;4682:1;:6;4678:322;;;4736:6;4740:2;4736:1;:6;:::i;:::-;4735:13;;4746:2;4735:13;:::i;:::-;4726:4;:23;;4711:11;:39;4697:53;;4678:322;;;4771:2;4767:1;:6;4763:237;;;4821:6;4825:2;4821:1;:6;:::i;:::-;4820:13;;4831:2;4820:13;:::i;:::-;4811:4;:23;;4796:11;:39;4782:53;;4763:237;;;4856:2;4852:1;:6;4848:152;;;4906:6;4910:2;4906:1;:6;:::i;:::-;4905:13;;4916:2;4905:13;:::i;:::-;4896:4;:23;;4881:11;:39;4867:53;;4848:152;;;4979:6;4983:2;4979:1;:6;:::i;:::-;4978:13;;4989:2;4978:13;:::i;:::-;4969:4;:23;;4954:11;:39;4940:53;;4848:152;-1:-1:-1;4045:3:0;;;;:::i;:::-;;;;4012:993;;;-1:-1:-1;;5009:21:0;;;;;5035;;;;;5061;;;;;5087;;;;;5113;;;;;5139;;5165;;5191;;5217;;5243;;-1:-1:-1;5270:20:0;;5325:29;;;-1:-1:-1;;;;;5299:55:0;;;259:8130;;14:127:1;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:252;217:2;211:9;259:4;247:17;;-1:-1:-1;;;;;279:34:1;;315:22;;;276:62;273:88;;;341:18;;:::i;:::-;377:2;370:22;146:252;:::o;403:275::-;474:2;468:9;539:2;520:13;;-1:-1:-1;;516:27:1;504:40;;-1:-1:-1;;;;;559:34:1;;595:22;;;556:62;553:88;;;621:18;;:::i;:::-;657:2;650:22;403:275;;-1:-1:-1;403:275:1:o;683:183::-;743:4;-1:-1:-1;;;;;765:30:1;;762:56;;;798:18;;:::i;:::-;-1:-1:-1;843:1:1;839:14;855:4;835:25;;683:183::o;871:177::-;950:13;;-1:-1:-1;;;;;992:31:1;;982:42;;972:70;;1038:1;1035;1028:12;972:70;871:177;;;:::o;1053:845::-;1117:5;1170:3;1163:4;1155:6;1151:17;1147:27;1137:55;;1188:1;1185;1178:12;1137:55;1217:6;1211:13;1243:4;1267:60;1283:43;1323:2;1283:43;:::i;:::-;1267:60;:::i;:::-;1361:15;;;1447:1;1443:10;;;;1431:23;;1427:32;;;1392:12;;;;1471:15;;;1468:35;;;1499:1;1496;1489:12;1468:35;1535:2;1527:6;1523:15;1547:322;1563:6;1558:3;1555:15;1547:322;;;1630:10;;-1:-1:-1;;;;;;1673:34:1;;1663:45;;1653:143;;1750:1;1779:2;1775;1768:14;1653:143;1809:18;;1847:12;;;;1580;;1547:322;;;-1:-1:-1;1887:5:1;1053:845;-1:-1:-1;;;;;;1053:845:1:o;1903:1428::-;1995:6;2026:2;2069;2057:9;2048:7;2044:23;2040:32;2037:52;;;2085:1;2082;2075:12;2037:52;2112:16;;-1:-1:-1;;;;;2177:14:1;;;2174:34;;;2204:1;2201;2194:12;2174:34;2227:22;;;;2283:4;2265:16;;;2261:27;2258:47;;;2301:1;2298;2291:12;2258:47;2327:21;;:::i;:::-;2379:2;2373:9;2407:2;2397:8;2394:16;2391:36;;;2423:1;2420;2413:12;2391:36;2446:17;;2494:4;2486:13;;2482:27;-1:-1:-1;2472:55:1;;2523:1;2520;2513:12;2472:55;2552:2;2546:9;2575:60;2591:43;2631:2;2591:43;:::i;2575:60::-;2669:15;;;2751:1;2747:10;;;;2739:19;;2735:28;;;2700:12;;;;2775:19;;;2772:39;;;2807:1;2804;2797:12;2772:39;2831:11;;;;2851:159;2867:6;2862:3;2859:15;2851:159;;;2933:34;2963:3;2933:34;:::i;:::-;2921:47;;2884:12;;;;2988;;;;2851:159;;;3019:20;;-1:-1:-1;;;3070:11:1;;;3064:18;3094:16;;;3091:36;;;3123:1;3120;3113:12;3091:36;3159:66;3217:7;3206:8;3202:2;3198:17;3159:66;:::i;:::-;3154:2;3147:5;3143:14;3136:90;;3258:42;3296:2;3292;3288:11;3258:42;:::i;:::-;3253:2;3242:14;;3235:66;3246:5;1903:1428;-1:-1:-1;;;;;;1903:1428:1:o;4037:127::-;4098:10;4093:3;4089:20;4086:1;4079:31;4129:4;4126:1;4119:15;4153:4;4150:1;4143:15;4510:127;4571:10;4566:3;4562:20;4559:1;4552:31;4602:4;4599:1;4592:15;4626:4;4623:1;4616:15;4642:168;4715:9;;;4746;;4763:15;;;4757:22;;4743:37;4733:71;;4784:18;;:::i;:::-;4642:168;;;;:::o;4815:128::-;4882:9;;;4903:11;;;4900:37;;;4917:18;;:::i;4948:135::-;4987:3;5008:17;;;5005:43;;5028:18;;:::i;:::-;-1:-1:-1;5075:1:1;5064:13;;4948:135::o;:::-;259:8130:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"
      },
      "deployedBytecode": {
        "functionDebugData": {
          "@_997": {
            "entryPoint": null,
            "id": 997,
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
            "entryPoint": 1714,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_div_t_uint256": {
            "entryPoint": 1733,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_mul_t_uint256": {
            "entryPoint": 1789,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "checked_sub_t_uint256": {
            "entryPoint": 1689,
            "id": null,
            "parameterSlots": 2,
            "returnSlots": 1
          },
          "panic_error_0x11": {
            "entryPoint": 1644,
            "id": null,
            "parameterSlots": 0,
            "returnSlots": 0
          }
        },
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:1258:1",
              "statements": [
                {
                  "nodeType": "YulBlock",
                  "src": "6:3:1",
                  "statements": []
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "46:152:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "63:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "66:77:1",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "56:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "56:88:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "56:88:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "160:1:1",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "163:4:1",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "153:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "153:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "153:15:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "184:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "187:4:1",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "177:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "177:15:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "177:15:1"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "14:184:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "252:79:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "262:17:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "274:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "277:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "270:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "270:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "262:4:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "303:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "305:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "305:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "305:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "294:4:1"
                            },
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "300:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "291:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "291:11:1"
                        },
                        "nodeType": "YulIf",
                        "src": "288:37:1"
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "234:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "237:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "243:4:1",
                      "type": ""
                    }
                  ],
                  "src": "203:128:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "384:77:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "394:16:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "405:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "408:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "401:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "401:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "394:3:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "433:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "435:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "435:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "435:18:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "425:1:1"
                            },
                            {
                              "name": "sum",
                              "nodeType": "YulIdentifier",
                              "src": "428:3:1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "422:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "422:10:1"
                        },
                        "nodeType": "YulIf",
                        "src": "419:36:1"
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "367:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "370:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "376:3:1",
                      "type": ""
                    }
                  ],
                  "src": "336:125:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "512:228:1",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "543:168:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "564:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "567:77:1",
                                    "type": "",
                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "557:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "557:88:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "557:88:1"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "665:1:1",
                                    "type": "",
                                    "value": "4"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "668:4:1",
                                    "type": "",
                                    "value": "0x12"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "658:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "658:15:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "658:15:1"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "693:1:1",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "696:4:1",
                                    "type": "",
                                    "value": "0x24"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "686:6:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "686:15:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "686:15:1"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "532:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "525:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "525:9:1"
                        },
                        "nodeType": "YulIf",
                        "src": "522:189:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "720:14:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "729:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "732:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "725:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "725:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "720:1:1"
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
                      "src": "497:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "500:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "r",
                      "nodeType": "YulTypedName",
                      "src": "506:1:1",
                      "type": ""
                    }
                  ],
                  "src": "466:274:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "797:116:1",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "807:20:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "822:1:1"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "825:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "818:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "818:9:1"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "807:7:1"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "885:22:1",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "887:16:1"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "887:18:1"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "887:18:1"
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
                                      "src": "856:1:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "849:6:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "849:9:1"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "863:1:1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "product",
                                          "nodeType": "YulIdentifier",
                                          "src": "870:7:1"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "879:1:1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "div",
                                        "nodeType": "YulIdentifier",
                                        "src": "866:3:1"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "866:15:1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nodeType": "YulIdentifier",
                                    "src": "860:2:1"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "860:22:1"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "846:2:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "846:37:1"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "839:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "839:45:1"
                        },
                        "nodeType": "YulIf",
                        "src": "836:71:1"
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "776:1:1",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "779:1:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nodeType": "YulTypedName",
                      "src": "785:7:1",
                      "type": ""
                    }
                  ],
                  "src": "745:168:1"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1092:164:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1109:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1120:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1102:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1102:21:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1102:21:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1143:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1154:2:1",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1139:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1139:18:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1159:2:1",
                              "type": "",
                              "value": "14"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1132:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1132:30:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1132:30:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1182:9:1"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1193:2:1",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1178:3:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1178:18:1"
                            },
                            {
                              "hexValue": "554e4b4e4f574e5f4d4554484f44",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "1198:16:1",
                              "type": "",
                              "value": "UNKNOWN_METHOD"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1171:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1171:44:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1171:44:1"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1224:26:1",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1236:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1247:2:1",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1232:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1232:18:1"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1224:4:1"
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
                      "src": "1069:9:1",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1083:4:1",
                      "type": ""
                    }
                  ],
                  "src": "918:338:1"
                }
              ]
            },
            "contents": "{\n    { }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x12)\n            revert(0, 0x24)\n        }\n        r := div(x, y)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_508dbca8c04b36cad14aa2535edb3ebdcdfe4050e17653a7e4c2ad31ab21563e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 14)\n        mstore(add(headStart, 64), \"UNKNOWN_METHOD\")\n        tail := add(headStart, 96)\n    }\n}",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "immutableReferences": {
          "4": [
            {
              "length": 32,
              "start": 991
            }
          ],
          "6": [
            {
              "length": 32,
              "start": 1038
            }
          ],
          "8": [
            {
              "length": 32,
              "start": 1085
            }
          ],
          "10": [
            {
              "length": 32,
              "start": 1132
            }
          ],
          "12": [
            {
              "length": 32,
              "start": 1179
            }
          ],
          "14": [
            {
              "length": 32,
              "start": 1226
            }
          ],
          "16": [
            {
              "length": 32,
              "start": 1273
            }
          ],
          "18": [
            {
              "length": 32,
              "start": 1320
            }
          ],
          "20": [
            {
              "length": 32,
              "start": 1367
            }
          ],
          "22": [
            {
              "length": 32,
              "start": 1414
            }
          ],
          "24": [
            {
              "length": 32,
              "start": 1453
            }
          ],
          "26": [
            {
              "length": 32,
              "start": 126
            }
          ],
          "28": [
            {
              "length": 32,
              "start": 206
            }
          ],
          "30": [
            {
              "length": 32,
              "start": 286
            }
          ],
          "32": [
            {
              "length": 32,
              "start": 366
            }
          ],
          "34": [
            {
              "length": 32,
              "start": 446
            }
          ],
          "36": [
            {
              "length": 32,
              "start": 526
            }
          ],
          "38": [
            {
              "length": 32,
              "start": 606
            }
          ],
          "40": [
            {
              "length": 32,
              "start": 686
            }
          ],
          "42": [
            {
              "length": 32,
              "start": 766
            }
          ],
          "44": [
            {
              "length": 32,
              "start": 837
            }
          ],
          "46": [
            {
              "length": 32,
              "start": 32
            }
          ]
        },
        "linkReferences": {},
        "object": "608060405234801561000f575f80fd5b505f803560e01c90808061004460017f0000000000000000000000000000000000000000000000000000000000000000610699565b90505b8082116103d3575f600261005b83856106b2565b61006591906106c5565b90505f60068210156100ad5761007c8260286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b600c8210156100fd576100c1600683610699565b6100cc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601282101561014d57610111600c83610699565b61011c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601882101561019d57610161601283610699565b61016c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b601e8210156101ed576101b1601883610699565b6101bc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602482101561023d57610201601e83610699565b61020c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b602a82101561028d57610251602483610699565b61025c9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b60308210156102dd576102a1602a83610699565b6102ac9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b603682101561032d576102f1603083610699565b6102fc9060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff169050610370565b610338603683610699565b6103439060286106fd565b7f0000000000000000000000000000000000000000000000000000000000000000901c64ffffffffff1690505b63ffffffff600882901c811690871681111561039857610391600184610699565b93506103cb565b8663ffffffff168163ffffffff1610156103be576103b78360016106b2565b94506103cb565b5060ff1693506103d39050565b505050610047565b5f8360010361040357507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360020361043257507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360030361046157507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360040361049057507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836005036104bf57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b836006036104ee57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360070361051d57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360080361054c57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b8360090361057b57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b83600a036105aa57507f00000000000000000000000000000000000000000000000000000000000000006105cd565b507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff811661064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f554e4b4e4f574e5f4d4554484f44000000000000000000000000000000000000604482015260640160405180910390fd5b365f80375f80365f845af43d5f803e808015610668573d5ff35b3d5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156106ac576106ac61066c565b92915050565b808201808211156106ac576106ac61066c565b5f826106f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176106ac576106ac61066c56fea2646970667358221220951ab0f7677ad17e29a3851e05fcd6dc22f2d01b4f3f93ad1356a9f517bb6b1664736f6c63430008140033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH0 DUP1 CALLDATALOAD PUSH1 0xE0 SHR SWAP1 DUP1 DUP1 PUSH2 0x44 PUSH1 0x1 PUSH32 0x0 PUSH2 0x699 JUMP JUMPDEST SWAP1 POP JUMPDEST DUP1 DUP3 GT PUSH2 0x3D3 JUMPI PUSH0 PUSH1 0x2 PUSH2 0x5B DUP4 DUP6 PUSH2 0x6B2 JUMP JUMPDEST PUSH2 0x65 SWAP2 SWAP1 PUSH2 0x6C5 JUMP JUMPDEST SWAP1 POP PUSH0 PUSH1 0x6 DUP3 LT ISZERO PUSH2 0xAD JUMPI PUSH2 0x7C DUP3 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0xC DUP3 LT ISZERO PUSH2 0xFD JUMPI PUSH2 0xC1 PUSH1 0x6 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0xCC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x12 DUP3 LT ISZERO PUSH2 0x14D JUMPI PUSH2 0x111 PUSH1 0xC DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x11C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x18 DUP3 LT ISZERO PUSH2 0x19D JUMPI PUSH2 0x161 PUSH1 0x12 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x16C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x1E DUP3 LT ISZERO PUSH2 0x1ED JUMPI PUSH2 0x1B1 PUSH1 0x18 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x1BC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x24 DUP3 LT ISZERO PUSH2 0x23D JUMPI PUSH2 0x201 PUSH1 0x1E DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x20C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x2A DUP3 LT ISZERO PUSH2 0x28D JUMPI PUSH2 0x251 PUSH1 0x24 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x25C SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x30 DUP3 LT ISZERO PUSH2 0x2DD JUMPI PUSH2 0x2A1 PUSH1 0x2A DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x2AC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH1 0x36 DUP3 LT ISZERO PUSH2 0x32D JUMPI PUSH2 0x2F1 PUSH1 0x30 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x2FC SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP PUSH2 0x370 JUMP JUMPDEST PUSH2 0x338 PUSH1 0x36 DUP4 PUSH2 0x699 JUMP JUMPDEST PUSH2 0x343 SWAP1 PUSH1 0x28 PUSH2 0x6FD JUMP JUMPDEST PUSH32 0x0 SWAP1 SHR PUSH5 0xFFFFFFFFFF AND SWAP1 POP JUMPDEST PUSH4 0xFFFFFFFF PUSH1 0x8 DUP3 SWAP1 SHR DUP2 AND SWAP1 DUP8 AND DUP2 GT ISZERO PUSH2 0x398 JUMPI PUSH2 0x391 PUSH1 0x1 DUP5 PUSH2 0x699 JUMP JUMPDEST SWAP4 POP PUSH2 0x3CB JUMP JUMPDEST DUP7 PUSH4 0xFFFFFFFF AND DUP2 PUSH4 0xFFFFFFFF AND LT ISZERO PUSH2 0x3BE JUMPI PUSH2 0x3B7 DUP4 PUSH1 0x1 PUSH2 0x6B2 JUMP JUMPDEST SWAP5 POP PUSH2 0x3CB JUMP JUMPDEST POP PUSH1 0xFF AND SWAP4 POP PUSH2 0x3D3 SWAP1 POP JUMP JUMPDEST POP POP POP PUSH2 0x47 JUMP JUMPDEST PUSH0 DUP4 PUSH1 0x1 SUB PUSH2 0x403 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x2 SUB PUSH2 0x432 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x3 SUB PUSH2 0x461 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x4 SUB PUSH2 0x490 JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x5 SUB PUSH2 0x4BF JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x6 SUB PUSH2 0x4EE JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x7 SUB PUSH2 0x51D JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x8 SUB PUSH2 0x54C JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0x9 SUB PUSH2 0x57B JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST DUP4 PUSH1 0xA SUB PUSH2 0x5AA JUMPI POP PUSH32 0x0 PUSH2 0x5CD JUMP JUMPDEST POP PUSH32 0x0 JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH2 0x64E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0xE PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x554E4B4E4F574E5F4D4554484F44000000000000000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST CALLDATASIZE PUSH0 DUP1 CALLDATACOPY PUSH0 DUP1 CALLDATASIZE PUSH0 DUP5 GAS DELEGATECALL RETURNDATASIZE PUSH0 DUP1 RETURNDATACOPY DUP1 DUP1 ISZERO PUSH2 0x668 JUMPI RETURNDATASIZE PUSH0 RETURN JUMPDEST RETURNDATASIZE PUSH0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST DUP2 DUP2 SUB DUP2 DUP2 GT ISZERO PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST DUP1 DUP3 ADD DUP1 DUP3 GT ISZERO PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP JUMPDEST PUSH0 DUP3 PUSH2 0x6F8 JUMPI PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST DUP1 DUP3 MUL DUP2 ISZERO DUP3 DUP3 DIV DUP5 EQ OR PUSH2 0x6AC JUMPI PUSH2 0x6AC PUSH2 0x66C JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP6 BYTE 0xB0 0xF7 PUSH8 0x7AD17E29A3851E05 0xFC 0xD6 0xDC 0x22 CALLCODE 0xD0 SHL 0x4F EXTCODEHASH SWAP4 0xAD SGT JUMP 0xA9 CREATE2 OR 0xBB PUSH12 0x1664736F6C63430008140033 ",
        "sourceMap": "259:8130:0:-:0;;;;;;;;;;;;-1:-1:-1;5385:10:0;5405:7;;5398:15;;;5385:10;;5487:14;5500:1;5487:10;:14;:::i;:::-;5471:30;;5505:1129;5520:5;5512:4;:13;5505:1129;;5532:9;5561:1;5545:12;5552:5;5545:4;:12;:::i;:::-;5544:18;;;;:::i;:::-;5532:30;;5567:11;5591:1;5587;:5;5583:856;;;5627:6;:1;5631:2;5627:6;:::i;:::-;5615:7;:19;;5638:12;5614:36;5600:51;;5583:856;;;5671:2;5667:1;:6;5663:776;;;5709:5;5713:1;5709;:5;:::i;:::-;5708:12;;5718:2;5708:12;:::i;:::-;5696:7;:25;;5725:12;5695:42;5681:57;;5663:776;;;5758:2;5754:1;:6;5750:689;;;5796:6;5800:2;5796:1;:6;:::i;:::-;5795:13;;5806:2;5795:13;:::i;:::-;5783:7;:26;;5813:12;5782:43;5768:58;;5750:689;;;5846:2;5842:1;:6;5838:601;;;5884:6;5888:2;5884:1;:6;:::i;:::-;5883:13;;5894:2;5883:13;:::i;:::-;5871:7;:26;;5901:12;5870:43;5856:58;;5838:601;;;5934:2;5930:1;:6;5926:513;;;5972:6;5976:2;5972:1;:6;:::i;:::-;5971:13;;5982:2;5971:13;:::i;:::-;5959:7;:26;;5989:12;5958:43;5944:58;;5926:513;;;6022:2;6018:1;:6;6014:425;;;6060:6;6064:2;6060:1;:6;:::i;:::-;6059:13;;6070:2;6059:13;:::i;:::-;6047:7;:26;;6077:12;6046:43;6032:58;;6014:425;;;6110:2;6106:1;:6;6102:337;;;6148:6;6152:2;6148:1;:6;:::i;:::-;6147:13;;6158:2;6147:13;:::i;:::-;6135:7;:26;;6165:12;6134:43;6120:58;;6102:337;;;6199:2;6195:1;:6;6191:248;;;6237:6;6241:2;6237:1;:6;:::i;:::-;6236:13;;6247:2;6236:13;:::i;:::-;6224:7;:26;;6254:12;6223:43;6209:58;;6191:248;;;6288:2;6284:1;:6;6280:159;;;6326:6;6330:2;6326:1;:6;:::i;:::-;6325:13;;6336:2;6325:13;:::i;:::-;6313:7;:26;;6343:12;6312:43;6298:58;;6280:159;;;6403:6;6407:2;6403:1;:6;:::i;:::-;6402:13;;6413:2;6402:13;:::i;:::-;6390:7;:26;;6420:12;6389:43;6375:58;;6280:159;6465:9;6473:1;6465:9;;;;;;6484:11;;;;6480:150;;;6511:4;6514:1;6511;:4;:::i;:::-;6503:12;;6480:150;;;6539:3;6531:11;;:5;:11;;;6527:103;;;6557:5;:1;6561;6557:5;:::i;:::-;6550:12;;6527:103;;;-1:-1:-1;6609:4:0;6602:11;;-1:-1:-1;6619:5:0;;-1:-1:-1;6619:5:0;6527:103;5527:1107;;;5505:1129;;;6638:22;6668:19;6691:1;6668:24;6664:851;;-1:-1:-1;6716:17:0;6664:851;;;6748:19;6771:1;6748:24;6744:771;;-1:-1:-1;6796:17:0;6744:771;;;6828:19;6851:1;6828:24;6824:691;;-1:-1:-1;6876:17:0;6824:691;;;6908:19;6931:1;6908:24;6904:611;;-1:-1:-1;6956:17:0;6904:611;;;6988:19;7011:1;6988:24;6984:531;;-1:-1:-1;7036:17:0;6984:531;;;7068:19;7091:1;7068:24;7064:451;;-1:-1:-1;7116:17:0;7064:451;;;7148:19;7171:1;7148:24;7144:371;;-1:-1:-1;7196:17:0;7144:371;;;7228:19;7251:1;7228:24;7224:291;;-1:-1:-1;7276:17:0;7224:291;;;7308:19;7331:1;7308:24;7304:211;;-1:-1:-1;7356:17:0;7304:211;;;7388:19;7411:2;7388:25;7384:131;;-1:-1:-1;7437:17:0;7384:131;;;-1:-1:-1;7487:23:0;7384:131;7527:28;;;7519:55;;;;;;;1120:2:1;7519:55:0;;;1102:21:1;1159:2;1139:18;;;1132:30;1198:16;1178:18;;;1171:44;1232:18;;7519:55:0;;;;;;;;7962:14;7959:1;7956;7943:34;8149:1;8146;8130:14;8127:1;8111:14;8104:5;8091:60;8207:16;8204:1;8201;8186:38;8236:6;8285:45;;;;8358:16;8355:1;8348:27;8285:45;8308:16;8305:1;8298:27;14:184:1;66:77;63:1;56:88;163:4;160:1;153:15;187:4;184:1;177:15;203:128;270:9;;;291:11;;;288:37;;;305:18;;:::i;:::-;203:128;;;;:::o;336:125::-;401:9;;;422:10;;;419:36;;;435:18;;:::i;466:274::-;506:1;532;522:189;;567:77;564:1;557:88;668:4;665:1;658:15;696:4;693:1;686:15;522:189;-1:-1:-1;725:9:1;;466:274::o;745:168::-;818:9;;;849;;866:15;;;860:22;;846:37;836:71;;887:18;;:::i"
      },
      "gasEstimates": {
        "creation": {
          "codeDepositCost": "373200",
          "executionCost": "infinite",
          "totalCost": "infinite"
        },
        "external": {
          "": "infinite"
        }
      },
      "methodIdentifiers": {}
    },
    "metadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address[]\",\"name\":\"implementations\",\"type\":\"address[]\"},{\"internalType\":\"bytes5[]\",\"name\":\"sigMap\",\"type\":\"bytes5[]\"},{\"internalType\":\"address\",\"name\":\"fallbackImplementation\",\"type\":\"address\"}],\"internalType\":\"struct Router10X60.Routes\",\"name\":\"routes\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"}],\"devdoc\":{\"author\":\"Ronan Sandford\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"routes\":\"define the routing   each selector is represented by a bytes5, where the upper most bytes4 is the selector and   the lowest bytes represent the index of the implementations  implementations' addresses are given in an array\"}}},\"title\":\"Router for at max 10 Implementations and 60 function selectors\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"This Router implementation only support at max 10 implementations and 60 function selectors\"}},\"notice\":\"Create an immutable route and delegate function call to their respective implementations\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"solc_0.8/router/Router10X60.sol\":\"Router10X60\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[]},\"sources\":{\"solc_0.8/router/Router10X60.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.0;\\n\\n/// @title Router for at max 10 Implementations and 60 function selectors\\n/// @author Ronan Sandford\\n/// @notice Create an immutable route and delegate function call to their respective implementations\\ncontract Router10X60 {\\n\\taddress internal immutable implementation_01;\\n\\taddress internal immutable implementation_02;\\n\\taddress internal immutable implementation_03;\\n\\taddress internal immutable implementation_04;\\n\\taddress internal immutable implementation_05;\\n\\taddress internal immutable implementation_06;\\n\\taddress internal immutable implementation_07;\\n\\taddress internal immutable implementation_08;\\n\\taddress internal immutable implementation_09;\\n\\taddress internal immutable implementation_10;\\n\\n\\taddress internal immutable fallback_implementation;\\n\\n\\tuint256 internal immutable sigs_01;\\n\\tuint256 internal immutable sigs_02;\\n\\tuint256 internal immutable sigs_03;\\n\\tuint256 internal immutable sigs_04;\\n\\tuint256 internal immutable sigs_05;\\n\\tuint256 internal immutable sigs_06;\\n\\tuint256 internal immutable sigs_07;\\n\\tuint256 internal immutable sigs_08;\\n\\tuint256 internal immutable sigs_09;\\n\\tuint256 internal immutable sigs_10;\\n\\n\\tuint256 internal immutable sigs_count;\\n\\n\\t// This is the interface for routes specification\\n\\tstruct Routes {\\n\\t\\taddress[] implementations;\\n\\t\\t// 255 implementation max as index = 0 means no implementation (allow bytes4(0) to be valid)\\n\\t\\t// first 4 bytes are the bytes4, rightmost is the index for implementation\\n\\t\\t// need to be ordere\\n\\t\\tbytes5[] sigMap;\\n\\t\\taddress fallbackImplementation;\\n\\t}\\n\\n\\t/// @notice This Router implementation only support at max 10 implementations and 60 function selectors\\n\\t/// @param routes define the routing \\n\\t///  each selector is represented by a bytes5, where the upper most bytes4 is the selector and \\n\\t///  the lowest bytes represent the index of the implementations\\n\\t///  implementations' addresses are given in an array\\n\\tconstructor(Routes memory routes) {\\n\\t\\tuint256 numSigs = routes.sigMap.length;\\n\\t\\tuint256 numImpl = routes.implementations.length;\\n\\t\\trequire(numImpl <= 10, 'MAX_IMPLEMENTATIONS_REACHED');\\n\\t\\trequire(numSigs <= 60, 'MAX_SIGS_REACHED');\\n\\n\\t\\t{\\n\\t\\t\\taddress tmp_implementation_01 = routes.implementations[0];\\n\\t\\t\\taddress tmp_implementation_02;\\n\\t\\t\\taddress tmp_implementation_03;\\n\\t\\t\\taddress tmp_implementation_04;\\n\\t\\t\\taddress tmp_implementation_05;\\n\\t\\t\\taddress tmp_implementation_06;\\n\\t\\t\\taddress tmp_implementation_07;\\n\\t\\t\\taddress tmp_implementation_08;\\n\\t\\t\\taddress tmp_implementation_09;\\n\\t\\t\\taddress tmp_implementation_10;\\n\\t\\t\\tif (numImpl > 1) {\\n\\t\\t\\t\\ttmp_implementation_02 = routes.implementations[1];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 2) {\\n\\t\\t\\t\\ttmp_implementation_03 = routes.implementations[2];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 3) {\\n\\t\\t\\t\\ttmp_implementation_04 = routes.implementations[3];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 4) {\\n\\t\\t\\t\\ttmp_implementation_05 = routes.implementations[4];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 5) {\\n\\t\\t\\t\\ttmp_implementation_06 = routes.implementations[5];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 6) {\\n\\t\\t\\t\\ttmp_implementation_07 = routes.implementations[6];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 7) {\\n\\t\\t\\t\\ttmp_implementation_08 = routes.implementations[7];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 8) {\\n\\t\\t\\t\\ttmp_implementation_09 = routes.implementations[8];\\n\\t\\t\\t}\\n\\t\\t\\tif (numImpl > 9) {\\n\\t\\t\\t\\ttmp_implementation_10 = routes.implementations[9];\\n\\t\\t\\t}\\n\\n\\t\\t\\timplementation_01 = tmp_implementation_01;\\n\\t\\t\\timplementation_02 = tmp_implementation_02;\\n\\t\\t\\timplementation_03 = tmp_implementation_03;\\n\\t\\t\\timplementation_04 = tmp_implementation_04;\\n\\t\\t\\timplementation_05 = tmp_implementation_05;\\n\\t\\t\\timplementation_06 = tmp_implementation_06;\\n\\t\\t\\timplementation_07 = tmp_implementation_07;\\n\\t\\t\\timplementation_08 = tmp_implementation_08;\\n\\t\\t\\timplementation_09 = tmp_implementation_09;\\n\\t\\t\\timplementation_10 = tmp_implementation_10;\\n\\t\\t}\\n\\n\\t\\t{\\n\\t\\t\\tuint256 tmp_sigs_01;\\n\\t\\t\\tuint256 tmp_sigs_02;\\n\\t\\t\\tuint256 tmp_sigs_03;\\n\\t\\t\\tuint256 tmp_sigs_04;\\n\\t\\t\\tuint256 tmp_sigs_05;\\n\\t\\t\\tuint256 tmp_sigs_06;\\n\\t\\t\\tuint256 tmp_sigs_07;\\n\\t\\t\\tuint256 tmp_sigs_08;\\n\\t\\t\\tuint256 tmp_sigs_09;\\n\\t\\t\\tuint256 tmp_sigs_10;\\n\\t\\t\\t\\n\\t\\t\\tuint256 lastPair;\\n\\t\\t\\tfor (uint256 i = 0; i < numSigs; i++) {\\n\\t\\t\\t\\tuint256 pair = uint256(uint40(routes.sigMap[i]));\\n\\t\\t\\t\\trequire(lastPair < pair, \\\"NOT_IN_ORDER\\\");\\n\\t\\t\\t\\tlastPair = pair;\\n\\t\\t\\t\\tif (i < 6) {\\n\\t\\t\\t\\t\\ttmp_sigs_01 = tmp_sigs_01 | (pair << (i * 40));\\n\\t\\t\\t\\t} else if (i < 12) {\\n\\t\\t\\t\\t\\ttmp_sigs_02 = tmp_sigs_02 | (pair << ((i - 6) * 40));\\n\\t\\t\\t\\t} else if (i < 18) {\\n\\t\\t\\t\\t\\ttmp_sigs_03 = tmp_sigs_03 | (pair << ((i - 12) * 40));\\n\\t\\t\\t\\t} else if (i < 24) {\\n\\t\\t\\t\\t\\ttmp_sigs_04 = tmp_sigs_04 | (pair << ((i - 18) * 40));\\n\\t\\t\\t\\t} else if (i < 30) {\\n\\t\\t\\t\\t\\ttmp_sigs_05 = tmp_sigs_05 | (pair << ((i - 24) * 40));\\n\\t\\t\\t\\t} else if (i < 36) {\\n\\t\\t\\t\\t\\ttmp_sigs_06 = tmp_sigs_06 | (pair << ((i - 30) * 40));\\n\\t\\t\\t\\t} else if (i < 42) {\\n\\t\\t\\t\\t\\ttmp_sigs_07 = tmp_sigs_07 | (pair << ((i - 36) * 40));\\n\\t\\t\\t\\t} else if (i < 48) {\\n\\t\\t\\t\\t\\ttmp_sigs_08 = tmp_sigs_08 | (pair << ((i - 42) * 40));\\n\\t\\t\\t\\t} else if (i < 54) {\\n\\t\\t\\t\\t\\ttmp_sigs_08 = tmp_sigs_09 | (pair << ((i - 48) * 40));\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\ttmp_sigs_08 = tmp_sigs_10 | (pair << ((i - 54) * 40));\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\tsigs_01 = tmp_sigs_01;\\n\\t\\t\\tsigs_02 = tmp_sigs_02;\\n\\t\\t\\tsigs_03 = tmp_sigs_03;\\n\\t\\t\\tsigs_04 = tmp_sigs_04;\\n\\t\\t\\tsigs_05 = tmp_sigs_05;\\n\\t\\t\\tsigs_06 = tmp_sigs_06;\\n\\t\\t\\tsigs_07 = tmp_sigs_07;\\n\\t\\t\\tsigs_08 = tmp_sigs_08;\\n\\t\\t\\tsigs_09 = tmp_sigs_09;\\n\\t\\t\\tsigs_10 = tmp_sigs_10;\\n\\n\\t\\t\\tsigs_count = numSigs;\\n\\t\\t}\\n\\n\\t\\tfallback_implementation = routes.fallbackImplementation;\\n\\t}\\n\\n\\tfallback() external {\\n\\t\\tuint32 sig = uint32(msg.sig);\\n\\t\\tuint256 implementationIndex;\\n\\t\\tuint256 left = 0;\\n    \\tuint256 right = sigs_count - 1;\\n\\t\\twhile (left <= right) {\\n\\t\\t\\tuint256 i = (left + right) / 2;\\n\\t\\t\\tuint40 pair;\\n\\t\\t\\tif (i < 6) {\\n\\t\\t\\t\\tpair = uint40((sigs_01 >> (i * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 12) {\\n\\t\\t\\t\\tpair = uint40((sigs_02 >> ((i - 6) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 18) {\\n\\t\\t\\t\\tpair = uint40((sigs_03 >> ((i - 12) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 24) {\\n\\t\\t\\t\\tpair = uint40((sigs_04 >> ((i - 18) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 30) {\\n\\t\\t\\t\\tpair = uint40((sigs_05 >> ((i - 24) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 36) {\\n\\t\\t\\t\\tpair = uint40((sigs_06 >> ((i - 30) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t} else if (i < 42) {\\n\\t\\t\\t\\tpair = uint40((sigs_07 >> ((i - 36) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else if (i < 48) {\\n\\t\\t\\t\\tpair = uint40((sigs_08 >> ((i - 42) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else if (i < 54) {\\n\\t\\t\\t\\tpair = uint40((sigs_09 >> ((i - 48) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}  else {\\n\\t\\t\\t\\tpair = uint40((sigs_10 >> ((i - 54) * 40)) & 0xFFFFFFFFFF);\\n\\t\\t\\t}\\n\\t\\t\\tuint32 value = uint32(pair >> 8);\\n\\t\\t\\tif (value > sig) {\\n\\t\\t\\t\\tright = i -1;\\n\\t\\t\\t} else if (value < sig) {\\n\\t\\t\\t\\tleft = i + 1;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\timplementationIndex = pair & 0xFF;\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\taddress implementation;\\n\\t\\tif (implementationIndex == 1) {\\n\\t\\t\\timplementation = implementation_01;\\n\\t\\t} else if (implementationIndex == 2) {\\n\\t\\t\\timplementation = implementation_02;\\n\\t\\t} else if (implementationIndex == 3) {\\n\\t\\t\\timplementation = implementation_03;\\n\\t\\t} else if (implementationIndex == 4) {\\n\\t\\t\\timplementation = implementation_04;\\n\\t\\t} else if (implementationIndex == 5) {\\n\\t\\t\\timplementation = implementation_05;\\n\\t\\t} else if (implementationIndex == 6) {\\n\\t\\t\\timplementation = implementation_06;\\n\\t\\t} else if (implementationIndex == 7) {\\n\\t\\t\\timplementation = implementation_07;\\n\\t\\t} else if (implementationIndex == 8) {\\n\\t\\t\\timplementation = implementation_08;\\n\\t\\t} else if (implementationIndex == 9) {\\n\\t\\t\\timplementation = implementation_09;\\n\\t\\t} else if (implementationIndex == 10) {\\n\\t\\t\\timplementation = implementation_10;\\n\\t\\t} else {\\n\\t\\t\\timplementation = fallback_implementation;\\n\\t\\t}\\n\\n\\t\\trequire(implementation != address(0), 'UNKNOWN_METHOD');\\n\\n\\t\\t// taken from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/8cab922347e79732f6a532a75da5081ba7447a71/contracts/proxy/Proxy.sol#L22-L45\\n\\t\\tassembly {\\n\\t\\t\\t// Copy msg.data. We take full control of memory in this inline assembly\\n\\t\\t\\t// block because it will not return to Solidity code. We overwrite the\\n\\t\\t\\t// Solidity scratch pad at memory position 0.\\n\\t\\t\\tcalldatacopy(0, 0, calldatasize())\\n\\n\\t\\t\\t// Call the implementation.\\n\\t\\t\\t// out and outsize are 0 because we don't know the size yet.\\n\\t\\t\\tlet result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n\\t\\t\\t// Copy the returned data.\\n\\t\\t\\treturndatacopy(0, 0, returndatasize())\\n\\n\\t\\t\\tswitch result\\n\\t\\t\\t// delegatecall returns 0 on error.\\n\\t\\t\\tcase 0 {\\n\\t\\t\\t\\trevert(0, returndatasize())\\n\\t\\t\\t}\\n\\t\\t\\tdefault {\\n\\t\\t\\t\\treturn(0, returndatasize())\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"keccak256\":\"0x147ab278df10cd76aad55b0a1b49d1868c2a4b9a8aa2bc707908fc0c9146c67d\",\"license\":\"MIT\"}},\"version\":1}",
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