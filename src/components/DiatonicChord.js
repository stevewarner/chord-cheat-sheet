import PropTypes from 'prop-types';

const DiatonicChord = (props) => {
  const { chord, index, mode, pattern, diatonicNotes } = props;
  return (
    <>
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
    </>
  );
};

DiatonicChord.propTypes = {
  chord: PropTypes.string,
  index: PropTypes.number,
  mode: PropTypes.object,
  pattern: PropTypes.string,
  diatonicNotes: PropTypes.array,
};

export default DiatonicChord;
