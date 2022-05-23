// This https://frame.sh/ for easy Ledger support when deploying to mainnet
// Add the local hardhat node to Frame for testing
async function main() {
  
  const ethProvider = require('eth-provider');
  const frame = ethProvider('frame');

  console.log("start");
  const PfpFun = await hre.ethers.getContractFactory("PfpFun");
  console.log("about to deploy");

  const tx = await PfpFun.getDeployTransaction(process.env.METADATA_URL);
  tx.from = (await frame.request({ method: 'eth_requestAccounts' }))[0];
  await frame.request({ method: 'eth_sendTransaction', params: [tx] });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
