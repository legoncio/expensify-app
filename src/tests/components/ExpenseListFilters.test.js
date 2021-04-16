import React from 'react'
import { shallow } from 'enzyme'
import{ DateTime } from 'luxon'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, filters2 } from '../fixtures/filters'

let setFilters, wrapper

beforeEach(() => {
    setFilters = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setFilters={setFilters}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters correctly with filters 2', () => {
    wrapper.setProps({
        filters: filters2
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: filters2.text }
    })
    expect(setFilters).toHaveBeenLastCalledWith({ text: filters2.text })
})

test('should handle sortBy change', () => {
    wrapper.find('select').simulate('change', {
        target: { value:filters2.sortBy }
    })
    expect(setFilters).toHaveBeenLastCalledWith({ sortBy: filters2.sortBy })
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onChange')([DateTime.fromMillis(filters2.startDate).toJSDate(), DateTime.fromMillis(filters2.endDate).toJSDate()])
    expect(setFilters).toHaveBeenLastCalledWith({
        startDate: filters2.startDate,
        endDate: filters2.endDate
    })
})