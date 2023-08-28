import { createSlice } from "@reduxjs/toolkit";
import competitor from "../../assets/competitors.json"
import React from "react";
const initialState = {
  competitors: JSON.parse(localStorage.getItem('competitors')) || competitor,
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

    addCompetitorVote: (state, action) =>{
        let competitorIndex = state.competitors.findIndex((competitor) => competitor.Id === action.payload);
        state.competitors[competitorIndex].NumberofVotes = Number(state.competitors[competitorIndex].NumberofVotes) + Number(state.voteCount);

        window.localStorage.setItem('competitors', JSON.stringify(state.competitors));
        
    },

    resutCompetitorInfo:(state) =>{
        state.currentCompetitor= null;
        state.voteCount = 0
    }
  },
});

export default CompetitorsSlice.reducer;
export const {setCurrentCompetitor, decreaseVote, increaseVote, addCompetitorVote, resutCompetitorInfo}  = CompetitorsSlice.actions;
