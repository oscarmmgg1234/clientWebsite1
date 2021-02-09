import React from 'react';
import '../style/home.css'
import {FiPhoneCall} from "react-icons/fi";

const Home = () => {
    return(
    <>
        <div class={'homeC'}>
            <div id={'rectangle'}/>
            <div id={'headerC'}>
            <div className={'header'}>Hardware Repairs That Comes To You.</div>
            <div className={'subHeader'}>Manny Hardware Repair Services designed to
                simplify mobile and computer repair without making them hard on your wallet</div>
            </div>
            <div className={'contact'}>
                <FiPhoneCall id={'phone'}/>
                <p id={'number'}>1 760 600 2827</p>
            </div>
        </div>
</>
    );
};

export default Home;
