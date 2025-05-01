import React from 'react'; 
import img1 from '../../../assets/swimming.png' 
import img2 from '../../../assets/class.png' 
import img3 from '../../../assets/playground.png'

const Qzone = () => {
    return (
        <div className=' bg-base-200 py-4 px-2 space-y-2'>
            <h2 className='font-bold mb-5'>Qzone</h2> 


<div className='flex flex-col items-center space-y-5 justify-center'>
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
</div>

        </div>
    );
};

export default Qzone;