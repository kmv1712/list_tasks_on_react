import React, { Component, useState } from 'react';
import addSvg from "../../assets/img/add.svg";

const AddTaskForm = ({list, onAddTask}) => {
    const [visibleForm, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleFromVisible = () => {
        setFormVisible(!visibleForm);
        setInputValue('');
    };

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false
        };

        onAddTask(list.id, obj);
        toggleFromVisible();
    };


    return (
        <div className="task__form">
            {!visibleForm ? (
            <div onClick={toggleFromVisible} className="task__form-new">
                <img src={addSvg} alt="Add icon"/>
                <span>Новая задача</span>
            </div>
            ) : (
            <div className="task__form-block">
                <input type="text" placeholder="Новая задача" value={inputValue} className="field" onChange={e => setInputValue(e.target.value)}/>
                <button onClick={addTask} className="button">Добавить задачу</button>
                <button onClick={toggleFromVisible} className="button button--grey">Отмена</button>
            </div>
            )}
        </div>
    );
}

export default AddTaskForm;