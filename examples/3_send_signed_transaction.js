const { ethers } = require("ethers");

const INFURA_ID = "13b51e5d97b341da934c37f43643721b";

const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);
const account1 = "0x4e647b778363840fc68346bC3E0Bd5A6cd9D08b5"; // sender
const account2 = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // Your account address 2

const privateKey1 =
  "916876566e650b4ee13bc544bc8659bc435020e31e94faba16171eda43a9a44c"; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  const senderBalanceBefore = await provider.getBalance(account1);
  const recieverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `reciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  );

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025"),
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(account1);
  const recieverBalanceAfter = await provider.getBalance(account2);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  );
};

main();
