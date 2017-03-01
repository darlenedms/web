import React from 'react'
import { shallow } from 'enzyme'
import InitiativeDemandBoard from '.'

const wrap = (props = {}) => shallow(<InitiativeDemandBoard initiatives={[{ id: 1 }]} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
