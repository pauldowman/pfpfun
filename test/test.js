const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PfpFun", function () {
  let PfpFun;
  let pfpfun;

  beforeEach(async function () {
    PfpFun = await ethers.getContractFactory("PfpFun");
    pfpfun = await PfpFun.deploy(process.env.METADATA_URL);
    await pfpfun.deployed();
  });
  
  it("Should have minted one NFT to the deployer", async function () {
    const deployer = pfpfun.deployTransaction.from;
    expect (await pfpfun.balanceOf(deployer)).to.equal(1);
  });

  it("Should have minted only one NFT", async function () {
    await expect (pfpfun.ownerOf(2)).to.be.reverted;
  });

  it("Should have the token URI set correctly", async function () {
    expect(await pfpfun.tokenURI(1)).to.equal(process.env.METADATA_URL);
  });

  it("Can self destruct", async function () {
    await pfpfun.selfDestruct();
    await expect (pfpfun.ownerOf(1)).to.be.reverted;
  });

  it("Can only self destruct by the owner", async function () {
    const signers = await hre.ethers.getSigners();
    const rando = signers[1];
    const pfpfun2 = pfpfun.connect(rando);
    await expect (pfpfun2.selfDestruct()).to.be.reverted;
  });

});
