import { connect } from 'react-redux'
import Todo from '../components/App'

const mapStateToProps = (state) => {
    return {
        keyword: state.todo.keyword,
        list: state.todo.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get setKeyword() {
            return (value) => {
                dispatch({
                    type:'SET_TODO_KEYWORD',
                    payload: value
                })
            }
        },
        get setTodoList() {
            return (value) => {
                dispatch({
                    type:'SET_TODO_LIST',
                    payload: value
                })

                this.setKeyword('')
            }
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)