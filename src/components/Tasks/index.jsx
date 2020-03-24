import React from 'react';
import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';

const Tasks = ({ list }) => {
    console.log( list );

        return (
            <div className="tasks">
                <h2 className="tasks__title">
                    Фронтенд
                    <img src={editSvg} alt='Edit icon' />
                </h2>

                <div className="tasks__items">                   
                    <input id="check" type="checkbox"/>
                    <label htmlFor="check"></label>

                    <div className = "tasks__items-row" >
                        {/* <input value="React Js fkjkfdvldfvdf"/> */}
                    </div>                    
                </div>
            </div>
        );
};


export default Tasks; 
