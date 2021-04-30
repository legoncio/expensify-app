import React from 'react'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import numeral from 'numeral'

const ExpenseListItem = (props) => (
    <div>
        <li>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>
            <p>
            Amount: {numeral(props.amount / 100).format('$0,0')}
            -
            Created at: {DateTime.fromMillis(props.createdAt).toLocaleString(DateTime.DATE_FULL)}
            </p>
        </li>
    </div>
)

export default ExpenseListItem