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
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <img src={applemusic} alt="" className="h-[36px] w-22" />
                        <p>Apple Music</p>
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://music.apple.com/za/album/most-precious-love-major-league-djz-luudadeejay-vs/1762020077?i=1762020078">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[40px] w-[112px] flex justify-center items-center">
                        <img src={spotify} alt="" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://open.spotify.com/track/1uCJed8EB1TYRg9zZibnPK?si=8706027c2e654df1">
                            Play
                        </a>
                    </div>
                </div>

                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <img src={youtube} alt="" className="h-[24px] w-22 rounded-md" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://music.youtube.com/playlist?list=OLAK5uy_kwXJZwhnSpah_A4QgI_Y_0qFiW9zyXL_Y&si=inyF8EKOyGVGFdI7">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <p className="font-semibold text-lg font-sans uppercase">Get The Sound</p>
                    </div>
                    <div className="text-black px-4 p-2 py-2 font-medium">
                        <button onClick={handleOpenModal}>
                            <IoIosDownload className="h-[28px] w-[28px]" />
                        </button>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-3 w-full border-b">
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <img src={amazonmusic} alt="" className="h-[36px] w-22 rounded-md" />
                        <p className="font-semibold">Amazon Music</p>
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://music.amazon.com/albums/B0DCP6MRGK?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_X6k4h9HmmeThzeXRQn03DlSSQ">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <img src={deezer} alt="" className="h-[32px] w-22 rounded-md" />

                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://deezer.page.link/injEAJvUbcy9swhe8">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[48px] w-[160px] flex justify-start gap-2 items-center text-black">
                        <img src={tidal} alt="" className="h-[16px] w-22 rounded-md" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://tidal.com/browse/track/380268549">
                            Play
                        </a>
                    </div>
                </div>
                <div className="flex bg-white px-4 rounded-xl items-center justify-between py-2 w-full border-b">
                    <div className="h-[48px] w-[128px] flex justify-center items-center">
                        <img src={audiomack} alt="" />
                    </div>
                    <div className="text-black px-4 p-2 py-3 font-medium bg-gray-100 rounded-md">
                        <a href="https://audiomack.com/majorleaguedjz">
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