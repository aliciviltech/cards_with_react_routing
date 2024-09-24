import React from 'react'
import './Home.css'
import { allProfiles } from '../../utils/profileData';
import Card from '../Card/Card'
import DetailPage from '../DetailPage/DetailPage';

const Home = () => {
  return (
    <div className='Home'>
        <div className="allCards">
        {allProfiles.map((profile, index) => {
          return (
            <Card key={index} profile={profile} />
          )
        })}
      </div>
      <DetailPage/>
    </div>
  )
}

export default Home