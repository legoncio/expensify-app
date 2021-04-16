import React from 'react'
import { shallow } from 'enzyme'
import { DateTime } from 'luxon'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

// test('should render ExpenseForm correctly', () =>{
//     const wrapper = shallow(<ExpenseForm/>)
//     expect(wrapper).toMatchSnapshot()
// })

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
})

test('Should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on textarea change', () => {
    const note = 'This are my notes'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value: note }
    })
    expect(wrapper.state('note')).toBe(note)
    
})

test('Should set amount if valid input', () => {
    const amount = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value: amount }
    })
    expect(wrapper.state('amount')).toBe(amount)
})

test('Should not set amount if invalid input', () => {
    const amount = '12.122'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value: amount }
    })
    expect(wrapper.state('amount')).not.toBe(amount)
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Should set new date on change', () => {
    const now = DateTime.now().toJSDate()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('DatePicker').prop('onChange')(now)
    expect(wrapper.state('createdAt')).toEqual(DateTime.fromJSDate(now).toMillis())
})