# TokenKid Contract

TokenKid is simple an NFT Marketplace built on [Celo](https://celo.org)

> _This project hasn't been reviewed\Audited by other engineers. I might have missed some errors._ 😀

Built on [Truffle](https://trufflesuite.com/docs) and [Ganache](https://github.com/trufflesuite/ganache)

Deployed via [Remix](https://remix.ethereum.org/)



## TO DO Improvements before deploy to mainnet
1. Line by line review of the contract
2. Security Audit
3. Write tests
4. Abstract `enum ERC20TokenSymbol` from `TokenKidFactory` contract
5. make `TokenKidFactory` an upgradable smart contract.
    * This will separate logic and data. ERC20 contract addresses are hard coded in `getERC20TokenSymbolByValue`, Incase one of the addresses changed we would have to deploy a new contract.
    * [Resource](https://medium.com/quillhash/how-to-write-upgradable-smart-contracts-in-solidity-d8f1b95a0e9a)  




# Contract Function documentation
## `TokenKidFactory`

Factory to create/mint ERC721 Tokens




### `constructor(address owner)` (public)
Used to initialize the TokenKidFactory contract.


### `onlyExisting(uint256 _tokenId)` (internal)
Modifier to check if TokenId exists


### `onlyOwner(uint256 _tokenId)` (internal)
Modifier to check if Token is owned by msg.sender


### `safeMint(string _tokenName, uint256 _price, string _tokenURI)` (public)
Used to create/mint a token.


### `buyToken(uint256 _tokenId, address token)` (public)
Transfer ownership of ERC721 token and Transfer ERC20 tokens to owner.
This a payable function, remember to send price in msg.value.


### `getMintedToken(uint256 _tokenId)` (public)
Get a Minted Token given the _tokenId

Setters-----------------------------------------------------------------

### `changeTokenPrice(uint256 _tokenId, uint256 _price)` (public)
Update NFT Price


### `toggleOnSale(uint256 _tokenId)` (public)
Update NFT On sale Availability
