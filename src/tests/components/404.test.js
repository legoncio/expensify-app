import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import NotFoundPage from '../../components/404'

test('Should render expensify dashboard', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})