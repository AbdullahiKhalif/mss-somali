import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  competitors: [],
  currentCompetitor: null,
  voteCount: 0,
};

const CompetitorsSlice = createSlice({
  name: "Competitors",
  initialState,
  reducers: {
    setCurrentCompetitor: (state, action) => {
        state.currentCompetitor = action.payload;
    },
  },
});

export default CompetitorsSlice.reducer;
export const {setCurrentCompetitor} = CompetitorsSlice.actions;
