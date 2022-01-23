import Image from "next/image"

export default function Navbar() {
    return (
        <nav>
            <a href="#" className="nav-profile">
                <div className="nav-logo">
                    <Image 
                        src={"/favicon.ico"} 
                        alt="" 
                        width={"100%"} 
                        height={"100%"} />
                </div>
                <p>FatihMuhamadRidho</p>
            </a>
            <div className="nav-link">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#">My Work</a></li>
                    <li><a href="#">Let`s Talk</a></li>
                </ul>
            </div>
        </nav>
    )
}