---
sidebar_position: 4
---

# ToposCore Smart Contract

The `ToposCore` smart contract acts as the central cross-subnet bridge for the Topos Cross-Subnet Messaging Protocol. It is used to send and receive payloads and to monitor state changes. It is mandatory for subnets who want to join the Topos ecosystem to deploy the `ToposCore` on their subnet. It provides the integral methods like:

- `pushCertificate`
- `deployToken`
- `sendToken`
- `callContract`
- `callContractWithToken`

## Asset Transfers

Asset transfer refers to sending a token from a source subnet to a target subnet via the `ToposCore`. The `ToposCore` keeps track of all the tokens that are transferable via the Topos Cross-Subnet Messaging Protocol. The standard mintable `ERC20` tokens can be deployed internally using the `deployToken` method. For already deployed tokens, you need to provide the address of the deployed contract when calling the `deployToken` method. While storing the token addresses, all token addresses are mapped to their respective symbols. You can then use the symbol of the token that you want to transfer.

To make an asset transfer:

- Approve the `ToposCore` to spend an amount on your behalf
- Call the `sendToken` method

Watch the tokens appear on the target subnet.
