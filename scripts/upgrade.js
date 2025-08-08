const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "0x0AFdd448e8E7f88b6e5f9a8d891e16c842743D28";
    const ContractV2 = await ethers.getContractFactory("Testv2");
    await upgrades.upgradeProxy(proxyAddress, ContractV2);
    console.log("Upgrade effectuée !");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});