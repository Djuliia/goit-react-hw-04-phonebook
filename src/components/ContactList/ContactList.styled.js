import styled from 'styled-components';

export const StyledContactList = styled.ul`
  padding: 0;
`;

export const StyledContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #000;
`;

export const StyledDeleteButton = styled.button`
  background-color: #e6b333;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  margin-left: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #d3d3d3;
    box-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),
      5px 5px 20px rgba(201, 196, 196, 0.5);
  }
`;
