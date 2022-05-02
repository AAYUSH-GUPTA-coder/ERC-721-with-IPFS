const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  
  const AayushNFT = await ethers.getContractFactory("Aayush");

  // deploy the contract
  const aayushNFT = await AayushNFT.deploy();

  await aayushNFT.deployed();

  // print the address of the deployed contract
  console.log("aayushNFT Contract Address:", aayushNFT.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
