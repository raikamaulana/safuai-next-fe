import Image from 'next/image';

const NetworkIcon = ({ network }) => {
    switch (network) {
        default:
            return <Image src="/images/network/bsc.svg" alt="" width={20} height={20} />;
        case 'ETHEREUM':
            return <Image src="/images/network/ethereum.svg" alt="" width={20} height={20} />;
        case 'ETHEREUMTESTNETGOERLI':
            return <Image src="/images/network/ethereumtestnet.svg" alt="" width={20} height={20} />;
        case 'ETHEREUMTESTNETSEPOLIA':
            return <Image src="/images/network/ethereumtestnet.svg" alt="" width={20} height={20} />;
        case 'BSC':
            return <Image src="/images/network/bsc.svg" alt="" width={20} height={20} />;
        case 'BSCTESTNET':
            return <Image src="/images/network/bsctestnet.svg" alt="" width={20} height={20} />;
        case 'ARBITRUM':
        case 'ARBITRUMTESTNET':
            return <Image src="/images/network/arbitrum.svg" alt="" width={20} height={20} />;
        case 'FANTOM':
        case 'FANTOMTESTNET':
            return <Image src="/images/network/fantom.svg" alt="" width={20} height={20} />;
        case 'POLYGON':
            return <Image src="/images/network/polygon.svg" alt="" width={20} height={20} />;
        case 'POLYGONTESTNET':
            return <Image src="/images/network/polygontestnet.svg" alt="" width={20} height={20} />;
        case 'AVALANCHE':
        case 'AVALANCHETESTNET':
            return <Image src="/images/network/avalanche.svg" alt="" width={20} height={20} />;
        case 'CRONOS':
        case 'CRONOSTESTNET':
            return <Image src="/images/network/cronos.svg" alt="" width={20} height={20} />;
        case 'OKC':
            return <Image src="/images/network/okc.svg" alt="" width={20} height={20} />;
        case 'HECO':
        case 'HECOTESTNET':
            return <Image src="/images/network/heco.svg" alt="" width={20} height={20} />;
        case 'VELAS':
            return <Image src="/images/network/velas.svg" alt="" width={20} height={20} />;
        case 'OASIS':
            return <Image src="/images/network/oasis.svg" alt="" width={20} height={20} />;
        case 'OPTIMISM':
        case 'OPTIMISMTESTNET':
            return <Image src="/images/network/optimism.svg" alt="" width={20} height={20} />;
        case 'MOONBEAM':
        case 'MOONBEAMTESTNET':
            return <Image src="/images/network/moonbeam.svg" alt="" width={20} height={20} />;
        case 'AURORA':
        case 'AURORATESTNET':
            return <Image src="/images/network/aurora.svg" alt="" width={20} height={20} />;
        case 'ALVEY':
        case 'ALVEYTESTNET':
            return <Image src="/images/network/alvey.svg" alt="" width={20} height={20} />;
        case 'DOGECHAIN':
        case 'DOGECHAINTESTNET':
            return <Image src="/images/network/dogechain.svg" alt="" width={20} height={20} />;
    }
};

export default NetworkIcon;