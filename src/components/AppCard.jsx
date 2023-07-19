import React from "react";

function AppCard({name, description, image, appLink, codeLink, role, buttonStyle})
{
    function openInNewTab(url)
    {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="bg-white placeholder:shadow-md rounded-xl flex flex-1 flex-col justify-between overflow-hidden">
            
            <div className="">
                <img className="shadow-lg shadow-black/20"
                src={image} 
                alt={name}
                />

                < div
                className="text-black px-2 pt-1 text-center">
                        <h1 className="font-semibold text-sm pt-3 text-orange-500">{role}</h1>
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <p className="text-sm pt-1">{description}</p>
                </div>
            </div>   
               
            <div className="grid grid-cols-2 justify-center items-center">
                    <button 
                        class={buttonStyle}
                        onClick={() => openInNewTab({codeLink})}
                    >code
                    </button>

                    <button 
                        class={buttonStyle}
                        onClick={() => openInNewTab({appLink})}
                    >
                        app
                    </button>
            </div> 

        </div> 
    );
}

export default AppCard;