import './login.css'

function login() {
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
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginbutton">Login</button>
                    <span className="loginforgot">Forgot Password</span>
                    <button className="createaccount">Create a New Account</button>

                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default login
