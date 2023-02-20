import styled from "styled-components";

export const Card = styled.div`
margin: 50px auto;
padding: 20px;
width: 300px;
border: 1px solid black;
`;

export const Description = styled.div`
text-align: center;
`;

export const Avatar = styled.img`
display: block;
width: 150px;
margin: 20px auto;
border-radius: 50%;
`;

export const Name = styled.p`
margin-bottom: 10px;
font-size:x-large;
font-weight: 700;
`;

export const Location = styled.p`
margin-top: 10px;
 font-size: large;
`;

export const Stats = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    margin-top: 40px;
    padding: 0;
    list-style: none;
`;

export const Label = styled.span`
display: block;
font-size: medium;
`;

export const Quantity = styled.span`
font-size: larger; 
font-weight: 700;
`;
