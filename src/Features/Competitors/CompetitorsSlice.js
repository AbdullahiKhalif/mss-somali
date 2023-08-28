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
    increaseVote: (state) => {
        state.voteCount = state.voteCount + 1;
    },
    decreaseVote: (state) => {
        state.voteCount = state.voteCount - 1;
    },
  },
});

export default CompetitorsSlice.reducer;
export const {setCurrentCompetitor, decreaseVote, increaseVote} = CompetitorsSlice.actions;
