require("@nomicfoundation/hardhat-toolbox");

// This is the standard, well-known mnemonic phrase used by Hardhat and other tools for testing.
// It is NOT secure and should NEVER be used for real funds.
const TEST_MNEMONIC = "test test test test test test test test test test test junk";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24", // I've updated this to a more recent stable version
  networks: {
    hardhat: {
      // This section configures the local Hardhat network
      accounts: {
        mnemonic: TEST_MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20, // Creates 20 accounts from this mnemonic
        passphrase: "",
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545", // URL for connecting to the `npx hardhat node`
      // Accounts will be derived from the node itself
    }
  },
};