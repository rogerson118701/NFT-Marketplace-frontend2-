import CollectionCard from './Col-Card';

const cardinfo = [
    {
        name: "Models",
        ownername: 'Igori',
        src: '/images/model/p2.png',
        owneravatar: '/images/Igori.jpg',
        date: '2023-10-18',
        small: [
            {
                title: 'Johny1',
                src: '/images/model/p1.png',
            },
            {
                title: 'Johny2',
                src: '/images/model/p2.png',
            },
            {
                title: 'Johny3',
                src: '/images/model/p3.png',
            },
            {
                title: 'Johny4',
                src: '/images/model/p4.png',
            },
            {
                title: 'Johny5',
                src: '/images/model/p5.png',
            },
            {
                title: 'Johny6',
                src: '/images/model/p6.png',
            },
            {
                title: 'Johny7',
                src: '/images/model/p7.png',
            },

        ]
    },
    {
        name: 'Skills1',
        ownername: 'Lina',
        owneravatar: '/images/Lina.jpg',
        src: '/images/Icons/Monk_4.png',
        date: '2023-10-1',
        small: [
            {
                title: 'Johny1',
                src: '/images/Icons/Monk_1.png',
            },
            {
                title: 'Johny2',
                src: '/images/Icons/Monk_2.png',
            },
            {
                title: 'Johny3',
                src: '/images/Icons/Monk_3.png',
            },
            {
                title: 'Johny4',
                src: '/images/Icons/Monk_4.png',
            },
            {
                title: 'Johny5',
                src: '/images/Icons/Monk_5.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },
            {
                title: 'Johny6',
                src: '/images/Icons/Monk_6.png',
            },
            {
                title: 'Johny7',
                src: '/images/Icons/Monk_7.png',
            },

        ]
    },
    {
        name: 'Skills2',
        ownername: 'Logan',
        src: '/images/skill/Flame_Original.png',
        owneravatar: '/images/Logan.jpg',
        date: '2023-10-1',
        small: [
            {
                title: 'Johny1',
                src: '/images/skill/Archer_a crack shot.png',
            },
            {
                title: 'Johny2',
                src: '/images/skill/Archer_a small arrow shot by a archer.png',
            },
            {
                title: 'Johny3',
                src: '/images/skill/Archer_Arrow rain.png',
            },
            {
                title: 'Johny4',
                src: '/images/skill/Archer_Arrow rain.png',
            },
            {
                title: 'Johny5',
                src: '/images/skill/Archer_Charge shot_2.png',
            }

        ]
    }
]
const CollectionCards = () => {

    return (
        <div>
            <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 border-y-purple-50 lg:grid-cols-3 sm:grid-cols-2'>
                {cardinfo.map((card) =>
                    <CollectionCard key={card.ownername} owneravatar={card.owneravatar} name={card.name} ownername={card.ownername} src={card.src} small={card.small} />
                )}
            </div>
        </div>
    );
};

export default CollectionCards;