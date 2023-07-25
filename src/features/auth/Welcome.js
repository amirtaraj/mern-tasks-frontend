import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`techNotes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            <p><Link to="/dash/notes" id="viewMyTask">View my Task</Link></p>

            <p><Link to="/dash/notes/new" id="addNewTask">Add New Task</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users" id="viewUserSettings">View User Settings</Link></p>}

            {(isAdmin) && <p><Link to="/dash/users/new" id="addNewUser">Add New User</Link></p>}

        </section>
    )

    return content
}
export default Welcome