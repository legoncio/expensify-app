import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Should render single expense list item', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})