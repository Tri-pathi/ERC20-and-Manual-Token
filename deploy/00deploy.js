const { verifyMessage } = require("ethers/lib/utils");
const { deployments, getNamedAccounts, network } = require("hardhat");
const {
  INITIAL_SUPPLY,
  devlopmentChains,
} = require("../hardhat-helper-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const ourToken = await deploy("OurToken", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`ourToken Address : ${ourToken.address}`);
  if (
    !devlopmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(ourToken.address, [INITIAL_SUPPLY]);
  }
};
module.exports.tags = ["all", "token"];
