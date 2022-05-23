async function main() {
  console.log("start");
  const PfpFun = await hre.ethers.getContractFactory("PfpFun");
  console.log("about to deploy");
  const pfpfun = await PfpFun.deploy(process.env.METADATA_URL);
  await pfpfun.deployed();
  console.log("Deployed to:", pfpfun.address);
  console.log("Token URI: ", await pfpfun.tokenURI(1));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
