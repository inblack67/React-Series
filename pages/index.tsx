import { TextField } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoAtom } from '../src/atoms';
import Listner from '../src/components/Listner';

const Home = () => {
  const [todo, setTodo] = useRecoilState(todoAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <TextField onChange={handleChange} label='Todo' variant='standard' />
      <h1>{todo}</h1>
      <Listner />
    </div>
  );
};

export default Home;
