# Introduction

The Topos cross-subnet messaging protocol provides smart contracts written in *Solidity* for sending messages across any subnets in the Topos ecosystem. The smart contracts provide three main functionalities:

- **Asset Transfer**: An asset or token is burned/locked on a source subnet and minted/unlocked on a target subnet.
- **Arbitrary Contract Call**: Call any function on a user-defined *ToposExecutable* smart contract on a target subnet, from a source subnet.
- **Arbitrary Contract Call with Token**: This type of call is similar to the Arbitrary Contract Call, with an additional functionality to attach an asset/token with the contract call.

## Getting Started

The smart contracts are stored in the `topos-smart-contracts` GitHub repo. For ease of development, we use the *Brownie* development and testing framework.

### Installation

Clone `topos-smart-contracts` repo:

```bash
$ git clone https://github.com/toposware/topos-smart-contracts.git
```

Install `pipx` in order to install *Brownie* into a virtual environment and make it available directly from the command line.

Install `pipx`:

```bash
$ python3 -m pip install --user pipx
$ python3 -m pipx ensurepath
```

Install *Brownie* using `pipx`:

```bash
$ pipx install eth-brownie
```

Verify that *Brownie* is installed and working:

```bash
$ brownie
Brownie - Python development framework for Ethereum

Usage:  brownie <command> [<args>...] [options <args>]
```

### Other Installation Methods

Install via `pip`:

```bash
$ pip install eth-brownie
```

### NPM Commands

The `topos-smart-contracts` repo uses *npm* to fetch the project dependencies and to run scripts to build, test, and run the linter for the smart contracts.

Install dependency packages:

```bash
$ npm install
```

Compile smart contracts:

```bash
$ npm run build
```

Run tests:

```bash
$ npm run test
```

Run linter:

```bash
$ npm run lint
```

Fix the format:

```bash
$ npm run lint:fix
```

### Contract Deployment

In order to deploy a smart contract on the `development` network, run the deploy script via *npm*:

```bash
$ npm run deploy <contract_name> <arg1> <arg2>
# npm run deploy ToposCoreContract 0x3194cBDC3dbcd3E11a07892e7bA5c3394048Cc87 0x0000000000000000000000000000000000000000000000000000000000000001
```

In order to deploy a smart contract on any network, first you need to add an account to the *Brownie* accounts.

Add an account to *Brownie* accounts and assign an `id` to it:

```bash
$ brownie accounts generate <id> # generate a new account
# OR
$ brownie accounts new <id> # add an already existing account, provide private key
# OR
$ brownie accounts import <id> <path> # import an account from a JSON keystore file
```

Add a network to the *Brownie* networks:

```bash
$ brownie networks add <environment> <network_id> host=<host> [KEY=VALUE, ...]
# brownie networks add Polygon local-testnet host=http://127.0.0.1:9933 chainid=43
```

`environment`: the category that the network should be placed in, e.g. “Ethereum”, “Polygon”, or “Development”

`network_id`: a unique identifier for the network, e.g. “testnet”

`host`: the address of the node to connect to, e.g. “http://127.0.0.1:9933”

`chainid`: the chain ID of a network, e.g. “43”

Use deployment script to deploy the smart contract:

```bash
$ npm run deploy <contract_name> <id> <arg1> <arg2> -- --network <network_id>
# npm run deploy ToposCoreContract deployment-account 0x3194cBDC3dbcd3E11a07892e7bA5c3394048Cc87 0x0000000000000000000000000000000000000000000000000000000000000001 -- --network ropsten
```
`contract_name`: the name of the smart contract to be deployed, without `.sol` extention

`id`: the ID assigned to an account

`args`: arguments to be passed in the smart contract constructor

`network_id`: unique network identifier added in the previous step

# Register TCE Node

The `TCENodeRegistrator.sol` smart contract provides the functionality for the TCE node operators to register themselves on the Topos Subnet. The smart contract can be pre-deployed on the Topos Subnet during the Topos Subnet setup phase.

In order to register a TCE node operator on the Topos Subnet, use the `registerTCENode` call.

