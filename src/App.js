/* libraries */
// React
import React, { useState, useEffect } from 'react';
// Swiper (carousel)
import { EffectCoverflow } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import "swiper/swiper.min.css";
import 'swiper/modules/pagination/pagination';
import 'swiper/modules/navigation/navigation';
import "swiper/modules/effect-coverflow/effect-coverflow";
// Scrollspy
import Scrollspy from 'react-scrollspy';
// Bootstrap
import { Row, Col, Nav, OverlayTrigger, Button, Navbar } from 'react-bootstrap';
// Icons
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';

/* local resources */ 
// Styling
import './App.css';
// Carousel
import resume from './assets/AlyWestwoodWebCV.pdf';
import clickclinic from "./assets/clickclinicpreview.png";
import refactor from "./assets/refactorpreview.png";
import tasteofbaking from "./assets/tasteofbakingpreview.png";
import unilog from "./assets/unilogpreview.png";
// Skills Icons
import logo from './assets/logo.svg';

const slides = [
    {
        src: unilog,
        title: 'UniLog',
        description: 'A university registration system, built with Java Spring Boot. I largely implemented the administrator functionality.',
        tech: 'Java, Spring Boot, Thymeleaf, JQuery, MySQL',
        href: 'https://uni-log.herokuapp.com',
        repo: 'https://github.com/KatePost/unilog'
    },
    {
        src: refactor,
        title: 'Refactor',
        description: 'An online banking application built with React and Node.js Express. I headed the front-end React implementation.',
        tech: 'Javscript, React, Express, Node, MySQL',
        href: 'https://refactor-banking.herokuapp.com',
        repo: 'https://github.com/AlyWestwood/refactor'
    },
    {
        src: clickclinic,
        title: 'Click Clinic',
        description: 'A medical communication portal for patients and doctors, built using PHP Slim and Twig. I built the calendars using Javascript, and I coded admin interface and functionality',
        tech: 'PHP, PHP Slim, Twig, JQuery / Javascript, PostgreSQL',
        href: 'https://clickclinic.fsd01.ca',
        repo: 'https://github.com/KatePost/ClickClinic2'
    },
    {
        src: tasteofbaking,
        title: 'Taste of Baking',
        description: 'A recipe databank built as pure static site. This site was built in pure HTML and CSS, with Javascript and JQuery. I focused on the header / footer and search function.',
        tech: 'CSS, HTML, Javascript, JQuery',
        href: 'https://tasteofbaking.fsd01.ca',
        repo: 'https://github.com/KatePost/UserInterfacesProject'
    },
]


function Banner(){

    return (
        <>
            <Nav.Link href='/' className='my-5'>
                <header className='header d-flex align-items-end justify-content-center' id='banner'/>
            </Nav.Link>
        </>
    )
}


function Navigation(){
    const [show, setShow] = useState(false);

    useEffect(() => {
      const banner = document.getElementById('banner').getBoundingClientRect();
       
      const controlIcon = () => {
          if (window.scrollY > banner.height ) {
              setShow(true);
          } else {
              setShow(false);
          }
      }

      window.addEventListener('scroll', controlIcon);

    }, []);

    return (
      <Navbar collapseOnSelect expand='md' className="fixed-top sticky-md-top justify-content-end py-0" variant='dark'>
          {show &&
            <a href='#top'><img id='brand' src={logo} alt='top'/></a>            
          }
      <Navbar.Toggle aria-controls='collapsible'/>
      <Navbar.Collapse id='collapsible'>
        <Scrollspy 
            items={['projects', 'about', 'skillset', 'contact']}
            currentClassName={"active"} 
            componentTag={'div'} 
            className='w-100 nav justify-content-center' 
        >
            <Nav.Link className='item nav-item' href='#projects'>Projects</Nav.Link>
            <Nav.Link className='item nav-item' href='#about'>About</Nav.Link>
            <Nav.Link className='item nav-item' href='#skillset'>Skillset</Nav.Link>
            <Nav.Link className='item nav-item' href='#contact'>Contact</Nav.Link>
        </Scrollspy>
        </Navbar.Collapse>
      </Navbar>
    );
}


