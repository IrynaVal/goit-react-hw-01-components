import styled from "styled-components";

export const Stat = styled.section`
margin: 0 auto 50px;
    width: 500px;
    text-align: center;
    border: 1px solid black;
`;

export const Title = styled.h2`
color:cornflowerblue;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
display: flex;
    list-style: none;
`;

export const Item = styled.li`
flex-basis: calc(100% / 5);
   padding: 10px 0;
`;

export const Label = styled.span`
display: block;
    margin-bottom: 10px;
    color: white;
`;

export const Percentage = styled.span`
font-size: large;
font-weight: 600;
color: white;
`;
