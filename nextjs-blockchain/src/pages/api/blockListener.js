// pages/api/blockListener.js
import { ethers } from 'ethers';

const handler = async (req, res) => {
    console.log("  infura out data : ", process.env.YOUR_INFURA_KEY);
  const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/b6d73bed26be40ee8b43780088caf9e2`);
  
  provider.on('block', (blockNumber) => {
    provider.getBlock(blockNumber).then((block) => {
      res.status(200).json(block);
    }).catch((error) => {
      res.status(500).json({ error: 'Error fetching block' });
    });
  });
};

export default handler;
