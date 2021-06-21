import React from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { DateTime } from 'luxon'

class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? props.expense.createdAt : DateTime.now().toMillis(),
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const  note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }        
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt: DateTime.fromJSDate(createdAt).toMillis() }))
        } else {
            this.setState(() => ({ createdAt: DateTime.now().toMillis() }))
        }
        
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt,
                note: this.state.note
            })
        }
    }
    render(){
        return(
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <DatePicker
                    value={DateTime.fromMillis(this.state.createdAt).toJSDate()}
                    onChange={this.onDateChange}
                    clearIcon={null}
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm