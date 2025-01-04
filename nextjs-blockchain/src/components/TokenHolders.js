const TokenHolders = ({ holders }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Token Holders</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {holders.map((holder, index) => (
                    <li key={index} style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px' }}>
                        <strong>{holder.address}</strong> - {holder.percentage}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TokenHolders;
