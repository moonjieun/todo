import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); /**e.preventDefault() : page 새로고침 막는함수*/
    /** trim 앞뒤로 여백줄여주는 함수 */
    // trim을 해준뒤에도 length가 0이라면 아무것도 추가가 되지않게한다.
    if (text.trim().length === 0) {
      return alert('입력란이 비어있습니다!');
    }
    
    onAdd({ id: uuidv4(), text, status: '진행중' });
    setText(''); /**setText(''): 문자열을 추가한뒤 초기화 시키는 함수 */
  };
   

  return (
    
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='할일을 입력하시오'
        value={text}
        onChange={handleChange}
      />
      
      <button className={styles.button}>추가</button>
    </form>
  );
}
