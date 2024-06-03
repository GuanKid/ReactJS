import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App';
import { Table, Form, Button } from 'react-bootstrap';
import useAPI from './useAPI';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const buttonTitle = editMode ? "Edit" : "Add";

  const endpoint = "http://localhost:3000/todos/";

  const savedTodos = useAPI(endpoint);

  useEffect(() => {
    dispatch({ type: "get", payload: savedTodos });
  }, [savedTodos]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode) {
      await axios.patch(endpoint + editTodo.id, { text: todoText });
      dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
    } else {
      const newToDo = { id: uuidv4(), text: todoText };
      await axios.post(endpoint, newToDo);
      dispatch({ type: 'add', payload: newToDo });
    }
    setTodoText("");
  };

  const handleDelete = async (todoId) => {
    const todoToDelete = state.todos.find((todo) => todo.id === todoId);
    if (todoToDelete) {
      await axios.delete(endpoint + todoId);
      dispatch({ type: 'delete', payload: todoToDelete });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <tr>
                <td>{todo.text}</td>
                <td
                  onClick={() => {
                    setTodoText(todo.text);
                    setEditMode(true);
                    setEditTodo(todo);
                  }}
                >
                  <Button variant="link">Edit</Button>
                </td>
                <td onClick={() => handleDelete(todo.id)}>
                  <Button variant="link">Delete</Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ToDoList;