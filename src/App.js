import React from 'react';
import List from './components/List'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            color: 'green',
            name: "Все задачи",
            active: true
          }
        ]}
        />

        <List items={[
          {
            color: 'green',
            name: 'Покупки'
          },
          {
            color: 'blue',
            name: 'Фронтенд'
          },
          {
            color: 'pink',
            name: 'Фильмы и сериалы'
          }
        ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
