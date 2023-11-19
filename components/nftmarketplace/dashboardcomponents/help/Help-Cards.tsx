import Card from './Help-Card';


const cardinfo = [
    {
        title: 'Setup Your Wallet',
        image: '/images/wallet.png',
        description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },
    {
        title: 'Create Collection',
        image: '/images/collection.jpg',
        description: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    },
    {
        title: 'Start Earning',
        image: '/images/earning.png',
        description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    }
]
const HelpCards = () => {

    return (

        <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-3 sm:grid-cols-2'>
            {cardinfo.map((card) =>
                <Card key={card.title} image={card.image} description={card.description} title={card.title} />
            )}
        </div>

    );
};

export default HelpCards;