function Projects() {

    return (
    <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={'1'}
        breakpoints={{
            600: {
                slidesPerView: 2
            }
        }}
        loop={true}
        coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 700,
            modifier: 1,
        }}
        modules={[EffectCoverflow]}
        slideToClickedSlide = {true}
        className="mySwiper"
        id='projects'
    >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
              <img src={slide.src} alt={slide.title}/>
              <div className='slideWords'>
                  <div id='arrowDown'>&nbsp;</div>
                  <h3 className="display-5" onClick={() => window.location = slide.href}>{slide.title}</h3> 
                  <p className=''>{slide.description}</p>
                  <p>Technologies used: {slide.tech}</p>
                  <Row>
                      <Col sm={3} xs={6} className='h4'><a target='_blank' rel="noopener noreferrer" href={slide.href}>Site</a></Col>
                      <Col sm={3} xs={6} className='h4'><a target='_blank' rel="noopener noreferrer" href={slide.repo}>Repo</a></Col>
                  </Row>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}


function About(){
    return (
        <article id='about' className="text-light">
            <h4 className="display-4">About</h4>
            <p>Hi. My name is Aly Westwood.</p> 
            <p>
                I am a Full-Stack Developer AEC student at John Abbott College. 
                I'm graduating in June and seeking employment starting 11 April 2022. 
            </p>
            <p>
                After the pandemic hit, I decided to refocus my career from aircraft maintenance to software development.
                With both fields having such a heavy focus in troubleshooting, problem-solving, technology and advancement,
                it's felt like a natural transition. With my father having recently retired from a decades-long career as a software developer,
                it also feels like I'm following in his footsteps, which I am so proud to be able to do.
            </p>
            <p>
                In my spare time, I like to build things, craft things, sew things, and to generally make things out of nothing.
            </p>
            <div className="table-responsive-sm">
            <table className='table' id='aboutTable'>
                <tbody>
                    <tr>
                        <th className="text-secondary col-md-5">
                            Name
                        </th>
                        <td className="text-primary">
                            Aly Westwood
                        </td>
                    </tr>
                    <tr>
                        <th className="text-secondary">
                            Location
                        </th>
                        <td className="text-primary">
                            Greater Montreal
                        </td>
                    </tr>
                    <tr>
                        <th className="text-secondary">Available</th>
                        <td className="text-primary">11 April 2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </article>
    );
}


function SkillSet(){

    function importAll(r) {
        let images = [];
        let index = 0;
        r.keys().map((item) => { 
            images[index] =  {}
            images[index].svg = r(item); //
            images[index++].name = item.replace('./', '').replace('.svg', '');
            return r;});
        return images;
      }
      
      const skillsIcons = importAll(require.context('./assets/skills/', false, /\.(svg)$/));

      return(
        <div id="skillset" className="">
            <h4 className="display-4">Skills &amp; Technologies</h4>
            <div className="d-flex flex-wrap justify-content-center">
            {skillsIcons && skillsIcons.map(value => {
                return (
                    <OverlayTrigger
                    key={value.name}
                    overlay={<span className='skillsHover'>{value.name}</span>}
                    >
                    <figure className="skillsIcons">
                        <img src={value.svg} alt={value.name} title={value.name}/>
                    </figure>
                    </OverlayTrigger>
                );
            })}
            </div>
        </div>
    )
}

function Contact(){

    return(
        <div id="contact" className="text-light">
          <h4 className="display-4">Contact me</h4>
          <p>I am available most readily by email, but can also be reached by phone or LinkedIn. Also feel free to check out my GitHub!</p>
          <div className='table-responsive-md'>
          <table className='table' id='contactTable'>
              <tbody>
                  <tr>
                      <th className="text-secondary col-md-5">Email</th>
                      <td className="text-primary"><HiOutlineMail/> <a href="mailto:">alymak.w@gmail.com</a></td>
                  </tr>
                  <tr>
                      <th className="text-secondary">LinkedIn</th>
                      <td className="text-primary"><AiOutlineLinkedin/> <a href="https://www.linkedin.com/in/alywestwood">linkedin.com/in/alywestwood</a> </td>
                  </tr>
                  <tr>
                      <th className="text-secondary">Phone</th>
                      <td className="text-primary"><BiPhoneCall/> 438 - 494 - 4503 </td>
                  </tr>
                  <tr>
                      <th className="text-secondary">Github</th>
                      <td className="text-primary"><FiGithub/> <a href="https://github.com/AlyWestwood">github.com/AlyWestwood</a> </td>
                  </tr>
                  <tr>
                      <th className="text-secondary">Availability</th>
                      <td className="text-primary"><MdOutlineEventAvailable/> 11 April 2022 </td>
                  </tr>
              </tbody>
          </table>
          </div>
          <div className="d-flex justify-content-center">
            <Button as='a' variant='outline-primary' href={resume}>Resume</Button>
          </div>
        
        </div>
    )
}


function App() {
  return (
    <div className='App'>
        <Banner/>
        <Navigation/>
        <Projects/>
        <About/>
        <SkillSet/>
        <Contact/>
    </div>
  );
}

export default App;
