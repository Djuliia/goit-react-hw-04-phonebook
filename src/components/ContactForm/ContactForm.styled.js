import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 4px;
`;

export const StyledBtn = styled.button`
  padding: 12px 24px;
  margin-top: 16px;
  background-color: #e6b333;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #d3d3d3;
    box-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),
      5px 5px 20px rgba(201, 196, 196, 0.5);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: #b86161;
`;
