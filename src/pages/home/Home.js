import Topbar from '../../component/topbar/Topbar.js'
import Sidebar from '../../component/sidebar/Sidebar.js'
import Feed from '../../component/feed/Feed.js';
import Rightbar from '../../component/rightbar/Rightbar.js'
import './home.css'
function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>

      </div>
    </>
  )
}

export default Home
