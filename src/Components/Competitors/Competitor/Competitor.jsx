import React from "react";
import styles from "./competitor.module.scss";
import {MdHowToVote} from "react-icons/md";
import { handleModal } from "../../../Features/Modal/modalSlice";
import { useDispatch } from "react-redux";

const Competitor = ({ competitor }) => {
  const dispatch  = useDispatch();
  const backgroundStyle = {
    width: "100%",
    // height: "500px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const voteNow = () =>{
    dispatch(handleModal());
  }
  return (
    <div className={styles.competitor} style={backgroundStyle}>
      <div className={styles.info}>
        <span className={styles.name}>{competitor.FirstName + " " + competitor.MiddleName}</span>
        <span className={styles.state}>{competitor.RepresentingState}</span>
        <span className={styles.vote_count}>{competitor.NumberofVotes}</span>
      </div>
      <div className={styles.vote} onClick={voteNow}> 
      <MdHowToVote className={styles.vote_icon}/>
      </div>
    </div>
  );
};

export default Competitor;
