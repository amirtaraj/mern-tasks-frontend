import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Task Hub!</span></h1>
            </header>
            <main className="public__main">
            <br />
            <Link to="/login" id="userLogin">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
          User Login
        </Link>
                <br />
                <br />
                <p>Stay Organized and Efficient with Task Hub!</p>
                <br />
                <br />
               </main>
            <footer>
                <a href="https://www.amirtaraj.com" id="contactUs">Contact Us</a>
            </footer>
        </section>

    )
    return content
}
export default Public