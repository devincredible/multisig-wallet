# Ethereum Multi-Signature Wallet

A secure Ethereum multi-signature wallet implementation using Solidity and Hardhat.

## Overview

This project implements a multi-signature wallet smart contract that requires multiple signatures to approve and execute transactions, providing enhanced security for managing digital assets.

## Features

- Multiple signature requirements for transaction execution
- Configurable owner management
- Transaction proposal and confirmation system
- Built with Solidity
- Comprehensive test suite
- Hardhat development environment

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of Ethereum and smart contracts

## Installation

1. Clone the repository:

```bash
git clone https://github.com/devincredible/multisig-wallet.git
cd multisig-wallet
```

2. Install dependencies:

```bash
npm install
```

## Development

To compile contracts:

```bash
npx hardhat compile
```

To run tests:

```bash
npx hardhat test
```

To run local node:

```bash
npx hardhat node
```

To deploy:

```bash
npx hardhat ignition deploy ./ignition/modules/Wallet.js
```

## Project Structure

```
multisig-wallet/
├── contracts/       # Smart contract source files
├── test/           # Test files
├── ignition/       # Deployment modules
└── hardhat.config.js
```

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
