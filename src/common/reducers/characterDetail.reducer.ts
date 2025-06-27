import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Character } from '../../types/character.types';

interface CharacterDetailState {
  detail: Character | null;
}

const initialState: CharacterDetailState = {
  detail: null,
};

const characterDetailSlice = createSlice({
  name: 'characterDetail',
  initialState,
  reducers: {
    setCharacterDetail(state, action: PayloadAction<Character | null>) {
      state.detail = action.payload;
    },
  },
});

export const { setCharacterDetail } = characterDetailSlice.actions;
export default characterDetailSlice.reducer; 