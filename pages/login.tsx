import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { margin } from '@mui/system';

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
      <form
        onSubmit={handleSubmit(customHandleSubmit)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            // bgcolor: 'background.paper',
            borderRadius: 1,
            width: '30%',
          }}
        >
          <Typography variant='h6'>Login</Typography>
          <TextField
            error={!!errors.username}
            // id='outlined-error'
            label='username'
            // defaultValue='Hello World'
            {...register('username')}
            helperText={errors.username?.message}
            sx={{
              margin: '1rem 0 1rem 0',
            }}
          />
          <TextField
            error={!!errors.password}
            // id='outlined-error-helper-text'
            label='password'
            // defaultValue='Hello World'
            helperText={errors.password?.message}
            {...register('password')}
            type='password'
            sx={{
              margin: '1rem 0 1rem 0',
            }}
          />
          <Button type='submit' variant='contained'>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
