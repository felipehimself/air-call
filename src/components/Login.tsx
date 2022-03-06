import {
  Tractor,
  Box,
  Form,
  Grid,
  FormItem,
  TextFieldInput,
  Button,
} from '@aircall/tractor';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setUserData } from './../features/userSlice';

// import { RootState } from './../store/store';

import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

interface IUserLogin {
  name: string;
  password: string;
}

const Login: FC = () => {
  const [user, setUser] = useState<IUserLogin>({ name: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const dados = useSelector((state: RootState) => state.userData);
  // console.log(dados);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.name && !user.password) return;

    axios
      .post('https://frontend-test-api.aircall.io/auth/login', {
        username: user.name,
        password: user.password,
      })
      .then((response) => {
        console.log(response.data);

        dispatch(setUserData(response.data));
        navigate('/dash');
      })
      .catch((error) => {
        console.log(error);
      });

    setUser({ name: '', password: '' });
  };

  return (
    <Wrapper>
      <Tractor injectStyle>
        <Box width='350px' mx='auto'>
          <Form onSubmit={handleSubmit}>
            <Grid gridRowGap={5} gridTemplateColumns='1fr'>
              <FormItem label='Name' name='name'>
                <TextFieldInput
                  placeholder='Your name'
                  onChange={handleChange}
                  name='name'
                  value={user.name ?? ''}
                />
              </FormItem>
              <FormItem label='Password' name='password'>
                <TextFieldInput
                  type='password'
                  placeholder='Password'
                  onChange={handleChange}
                  name='password'
                  value={user.password ?? ''}
                />
              </FormItem>
              <FormItem>
                <Button type='submit' block>
                  Login
                </Button>
              </FormItem>
            </Grid>
          </Form>
        </Box>
      </Tractor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
export default Login;
