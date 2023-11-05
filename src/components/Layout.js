import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: ${p => p.theme.spasing(5)};
  border-radius: ${p => p.theme.spasing(3)};
  background-color: ${p => p.theme.colors.white};
`;
