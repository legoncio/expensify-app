import React from 'react'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import numeral from 'numeral'

const ExpenseListItem = (props) => (

    <Link className="list-item" to={`/edit/${props.id}`}>
        <div>
            <h3 className="list-item__title">{props.description}</h3>
            <span className="list-item__subtitle">{DateTime.fromMillis(props.createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
        </div>
        <h3 className="list-item__data">{numeral(props.amount / 100).format('$0,0')} </h3>
    </Link>
)

export default ExpenseListItem