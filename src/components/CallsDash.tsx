import React, { useEffect } from 'react';
import { useGetCallsQuery } from '../services/service';
import styled from 'styled-components';

const CallsDash = () => {

  const { data, error, isLoading } = useGetCallsQuery('calls')

  if (isLoading) return <p>Loading</p>

  if (error) return <p>Error</p>

  return <Wrapper>{JSON.stringify(data)}</Wrapper>;
};

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
`;
export default CallsDash;
