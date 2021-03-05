import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from './Select';

const Title = styled.h1`
  display: flex;
  align-items: center;
  @media (orientation: portrait) {
    display: none;
  }
`;

const MobileTitle = styled.div`
  display: none;
  @media (orientation: portrait) {
    display: block;
    padding: 10px 20px;
    background-color: #282c34;
    color: #fff;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Header = (props) => {
  const {
    noteValue,
    setNoteValue,
    noteOptions,
    modeValue,
    setModeValue,
    modeOptions,
  } = props;
  return (
    <>
      <Title>
        in
        <span>
          <Select
            value={noteValue}
            onChange={setNoteValue}
            dropdownOptions={noteOptions}
          />
        </span>
        {modeValue} you can play...
      </Title>
      <MobileTitle>
        <h1>chord cheat sheet</h1>
        <Select
          value={noteValue}
          onChange={setNoteValue}
          dropdownOptions={noteOptions}
        />
        <Select
          value={modeValue}
          onChange={setModeValue}
          dropdownOptions={modeOptions}
        />
      </MobileTitle>
    </>
  );
};

Header.propTypes = {
  noteValue: PropTypes.string,
  setNoteValue: PropTypes.func,
  noteOptions: PropTypes.array,
  modeValue: PropTypes.string,
  setModeValue: PropTypes.func,
  modeOptions: PropTypes.array,
};

export default Header;
