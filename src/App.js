import React from 'react';
import List from './components/List'

function App() {
  return (
  <div className="todo">
    <div className="todo__sidebar">
      <List items= {[{
        icon: null,
        name: "Все задачи",
      },
      {
        icon: null,
        name: "Покупки",
      },
      {
        icon: null,
        name: "Фронтенд",
      },
      {
        icon: null,
        name: "Фильмы и сериалы",
      }]} />
    </div>
    <div className="todo__tasks"></div>
  </div>
  );
}

export default App;
