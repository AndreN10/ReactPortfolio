import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { AppWrap } from '../../wrapper'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/> 
              <h5>Experience</h5>
              <small>1 Year Self Learning</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/> 
              <h5>Clients</h5>
              <small>X Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/> 
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            I'm Nguyen Duc Anh Duy, A web developer 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti distinctio dolorem placeat excepturi officia et nam est aspernatur? Maiores tenetur quisquam similique explicabo sed ipsa rem porro sequi architecto?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About