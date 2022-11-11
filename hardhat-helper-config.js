const networkConfig={
    31337: {
        name: "localhost",
      },
    4:{
        name:"rinkeby",
        ethUsdPriceFeed:"0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    5:{
        name:"goerli",
        ethUsdPriceFeed:"0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    137:{
        name:"polygon",
        ethUsdPriceFeed:"0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },

}
INITIAL_SUPPLY="1000000000000000000000000";
const devlopmentChains=["hardhat", "localhost"];
module.exports={
    networkConfig,
    devlopmentChains,
    INITIAL_SUPPLY,
}