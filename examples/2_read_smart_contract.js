const { ethers } = require("ethers");

const INFURA_ID = "13b51e5d97b341da934c37f43643721b";

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log("reading from", address);
  console.log("symbol", symbol);
  console.log("name", name);
  console.log("totalSupply", totalSupply);

  const balance = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  );

  console.log("Balance Returned", ethers.utils.formatEther(balance));
};

main();
