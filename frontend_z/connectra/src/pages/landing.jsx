// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css"

// export default function landing() {
//     return (
//         <div className="landingPageContainer">
//             <nav>
//                 <div className="navHeader">
//                     <h2>Apna Video Call</h2>
//                 </div>
//                 <div className="navlist">
//                     <p>Join as Guest</p>
//                     <p>Register</p>
//                     <div role="button">
//                         <p>Login</p>
//                     </div>
//                 </div>
//             </nav>
//             <div className="landingMainContainer">
//                 <div>
//                     <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
//                     <p>Cover a distance by Connectra</p>
//                     <div role='button'>
//                         <Link to={"/auth"}>Get Started</Link>
//                     </div>
//                 </div>
//                 <div>
//                     <img src="/mobile.png" alt="mobile" />
//                 </div>
//             </div>
//         </div>
//     )
// }





import React from "react";
import "../App.css"
import { Link, useNavigate } from 'react-router-dom';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import { IconButton } from '@mui/material';

export default function landing() {


    const router = useNavigate();
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                <h2> Connect Now With :
                        <span style={{color:"Orange"}}> <b> CONNECTRA</b></span></h2>
                </div>

                <div className="navList">
                    <p style={{color:"white"}} onClick={() =>{
                        router( "/djn3e4");
                    }}>Join As Guest</p>
                    <p style={{color:"white"}} onClick ={() =>{
                        router("/auth");
                    }}>Register</p>
                    <div style={{color:"white"}} onClick ={() =>{
                        router("/auth");
                    }}role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div className="mainContent">
                    <h1 style={{ color: "white" }}><span style={{ color: "#FF9839" }}>Connect</span> With your</h1>
                    <h1 style={{ color: "white" }}>Loved Ones</h1>
                    <p>cover a distance by Connectra</p>
                    <div role="button" className="getStartedbtn">
                        <Link to={"/auth"} >Get started</Link>
                    </div>

                </div>
                <div className="mainContentImg">
                    <img src="../mobile.png" alt="" />

                </div>
            </div>

        </div>
    );
}