import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderView from './components/header/HeaderView'
import Screen from './components/screen/Screen'
import Keyboard from './components/keyboard/Keyboard'

import { useAppDispatch, useAppSelector } from './app/hooks'

function App() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.header.theme) % 3
  return (
    <div className={`App h-screen ${theme === 0 ? 'bg-[#3b4664]' : ''} ${theme === 1 ? 'bg-[#e6e6e6]' : ''} ${theme === 2 ? 'bg-[#17062a]' : ''}  min-w-[40rem] mx-auto`}>
      <div className='px-3 sm:px-0 h-full w-full flex flex-col gap-8 justify-center items-center'>
        <HeaderView />
        <Screen />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
