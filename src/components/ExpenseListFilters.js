import React from 'react'
import { connect } from 'react-redux'
import { setFilters } from '../actions/filters'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { DateTime } from 'luxon'

export class ExpenseListFilters extends React.Component {

    onDatesChange = (dates) => {
        if(dates){
            this.props.setFilters({
                startDate: DateTime.fromJSDate(dates[0]).toMillis(),
                endDate: DateTime.fromJSDate(dates[1]).toMillis()
            })
                
        }else{
            this.props.setFilters({
                startDate: undefined,
                endDate: undefined
            })
            
        }
    }

    onTextChange = (e) => {
        this.props.setFilters({text: e.target.value})
    }

    onSortChange = (e) => {
        this.props.setFilters({sortBy: e.target.value})
    }
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    value={
                        [
                            this.props.filters.startDate ? DateTime.fromMillis(this.props.filters.startDate).toJSDate() : null,
                            this.props.filters.endDate ? DateTime.fromMillis(this.props.filters.endDate).toJSDate() : null
                        ]
                    }
                    onChange={this.onDatesChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setFilters: (filters) => dispatch(setFilters(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
