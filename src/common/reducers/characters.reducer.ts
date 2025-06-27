import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Character } from '../../types/character.types';

interface CharactersState {
  list: Character[];
}

const initialState: CharactersState = {
  list: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.list = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer; 