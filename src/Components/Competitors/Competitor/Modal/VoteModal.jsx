import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./voteModal.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { handleModal } from "../../../../Features/Modal/modalSlice";
import { decreaseVote, increaseVote, setCurrentCompetitor, addCompetitorVote, resutCompetitorInfo } from "../../../../Features/Competitors/CompetitorsSlice";
import { useDispatch, useSelector } from "react-redux";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const VoteModal = () => {
  const dispatch = useDispatch();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isOpen } = useSelector((store) => store.modal);
  // console.log(ModalState);

  var { currentCompetitor , voteCount} = useSelector((store) => store.competitor);
  console.log(voteCount)
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCompetitorVote(currentCompetitor.Id))
    closeModal();
    dispatch(resutCompetitorInfo())
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    dispatch(handleModal());
  }

  if(!currentCompetitor) return;
  const backgroundStyle = {
    width: "100%",
    height: "400px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentCompetitor.Photo}')`,
    backgroundSize: "cover",
    // objectFit: "cover",
    backgroundRepeat: "no-repeat",
    borderBottonRightRadius: "10px",
  };

  return (
    <div>
      {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>

            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor="">Name:</label>
                <span>
                  {currentCompetitor.FirstName +
                    " " +
                    currentCompetitor.MiddleName}
                </span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">State:</label>
                <span>{currentCompetitor.RepresentingState}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Background Study:</label>
                <span>{currentCompetitor.PersonalBackground}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Employment School:</label>
                <span>{currentCompetitor.EmploymentorSchool}</span>
              </div>
            </div>
          </div>

          <div className={styles.competitor_conntent}>
            <div className={styles.vote_count}>
              <span>Purchase Votes</span>
              <div className={styles.vote_controls}>
              <button type="button" 
              onClick={() => dispatch(decreaseVote())}>
                  <AiOutlineMinus className={styles.icon} />
                </button>
                <span>{voteCount}</span>
                <button type="button" onClick={() => dispatch(increaseVote())}>
                  <AiOutlinePlus className={styles.icon} />
                </button>
              
                
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <span>Pay with Evc, zaad, and Sahal</span>
              <input type="text" className={styles.form_control} />
              <button type="submit" className={styles.vote_now}>
                Vote Now
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
