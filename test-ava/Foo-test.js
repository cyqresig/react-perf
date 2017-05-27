/**
 * @since 2017-05-02 10:19
 * @author chenyiqin
 */

import test from 'ava'
import React from 'react'
import { expect, } from 'chai'
import { shallow, mount, render, } from 'enzyme'
import sinon from 'sinon'
import Foo from '../src/component/Foo'


test('calls componentDidMount', (t) => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    // const wrapper = shallow(<Foo />);
    const wrapper = mount(<Foo />);
    t.true(Foo.prototype.componentDidMount.calledOnce);
});

test('should contain a <div className="foo">title</div> component', (t) => {
    t.false(mount(<Foo title="title" />).contains(<div className="foo">title</div>))
})

test('should contain text "title"', (t) => {
    t.is(render(<Foo title="title" />).text(), 'title')
})

test('should match a ".foo" selector node with the current node', (t) => {
    t.true(shallow(<Foo />).is('.foo'))
})

test('should find a ".foo" selector node in the render tree', (t) => {
    t.is(render(<Foo />).find('.foo').length, 1)
})

test('should trigger onClick correctly', (t) => {
    // const onClick = sinon.spy()
    let wrapper = null
    const onClick = (clickCount) => {
        // expect(clickCount).to.equal(1)
        // t.is(wrapper.state('clickCount'), 10)
        t.is(wrapper.state('clickCount'), 10)
    }
    // wrapper = shallow(
    //     <Foo onClick={onClick}/>,
    //     // options,
    // )
    wrapper = mount(
        <Foo onClick={onClick}/>,
        // options,
    )
    wrapper.find('div').simulate('click', { positionX: 1, positionY: 2, pageX:12 })
    // expect(wrapper.state('clickCount')).to.equal(1)
})
