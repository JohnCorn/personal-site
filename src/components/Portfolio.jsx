import React from "react";
import GameCard from "./GameCard";
import AppCard from "./AppCard";

function Portfolio ({games, apps}){

    const buttonStyle ="rounded-md bg-orange-500 text-white text-center" + 
    " cursor-pointer py-3 m-4 font-semibold" +
    " hover:bg-orange-200 hover:text-black";

    return (
        <div
        className="bg-gradient-to-b from-black to-gray-800 w-full 
        text-white h-screen"
        >
            <div
            className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                <div>
                    <p
                    className="text-4xl font-bold inline border-b-4 border-gray-400"
                    >Portfolio </p>
                    <p className="py-6">Check out my work</p>
                </div>

                <div
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {apps.map(({name, description, image, appLink, codeLink, role}) => (
                        <AppCard
                        key ={name}
                        name={name}
                        description={description}
                        image={image}
                        appLink={appLink}
                        codeLink={codeLink}
                        role={role}
                        buttonStyle={buttonStyle}
                        />
                    )
                    )}

                    {games.map(({name, description, image, link, role}) => (
                        <GameCard
                        key ={name}
                        name={name}
                        description={description}
                        image={image}
                        role={role}
                        link={link}
                        buttonStyle={buttonStyle}
                        />
                    )
                    )}

                </div>
            </div>
        </div>
    );
}

export default Portfolio ;