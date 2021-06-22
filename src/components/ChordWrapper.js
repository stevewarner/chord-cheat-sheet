import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Card = styled.button`
  font-size: 18px;
  background: #fff;
  border: solid 2px #c3c3c3;
  border-radius: 4px;
  padding: 0 16px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
  *:first-child {
    margin-top: 16px;
  }
  * {
    margin: 0 0 16px 0;
  }
  ${(props) =>
    props.hidden &&
    css`
      visibility: hidden;
    `}
  @media (orientation: portrait) {
    width: calc(100% / 7);
  }
`;

const ChordWrapper = (props) => {
  const { chord, handleClick, children } = props;
  return (
    <Card hidden={chord === 'none'} onClick={handleClick}>
      {children}
    </Card>
  );
};

ChordWrapper.propTypes = {
  chord: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.object,
};

export default ChordWrapper;
