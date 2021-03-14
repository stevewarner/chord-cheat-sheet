/* eslint-disable no-plusplus */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chord from './Chord';
import SecDomChord from './SecDomChord';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media (orientation: portrait) {
    display: flex;
    flex-flow: row wrap;
  }
`;

const ChordRows = (props) => {
  const { mode, notes, secondaryDominants } = props;
  const diatonicNotes = [];
  for (let i = 0; i < mode.intervals.length; i++) {
    diatonicNotes.push(notes[mode.intervals[i]]);
  }
  return (
    <>
      {Object.keys(mode.patterns).map((pattern) => (
        <div key={pattern}>
          <h2>{`${pattern} Chords`}</h2>
          <Row>
            {mode.patterns[pattern].map((chord, index) => (
              <Chord
                key={index}
                chord={chord}
                index={index}
                mode={mode}
                pattern={pattern}
                diatonicNotes={diatonicNotes}
              />
            ))}
          </Row>
        </div>
      ))}
      <h2>Secondary Dominant Chords</h2>
      <Row>
        {mode.degrees.map((degree, index) => (
          <SecDomChord
            key={index}
            degree={degree}
            secondaryDominants={secondaryDominants}
            index={index}
            mode={mode}
            diatonicNotes={diatonicNotes}
          />
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
