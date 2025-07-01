import './Mentors.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";


function Mentor() {
  document.title = "Mentors";

  let MentorCards = [
    {
      id: 1,
      title: 'Riya',
      number: 7669697471,
      thumbnail: '/assets/mentors/riya.jpeg',
      Link : {
        github : "https://github.com/RiyaAgrawalRocks",
        linkedin : "https://www.linkedin.com/in/riya-agrawal-50374628b",
        instagram : "https://www.instagram.com/riyaagrawal_2022?igsh=a2N3ZWdvcmYxZGZx",
      }
    },
    {
      id: 2,
      title: 'Lakshaditya',
      number: 9667948002,
      thumbnail: '/assets/mentors/lakshaditya.jpeg',
      Link : {
        github : "https://github.com/Thunder25Beast",
        linkedin : "https://linkedin.com/in/lakshaditya-singh",
        instagram : "https://www.instagram.com/singh_lakshaditya?igsh=MXFseGFnY29qaGNtcw==",
      }
    },
    {
      id: 3,
      title: 'Anurag',
      number: 7499972586,
      thumbnail: '/assets/mentors/anurag.jpeg',
      Link : {
        github : "https://github.com/Anurag6905",
        linkedin : "https://www.linkedin.com/in/anurag-desai-a37a35333/?trk=PROFILE_DROP_DOWN",
        instagram : "https://www.instagram.com/anurag.desai.695?igsh=MXF6M3FpOWc4bjNrNQ==",
      }
    },
    {
      id: 4,
      title: 'Nitansh',
      number: 6395316267,
      thumbnail: '/assets/mentors/nitansh.jpeg',
      Link : {
        github : "https://github.com/real-Ni",
        linkedin : "https://linkedin.com/in/nitansh1",
        instagram : "https://instagram.com/nitannsh",
      }
    },
    {
      id: 5,
      title: 'Tezas',
      number: 7499972586,
      thumbnail: '/assets/mentors/tezas.jpeg',
      Link : {
        github : "https://github.com/odinOnGit",
        linkedin : "https://www.linkedin.com/in/tezas-chetry-12671223b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
              <div className="social">
              <a href={Link.github}><AiFillGithub className='social-icon' size= {24}/></a>
              <a href={Link.linkedin}><AiFillLinkedin className='social-icon' size = {24} /></a>
              <a href={Link.instagram}><AiFillInstagram className='social-icon' size={24} /></a>
              </div>
            </div>
            <p className="number">{number}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mentor