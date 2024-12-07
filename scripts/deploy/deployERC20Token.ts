// Script to deploy an ERC20 token for testing purposes
// Run: `yarn hardhat run scripts/deploy/deployERC20Token.ts --network polygon`
import { parseUnits } from '@ethersproject/units';
import hre, { ethers } from "hardhat";

async function main() {

    const tokenName = "GazBoy4Life"
    const symbol = "GB4L"
    const decimals = 18
    const totalSupply = parseUnits("69000000", decimals)
    const recipient = "0x9AdEFeb576dcF52F5220709c1B267d89d5208D78"

    const ERC20 = await hre.ethers.getContractFactory("ERC20Token");
    const erc20 = await ERC20.deploy(tokenName, symbol, totalSupply, recipient, decimals);

    await erc20.deployed();

    console.log("ERC20 token to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
