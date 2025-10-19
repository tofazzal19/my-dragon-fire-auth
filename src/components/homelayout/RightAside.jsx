import React from 'react';
import SocialLogin from './SocialLogin';
import FindUS from './FindUS';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUS></FindUS>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;