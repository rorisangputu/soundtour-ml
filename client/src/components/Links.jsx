import spotify from "../assets/spotity.png";
import youtube from "../assets/YouTube.png";
import tidal from "../assets/tidal.png";
import deezer from "../assets/deezer.png";
import audiomack from "../assets/audiomack.png";
import applemusic from "../assets/AppleMusic.png";
import amazonmusic from "../assets/amazonmusic.png";
import { IoIosDownload } from "react-icons/io";
import { useState } from "react";
import NumberModal from "./NumberModal";



const Links = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const handleOpenModal = () => setIsModalOpen(true); // Function to open modal
    const handleCloseModal = () => setIsModalOpen(false); // Function to close modal


    return (
        <div className="w-[80%] md:w-[50%] lg:w-[35%] mx-auto rounded-lg">
            <div id="streaming" className="w-full  mx-auto py-2 flex flex-col gap-4 items-center justify-center">
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <img src={applemusic} alt="" className="h-9 w-22" />
                        <p>Apple Music</p>
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-10 w-28 flex justify-center items-center">
                        <img src={spotify} alt="" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>

                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <img src={youtube} alt="" className="h-6 w-22 rounded-md" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <p className="font-semibold text-lg font-sans uppercase">Get The Sound</p>
                    </div>
                    <div className="text-black px-4 p-2 py-2 font-medium">
                        <button onClick={handleOpenModal}>
                            <IoIosDownload className="h-7 w-7" />
                        </button>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-3 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <img src={amazonmusic} alt="" className="h-9 w-22 rounded-md" />
                        <p className="font-semibold">Amazon Music</p>
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <img src={deezer} alt="" className="h-8 w-22 rounded-md" />

                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-40 flex justify-start gap-2 items-center text-black">
                        <img src={tidal} alt="" className="h-4 w-22 rounded-md" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-12 w-32 flex justify-center items-center">
                        <img src={audiomack} alt="" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com">
                            Play
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && <NumberModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>

    )
}

export default Links