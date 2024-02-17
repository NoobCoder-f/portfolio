import React from 'react';
import './test.css';
import accenture from '../Assets/accenture.jpg'
import apix from '../Assets/apix.png';

const Test = () => (
    <>
        {/* navbar */}
        <div className="navbar">
            <div className="links">
                <div style={{ border: '2px solid rgba(0,0,0,0.3)', padding: '10px' }}>
                    <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} href="#">About</a>
                </div>
                <div style={{ border: '2px solid rgba(0,0,0,0.3)', padding: '10px' }}>
                    <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} href="#">contact</a>
                </div>
                <div style={{ border: '2px solid rgba(0,0,0,0.3)', padding: '10px' }}>
                    <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} href="#">Experince</a>
                </div>
                <div style={{ border: '2px solid #73AD21', borderRadius: '5px', padding: '10px', marginRight: '50px', }}>
                    <a style={{ textDecoration: 'none', color: '#73AD21', fontFamily: 'Roboto, sans-serif' }} href="#">Resume</a>
                </div>
            </div>
        </div>
        {/* navbar */}


        {/* about body */}
        <section className="about">
            <div className="text-name">
                <h5 style={{ color: '#73AD21', fontFamily: 'VT323, monospace', fontSize: '1rem', fontWeight: '200' }}>Hello World! my name is</h5>
                <h1>SURAJ SINGH.</h1>
                <h2>I convert designs into code.</h2>
                <div style={{ width: '80%' }}>
                    <h5>I'm a software engineer specialize in bulding webpages.
                        I thrive on turning ideas <br></br> into reality through code.
                        I'm eager to embark on this exciting journey of growth <br></br> and exploration
                        in the ever-evolving field of coding.
                        <br></br><span style={{ color: '#73AD21' }}>Let's connect and
                            build something awesome together!"</span></h5>
                </div>
            </div>
        </section>

        <section className="others">

            <div className="work">
                <div style={{ margin: '20px' }}>
                    <div style={{ color: '#73AD21', marginLeft: '17rem', fontFamily:'Roboto, sans-serif' }}>
                        <h1>Where I've Worked  __________</h1>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '17rem' }}>
                        <div className="row" style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                            <div className="card">
                                <div className="banner">
                                    <img src={accenture}></img>
                                </div>

                                <h2 className="name">Accenture</h2>
                                <div>
                                    <div className="time">06/2022-10/2022</div>
                                    <div className="role">
                                        <span>Application Developer</span>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>Performed diverse administrative and support tasks including
                                        incident management, user account management on SAP
                                        applications, and Active Directory operations such as
                                        password resets and account management.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                            <div className="card">
                                <div className="banner">
                                    <img src={apix}></img>
                                </div>

                                <h2 className="name">ApixLabs</h2>
                                <div>
                                    <div className="time"><span>02/2023-11/2023</span></div>
                                    <div className="role">
                                        <span>Frontend Developer</span>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>a year of hands-on expertise in crafting responsive
                                     and visually stunning web applications. Proficient in HTML,
                                     CSS, JavaScript, and popular frameworks like React.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <div className="skills">skills</div>
    </>
)

export default Test;