```solidity
// TCENodeRegistrator.sol

function registerTCENode(PeerId peerId) public {
    if (tceNodes[peerId].isPresent) revert TCENodeAlreadyRegistered(peerId);
    TCENode memory tceNode = TCENode(peerId, true);
    tceNodes[peerId] = tceNode;
    emit NewTCENodeRegistered(peerId);
}
```

`peerId`: public key of the TCE node operator

The `peerId` is stored in the `mapping(PeerId => TCENode) public tceNodes`, which stores the public keys for all the TCE network operators. Upon success, the call emits a `NewTCENodeRegistered` event, which stores the `peerId` in the transaction logs.

On the contrary, use the `removeTCENode` call to remove a participant from the TCE network.

```solidity
// TCENodeRegistrator.sol

function removeTCENode(PeerId peerId) public {
    if (!tceNodes[peerId].isPresent) revert TCENodeNotRegistered(peerId);
    delete tceNodes[peerId];
    emit TCENodeRemoved(peerId);
}
```

It emits a `TCENodeRemoved` event storing the removed `peerId` in the transaction logs.

# Register Subnet Network

The `SubnetRegistrator.sol` smart contract allows the stake holder/holders of a subnet to register their subnet on the Topos Subnet, so that the subnet can be a part of the Topos ecosystem. The subnet to be registered must already be up and running prior to the registration. The smart contract can be pre-deployed on the Topos Subnet during the Topos Subnet setup phase.

In order to register a subnet use the `registerSubnet` call.

```solidity
// SubnetRegistrator.sol

function registerSubnet(
    bytes calldata endpoint,
    bytes calldata logoURL,
    string calldata name,
    SubnetPublicKey publicKey
) public {
    if (subnets[publicKey].isPresent) revert SubnetAlreadyRegistered(publicKey);
    Subnet memory subnet = Subnet(endpoint, logoURL, name, true);
    subnets[publicKey] = subnet;
    emit NewSubnetRegistered(publicKey);
}
```

`endpoint`: the JSON RPC endpoint address of the subnet

`logoURL`: the URL pointing to the display logo of the subnet

`name`: the name of the subnet

`publicKey`: the ICE-FROST group public key of a subnet

The registered subnet is stored in the `mapping(SubnetPublicKey => Subnet) public subnets`. Upon success, the call emits a `NewSubnetRegistered` event which stores the `publicKey` in the transaction logs.

For removing the subnet from the registered subnets use the `removeSubnet` call.

```solidity
// SubnetRegistrator.sol

function removeSubnet(SubnetPublicKey publicKey) public {
    if (!subnets[publicKey].isPresent) revert SubnetNotRegistered(publicKey);
    delete subnets[publicKey];
    emit SubnetRemoved(publicKey);
}
```
 If the call is successful it emits a  `SubnetRemoved` event, which stores the `publicKey` of the removed subnet in the transaction logs.

# Topos Core Contract

The `ToposCoreContract.sol` smart contract acts as the central bridge for the Topos Cross-Subnet Messaging Protocol. It provides the integral functionalities like:

- Certificate verification
- Token registration
- Asset transfer
- Call contract
- Call contract with token

The `ToposCoreContract` can be pre-deployed on each subnet that wants to partake in the Topos Cross-Subnet Messaging Protocol.

## Deployment

- Deploy the `TokenDeployer.sol` smart contract
- Deploy the `ToposCoreContract.sol` smart contract

```solidity
// ToposCoreContract.sol

constructor(address tokenDeployerImplementation, subnetId networkSubnetId) {
    if (tokenDeployerImplementation.code.length == 0) revert InvalidTokenDeployer();

    _tokenDeployerImplementation = tokenDeployerImplementation;
    _networkSubnetId = networkSubnetId;
}
```

`tokenDeployerImplementation`: the address of the `TokenDeployer`

`networkSubnetId`:  the ICE-FROST group public key of the subnet where the `ToposCoreContract` is to be deployed

- Deploy the `ToposCoreContractProxy.sol`

