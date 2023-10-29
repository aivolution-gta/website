export default function About () {
    return (
        <div>
            <div className="w-full">
                <h1 className="flex justify-center place-center my-20 opacity-75">About</h1>
            </div>
            <AboutInfo />
        </div>  
    )   
}

function AboutInfo() {
    return (
        <div className="w-full">
            <h2 className="flex justify-left place-center my-20 font-sans font-normal">What is AiVolution</h2>
            <p> AiVolution</p>
            <h2 className="flex justify-left place-center my-20 font-sans font-normal">Who We Are</h2>
        </div>
    )
}

