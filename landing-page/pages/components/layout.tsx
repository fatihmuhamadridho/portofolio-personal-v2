import Navbar from "./navbar";

export default function Layout(props: any) {
    return (
        <div className="container">
            <Navbar />
            {props.children}
        </div>
    )
}