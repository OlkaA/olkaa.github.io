import React, { useState, ChangeEvent } from 'react';

interface ICheckboxInput {
  checked: boolean
}

export function CheckboxInput(props: ICheckboxInput) {
  const [checked, setChecked] = useState(props.checked);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
  setChecked(event.target.checked);

  return (
    <div>
      <input type='checkbox' onChange={onChange} checked={checked}/>
      {checked}
    </div>
  );
};