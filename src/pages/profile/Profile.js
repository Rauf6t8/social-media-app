import "./profile.css";
import Topbar from "../../component/topbar/Topbar.js";
import Sidebar from "../../component/sidebar/Sidebar.js";
import Feed from "../../component/feed/Feed.js";
import Rightbar from "../../component/rightbar/Rightbar.js";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profileimg">
                <img className="profilecoverimg" src="/assets/images/p2.jpg" alt="" />
                <img  className="profileuserimg" src="/assets/images/s2.jpg" alt="" />
            </div>
            <div className="profileinfo">
                <h4 className="profilename">Rauf Khan</h4>
                <span className="profiledec">Hello my Friends!</span>
            </div>
          </div>
          <div className="profilerightbotton">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
