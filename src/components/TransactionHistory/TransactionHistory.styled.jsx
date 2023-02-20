import styled from "styled-components";

export const Table = styled.table`
 margin: 0px auto;
    width: 900px;
    border: 1px solid black;
`;

export const Title = styled.tr`
background-color: aqua;
    text-transform: uppercase;
`;

export const TitleData = styled.th`
padding: 12px;
`;

export const Item = styled.tr`
text-align: center;
&:nth-child(even) {
background-color: lightgrey;
}
`;

export const Data = styled.td`
padding: 10px;
`;
