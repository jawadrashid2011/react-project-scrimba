import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./data"

export default function App() {
    console.log(cardsData);
    const cards = cardsData.map(item => {
        return <Card 
                    key={item.id}
                    {...item}
                    />;
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}