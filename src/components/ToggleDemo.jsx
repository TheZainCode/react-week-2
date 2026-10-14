import useToggle from "../hooks/useToggle";
function ToggleDemo(){
    const [isVisible, toggleVisibility]=useToggle(false);
    const [isSecondVisible, toggleSecondVisibility]=useToggle(false);
    return(
        <>
        <section className="flex flex-wrap flex-col p-6 gap-4 items-center">
            {isVisible ? 
            (<p className="text-3xl font-bold text-green-600">Content is visible</p>) :
            (<p className="text-3xl font-bold text-blue-600">Content is hidden</p>)
        }
        <button onClick={toggleVisibility} className="rounded-md bg-blue-600 text-white font-semibold px-3 py-2 hover:bg-blue-500 transition cursor-pointer">Toggle Content</button>
        </section>
        <section className="flex flex-wrap flex-col p-6 gap-4 items-center">
            {isSecondVisible ? 
            (<p className="text-3xl font-bold text-green-600">Second content is visible</p>) :
            (<p className="text-3xl font-bold text-blue-600">Second content is hidden</p>)
        }
        <button onClick={toggleSecondVisibility} className="rounded-md bg-blue-600 text-white font-semibold px-3 py-2 hover:bg-blue-500 transition cursor-pointer">Toggle Second Content</button>
        </section>
        </>
    )
}
export default ToggleDemo;