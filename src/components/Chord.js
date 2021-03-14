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
  const { chord, index, mode, pattern, diatonicNotes } = props;
  return (
    <Card hidden={chord === 'none'}>
      <p>{mode.degrees[index]}</p>
      <h3>{`${diatonicNotes[index]}${chord}`}</h3>
      <p>
        {pattern !== 'extended'
          ? `${diatonicNotes[index + 0]}, ${
              diatonicNotes[index + 2 >= 7 ? index - 5 : index + 2]
            }, ${diatonicNotes[index + 4 >= 7 ? index - 3 : index + 4]}`
          : ''}
        {pattern === 'seventh'
          ? `, 
                ${diatonicNotes[index + 6 >= 7 ? index - 1 : index + 6]}`
          : ''}
      </p>
    </Card>
  );
};

Chord.propTypes = {
  chord: PropTypes.string,
  index: PropTypes.number,
  mode: PropTypes.object,
  pattern: PropTypes.string,
  diatonicNotes: PropTypes.array,
};

export default Chord;
