---
sidebar_position: 1
---

# Overview

The Topos Cross-Subnet Messaging Protocol provides smart contracts written in [Solidity](https://docs.soliditylang.org/en/latest/) for sending messages across any subnets in the Topos ecosystem. The smart contracts provide three main functionalities:

- **Asset Transfer**: An asset or token is burned/locked on a source subnet and minted/unlocked on a target subnet.
- **Arbitrary Contract Call**: Call any function on a user-defined [ToposExecutable](/build/topos-smart-contracts/topos-executables) smart contract on a target subnet, from a source subnet.
- **Arbitrary Contract Call with Token**: This type of call is similar to the *Arbitrary Contract Call*, with an additional functionality to attach an asset/token with the call.

## Getting Started

The smart contracts are available in the [`topos-smart-contracts`](https://github.com/toposware/topos-smart-contracts/) GitHub repository. The stack relies on the Python framework [Brownie](https://eth-brownie.readthedocs.io/). Follow the instructions written in the [README.md](https://github.com/toposware/topos-smart-contracts/blob/main/README.md), to install Brownie and get started.
