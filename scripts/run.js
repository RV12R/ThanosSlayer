const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Iron-man", "Captain America", "Thor"],   // Names
      ["https://i.imgur.com/PWijgdk.jpeg",       // Images
      "https://i.imgur.com/JiQu9TO.jpeg", 
      "https://i.imgur.com/BpBiojQ.jpeg"],
      [250, 200, 400],                           // HP values
      [100, 50, 80],                             // Attack damage values
      "Thanos",                                  // Boss name
      "https://i.imgur.com/hVuFcaF.jpeg",        // Boss image
      10000,                                     // Boss hp
      50                                         // Boss attack damage 
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
      
        let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait()

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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