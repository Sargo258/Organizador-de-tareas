import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onclckbutton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
            className="CreateTodoButton"
            onClick={onclckbutton}
            >
                +
            
        </button> 
    );

}

export{CreateTodoButton};