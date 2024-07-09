const Background = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img src="/images/Vector.png" className="fixed top-0 left-0 -z-10" />
            <img src="/images/Vector-1.png" className="fixed top-0 right-0 -z-10" />
            <img src="/images/Vector-2.png" className="fixed bottom-0 left-0 -z-10" />
            <img src="/images/Vector-3.png" className="fixed bottom-0 right-0 -z-10" />
        </div>
    )
}

export default Background