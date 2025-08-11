// offchainpay-hardhat/scripts/sendFunds.js

const hre = require("hardhat");

// --- SINGLE SOURCE OF TRUTH ---
// This mnemonic MUST be the exact same one you put in your hardhat.config.js and your App.tsx
const FIXED_MNEMONIC = "test test test test test test test test test test test junk";

async function main() {
  // 1. DYNAMICALLY CREATE THE APP'S WALLET
  // Instead of pasting the address, we re-create the wallet object from the fixed mnemonic.
  // This is the exact same logic your app uses!
  const appWallet = hre.ethers.Wallet.fromPhrase(FIXED_MNEMONIC);
  const appWalletAddress = appWallet.address;

  // 2. GET THE SENDER
  // Get the first pre-funded account from Hardhat to be the sender (Account #0)
  const [sender] = await hre.ethers.getSigners();

  // 3. DEFINE THE AMOUNT
  const amountToSend = hre.ethers.parseEther("10.0"); // Let's send a larger amount, 10 ETH

  console.log(
    `Sending ${hre.ethers.formatEther(amountToSend)} ETH from Hardhat account ${sender.address} to your app's wallet ${appWalletAddress}`
  );

  // 4. SEND THE TRANSACTION
  const tx = await sender.sendTransaction({
    to: appWalletAddress,
    value: amountToSend,
  });

  // 5. WAIT FOR CONFIRMATION
  await tx.wait();

  console.log("✅ Funds sent successfully!");
  console.log(`Transaction hash: ${tx.hash}`);
}

// Standard Hardhat error handling pattern
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});