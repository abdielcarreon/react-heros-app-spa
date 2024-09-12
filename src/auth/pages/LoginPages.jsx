import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPages = () => {
  

  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    login( 'Abdiel C' );

    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className="container mt-5 ">
      <h1>Login</h1>
      <hr />

      <button className="btn- tbn-primary"
        onClick={ onLogin }
      >
          Login
      </button>
    </div>
  )
}

 