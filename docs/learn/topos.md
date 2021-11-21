---
sidebar_position: 3
---

# TOPOS

**TOPOS**—Topos XSP's **native asset**— is the first asset compatible with cross-subnet transactions.

:::info Future work
In future iterations, we plan to extend Topos XSP by allowing subnets to exchange transactions of any types (other assets or not based on asset transfers) and, as such, be free from relying on TOPOS for cross-subnet transactions.
:::

TOPOS's supply is managed by a special subnet: the TOPOS subnet.

## TOPOS Subnet

The **TOPOS subnet**—the first blockchain-based subnet developed with Topos Subnet DevKit—is built on top of a hybrid consensus composed of a NPoS-based block production mechanism that provides probabilistic finality and a finality gadget that enforces deterministic finality over a chain.

### Validators

Validators are key participants of the TOPOS subnet for they engage in both mechanisms of its hybrid consensus protocol:

- They produce new blocks
- They vote on the canonical chain

Validators are elected by nominators who bond their staked TOPOS to the validator candidates of their choice. Once elected, validators participate in block production and share their block rewards with their nominators. Validators behaving badly are punished and so are their nominators.

### Block Production

**BABE** is TOPOS subnet's block production mechanism. Validators get assigned slots—discrete units of time—during which they can propose a block. The slot assignation mechanism results from the total stake attributed to each validator and from [VRF-based randomness](https://wiki.polkadot.network/docs/learn-randomness).

:::tip
Refer to the [BABE paper](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html) for more details about the protocol.
:::

### Finality Gadget

The finality gadget—GRANDPA—is a partially synchronous BFT protocol, and as such is ensured to be correctly executed if $f<1/3$ of the voting power (the validators) is Byzantine.

:::tip
Refer to the [GRANDPA paper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) for more details about the procotol.
:::

## Role In XSP
