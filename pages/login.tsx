import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface ILogin {
  username: string;
  password: string;
}

const Login = () => {
  const validationSchema = React.useMemo(() => {
    return yup.object({
      username: yup.string().required('username is required'),
      password: yup.string().required('password is required'),
    });
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ILogin>({
    resolver: yupResolver(validationSchema),
  });

  console.log('errors ', errors);

  const customHandleSubmit = (data: ILogin) => {
    console.log('form submitted ', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(customHandleSubmit)}>
        <TextField
          error={!!errors.username}
          // id='outlined-error'
          label='username'
          // defaultValue='Hello World'
          {...register('username')}
          helperText={errors.username?.message}
        />
        <TextField
          error={!!errors.password}
          // id='outlined-error-helper-text'
          label='password'
          // defaultValue='Hello World'
          helperText={errors.password?.message}
          {...register('password')}
          type='password'
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Login;
