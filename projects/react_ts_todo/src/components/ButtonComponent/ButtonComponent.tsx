import * as React from 'react';

interface IButtonComponentProps {
  onClick: (value: boolean) => void
};

export function ButtonComponent(props: IButtonComponentProps) {
  return (
    <div>
      <button onClick={() => props.onClick(true)}>x</button>
    </div>
  );
};