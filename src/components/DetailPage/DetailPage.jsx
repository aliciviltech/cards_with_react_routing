import React from 'react'
import { useParams } from 'react-router'
import './DetailPage.css'
import { allProfiles } from '../../utils/profileData'

const DetailPage = ({routeID, setRouteID}) => {
    const {id} = useParams();
    const targetProfile = allProfiles.find((profile)=>{
        return profile.id === id;
    })
  return (
    <div >
        {targetProfile &&
        <div className='DetailPage' >
        <div className="imageSide">
            <img src={targetProfile.profileImage} alt="profileImage" />
        </div>
        <div className="textSide">
            <div className="name">
                <h1>{targetProfile.name}</h1>
            </div>
            <div className="designation">
                <h4>{targetProfile.profession}</h4>
            </div>
            <p>Hardworking and reliable UI/UXdesigner focused on going above and beyond to support teams and serve customers. Currently undergoing a self-taught process to enable me offer top-notch abilities. Motivated to continue to learn and grow as a product design professional.</p>
            <div className="icons">
                <a href={targetProfile.profileLink}><img src="/asset/images/fb.png" /></a>
                <img src="/asset/images/linkedin.png" />
                <img src="/asset/images/instagram.png" />
                <img src="/asset/images/twitter.png" />
            </div>
            
            <button>Buy me a coffee</button>
            
        </div>
        </div>}
    </div>
  )
}

export default DetailPage