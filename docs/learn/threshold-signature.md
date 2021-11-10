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

### ICE-FROST Protocol Outline

In this section, we will provide an outline of ICE-FROST.

#### Preliminaries

##### Schnorr Signature Algorithm



#### Distributed Key Generation: Initial Run



#### Redistribution of Shares



#### Preprocessing



#### Signing



### ICE-FROST in XCP



### Benefits of ICE-FROST over FROST

The main benefits of ICE-FROST over its predecessor FROST are:

- Robustness of key generation phase, meaning that we are guaranteed to obtain public key and/or redistribute the shares, without aborting the protocol.
- Redistribution feature of shares, which allows the group public key to be static, meaning that it could be used for as long as required by the group or in our specific case by sidechain.

### Future Work and Next Steps

ICE-FROST, as previously mentioned has a robust distributed key generation phase. The next step is to make the signing phase robust as well. At the moment, it is semi-robust, due to the fact that it will need to be re-run if at least one of the signers is malicious. Given that the malicious participants are excluded in the next run and re-runs, we are still getting a signature. Thus, a logical next step is to make signing run only once per certificate. This will most likely come at a cost. Thus, we see this next step as an additional option, rather than a replacement of the current one.

Notice that having both options available would not cause any interoperability issues, as the final signature in any case will be a Schnorr signature with respect to the given group public key and hence can still be verified by any entity with ability to verify Schnorr signatures.

