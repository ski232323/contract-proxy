


const {ethers}=require ("hardhat");
async function main() {
    Contractadress="0xCBBAbe61B0f73002E83B7A8F6483B6F6022DC0bB";
const Contract= await ethers.getContractFactory("Testv1");
const contract=Contract.attach(Contractadress);
const number=ethers.parseUnits("10",18);
const tx = await contract.mint("0x50E954417897F0AB3cAeE68340a949539AbD3f09",number);
transaction= await tx.await;
console.log("hash",tx.hash);

}
main();
