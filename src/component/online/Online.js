import './online.css'

export default function Online({user}) {
  return (
    <li className="rightbarfriend">
    <div className="rightbarprofileimgcontainer">
      <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
        <span className="rightbaronline"></span>
    </div>
    <span className='righbarusername'>{user.username}</span>
  </li>
  )
}
