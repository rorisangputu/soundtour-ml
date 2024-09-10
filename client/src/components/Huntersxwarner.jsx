import hunters from '../assets/hunterlogo.png'
import x from '../assets/x.png'
import warner from '../assets/warnerlogo.png'

const Huntersxwarner = () => {
    return (
        <div className='w-full '>
            <div className='flex justify-center opacity-70 pt-10 items-center gap-4 w-[90%] mx-auto py-5'>
                <img src={hunters} className='h-7' alt="" />
                <img src={x} className='h-5' alt="" />
                <img src={warner} className='h-7 ' alt="" />
            </div>
        </div>
    )
}

export default Huntersxwarner