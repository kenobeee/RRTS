import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {exampleSelector} from '@store/reducers/example/selectors';
import {someFieldHandler} from '@store/reducers/example/dispatchers';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;
`;

const Image = styled.img`
  margin-top: 20px;
  
  width: 500px;
  
  border-radius: 100%;
`;

export const Home = () => {
    const {someField} = useSelector(exampleSelector);

    useEffect(() => {
        if (!someField) {
            const imgPath = require('/assets/img/example-img.jpg');

            someFieldHandler(imgPath);
        }
    }, [someField]);

    return (
        <Wrapper>
            <Title><strong>Start pattern:</strong> React, Typescript, Redux Toolkit, Styled Components</Title>
            <Image src={someField} alt={'img'}/>
        </Wrapper>
    );
};