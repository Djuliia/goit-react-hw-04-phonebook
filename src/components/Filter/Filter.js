import { Label, StyledInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