```solidity
// ToposCoreContractProxy.sol

constructor(address tccImplementation, bytes memory params) {
    _setAddress(KEY_IMPLEMENTATION, tccImplementation);

    if (tccImplementation.code.length == 0) revert InvalidImplementation();

    // solhint-disable-next-line avoid-low-level-calls
    (bool success, ) = tccImplementation.delegatecall(
        abi.encodeWithSelector(IToposCoreContract.setup.selector, params)
    );

    if (!success) revert SetupFailed();
}
```

`tccImplementation`: `ToposCoreContract` address (deployed in the previous step) as the delegate contract

`params`: bytes representation of → `adminAddresses` and `AdminThreshold`, decoded as:

```solidity
(address[] memory adminAddresses, uint256 adminThreshold) = abi.decode(params, (address[], uint256));
```

The `delegatecall` to the `setup` function, stores the `adminAddresses` according to the `adminThreshold`. The number of admin addresses should be 1:1 ratio with the admin threshold.

- Initiate an instance of the `IToposCoreContract` using the `ToposCoreContractProxy` address

Example:

```bash
$ brownie console
Brownie v1.19.2 - Python development framework for Ethereum

ToposSmartContractsProject is the active project.

Launching 'ganache-cli --accounts 10 --hardfork istanbul --gasLimit 12000000 --mnemonic brownie --port 8545'...
Brownie environment is ready.
>>> topos_core_contract = interface.IToposCoreContract(<toposCoreContractProxyAddr>)
```

The `topos_core_contract` can now be used as a regular `ToposCoreContract` to perform other cross-subnet messaging tasks.

```text
📝 In a Proxy Delegate pattern, the storage of the proxy contract is used while the execution of the business logic resides in the delegate smart contract.
```

## Upgrade the Delegate ToposCoreContract

The `ToposCoreContract` implementation supports upgradability, in case there is an addition or amendment needed in the delegate contract. In order to upgrade the delegate `ToposCoreContract`, deploy the upgraded `ToposCoreContract` on the subnet. Then use the `upgrade` function in the `ToposCoreContract`, to pass on the new implementation address to the `ToposCoreContract` Proxy.

```solidity
// ToposCoreContract.sol

function upgrade(
    address newImplementation,
    bytes32 newImplementationCodeHash,
    bytes calldata setupParams
) external override onlyAdmin {
    if (newImplementationCodeHash != newImplementation.codehash) revert InvalidCodeHash();

    emit Upgraded(newImplementation);

    // AUDIT: If `newImplementation.setup` performs `selfdestruct`, it will result in the loss of _this_ implementation (thereby losing the ToposCoreContract)
    //        if `upgrade` is entered within the context of _this_ implementation itself.
    if (setupParams.length != 0) {
        // solhint-disable-next-line avoid-low-level-calls
        (bool success, ) = newImplementation.delegatecall(
            abi.encodeWithSelector(IToposCoreContract.setup.selector, setupParams)
        );

        if (!success) revert SetupFailed();
    }

    _setImplementation(newImplementation);
}
```

`newImplementation`: address where the upgraded `ToposCoreContract` was deployed

`newImplementationCodeHash`: this is the *codehash* of the upgraded `ToposCoreContract`

```text
Tip: In order to generate the codehash, use the `CodeHash.sol` smart contract.
```

`setupParams`: bytes string representation of `adminAddresses[]` and `newAdminThreshold`

On success, the call emits an `Upgraded` event with the `newImplementation` address, that can be listened to by any external service.

## Certificate Verification

One of the main functions provided by the `ToposCoreContract` is to verify the incoming certificates from the TCE network. The certificate verification is needed to prove that the cross-subnet transactions included in the certificate are indeed valid transactions, before applying them onto the target subnet. In order to verify a certificate, use the `verifyCertificate` call.

```solidity
// ToposCoreContract.sol

function verifyCertificate(bytes memory certBytes) external {
    (bytes memory certId, uint256 certPosition) = abi.decode(certBytes, (bytes, uint256));
    Certificate memory storedCert = verifiedCerts[certId];
    if (storedCert.isVerified == true) revert CertAlreadyVerified();
    if (!_verfiyCertificate(certId)) revert InvalidCert();
    Certificate memory newCert = Certificate({certId: certId, position: certPosition, isVerified: true});
    verifiedCerts[certId] = newCert;
    emit CertVerified(certId);
}
```

