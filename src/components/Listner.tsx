import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoAtom } from '../atoms';

const Listner = () => {
  const todo = useRecoilValue(todoAtom);

  return (
    <div>
      <h2>another: {todo}</h2>
    </div>
  );
};

export default Listner;
