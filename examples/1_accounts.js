const { ethers } = require("ethers");

const INFURA_ID = "13b51e5d97b341da934c37f43643721b";

const provider = new ethers.providers.JsonRpcBatchProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const myAcc = "0x901D2a93682Fb7eF668a78Cc9A8B6A77cb6f219A";

const main = async () => {
  const balance = await provider.getBalance(
    "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e"
  );

  // Convert the balance from Wei (BigNumber) to Ether
  const ethBalance = ethers.utils.formatEther(balance);

  console.log("My Balance:", ethBalance, "ETH");
};

main();
