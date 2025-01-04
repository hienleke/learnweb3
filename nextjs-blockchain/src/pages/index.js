import Header from '../components/Header';
import TokenHolders from '../components/TokenHolders';
import EthereumListener from '../components/EthereumListener';

const Home = () => {
    const tokenHolders = [
        { address: '0x123...', percentage: 30 },
        { address: '0x456...', percentage: 25 },
        { address: '0x789...', percentage: 45 },
    ];

    return (
        <div>
            <Header />
            <TokenHolders holders={tokenHolders} />
            <EthereumListener />
        </div>
    );
};

export default Home;
