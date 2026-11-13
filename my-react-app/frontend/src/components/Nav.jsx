import { Link } from "react-router"

function Nav(){
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/Prologue">Prologue</Link>
        <Link to="/Room1">Room1</Link>
        <Link to="/UpStairs">UpStairs</Link>
    </nav>
}

export default Nav