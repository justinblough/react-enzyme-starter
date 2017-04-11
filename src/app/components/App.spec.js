import React, { Component } from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import App from './App'

describe('<App />', () => {
  var Component = App

  it('Renders in dom', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('.app')).to.have.length(1)
  })

})
