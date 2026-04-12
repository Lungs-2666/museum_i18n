    'use client'

    import { useState } from "react";
    import { data } from "@/data/data"

    const Cards = () => {
        const [cards, setCards] = useState( data );

        return (
            <div className="cards">
                <ul>
                    {cards.map(card => (
                        <li
                         key={card.id}
                         className="card"
                        >
                            <img src={card.src} alt={card.title} />
                            <h4> {card.title} </h4>
                            <p> Floor: {card.floor} </p>
                            <p> {card.info} </p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    export default Cards;