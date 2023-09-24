import './share.css'
import {PermMedia, Label,Room,EmojiEmotions} from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
      <div className="sharewrapper">
        <div className="sharetop">
             <img className='shareprofileimg' src="/assets/images/p3.jpg" alt="" /> 
             <input placeholder='what is in your mind?' className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                    <PermMedia htmlColor='tomato' className='shareicon'/>
                    <span className='shareoptiontext'>Photo or Video</span>
                </div>
                <div className="shareoption">
                    <Label htmlColor='blue' className='shareicon'/>
                    <span className='shareoptiontext'>Tag</span>
                </div>
                <div className="shareoption">
                    <Room htmlColor='green' className='shareicon'/>
                    <span className='shareoptiontext'>Location</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareicon'/>
                    <span className='shareoptiontext'>Feeling</span>
                </div>
            </div>
            <button className='sharebutton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
