import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>


     <div className="navcontainer">
       <h1><Link to="/">Ena Coach</Link></h1>

      <div className="navlinks"> 
        <ul>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="printticket">Print Ticket</Link></li>
          <li><Link to="gallary">Gallary</Link></li>
          <li><Link to="contactus">Contact Us</Link></li>
          <li><Link to="signin">Sign In | Register</Link> </li>
        </ul>
      </div>
     </div>


    </nav>
  )
}

export default Navbar
