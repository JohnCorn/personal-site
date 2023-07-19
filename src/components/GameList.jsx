import React from "react";
import GameCard from "./GameCard";

function GameList({games}){

    return (
        <div
        name ="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full 
        text-white md:h-screen"
        >
            <div
            className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                <div
                className="pb-8"
                >
                    <p
                    className="text-4xl font-bold inline border-b-4 border-gray-400"
                    >Portfolio</p>
                    <p className="py-6">Check out my work</p>
                </div>

                <div
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
                >
                    {games.map(({name, description, image, link, role}) => (
                        <GameCard
                        key ={name}
                        name={name}
                        description={description}
                        image={image}
                        role={role}
                        link={link}
                        />
                    )
                    )}


                </div>
            </div>
        </div>
    );
}

export default GameList;