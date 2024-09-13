import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Екшени
export const { changeFilter } = filtersSlice.actions;

// Селектори
export const selectNameFilter = state => state.filters.name;

// Редюсер
export default filtersSlice.reducer;
