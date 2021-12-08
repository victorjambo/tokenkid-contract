let accounts = await web3.eth.getAccounts()

let tokenkid = await TokenKidFactory.deployed()

tokenkid.safeMint('One', '4000000000000000000', 'uri', 'desc')

tokenkid.safeMint('two', '1000000000000000000', 'uri', 'desc')

tokenkid.buyToken(0, '0x101')

tokenkid.getMintedToken(0)

tokenkid.getTokenPriceHistory(0)

tokenkid.getTokenPriceHistory(1)

tokenkid.changeTokenPrice(0, '2000000000000000000')

tokenkid.toggleOnSale(0)
