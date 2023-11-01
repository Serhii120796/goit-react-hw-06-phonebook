import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: ${p => p.theme.borders.black};
  padding: ${p => p.theme.spasing(3)};
  margin-bottom: ${p => p.theme.spasing(5)};
  max-width: 400px;
`;

export const InputTitle = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.spasing(3)};
  font-weight: ${p => p.theme.weight.accent};
`;

export const FieldWraper = styled.span`
display: block;
margin-bottom: ${p => p.theme.spasing(5)};
`;

export const StyleField = styled(Field)`
  display: block;
  border: ${p => p.theme.borders.grey};
`;

export const StyleErrorMessage = styled(ErrorMessage)`
color: ${p => p.theme.colors.error};
`;