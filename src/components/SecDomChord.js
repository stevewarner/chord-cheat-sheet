import PropTypes from 'prop-types';

const SecDomChord = (props) => {
  const { degree, index, mode, secondaryDominants } = props;
  return (
    <>
      <p>{index === 0 ? 'V7' : `V/${degree}`}</p>
      <h3>{`${secondaryDominants[mode.intervals[index]]}7`}</h3>
      <p>
        {`
        ${secondaryDominants[mode.intervals[index + 0]]}, 
        ${
          secondaryDominants[
            mode.intervals[index + 2 >= 7 ? index - 5 : index + 2]
          ]
        }, 
        ${
          secondaryDominants[
            mode.intervals[index + 4 >= 7 ? index - 3 : index + 4]
          ]
        }, 
        ${
          secondaryDominants[
            mode.intervals[index + 6 >= 7 ? index - 1 : index + 6]
          ]
        }
        `}
      </p>
    </>
  );
};

SecDomChord.propTypes = {
  degree: PropTypes.string,
  index: PropTypes.number,
  mode: PropTypes.object,
  secondaryDominants: PropTypes.array,
};

export default SecDomChord;
