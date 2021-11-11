import React from 'react'
import ftlogo from "../../assets/images/favicon.png";
import FormSelect from "../../components/FormSelect";

import US from '../../assets/images/flag/US.png';
import FR from '../../assets/images/flag/FR.png';
import DE from '../../assets/images/flag/DE.png';
import ES from '../../assets/images/flag/ES.png';
import IT from '../../assets/images/flag/IT.png';
import RU from '../../assets/images/flag/RU.png';
import CN from '../../assets/images/flag/CN.png';
import KR from '../../assets/images/flag/KR.png';
import VN from '../../assets/images/flag/VN.png';
import JP from '../../assets/images/flag/JP.png';


export default function Footer() {

    const country = [
        {value: '1' , label: 'English ',img: US, },
        {value: '2' , label: 'French', img: FR, },
        {value: '3' , label: 'German', img: DE, },
        {value: '4' , label: 'Spanish', img: ES, },
        {value: '5' , label: 'italian', img: IT, },
        {value: '6' , label: 'Russian', img: RU, },
        {value: '7' , label: 'Chinese', img: CN, },
        {value: '8' , label: 'Korean', img: KR, },
        {value: '9' , label: 'Japanese', img: VN, },
        {value: '10', label: 'Vietnamese', img: JP, },
    ];

//     const country = [
//         { value:"1", label: 'United Kingdom', img: US, },
//         { value:"2", label: 'united states', img: US, },
//   ];

    return (
        <React.Fragment>
        <div className="footer-box ms">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="ft-border-top ms py-3 d-none d-md-block">
                            <div className="row align-items-center">
                            <div className="col-md-4 col-lg-2">
                            <a href="#" className="ftlogo fw-100">
                            <img src={ftlogo} alt="Logo" /> <span>MsDoge</span>
                            </a>
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <div className="mx-auto d-table text-center">
                                <ul className="ft-nav d-flex p-0 ls">
                                    <li>@2021 Eden Smart Chain</li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2">
                                {/* <select className="language-select">
                                    <option>English</option>
                                    <option>English</option>
                                    <option>English</option>
                                </select> */}
                                <div className="country-wrap">
                                        <FormSelect title="" options={country}/>
                                </div>
                            </div>
                            </div>                 
                        </div>
                        <div className="d-block d-md-none">
                            <div className="logo-outer d-flex flex-column justify-content-center border-top border-bottom py-4 text-center">
                            <a href="#" className="ftlogo fw-100 mx-auto mb-3">
                            <img src={ftlogo} alt="Logo" /> <span>MsDoge</span>
                            </a>
                            <ul className="ft-nav d-flex p-0 ls mx-auto">
                                    <li>@2021 Eden Smart Chain</li>
                                </ul>
                            </div>
                            <div className="last-sel py-4">
                            <ul className="ft-nav d-flex align-items-center p-0 ls  justify-content-center">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li>
                                    <div className="country-wrap">
                                        <FormSelect title="" options={country}/>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
