import './signup.css'

function Signup() {
  return (
    <>
     <div className="login">
        <div className="loginwraper">
            <div className="loginleft">
                <div className="loginleftlogo">
                    Colleague App
                </div>
                <span className="logintext">Connect with your Friend and Colleague around the world</span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="User Name" className="logininput" />
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <input placeholder="C Password" className="logininput" />
                    <button className="loginbutton">Sign Up</button>
                    <button className="createaccount">Log into your account</button>

                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup
