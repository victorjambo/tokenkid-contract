const TokenKidFactory = artifacts.require("TokenKidFactory");

module.exports = function (deployer) {
  deployer.deploy(TokenKidFactory);
};
