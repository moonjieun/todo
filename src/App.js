import React,{useState} from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';


function App() {
  const filters = ['모두','진행중','완료']
  const [ filter, setFilter ] = useState(filters[0]);
  return (
    <>
    <DarkModeProvider>
    <Header filters={filters} filter={filter} setFilter={setFilter}/>
    <TodoList filter={filter}/>
    </DarkModeProvider>
    </>
  );
}

export default App;
