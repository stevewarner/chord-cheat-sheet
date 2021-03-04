import PropTypes from 'prop-types';

const Select = (props) => {
  const { value, onChange, dropdownOptions } = props;
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {dropdownOptions.map((selected) => (
        <option key={selected} value={selected}>
          {selected}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dropdownOptions: PropTypes.array,
};

export default Select;
