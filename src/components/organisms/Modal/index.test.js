import React from 'react'
import { mount, shallow } from 'enzyme'
import Modal from '.'

const onClose = jest.fn()

const wrap = (props = {}) => shallow(<Modal onClose={onClose} {...props} />)

it('renders modal', () => {
  mount(<Modal onClose={onClose} />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})

it('renders title when passed in', () => {
  const wrapper = wrap({ title: 'test title' })
  expect(wrapper.contains('test title')).toBe(true)
})
