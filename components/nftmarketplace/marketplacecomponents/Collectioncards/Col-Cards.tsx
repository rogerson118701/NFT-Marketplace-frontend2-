import CollectionCard from './Col-Card';

type inittype = {
    src: string;
    small: any;
    ownername: string;
    name: string;
    owneravatar: string;
}
interface Props {
    filtered: inittype[]
}

const CollectionCards: React.FC<Props> = ({ filtered }) => {

    return (
        <div>
            <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-3 ml-20 mr-20 lg:grid-cols-4 sm:grid-cols-2'>
                {filtered.map((card) =>
                    <CollectionCard key={card.ownername} owneravatar={card.owneravatar} name={card.name} ownername={card.ownername} src={card.src} small={card.small} />
                )}
            </div>
        </div>
    );
};

export default CollectionCards;