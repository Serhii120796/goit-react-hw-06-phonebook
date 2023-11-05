import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spasing(5)};
padding: 0;
`;

export const ListItem = styled.li`
display: flex;
`;