`certBytes`: the certificate encoded into a bytes string

## Token Registration

The `ToposCoreContract` allows registration of two different types of the standard *ERC20* tokens to be used in the Topos Cross-Subnet Messaging Protocol.

- **External**: *ERC20* tokens that already exist on their native chains, e.g. *USDC* or Ethereum
- **InternalBurnableFrom**: these are the Topos wrapped tokens that are minted by the Topos network when transferring over the original (external) token

The `External` tokens are transferred using the lock/unlock cross-subnet bridge mechanism, while the `InternalBurnableFrom` tokens are transferred over a burn/mint model.

In order to register a token use the `deployToken` function.

```solidity
// ToposCoreContract.sol

function deployToken(bytes calldata params) external {
	(string memory name, string memory symbol, uint256 cap, address tokenAddress, uint256 dailyMintLimit) = abi
		.decode(params, (string, string, uint256, address, uint256));
	
	// Ensure that this symbol has not been taken.
	if (tokenAddresses(symbol) != address(0)) revert TokenAlreadyExists(symbol);
	
	if (tokenAddress == address(0)) {
	    // If token address is no specified, it indicates a request to deploy one.
    bytes32 salt = keccak256(abi.encodePacked(symbol));
	
    // solhint-disable-next-line avoid-low-level-calls
    (bool success, bytes memory data) = _tokenDeployerImplementation.delegatecall(
        abi.encodeWithSelector(ITokenDeployer.deployToken.selector, name, symbol, cap, salt)
    );

    if (!success) revert TokenDeployFailed(symbol);

    tokenAddress = abi.decode(data, (address));

    _setTokenType(symbol, TokenType.InternalBurnableFrom);
	} else {
    // If token address is specified, ensure that there is a contact at the specified address.
    if (tokenAddress.code.length == uint256(0)) revert TokenContractDoesNotExist(tokenAddress);

    // Mark that this symbol is an external token, which is needed to differentiate between operations on mint and burn.
    _setTokenType(symbol, TokenType.External);
	}
	
	_setTokenAddress(symbol, tokenAddress);
	_setTokenDailyMintLimit(symbol, dailyMintLimit);
	
	emit TokenDeployed(symbol, tokenAddress);
}
```

`params`: bytes representation of → `name`, `symbol`, `cap`, `tokenAddress`, `dailyMintLimit`

If the `tokenAddress` is provided as a zero address, then the token is considered as an `InternalBurnableFrom` , i.e. a Topos wrapped token. The `ToposCoreContract` proceeds to deploy a `BurnableMintableCappedERC20` token, via the `TokenDeployer` using the `name`, `symbol`, `cap`, and `dailyMintLimit` as constructor arguments.

If a `tokenAddress` is provided, the token is considered as an `External` token, which means that it is already an existing token on the subnet. The `tokenAddress` and the `symbol` are stored in a mapping, for future reference to the registered token.

## Asset Transfers

Asset transfer refers to sending a token from a source subnet to a target subnet via the Topos Cross-Subnet Messaging Protocol. In order to make an asset transfer, call the `sendToken` function of the `ToposCoreContract`.

```solidity
// ToposCoreContract.sol

function sendToken(
	subnetId targetSubnetId,
	address receiver,
	string calldata symbol,
	uint256 amount
) external {
    _burnTokenFrom(msg.sender, symbol, amount);
    emit TokenSent(msg.sender, _networkSubnetId, targetSubnetId, receiver, symbol, amount);
}
```

`targetSubnetId`: ID of the target subnet

`receiver`: address of token receiver

`symbol`: symbol of the token to be transferred

`amount`: amount of tokens

The `_burnTokenFrom` function locks the token on the `ToposCoreContract` in case of an `External` token and burns the token in case of an `InternalBurnableFrom` token.

Upon success, the `sendToken` call emits a `TokenSent` event which can be listened to by any external service.

