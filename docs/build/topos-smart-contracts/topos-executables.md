---
sidebar_position: 5
---

# Topos Executables

The Topos Cross-Subnet Messaging Protocol allows users to send a message from a source subnet to a target subnet. To send and receive customized messages, the source and the target contracts need to implement the `ToposExecutable` interface. A `ToposExecutable` smart contract connects to the `ToposCoreContract` to transfer the custom payload from the source subnet to the target subnet.

There are two types of supported message types:

- `callContract` - An arbitrary contract call
- `callContractWithToken` - An arbitrary contract call with attached tokens

## Authorize Call Origins

Users of the `ToposExecutable` contracts can allow specific origins to execute a `callContract` or a `callContractWithToken` on their contracts. That is to prevent an unauthorized origin from making state changes to the contract's storage.

To authorize an origin call the `authorizeOrigin` method.

## Sending Arbitrary Contract Call

To send an arbitrary contract call, the source `ToposExecutable` contract needs to call the  `callContract` method. The `callContract` method resides in the `ToposCoreContract` interface which is accessible by the `ToposExecutable` contract.

## Sending Arbitrary Contract Call with Token

An arbitrary contract call accompanied by a token transfer is similar to sending an arbitrary contract call across subnets. The only difference is that a token is attached to the payload. This type of message is useful in cases where a payment is needed to be made with some form of service.

To make an arbitrary contract call with tokens, use the `callContractWithToken` method in the `ToposCoreContract`, which can be called from within the `ToposExecutable` smart contract.
