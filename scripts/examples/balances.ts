import hre, { ethers } from "hardhat";

async function main() {

    // INPUT
    const tokens = 
    [
        '0x12af69d32199f0205bcec380697ea04b1cf26059',
        '0x9a47110549832A1A2E48c73b769079b08c4f5c49'
    ]

    // Get user account object
    const [acc1, acc2, acc3] = await ethers.getSigners()
    const user = acc1

    const userArray = [
        user.address,
        user.address
    ]

    // Connect to BalanceChecker contract
    const balanceCheckerAddress = "0xD713aeC2156709A6AF392bb84018ACc6b44f1885"; // Ropsten
    const balanceChecker = await ethers.getContractAt("BalanceChecker", balanceCheckerAddress);

    const results = await balanceChecker.balances(userArray, tokens)
    console.log("Balances:");
    console.log(results)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
