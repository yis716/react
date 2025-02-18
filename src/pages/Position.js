import React, { NavLink } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    widith: 100%;
`
const Container = styled.div`

`

function Position() {
    return (
        <Wrapper>
            <Container>
                <h2 className='hidden'>주요업무</h2>
                <p>기상·기후서비스</p>
                <ul>
                    <li><NavLink to="/">관측업무</NavLink></li>
                    <li><NavLink to="/">예보업무</NavLink></li>
                    <li><NavLink to="/">기후서비스 업무</NavLink></li>
                </ul>
                

                
            </Container>
        </Wrapper>
    );
}

export default Position;