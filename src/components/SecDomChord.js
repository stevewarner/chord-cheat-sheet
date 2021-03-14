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
  *:first-child {
    margin-top: 16px;
  }
  * {
    margin: 0 0 16px 0;
  }
  ${(props) =>
    props.hidden &&
    css`
      border: 1px solid transparent;
      * {
        display: none;
      }
    `}
  @media (orientation: portrait) {
    width: calc(100% / 7);
  }
`;

const Chord = (props) => {
  const { degree, index, mode, secondaryDominants } = props;
  return (
    <Card hidden={degree === 'none'}>
      <p>{index === 0 ? 'V7' : `V/${mode.degrees[index]}`}</p>
      <h3>{`${secondaryDominants[mode.intervals[index]]}7`}</h3>
    </Card>
  );
};

Chord.propTypes = {
  degree: PropTypes.string,
  index: PropTypes.number,
  mode: PropTypes.object,
  secondaryDominants: PropTypes.array,
};

export default Chord;