On the target subnet, in order to mint/unlock use the `executeAssetTransfer` call.

```solidity
// ToposCoreContract.sol

function executeAssetTransfer(
    bytes calldata certId,
    bytes calldata crossSubnetTx,
    bytes calldata /*crossSubnetTxProof*/
) external {
    Certificate memory storedCert = getVerfiedCert(certId);
    if (storedCert.isVerified == false) revert CertNotVerified();
    (
        bytes memory txHash,
        address sender,
        subnetId sourceSubnetId,
        subnetId targetSubnetId,
        address receiver,
        string memory symbol,
        uint256 amount
    ) = abi.decode(crossSubnetTx, (bytes, address, subnetId, subnetId, address, string, uint256));
    if (!_validateTargetSubnetId(targetSubnetId)) revert InvalidSubnetId();
    if (_isSendTokenExecuted(txHash, sender, sourceSubnetId, targetSubnetId, receiver, symbol, amount))
        revert TransferAlreadyExecuted();
    // prevent re-entrancy
    _setSendTokenExecuted(txHash, sender, sourceSubnetId, targetSubnetId, receiver, symbol, amount);
    _mintToken(symbol, receiver, amount);
}
```

`certId`: the ID of the certificate containing the reference to the transaction to be applied on the target subnet

`crossSubnetTx`: transaction metadata for example, `txHash`, `symbol`, `receiver`, `amount`, etc.

`crossSubnetTxProof`: proof of inclusion for the transaction

The `_setSendTokenExecuted` function makes sure that once a transaction is executed on the target subnet it cannot be executed twice, by recording the `txHash` and the transaction meta data.

The `_mintToken` function mints the `amount` for the `receiver` if the token is of type `InternalBurnableFrom` and unlocks the token if the token is `External`, given that there are enough tokens in the reserve.

# Topos Executables

The Topos cross-subnet messaging protocol allows users to call a function of a smart contract on a target subnet remotely, from a smart contract on a source subnet. In order to start receiving arbitrary contract calls, the target smart contract needs to implement the `ToposExecutable.sol` interface. 

### Authorize Call Origins

Users of the Topos Executables can allow specific origins to execute an arbitrary call on their target contract. That is to prevent an unauthorized origin from making state changes on the target contract. In order to authorize an origin use the `authorizeOrigin` function.

```solidity
// ToposExecutable.sol

function authorizeOrigin(
    subnetId sourceSubnetId,
    address sourceContractAddr,
    bytes32 selector,
    uint256 minimumCertPosition
) external onlyAdmin {
    _setAuthorizedOrigin(sourceSubnetId, sourceContractAddr, selector, minimumCertPosition);
    emit OriginAuthorized(sourceSubnetId, sourceContractAddr, selector, minimumCertPosition);
}
```

`sourceSubnetId`: ID of a source subnet, to allow calls from a specific subnet

`sourceContractAddr`: address of a source contract, for example, allow calls from the same contract address as the target contract

`selector`: function name represented as bytes string, to allow execution of multiple functions on the target contract

`minimumCertPosition`: allow calls after a certain cert position is reached

If the call is successfully executed, it emits an `OriginAuthorized` event which can be listened to by any external service.

### Sending Arbitrary Contract Call

In order to send an arbitrary contract call, the source executable contract needs to call the  `callContract` function in the `ToposCoreContract`.

```solidity
// ToposCoreContract.sol

function callContract(
    subnetId targetSubnetId,
    address targetContractAddr,
    bytes calldata payload
) external {
    emit ContractCall(
        _networkSubnetId,
        msg.sender,
        targetSubnetId,
        targetContractAddr,
        keccak256(payload),
        payload
    );
}
```

`targetSubnetId`: ID of the target subnet where the arbitrary contract call needs to be executed

`targetContractAddr`: address of the target contract

`payload`: bytes string representation of usually the function name and the arguments

On success, a `ContractCall` event is emitted which can be tracked by any external service.

On the target subnet, instantiate an `IToposExecutable` interface using the `targetContractAddr`. Use the `execute` function of the `IToposExecutable` interface to execute the arbitrary contract call, to include the transaction on the target subnet.

