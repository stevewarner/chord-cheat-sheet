/* eslint-disable no-plusplus */
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media (orientation: portrait) {
    display: flex;
    flex-flow: row wrap;
  }
`;

const Card = styled.div`
  border: solid 1px #282c34;
  border-radius: 4px;
  padding: 0 16px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p:first-of-type {
    margin-top: 16px;
  }
  p {
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

const ChordRows = (props) => {
  const { mode, notes, secondaryDominants } = props;
  const diatonicNotes = [];
  for (let i = 0; i < mode.intervals.length; i++) {
    diatonicNotes.push(notes[mode.intervals[i]]);
  }
  console.log(diatonicNotes);
  return (
    <>
      {Object.keys(mode.patterns).map((pattern) => (
        <div key={pattern}>
          <h2>{`${pattern} Chords`}</h2>
          <Row>
            {mode.patterns[pattern].map((chord, index) => (
              // chord component
              <Card
                key={index}
                hidden={chord === 'none'}
                // className={`card ${chord === 'none' ? 'hidden' : ''}`}
              >
                <p>{mode.degrees[index]}</p>
                <p>{`${diatonicNotes[index]}${chord}`}</p>
                {/* <p>{mode.structure[index]}</p> */}
                <p>
                  {pattern !== 'extended'
                    ? `${diatonicNotes[index + 0]}, ${
                        diatonicNotes[index + 2 >= 7 ? index - 5 : index + 2]
                      }, ${
                        diatonicNotes[index + 4 >= 7 ? index - 3 : index + 4]
                      }`
                    : ''}
                  {pattern === 'seventh'
                    ? `, 
                ${diatonicNotes[index + 6 >= 7 ? index - 1 : index + 6]}`
                    : ''}
                </p>
              </Card>
            ))}
          </Row>
        </div>
      ))}
      <h2>Secondary Dominant Chords</h2>
      <Row>
        {mode.degrees.map((degree, index) => (
          <Card
            key={index}
            hidden={degree === 'none'}
            // className={`card ${degree === 'none' ? 'hidden' : ''}`}
          >
            <p>{index === 0 ? 'V7' : `V/${mode.degrees[index]}`}</p>
            <p>{`${secondaryDominants[mode.intervals[index]]}7`}</p>
          </Card>
        ))}
      </Row>
    </>
  );
};

ChordRows.propTypes = {
  mode: PropTypes.object,
  notes: PropTypes.array,
  secondaryDominants: PropTypes.array,
};

export default ChordRows;
