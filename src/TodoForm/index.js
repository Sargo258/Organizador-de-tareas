
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){
    const[newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmint = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    

    return(
        <form onSubmit={onSubmint}>
            <label>....</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla'
            />
            <div>
                <button
                    type='buttom'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export { TodoForm };