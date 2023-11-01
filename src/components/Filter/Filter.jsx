import { FilterTitle, StyleInput } from "./Filter.styled";

export const Filter = ({ findContact }) => {
  return (
    <label>
      <FilterTitle>Find contacts by name</FilterTitle>
        <StyleInput
        type="text"
        name="filter"
        onChange={evt => findContact(evt.target.value)}
      />      
    </label>
  );
};
