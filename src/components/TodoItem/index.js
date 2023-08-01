// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachtodoItem, ondelete} = props
  const {title, id} = eachtodoItem
  const deleteitem = () => {
    ondelete(id)
  }
  return (
    <li className="list-container">
      <p className="description">{title}</p>
      <button type="button" className="button" onClick={deleteitem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
