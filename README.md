# OffChainPay

**Seamless Crypto Payments – Online or Offline**

OffChainPay is a hybrid payment solution enabling instant transactions using Ethereum-based cryptocurrencies, even in offline environments. Designed for speed, security, and accessibility, it bridges the gap between blockchain and everyday payments.

---

## 🌟 Key Features
- **Dual-Mode Payments** – Works both online (via blockchain) and offline (via secure off-chain ledger).
- **Ethereum Integration** – Powered by smart contracts for transparent and immutable transactions.
- **Fast Settlement** – Instant payments without waiting for block confirmations in offline mode.
- **Secure Architecture** – Hash-based encryption and offline verification to prevent fraud.
- **Cross-Platform** – Usable on web and mobile for merchants and customers.

---

## 🛠 Tech Stack
- **Blockchain:** Ethereum (Solidity Smart Contracts)
- **Frameworks:** Hardhat / Remix for development & deployment
- **Languages:** JavaScript, Solidity
- **Security:** SHA-256 / ECDSA-based signing
- **Storage:** Off-chain database + on-chain contract records

---

## 🚀 How It Works
1. **Online Mode:**  
   - User initiates payment  
   - Smart contract validates & processes on Ethereum blockchain  
   - Transaction receipt stored on-chain  

2. **Offline Mode:**  
   - Transaction request signed and stored locally  
   - Secure verification via merchant node  
   - Syncs with blockchain once connectivity is restored  

---

## 📌 Installation
```bash
# Clone repository
git clone https://github.com/yourusername/offchainpay.git

# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Deploy to testnet
npx hardhat run scripts/deploy.js --network sepolia
