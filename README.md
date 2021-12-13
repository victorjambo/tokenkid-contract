# TokenKid Contract

TokenKid is simple an NFT Marketplace built on [Celo](https://celo.org)

> _This project hasn't been reviewed\Audited by other engineers. I might have missed some errors._ 😀

Built on [Truffle](https://trufflesuite.com/docs) and [Ganache](https://github.com/trufflesuite/ganache)

Deployed via [Remix](https://remix.ethereum.org/)



### To do Improvements before deploy to mainnet
1. Line by line review of the contract
2. Security Audit
3. Write tests
5. Make `TokenKidFactory` an upgradable smart contract.
    * This will separate logic and data.
    * [Resource](https://medium.com/quillhash/how-to-write-upgradable-smart-contracts-in-solidity-d8f1b95a0e9a)


## Deployments
1. [Web3 App](http://tokenkid.netlify.com/)
2. [Smart Contract](https://alfajores-blockscout.celo-testnet.org/address/0xd0Ad4A716108d6eF6e2D683865Fde412fAEdC26B/contracts)
3. [Subgraph Hosted-service](https://thegraph.com/hosted-service/subgraph/victorjambo/tokenkid?selected=playground)


## Repos & Docs
1. [Web3 App](https://github.com/victorjambo/tokenkid)
2. [Subgraph](https://github.com/victorjambo/tokenkid-subgraph)



## `TokenKidFactory`

Factory to create/mint ERC721 Tokens




### `constructor(address owner)` (public)
Used to initialize the TokenKidFactory contract.


### `onlyExisting(uint256 _tokenId)` (internal)
Modifier to check if TokenId exists


### `onlyOwner(uint256 _tokenId)` (internal)
Modifier to check if Token is owned by msg.sender

### `onlyTokenOrContractOwner` (internal)
Modifier to check if msg.sender is owner of token or smart contract owner

### `safeMint(string _tokenName, uint256 _price, string _tokenURI)` (public)
Used to create/mint a token.


### `buyToken(uint256 _tokenId, address token)` (public)
Transfer ownership of ERC721 token and Transfer ERC20 tokens to owner.
This a payable function, remember to send price in msg.value.


### `getMintedToken(uint256 _tokenId)` (public)
Get a Minted Token given the _tokenId

### `changeTokenPrice(uint256 _tokenId, uint256 _price)` (public)
Update NFT Price


### `toggleOnSale(uint256 _tokenId)` (public)
Update NFT On sale Availability

### `burnToken(uint256 _tokenId)` (public)
Delete NFT Token
