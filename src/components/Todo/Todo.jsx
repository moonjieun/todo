import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import styles from './Todo.module.css';

/**todo == todos에 추가된 객체들 */

export default function Todo({todo, onUpdate, onDelete}){
  const { id, text, status } = todo;
  
  const handleChange = (e) =>{
    const status = e.target.checked ? '완료' : '진행중';
    onUpdate({...todo, status})
  }
  
  const handleDelete = () => onDelete(todo);

 return(
   <li className={styles.todo}>
    <input 
    className={styles.checkbox}
    type='checkbox' 
    id={id}
    checked={status === '완료'}
    onChange={handleChange}
    />
    <label className={styles.text} htmlFor={id}>{text}</label>
      <button className={styles.button} onClick={ handleDelete }><FcFullTrash/></button>
   </li>
  );

}
