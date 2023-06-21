// Script to deploy the BalanceChecker contract

const hre = require("hardhat");

async function main() {

    const BalanceChecker = await hre.ethers.getContractFactory("BalanceChecker");
    const balanceChecker = await BalanceChecker.deploy();

    await balanceChecker.deployed();

    console.log("BalanceChecker address:", balanceChecker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
