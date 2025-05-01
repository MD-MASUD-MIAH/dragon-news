import React from 'react';
import SocialLogin from './socialLogin';
import FindUs from './FindUs';
import Qzone from '../LatestNews/Qzone';

const RightAside = () => {
    return (
        <div>
           <SocialLogin></SocialLogin> 
           <FindUs></FindUs> 
           <Qzone></Qzone>
        </div>
    );
};

export default RightAside;