```solidity
// IToposExecutable.sol

function execute(
    bytes calldata certId,
    ContractCallData memory contractCallData,
    bytes calldata crossSubnetTxProof
) external;
```

This function performs the necessary checks for an authentic and authorized contact call. It allows the contract deployer to do as he pleases, after the call has been verified in accordance with the rules of the `ToposCoreContract` in the inherited `_execute` function.

```solidity
// ToposExecutable.sol

function execute(
    bytes calldata certId,
    ContractCallData memory contractCallData,
    bytes calldata /*crossSubnetTxProof*/
) external override {
    uint256 certPosition = toposCoreContract.verifyContractCallData(certId, contractCallData.targetSubnetId);
    if (_isContractCallExecuted(contractCallData) == true) revert ContractCallAlreadyExecuted();
    uint256 minimumCertPosition = _isAuthorizedOrigin(
        contractCallData.sourceSubnetId,
        contractCallData.sourceContractAddr,
        contractCallData.selector
    );
    if (certPosition <= minimumCertPosition) revert UnauthorizedOrigin();

    // prevent re-entrancy
    _setContractCallExecuted(contractCallData);
    _execute(
        contractCallData.targetSubnetId,
        contractCallData.targetContractAddr,
        contractCallData.selector,
        contractCallData.payload
    );
}
```

### Sending Arbitrary Contract Call with Token

An arbitrary contract call, accompanied by a token transfer, is useful in use cases where a payment needs to be made with some form of service. This type of call is a mixture of an asset transfer and an arbitrary contract call. In order to make an arbitrary contract call with tokens, use the `callContractWithToken` function in the `ToposCoreContract`.

```solidity
// ToposCoreContract.sol

function callContractWithToken(
    subnetId targetSubnetId,
    address targetContractAddr,
    bytes calldata payload,
    string calldata symbol,
    uint256 amount
) external {
    _burnTokenFrom(msg.sender, symbol, amount);
    emit ContractCallWithToken(
        _networkSubnetId,
        msg.sender,
        targetSubnetId,
        targetContractAddr,
        keccak256(payload),
        payload,
        symbol,
        amount
    );
}
```

The first three arguments are the same as a regular contract call. In addition to that, the user needs to provide the `symbol` and the `amount` for the token to be transferred. The token `receiver` can be specified with the `payload`. This emits a `ContractCallWithToken` event monitorable by any external service.

On the target subnet, the call is executed using the `executeWithToken` function in the `IToposExecutable` interface.

```solidity
// IToposExecutable.sol

function executeWithToken(
    bytes calldata certId,
    ContractCallWithTokenData memory contractCallWithTokenData,
    bytes calldata crossSubnetTxProof
) external;
```

The arguments for this function are the same as with the `execute` function. After all the data is verified the contract deployer is free to implement any custom logic to handle the call by overriding the `_executeWithToken` function.

```solidity
// IToposExecutable.sol

function executeWithToken(
    bytes calldata certId,
    ContractCallWithTokenData memory contractCallWithTokenData,
    bytes calldata /*crossSubnetTxProof*/
) external override {
    uint256 certPosition = toposCoreContract.verifyContractCallData(
        certId,
        contractCallWithTokenData.targetSubnetId
    );
    if (_isContractCallAndMintExecuted(contractCallWithTokenData) == true) revert ContractCallAlreadyExecuted();
    uint256 minimumCertPosition = _isAuthorizedOrigin(
        contractCallWithTokenData.sourceSubnetId,
        contractCallWithTokenData.sourceContractAddr,
        contractCallWithTokenData.selector
    );
    if (certPosition <= minimumCertPosition) revert UnauthorizedOrigin();

    // prevent re-entrancy
    _setContractCallExecutedWithMint(contractCallWithTokenData);
    _executeWithToken(
        contractCallWithTokenData.targetSubnetId,
        contractCallWithTokenData.targetContractAddr,
        contractCallWithTokenData.selector,
        contractCallWithTokenData.payload,
        contractCallWithTokenData.symbol,
        contractCallWithTokenData.amount
    );
}
```
