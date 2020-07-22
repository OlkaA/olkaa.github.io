import React, { useState, useEffect, ChangeEvent } from 'react';
import './TextInputComponent.scss';

interface ITextInputComponentProps {
  placeholder: string,
  title: boolean,
  setNoTitle: (value: boolean) => void
}

export function TextInputComponent(props: ITextInputComponentProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if(props.title) {
      setValue('')
      props.setNoTitle(false);
    }
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div>
      <input type='text' onChange={onChange} placeholder={props.placeholder} value={value}/>
    </div>
  );
};