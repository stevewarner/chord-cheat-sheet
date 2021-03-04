/* eslint-disable no-plusplus */
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Select from '../components/Select';
import Modes from '../modes-data.json';
import ChordOptions from '../chord-options.json';

const { notes } = ChordOptions;

const ChordView = () => {
  const [noteValue, setNoteValue] = useState('C');
  const [modeValue, setModeValue] = useState('ionian');

  const noteOptions = [...notes];
  const secondaryDominants = [...notes];
  const shuffledNotes = [...notes];

  //   const shuffledPatterns = { ...patterns };

  for (let i = 0; i < notes.indexOf(noteValue); i++) {
    shuffledNotes.push(shuffledNotes.shift());
  }

  for (let i = 0; i < notes.indexOf(noteValue) + 7; i++) {
    secondaryDominants.push(secondaryDominants.shift());
  }

  // const selectedMode = 'ionian';

  // eslint-disable-next-line no-plusplus
  //   for (let i = 0; i < Modes[modeValue].key; i++) {
  //     shuffledPatterns.triad.push(shuffledPatterns.triad.shift());
  //     shuffledPatterns.seventh.push(shuffledPatterns.seventh.shift());
  //     shuffledPatterns.extended.push(shuffledPatterns.extended.shift());
  //   }
  //   console.log(Modes[modeValue].key);
  //   console.log(shuffledPatterns);
  return (
    <div className="App">
      <Sidebar
        currentMode={modeValue}
        selectMode={setModeValue}
        Modes={Object.keys(Modes)}
      />
      <div className="main">
        <h1 className="title">
          in
          <Select
            value={noteValue}
            onChange={setNoteValue}
            dropdownOptions={noteOptions}
          />
          {modeValue} you can play...
        </h1>

        <div className="mobileOnly">
          <h1>chord cheat sheet</h1>
          <Select
            value={noteValue}
            onChange={setNoteValue}
            dropdownOptions={noteOptions}
          />
          <Select
            value={modeValue}
            onChange={setModeValue}
            dropdownOptions={Object.keys(Modes)}
          />
        </div>

        {Object.keys(Modes[modeValue].patterns).map((pattern) => (
          <div key={pattern}>
            <h2>{`${pattern} Chords`}</h2>
            <div className="chords-section">
              {Modes[modeValue].patterns[pattern].map((chord, index) => (
                <div
                  key={index}
                  className={`card ${chord === 'none' ? 'hidden' : ''}`}
                >
                  <p>{Modes[modeValue].degrees[index]}</p>
                  <p>{`${
                    shuffledNotes[Modes[modeValue].intervals[index]]
                  }${chord}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <h2>Secondary Dominant Chords</h2>
        <div className="chords-section">
          {Modes[modeValue].degrees.map((degree, index) => (
            <div
              key={index}
              className={`card ${degree === 'none' ? 'hidden' : ''}`}
            >
              <p>
                {index === 0 ? 'V7' : `V/${Modes[modeValue].degrees[index]}`}
              </p>
              <p>{`${
                secondaryDominants[Modes[modeValue].intervals[index]]
              }7`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChordView;
