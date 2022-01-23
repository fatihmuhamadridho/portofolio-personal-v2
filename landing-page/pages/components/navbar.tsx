import Image from "next/image"
import Swal from "sweetalert2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-link">
                <a href="">
                    <Image 
                        src={'/favicon.ico'} 
                        alt=""
                        width={40}
                        height={40} /> 
                </a>
                <ul>
                    <li><a onClick={() => Swal.fire("Sorry this function still can't be used.")}>About Us</a></li>
                    <li><a onClick={() => Swal.fire("Sorry this function still can't be used.")}>Services</a></li>
                    <li><a onClick={() => Swal.fire("Sorry this function still can't be used.")}>Company</a></li>
                </ul>
            </div>
            <div className="nav-auth">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </label>
                <ul>
                    <li>                <button type="button" className="btn-signup" onClick={() => Swal.fire("Sorry this function still can't be used.")}>
                    Sign up
                </button></li>
                <li>                <button type="button" className="btn-signin" onClick={() => Swal.fire("Sorry this function still can't be used.")}>
                    Login
                </button></li>
                </ul>
                {/* <button type="button" className="btn-signup" onClick={() => Swal.fire("Sorry this function still can't be used.")}>
                    Sign up
                </button>
                <button type="button" className="btn-signin" onClick={() => Swal.fire("Sorry this function still can't be used.")}>
                    Login
                </button> */}
            </div>
        </nav>
    )
}