const { ethers } = require("hardhat");
async function main() {
    const contractAddress = "0x0AFdd448e8E7f88b6e5f9a8d891e16c842743D28";
    const Contract = await ethers.getContractFactory("Testv2");
    const contract = Contract.attach(contractAddress);

    const montant = ethers.parseUnits("10000", 18); // Donne un BigInt compatible ethers v6
    // const tx = await contract.mint("0xA9dEf4EBa19C342Ff50f7a4bfbF66aB992fE0a4a", montant);

    const burnAmount = ethers.parseUnits("9.999999999999999", 18); // Par exemple, 9 tokens
    const tx2 = await contract.burn(burnAmount);
    console.log("Hash de la transaction :", tx2.hash);
    const receipt = await tx2.wait();
    console.log("Statut :", receipt.status);
    console.log("Hash confirmé :", receipt.transactionHash);
}
main();