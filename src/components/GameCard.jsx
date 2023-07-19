import React from "react";

function GameCard({name, description, image, role, link})
{
    const buttonStyle ="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" + 
    " cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105";

    function openInNewTab()
    {
        window.open({link}, "_blank", "noreferrer");
    }

    return (
        <div className="bg-white placeholder:shadow-md rounded-xl relative">
            
            <div className="px-2 pt-2">
                <img 
                src={image} 
                alt={name}
                className="rounded-lg shadow-md"
                />
            </div>

            <div
            className="text-gray-800 px-2 pt-1">
                <h1 className="font-bold text-xl pt-1">{name}</h1>
                <h4 className="font-semibold">{role}</h4>
                <p className="text-sm pt-1">{description}</p>
            </div>  

            <div className="text-white flex justify-center">
                    
                <button 
                    class={buttonStyle}
                    onClick={() => openInNewTab()}
                >
                    store
                </button>

            </div> 
        </div> 
    );
}

export default GameCard;