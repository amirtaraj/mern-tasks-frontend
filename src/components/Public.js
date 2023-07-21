import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Task Hub!</span></h1>
            </header>
            <main className="public__main">
            <br />
                <Link to="/login">User Login</Link>
                <br />
               </main>
            <footer>
                <a href="https://www.amirtaraj.com">Contact Us</a>
            </footer>
        </section>

    )
    return content
}
export default Public