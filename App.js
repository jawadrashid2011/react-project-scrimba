import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./data"

export default function App() {
    console.log(cardsData);
    const cards = cardsData.map(card => {
        return <Card 
                    key={card.id}
                    img={card.coverImg}
                    rating={card.stats.rating}
                    reviewCount={card.stats.reviewCount}
                    location={card.location}
                    title={card.title}
                    price={card.price} 
                    />;
    })

    // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}