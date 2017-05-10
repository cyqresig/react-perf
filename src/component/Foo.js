/**
 * @since 2017-05-02 10:16
 * @author chenyiqin
 */

import React, { PropTypes, PureComponent, } from 'react'

class Foo extends PureComponent {

    static defaultProps = {
        title: 'div',
        onClick: () => {
        },
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0,
        }
    }

    handleClick = (e) => {
        const {
            onClick,
        } = this.props
        const {
            clickCount,
        } = this.state

        // console.log('e.target.innerHTML = ', e.target.innerHTML) // cannot use shallow

        this.setState({
            clickCount: clickCount + 1,
        }, () => {
            onClick(this.state.clickCount)
        })
    }

    componentDidMount() {

    }

    render() {
        const {
            title,
        } = this.props

        return (
            <div
                className="foo"
                onClick={this.handleClick}>
                {title}
            </div>
        )
    }
}

export default Foo
