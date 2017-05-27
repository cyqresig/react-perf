/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, { Component, } from 'react'
// import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

import action from '../action'
import Todo from '../component/Todo'
import './TodoListContainer.pcss'


const fakeTodos = []
for (let i = 0; i < 10000; i++) {
    fakeTodos.push({
        "id": i + 1,
        "title": `todo-${i + 1}`,
        "complete": true
    })
}

@connect(
    state => ({
        todoList: state.todoList,
    }),
    action.todo,
    (stateProps, dispatchProps, ownProps) => {
        return {
            ...stateProps,
            ...dispatchProps,
            ...ownProps,
        }
    },
    {
        pure: true,
        withRef: true,
    }
)
class TodoListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const {
            // getTodoList,
            receiveTodoList,
        } = this.props
        //
        // getTodoList()

        receiveTodoList(fakeTodos)
    }

    handleAddTodoClick = () => {
        this.props.addTodo({
            id: 0,
            title: '新任务',
            complete: false,
        })
    }

    render() {
        const {
            todoList: {
                todos,
                fetching,
            },
            removeTodo,
            router,
        } = this.props

        return (
            <div className="todo-list">
                {
                    todos.map((todo) => {
                        const {
                            id,
                            complete,
                            title,
                        } = todo

                        return (
                            <Todo
                                key={id}
                                // key={index}
                                id={id}
                                complete={complete}
                                title={title}
                                remove={removeTodo}
                                router={router}/>
                        )
                    })
                }
                { fetching ? <div>loading...<br/><br/><br/></div> : null }
                <input type="button" className="button" onClick={this.handleAddTodoClick} value="新增任务"/>
            </div>
        )
    }
}

export default TodoListContainer
