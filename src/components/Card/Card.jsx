import React from 'react'
import { useNavigate } from 'react-router'
import './Card.css'

const Card = ({profile}) => {
  const navigate = useNavigate();
  return (
    <div className='Card'>
        <div className="cardImage" style={{backgroundImage: `url(${profile.background})`}}>
            <img src={profile.profileImage} alt={`${profile.profileImage}`} />
        </div>
        <div className="text">
            <h4>{profile.name}</h4>
            <h6>{profile.profession}</h6>
            <p>{profile.description}</p>
        </div>
        <div className="link">
            {/* <a href={profile.profileLink}> */}
            <button onClick={()=> navigate(`/${profile.id}`)}>Open</button>
            {/* </a> */}
        </div>
    </div>
  )
}

export default Card