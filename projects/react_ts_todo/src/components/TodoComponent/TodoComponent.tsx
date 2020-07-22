import React, { useState } from 'react';
import './TodoComponent.scss';
import { TextInputComponent } from '../TextInputComponent/TextInputComponent';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { ListOfTodosComponent } from '../ListOfTodosComponent/ListOfTodosComponent';

// type ITodoList = {  
// };????????????????????????

export function TodoComponent() {
  const [noTitle, setNoTitle] = useState(false);

  return (
    <div>
      <div className='input-with-x'>
        <TextInputComponent placeholder='Name of the list' title={noTitle} setNoTitle={(value) => setNoTitle(value)} />
        <ButtonComponent onClick={(value) => { console.log('click'); setNoTitle(value) }} />
      </div>
      <ListOfTodosComponent />
    </div>
  );
};