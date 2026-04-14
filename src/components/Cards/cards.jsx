    'use client'
    import './cards.css';

    import { Unna } from 'next/font/google';        
    const unna = Unna({
        subsets: ["latin"],
        weight: ['700']
    });
    

    import { useState } from "react";
    import { data } from "@/data/data";

    const Cards = () => {
        const [cards, setCards] = useState( data );

        return (
            <div className={`cards ${unna.className}`}>
                {cards.map(card => (
                    <div
                        style={{animationDelay: `${card.delay}s`}}
                        key={card.id}
                        className="card"
                    >
                        <div className='card_group_1'>
                            <img src={card.src} alt={card.title} />
                            <h4> {card.title} </h4>
                            
                            <p> Floor: {card.floor} </p>
                        </div>

                        <div>
                            <p> {card.info} </p>
                        </div>
                    </div>   
                ))}
            </div>
        )
    }

    export default Cards;