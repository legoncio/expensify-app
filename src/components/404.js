import React from 'react'
import { Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <p>404! - <Link to="/">Go to Dashboard</Link></p>
    </div>
)

export default NotFoundPage