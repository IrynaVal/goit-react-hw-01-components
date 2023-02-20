import styled from "styled-components";

export const List = styled.ul`
margin: 0 auto 50px;
width: 300px;
`;

export const Item = styled.li`
display: flex;
gap: 20px;
align-items: center;
margin: 10px 0;
padding: 20px;
list-style: none;
border: 1px solid black;
`;

export const Name = styled.p`
font-size:xx-large;
font-weight: 500;
`;

export const Icon = styled.span`
svg {
    fill: ${props => {
    return props.isActive ? 'green' : 'red';
    }};
}
`;

