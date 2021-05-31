import { shallow } from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import { Header } from '../../components/Header'

let startLogout, wrapper

beforeEach(() => {
    startLogout = jest.fn()
    wrapper = shallow(<Header startLogout={startLogout}/>)
})

test('Should render header correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
    
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
})

test('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})