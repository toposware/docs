---
sidebar_position: 4
---

# Threshold Signatures

## Digital Signature

To prevent spamming, false identity and data tampering, Topos XCP leverages _digital signatures_ to ensure Certificates are attributed to the right originators—i.e. the blockchains that emit them to prove the validity of their state transitions—and that their integrity is retained during their propagation. As seen previously, signatures are included in Certificates and hence can be validated prior to verifying the Certificate validity.

## ICE-FROST

To allow a non-unary and dynamic set of signers to sign Certificates against a static public key, Topos XCP makes use of **ICE-FROST**, an in-house customization of the [FROST](https://eprint.iacr.org/2020/852.pdf) threshold signature scheme.

:::tip Threshold Signature

A _t out of n_ threshold signature scheme is a multi-party digital signature protocol such that a any honest subset of signers of cardinality _t_ or greater of the total of _n_ participants is sufficient to successfully create a valid signature.

:::

In addition to augmenting FROST with robustness in the distributed key generation phase, ICE-FROST protocol allows a blockchain network to distribute a **static long-running public key** with respect to which partial signatures can be produced by any set of signers. This is a key feature for blockchains, i.e. dynamic networks whose participating nodes arbitrarily join and leave.
