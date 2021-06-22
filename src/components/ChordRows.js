/* eslint-disable no-plusplus */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PolySynth } from 'tone';
import ChordWrapper from './ChordWrapper';
import DiatonicChord from './DiatonicChord';
import SecDomChord from './SecDomChord';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media (orientation: portrait) {
    display: flex;
    flex-flow: row wrap;
  }
`;

const synth = new PolySynth().toDestination();

const playChord = (root, third, fifth, seventh) => {
  console.log('play chord!');
  console.log(root);
  console.log(third);
  console.log(fifth);
  console.log(typeof seventh);
  return !seventh
    ? synth.triggerAttackRelease([`${root}4`, `${third}4`, `${fifth}4`], 1)
    : synth.triggerAttackRelease(
        [`${root}4`, `${third}4`, `${fifth}4`, `${seventh}4`],
        1
      );
};

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
              <ChordWrapper
                key={index}
                chord={chord}
                handleClick={() =>
                  // chord name console.log(`${diatonicNotes[index]}${chord}`);
                  playChord(
                    diatonicNotes[index + 0],
                    diatonicNotes[index + 2 >= 7 ? index - 5 : index + 2],
                    diatonicNotes[index + 4 >= 7 ? index - 3 : index + 4],
                    pattern === 'seventh'
                      ? diatonicNotes[index + 6 >= 7 ? index - 1 : index + 6]
                      : undefined
                  )
                }
              >
                <DiatonicChord
                  key={index}
                  chord={chord}
                  index={index}
                  mode={mode}
                  pattern={pattern}
                  diatonicNotes={diatonicNotes}
                />
              </ChordWrapper>
            ))}
          </Row>
        </div>
      ))}
      <h2>Secondary Dominant Chords</h2>
      <Row>
        {mode.degrees.map((degree, index) => (
          <ChordWrapper
            key={index}
            handleClick={() =>
              console.log(`${secondaryDominants[mode.intervals[index]]}7`)
            }
          >
            <SecDomChord
              key={index}
              degree={degree}
              secondaryDominants={secondaryDominants}
              index={index}
              mode={mode}
              diatonicNotes={diatonicNotes}
            />
          </ChordWrapper>
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
