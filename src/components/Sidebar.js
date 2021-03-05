import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  color: #fff;
  background-color: #282c34;
  width: 20vw;
  padding: 0 20px;
  .modes {
    display: flex;
    flex-direction: column;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;

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
    <SidebarContainer>
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
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  currentMode: PropTypes.string,
  selectMode: PropTypes.func,
  Modes: PropTypes.array,
};

export default Sidebar;
