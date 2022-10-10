const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  
  const gameContract = await gameContractFactory.deploy(                        
    ["Iron-man", "Captain America", "Thor"],           // Names
    ["QmZsY4YTcaKjgyAUXAEm3YhwV4hhi65c567aB9z3bdXccS", // Images
    "QmdskXtZYs8VPpJPES3pVXwuBaYH6DSrALheFdac7Zhiku", 
    "QmNUXkDq6mRBAJMXHQx4gqcR7mRMwe4BLmfBiz1CTc5wW6"],
    [250, 200, 400],                                   // HP values
    [400, 300, 800],                                   // Attack damage values
    "Thanos",                                          // Boss name
    "QmVENDsr79RXyU1M5iVBpxg6MCv5CYHPwJHHXU3BPme7FC",  // Boss image
    10000,                                             // Boss hp
    50                                                 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();