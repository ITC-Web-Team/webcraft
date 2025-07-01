import './Mentors.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";


function Mentor() {

  let MentorCards = [
    {
      id: 1,
      title: 'Anurag',
      number: 7499972586,
      thumbnail: '/assets/mentors/anurag.jpeg',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
    {
      id: 2,
      title: 'Tezas',
      number: 7499972586,
      thumbnail: '/assets/mentors/tezas.jpeg',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
    {
      id: 3,
      title: 'Nitansh',
      number: 6395316267,
      thumbnail: '/assets/mentors/nitansh.jpeg',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
  ];

  return (
    <section id='home' className='mentor-section'>
      <h2 className="title">Mentors Page</h2>

      <div className="card-list-mentor">
        {MentorCards.map(({ id, title, number, Link, thumbnail }) => (
          <div key={id} className="mentor-card">
            {thumbnail && <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail-mentor" />}
            <div className="card-info-mentor">
              <h3>{title}</h3>
              
              <a className='social' href={Link.github}><AiFillGithub className='social-icon' size= {24}/></a>
              <a className='social' href={Link.linkedin}><AiFillLinkedin className='social-icon' size = {24} /></a>
              <a className='social' href={Link.instagram}><AiFillInstagram className='social-icon' size={24} /></a>
              <p className="number">{number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mentor