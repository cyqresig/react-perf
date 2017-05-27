/**
 * @since 2017-05-02 10:19
 * @author chenyiqin
 */

import path from 'path'
import React from 'react'
import { expect, } from 'chai'
import { shallow, mount, render, } from 'enzyme'
import sinon from 'sinon'
import Foo from '../src/component/Foo'

// const rootElement = document.getElementById('fixture_container')
// const options = {
//     attachTo: rootElement,
// }
//
// console.log(`rootElement.innerHTML = `, rootElement.innerHTML)

describe('<Foo/>', function() {
    it('calls componentDidMount', () => {
        sinon.spy(Foo.prototype, 'componentDidMount');
        // const wrapper = shallow(<Foo />);
        const wrapper = mount(<Foo />);
        expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('should contain a <div className="foo">title</div> component', function() {
        expect(mount(<Foo title="title" />).contains(<div className="foo">title</div>)).to.equal(false)
    })

    it('should contain text "title"', function() {
        expect(render(<Foo title="title" />).text()).to.contains('title')
    })

    it('should match a ".foo" selector node with the current node', function() {
        expect(shallow(<Foo />).is('.foo')).to.equal(true)
    })

    it('should find a ".foo" selector node in the render tree', function() {
        expect(render(<Foo />).find('.foo').length).to.equal(1)
    })

    it('should trigger onClick correctly', function(done) {
        // const onClick = sinon.spy()
        let wrapper = null
        const onClick = (clickCount) => {
            // expect(clickCount).to.equal(1)
            expect(wrapper.state('clickCount')).to.equal(1)
            done()
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
})
