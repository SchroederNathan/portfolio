const Socials = () => {
    return (
        <div className="fixed bottom-0 left-0 h-full w-[100px]">
            <p className="absolute left-5 right-0 m-auto text-4xl font-semibold mt-6 bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                &lt;/&gt;
            </p>
            <a href="https://discord.gg/9w3r4u3" className="h-[24px] absolute bottom-20 left-0 right-0 m-auto">
                <img src="images/discord.svg" className="m-auto" />
            </a>
            <a href="https://instagram.com/nathanschroederr" className="h-[24px] absolute bottom-32 left-0 right-0 m-auto">
                <img src="images/instagram.svg" className="m-auto" />
            </a>
            <a href="https://github.com/schroedernathan" className="h-[24px] absolute bottom-44 left-0 right-0 m-auto">
                <img src="images/github.svg" className="m-auto" />
            </a>
            <a href="https://www.linkedin.com/in/nathan-schroeder-a40aa2210/" className="h-[24px] absolute bottom-56 left-0 right-0 m-auto">
                <img src="images/linkedin.svg" className="m-auto" />
            </a>
            <div className="h-[58px] bg-mtext-white w-[2px] absolute bottom-0 left-0 right-0 m-auto"></div>
        </div>
    )
}

export default Socials