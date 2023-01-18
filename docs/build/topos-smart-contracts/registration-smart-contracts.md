---
sidebar_position: 2
---

# Registration Smart Contracts

The Topos Subnet comes with two pre-deployed smart contracts, which are used to register the ecosystem actors (subnets and TCE participants), namely:

- `TCENodeRegistrator`
- `SubnetRegistrator`

More on registration in the [Topos Subnet](/learn/subnets/topos-subnet) section.

## TCE Node Registration

You can register your TCE node via the `TCENodeRegistrator` smart contract. This contract provides the basic functionality of registering or removing a TCE node from the Topos ecosystem.

Call the `registerTCENode` method to register your TCE node.

To remove your TCE node, call the `removeTCENode` method.

## Subnet Registration

You can use the `SubnetRegistrator` smart contract to register your subnet. This contract provides methods to register or remove a subnet from the Topos ecosystem.

To register your subnet use the `registerSubnet` method.

Call the `removeSubnet` method to remove your subnet.
