This is a trivial ERC721 that I created to ~abuse the NFT profile picture feature~ give myself a custom NFT profile picture on Twitter.

There can only be one and it mints to the deployer in the constructor.

I set the metadata to a URL that I control so I can change it gas-free.

The script `deploy-with-frame.js` uses [Frame wallet](https://frame.sh/) for easy Ledger support when deploying to mainnet.

Test:  `npx hardhat test`
Start local node: `npx hardhat node`
Deploy to local node:  `npx hardhat run --network localhost scripts/run.js`
Deploy to rinkeby:  `npx hardhat run --network localhost scripts/run.js`
Deploy with Frame to any network: `npx hardhat run scripts/deploy-with-frame.js`
