const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("WalletModule", (m) => {
  // Default parameters for the multi-sig wallet
  const owners = m.getParameter("owners", []);
  const numVotedRequired = m.getParameter("numVotedRequired", 2);

  // Deploy the Wallet contract with owners and required votes
  const wallet = m.contract("Wallet", [owners, numVotedRequired]);

  return { wallet };
});
