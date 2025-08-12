const {ethers} =require("hardhat")
async function main() {
    const contractAddress="0x0AFdd448e8E7f88b6e5f9a8d891e16c842743D28";
    const Contract=await ethers.getContractFactory(contractAddress);
    
}