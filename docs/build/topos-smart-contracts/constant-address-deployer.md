---
sidebar_position: 3
---

# Constant Address Deployer

Creating a Cross-Subnet Messaging Protocol sometimes requires deploying the same smart contract on different subnets. As we know, deploying the same smart contract on different networks would result in a different address due to a different sender's `address` or a different `nonce`. Having different addresses for the same smart contract makes it difficult to track the deployed smart contract on different subnets.

To mitigate the complexity, we leverage the `ConstAddressDeployer` smart contract to deploy the target contract with a constant address across all subnets. The smart contract is deployed using the `create2` opcode.

To deploy a smart contract via the `ConstAddressDeployer`, call the `deploy` method. If your smart contract has an initialize function, call the `deployAndInit` method to deploy and initialize the smart contract in a single step.
