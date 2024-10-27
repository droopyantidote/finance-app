import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  function logout() {
    auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="navbar">
      <p className="navbar-heading">Financely</p>
      {user ? (
       <p className="navbar-link" onClick={logout}>
       <span style={{ marginRight: "1rem" }}>
         <img
           id="profile-pic"
           src={user.photoURL || userSvg} // Fallback to default if photoURL is missing
           alt="User profile"
           width="32"
           height="32"
           style={{ borderRadius: "50%" }}
         />
       </span>
       <span style={{ display: "inline-block", transform: "translateY(-10px)" }}>
         Logout
       </span>
     </p>
     
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
