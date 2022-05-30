import React from 'react';
import styled from 'styled-components';
import Loader from '../../icons/loader';

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, .4);
`;

const Preloader = () => (
  <StyledLoader>
    <Loader width="48" height="48" />
  </StyledLoader>
);

export default Preloader;
