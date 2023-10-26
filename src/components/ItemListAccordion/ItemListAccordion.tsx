import React, { useState } from 'react';
import './ItemListAccordion.scss';
import ItemCard from '../ItemCard/ItemCard';

interface ItemListAccordionProps {
    title: string;
}

const ItemListAccordion = ({ title }: ItemListAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className="indicator">{isOpen ? '-' : '+'}</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />

            </div>
        </div>
    );
}

export default ItemListAccordion;
