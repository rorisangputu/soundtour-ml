import cover from '../assets/albumcover.jpg';

const Music = () => {
    return (
        <div className="flex flex-col items-center gap-2 justify-center space-x-4">
            {/* Album Cover */}
            <div>
                <img
                    src={cover}
                    alt="Album Cover"
                    className="w-32 h-32 md:w-60 md:h-60 rounded-md shadow-lg"
                />
            </div>
            {/* Song Details */}
            <div className="text-center text-[#f6f1f1] py-5 gap-4 md:py-5 flex flex-col md:gap-4 font-sans">
                <h1 className="text-3xl mx-7 font-bold md:text-5xl">
                    MOST PRECIOUS LOVE
                </h1>
                <div className="mx-[72px] lg:mx-20 font-semibold md:text-2xl">
                    <p>MAJOR LEAGUE & LUUDADEEJAY VS BLAZE </p>
                    <p>
                        (FEAT. UDAUFL & BARBARA TUCKER)
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Music