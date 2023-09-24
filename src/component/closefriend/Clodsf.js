import './closef.css'

function Clodsf({user}) {
  return (
    <>
        <li className="sidebarfriend">
            <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">{user.username}</span>
        </li>
    </>
 )
}

export default Clodsf
