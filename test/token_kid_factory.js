const TokenKidFactory = artifacts.require("TokenKidFactory");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TokenKidFactory", function (/* accounts */) {
  it("should assert true", async function () {
    await TokenKidFactory.deployed();
    return assert.isTrue(true);
  });
});
