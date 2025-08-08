const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners(); // 👈 adresse par défaut

  const Testv1 = await ethers.getContractFactory("Testv1");

  const proxy = await upgrades.deployProxy(
    Testv1,
    [deployer.address, deployer.address], // 👈 2 arguments : recipient + owner
    {
      initializer: "initialize",
      kind: "uups",
    }
  );

  await proxy.waitForDeployment();
  console.log("✅ Contrat déployé à :", await proxy.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
