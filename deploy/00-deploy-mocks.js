const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const BASE_FEE = ethers.utils.parseEther("0.25")
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE,GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying Mocks...")
        //deploy a mock vrfcoordinator...

        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args
        })

        log("Mocks Deployed!")
        log("--------------------------------------------")
    }
}


module.exports.tags = ["all","mock"]