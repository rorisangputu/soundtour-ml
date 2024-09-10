import Links from './Links';
import Music from './Music';
import Huntersxwarner from './Huntersxwarner';
import arrow from '../assets/arrowdown.png'
const Home = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-fixed-center-cover overflow-hidden">
            <div className='fixed inset-0 z-0 bg-gogo'></div>
            <div className='fixed inset-0 z-0 bg-overlay'></div>
            <div className='fixed inset-0 z-0 bg-logos'></div>
            <div className='fixed inset-0 z-0 lg:hidden'><Huntersxwarner /></div>
            {/* Scrollable content */}
            <div className="absolute z-10 w-full mx-auto h-full overflow-y-auto">

                {/* Music Component */}
                <div className="w-full md:w1/7 py-9 md:p-7 md:pt-10 mt-[17vh]">
                    <Music />
                </div>
                <div className='flex flex-col items-center lg:pb-36'>
                    <a href='#streaming'
                        className="flex gap-2 items-center py-5 px-5 md:text-2xl text-white bg-orange-600"
                    >
                        {/* <img src={arrow} className='text-white h-4' alt="" /> */}
                        <p>Choose a music service</p>
                        <img src={arrow} className='text-white h-4' alt="" />
                    </a>
                </div>

                {/* Links Component */}
                <div className="py-20 lg:pt-12 lg:pb-48">
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Home;
