import './rightbar.css'
import { User } from '../../dummyData'
import Online from '../online/Online'

function Rightbar({profile}) {

  const Homerightbar=()=>{
    return (
      <>
       <div className="birthdaycontainer">
          <img src="/assets/images/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Zain khan</b> and  <b>4 other friend</b> have a birth day</span>
        </div>
        <img src="/assets/images/card2.jpg" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {User.map((use)=> <Online key={use.id} user={use} />)}
        </ul>
      </>
    )
  }

  const Profilerightbar=()=>{
    return(
      <>
      <h4 className='rightbartitle'>User information </h4>
      <div className="rightbarinfo">
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">City:</span>
        <span className="rightbarinfovalue">Lahore </span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">From:</span>
        <span className="rightbarinfovalue">Peshawer</span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">Relationship:</span>
        <span className="rightbarinfovalue">Single</span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">City:</span>
        <span className="rightbarinfovalue">New York</span>
      </div>
      </div>

      <h4 className='rightbartitle'>User Friend </h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Zaid kamal</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Zahid khan</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Suleman Pasha</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Naveed Qamar</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Qamar Zaman</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/images/s2.jpg" alt="" className="rightbarfollwoingimg" />
          <span className="rightbarfollowingname">Suhail Waraich</span>
        </div>
      </div>

      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
       {profile ? <Profilerightbar/> : <Homerightbar/> }
      </div>
    </div>
  )
}

export default Rightbar
