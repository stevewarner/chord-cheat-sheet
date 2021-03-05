/* eslint-disable no-plusplus */
import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import ModesData from '../modes-data.json';
import Header from '../components/Title';
import ChordRows from '../components/ChordRows';

const FlexContainer = styled.div`
  display: flex;
`;

const Main = styled.div`
  color: #282c34;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  h2 {
    text-transform: capitalize;
  }
  @media (orientation: portrait) {
    margin-top: 130px;
  }
`;

const { notes, modes } = ModesData;

const ChordView = () => {
  const [noteValue, setNoteValue] = useState('C');
  const [modeValue, setModeValue] = useState('ionian');

  const noteOptions = [...notes];
  const secondaryDominants = [...notes];
  const shuffledNotes = [...notes];

  for (let i = 0; i < notes.indexOf(noteValue); i++) {
    shuffledNotes.push(shuffledNotes.shift());
  }

  for (let i = 0; i < notes.indexOf(noteValue) + 7; i++) {
    secondaryDominants.push(secondaryDominants.shift());
  }

  return (
    <FlexContainer>
      <Sidebar
        currentMode={modeValue}
        selectMode={setModeValue}
        Modes={Object.keys(modes)}
      />
      <Main>
        <Header
          noteValue={noteValue}
          setNoteValue={setNoteValue}
          noteOptions={noteOptions}
          modeValue={modeValue}
          setModeValue={setModeValue}
          modeOptions={Object.keys(modes)}
        />
        <ChordRows
          mode={modes[modeValue]}
          notes={shuffledNotes}
          secondaryDominants={secondaryDominants}
        />
      </Main>
    </FlexContainer>
  );
};

export default ChordView;
