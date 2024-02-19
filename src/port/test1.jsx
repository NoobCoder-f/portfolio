import React from 'react';
import './test.css';
import accenture from '../Assets/accenture.jpg';
import apix from '../Assets/apix.png';
import resume from '../Assets/resume.pdf';

const Test = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Section with ID '${sectionId}' not found.`);
        }
    };


    return (
        <>
            {/* navbar */}
            <div className="navbar">
                <div className="links" style={{marginRight:'60px'}}>
                    <div style={{ padding: '10px' }}>
                        <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} onClick={() => scrollToSection('about')} href='#about'>About</a>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} onClick={() => scrollToSection('contact')} href="#contact">Contact</a>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <a style={{ textDecoration: 'none', color: '#747ea1', fontFamily: 'Roboto, sans-serif' }} onClick={() => scrollToSection('experience')} href="#experience">Experience</a>
                    </div>
                    <div style={{ border: '2px solid #73AD21', borderRadius: '5px', padding: '10px', marginRight: '50px' }}>
                            <a href={resume} target='_blank'
                            rel='noreferrer' ><button>Resume</button></a>
                    
                    </div>
                </div>
            </div>
            {/* navbar */}

            <div className='vertical-menu-left'>
            <a href='https://github.com/NoobCoder-f' target="_blank" style={{padding:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Github"><path fill="#73ad21" d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" class="color5c6bc0 svgShape"></path></svg> 
            </a>
                    
            <a href='mailto:suraj.singh.3177@gmail.com' target="_blank" style={{padding:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Gmail"><path fill="#eff1ec" d="M2 2h12v12H2z" class="coloreceff1 svgShape"></path><path fill="#d7dccf" d="M8 9.262 14 14V4.646z" class="colorcfd8dc svgShape"></path><path fill="#73ad21" d="M14.5 2H14L8 6.738 2 2h-.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2V4.646l6 4.615 6-4.616V14h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" class="colorf44336 svgShape"></path></svg>
            </a>
                    
                    
            <a href='https://www.linkedin.com/in/suraj-works/' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.083 144" id="Linkedin"><path d="M72.04 14.166c-31.939 0-57.833 25.894-57.833 57.833 0 31.94 25.893 57.835 57.833 57.835 31.941 0 57.836-25.895 57.836-57.835-.001-31.939-25.895-57.833-57.836-57.833zM48.042 40.25c3.934 0 7.125 2.91 7.125 6.5s-3.191 6.5-7.125 6.5c-3.936 0-7.125-2.91-7.125-6.5s3.189-6.5 7.125-6.5zm7.179 55.595H41.143V59.11h14.078v36.735zm47.838 0H88.913v-20.2c0-2.306-.428-3.938-1.281-4.896-.854-.956-2.053-1.436-3.596-1.436-1.707 0-3.092.646-4.152 1.938-1.061 1.292-1.59 3.609-1.59 6.953v17.641H64.215V59.11h13.109v5.983c1.959-2.443 3.943-4.19 5.949-5.24 2.006-1.049 4.449-1.573 7.332-1.573 3.898 0 6.947 1.158 9.15 3.476 2.201 2.317 3.303 5.897 3.303 10.74v23.349z" fill="#73ad21" class="color000000 svgShape"></path></svg>
            </a>

            </div>

           

            {/* about body */}
            <section id="about" className="about">
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

            <section id="experience" className="others">

                <div className="work">
                    <div style={{ margin: '20px' }}>
                        <div style={{ color: '#73AD21', marginLeft: '17rem', fontFamily: 'Roboto, sans-serif' }}>
                            <h1>Where I've Worked  __________</h1>
                        </div>
                        <div style={{ display: 'flex', marginLeft: '17rem' }}>
                            <div className="row" style={{ margin: '20px', display: 'flex', alignItems: 'center' }}>
                                <div className="card">
                                    <div className="banner">
                                        <img src={accenture} alt="Accenture Logo" />
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
                                        <img src={apix} alt="ApixLabs Logo" />
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

                <div className='skills' style={{height:'50vh', display:"flex" , justifyContent:'center', marginTop:'5rem'}}>
                    <div style={{ width:'50%'}}>
                        <div>
                            <h1 style={{ color: '#73AD21', fontFamily: 'Roboto, sans-serif' }}>Skills? </h1>
                            <h4 style={{fontFamily:'Roboto, sans-serif',fontWeight:'350', color: '#c0caf4'}}>Oh, where do I begin? I possess the astounding 
                                ability to stare at code for hours without blinking. <br></br>
                                My superpower? Creating bugs faster than you can say 
                                'SYNTAX ERROR'. <br></br>And don't even get me started on my talent 
                                for turning coffee into code.</h4>
                        </div>
                        <div style={{ display:"flex",justifyContent:'center'}}>
                        <div className='SkillsPanel ' style={{ textAlign: 'center',width:'60%' }}>
                            <div class="skill skill-language">C</div>
                            <div class="skill skill-language">C++</div>                            <div class="skill skill-language">HTML</div>
                            <div class="skill skill-language">CSS</div>
                            <div class="skill skill-language">Javascript</div>
                            <div class="skill skill-framework">React.js</div>
                            <div class="skill skill-platform">Firebase</div>
                            <div class="skill skill-platform">Wordpress</div>
                            <div class="skill skill-platform">AppScript</div>
                            <div class="skill skill-technique">Automation</div>
                            <div class="skill skill-technique">Functional Programming</div>
                            <div class="skill skill-technique">Git Flow</div></div>  

                        </div>
                    </div>
                </div>

            </section>

            <section className='contact-panel'>
                <h2>What's Next?</h2>
                <h3>Get In Touch</h3>
                <h4>"Open to being bombarded with exciting new challenges!<br></br> Hit me up for a chat if you dare to test the limits of my brilliance."</h4>
                <a className="button-33" href="mailto:suraj.singh.3177@gmail.com">HIRE</a>  


            </section>
        </>
    );

};

export default Test;