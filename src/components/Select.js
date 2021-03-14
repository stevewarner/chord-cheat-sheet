import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  height: 30px;
  margin: 8px;
  border: 2px solid #282c34;
  border-radius: 4px;
  font-size: 18px;
`;

const Select = (props) => {
  const { value, onChange, dropdownOptions } = props;
  return (
    <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
      {dropdownOptions.map((selected) => (
        <option key={selected} value={selected}>
          {selected}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dropdownOptions: PropTypes.array,
};

export default Select;
