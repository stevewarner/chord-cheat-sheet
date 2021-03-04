import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  padding: 10px 20px;
  transform: skew(0deg, -10deg);
  text-align: center;
`;

const Button = styled.button`
  text-transform: capitalize;
  background: none;
  color: #fff;
  outline: 0;
  border: none;
  padding: 8px;
  margin-left: 16px;
  text-align: start;
  font-size: 16px;
  transition: ease background-color 250ms;
  cursor: pointer;
  &:hover {
    background-color: #5b616b;
  }
  &:focus {
    background-color: #5b616b;
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${(props) =>
    props.active &&
    css`
      background: #5b616b;
    `}
`;

const Sidebar = (props) => {
  const { currentMode, selectMode, Modes } = props;
  return (
    <div className="sidebar">
      <Title>
        chord
        <br />
        cheat
        <br />
        sheet
      </Title>
      <div className="modes">
        {Modes.map((mode) => (
          <Button
            type="button"
            onClick={() => selectMode(mode)}
            key={mode.toString()}
            active={currentMode === mode}
          >
            {mode}
          </Button>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currentMode: PropTypes.string,
  selectMode: PropTypes.func,
  Modes: PropTypes.array,
};

export default Sidebar;
