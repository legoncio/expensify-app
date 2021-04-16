import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = (props) => (
    <div>
        <li>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>
            <p>Amount: {props.amount} - Created at: {props.createdAt}</p>
        </li>
    </div>
)

export default ExpenseListItem