// pages/api/getBalance.js
import Web3 from 'web3';

export default async function handler(req, res) {
  const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.YOUR_INFURA_KEY);
  const balance = await web3.eth.getBalance('0xAddressHere');
  res.status(200).json({ balance });
}
