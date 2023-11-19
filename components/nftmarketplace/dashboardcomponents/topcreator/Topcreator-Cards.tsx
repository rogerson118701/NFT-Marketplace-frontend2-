import TopcreatorCard from './Topcreator-Card';


const cardinfo = [
    {
        name: 'Ali',
        avatar: '/images/member1.png',
        totalsales: 32.83,
    },
    {
        name: 'Johnson',
        avatar: '/images/member2.png',
        totalsales: 34.83,
    },
    {
        name: 'Smith',
        avatar: '/images/member3.png',
        totalsales: 33.83,
    },
    {
        name: 'Igori',
        avatar: '/images/Igori.jpg',
        totalsales: 32.83,
    },
    {
        name: 'Lina',
        avatar: '/images/Lina.jpg',
        totalsales: 34.83,
    },
    {
        name: 'Logan',
        avatar: '/images/Logan.jpg',
        totalsales: 33.83,
    },
    {
        name: 'Lucastan',
        avatar: '/images/lucastan.png',
        totalsales: 34.83,
    },
    {
        name: 'Phonghoa',
        avatar: '/images/Phonghoa.png',
        totalsales: 33.83,
    },

]
const TopcreatorCards = () => {
  
    return (

        <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-4 sm:grid-cols-2'>
            {cardinfo.map((card) =>
                <TopcreatorCard key={card.name} avatar={card.avatar} totalsales={card.totalsales} name={card.name} />
            )}
        </div>

    );
};

export default TopcreatorCards;