---
sidebar_position: 4

---

# Threshold Signatures

## Digital Signature

To prevent spamming, false identity and data tampering, Topos XCP leverages _digital signatures_ to ensure Certificates are attributed to the right originators—i.e. the blockchains that emit them to prove the validity of their state transitions—and that their integrity is retained during their propagation. As seen previously, signatures are included in Certificates and hence can be validated prior to verifying the Certificate validity using a public key assigned to their origin side-chain. 

A basic digital signature allows an *individual* entity to sign a message. However, in blockchain environments we tent to distribute trust among the group of validators rather than single ones. That's why multi-signatures and threshold signatures are used by different blockchain projects. While multi signatures goves the signing authority to a predefined group of entities, in threshold signatures *any* group of signers with enough cardinality are able to sign.

## ICE-FROST

To allow a non-unary and dynamic set of signers to sign Certificates against a static public key, Topos XCP makes use of **ICE-FROST**, an in-house customization of the [FROST](https://eprint.iacr.org/2020/852.pdf) threshold signature scheme.

:::tip Threshold Signature

A _t out of n_ threshold signature scheme is a multi-party digital signature protocol such that any honest subset of signers of cardinality _t_ or greater of the total of _n_ participants is sufficient to successfully create a valid signature.

:::

In addition to augmenting FROST with robustness in the distributed key generation phase, ICE-FROST protocol enjoys two properties that are tailored for our XCP design; namely, i) exact **identification of a cheating entity** during the key generation and signing protocols, that can conclude in preventing cheating if suitable punishments ar predicted for cheaters, and ii)allowing a blockchain network to distribute a **static long-running public key** with respect to which partial signatures can be produced by any set of signers. This allows the public key associated to each side-chain stay static while the set of potential signers can vary easily. This is a key feature for blockchains, i.e. dynamic networks whose participating nodes arbitrarily join and leave.

### ICE-FROST Protocol Outline

In this section, we will provide an outline of ICE-FROST.

#### Preliminaries

##### Schnorr Signature Algorithm

[Schnorr signature algorithm](https://link.springer.com/article/10.1007/BF00196725) is a digital signature algorithm. FROST and ICE-FROST are both based on Schnorr, hence we will briefly describe it here.

Shnorr signatures are constructed based on the Sigma protocol structure. Sigma protocols consist of three message transmissions between a prover and a verifier; i) the prover sends a commitment value to the verifier, ii) the prover sends a uniformly random challenge to the verifier, and iii) the prover answers to the challenge using some public function, and a witness. The prover is the signer in the Schnorr signature scheme and the witness is the secret key held by the signer that is kept secret using the descrete log hardness assumption. The signature scheme is used non-interactive using [Fiat-Shamir transform](https://link.springer.com/content/pdf/10.1007/3-540-47721-7_12.pdf) that is practically using the output of a hash function on the commitment, witness and the message instead of the challenge value. 


#### Distributed Key Generation(DKG): Initial Run

ICE FROST distributed key generation protocol is based on the [DKG algorithm of Pedersen](https://link.springer.com/chapter/10.1007/3-540-46416-6_47) that is in effect a distributed secret sharing scheme. All participant of the DKG algorithm *securely* distribute their random chosen secret among other participants. Since no participant is trusted prior to execution of the protocol,  a *verifiable* secret sharing scheme is used that allows participants to verify if their received share is consistant with others. Verfiability is achieved by enforcing the secret dealer to committ to its chosen secret (and the corresponding polynomial that is used for secret sharing) and broadcast the commitment values at the beginig of the protocol. After successful sharing of secrets, participants add their received shares to calculate their private signing share. The group's public verification key is calculated using the public broadcasted committments. 

To enable cheating identifiability in ICE FROST, each participant chooses a pair of ephemeral public and private keys for each secret dealing and publishes the public key and a proof of knowledge of the corresponding private key. For sending shares to each participant a symmetric [Diffie-Helman(DH) key](https://ee.stanford.edu/%7Ehellman/publications/24.pdf) is established mutually between the sender and receiver of the share. This key is used to securely encrypt the share and sending it out to the corresponding receiver. If a participant cheats by sending out an inconsistant share, the receiver will catch it using the initial published committment. However, since shares are transmitted all encrypted, the receiver of the mal-formed share has to reveal the mutual DH key to convince other participants that it has received a mal-formed share. If the receiver lies and accueses an honest participant to sending a mal-formed share it will be caught itself after other participants check its complaint using the revealed DH key.


#### Updating Shares

Participants' shares are updated by running the *key update protocol* which is a redistribution of secret shares to provide each shareholder with a fresh signing share while allowing new participants to join or the old ones to leave the protocol. Even if the set of participants stay the same, it is recommended to run the key update protocol every once in a while (e.g., every six hours) to maintain the security of distributed keys. To redistribute the secret key, each participant distributes its secret signing share using the described DKG. If required, the set of participants and the scheme's threshold can be updated during each run of the key update protocol. 



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

