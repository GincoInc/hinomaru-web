import { ethers } from 'hardhat'

async function main() {
  const Hello = await ethers.getContractFactory('Hello')
  const contract = await Hello.deploy()

  await contract.deployed()
  console.log('Hello deployed to:', contract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
