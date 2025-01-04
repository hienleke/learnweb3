import { useEffect, useState } from 'react';

const EthereumListener = () => {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchBlockData = async () => {
      const response = await fetch('/api/blockListener');
      const data = await response.json();
      setBlockData(data);
      fetchBlockData();
    };
    
    fetchBlockData();
  }, []);

  return (
    <div>
      <h3>Latest Ethereum Block 1</h3>
      {blockData ? (
        <pre>{JSON.stringify(blockData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default EthereumListener;
