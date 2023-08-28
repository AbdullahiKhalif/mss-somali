import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./voteModal.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useSelector } from "react-redux";
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
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const {isOpen} = useSelector((store) => store.modal);
   // console.log(ModalState);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
    }

    function closeModal() {
      setIsOpen(false);
    }
    const backgroundStyle = {
        width: "100%",
        height: "500px",
        background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')`,
        backgroundSize: "cover",
        // objectFit: "cover",
        backgroundRepeat: "no-repeat",
        borderBottonRightRadius: "10px"
      };
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
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
                            <span>Farhio Abdi</span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">State:</label>
                            <span>Jubbaland</span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">Background Study:</label>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae inventore atque eius voluptatem. Veritatis libero aperiam quo. Laborum eaque dolorem repellat libero pariatur ab dolorum quae impedit eveniet molestias.</span>
                        </div>
                        <div className={styles.divider}>
                            <label htmlFor="">Employment:</label>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae inventore atque eius voluptatem. Veritatis libero aperiam quo. Laborum eaque dolorem repellat libero pariatur ab dolorum quae impedit eveniet molestias.</span>
                        </div>
                    </div>
                </div>

                <div className={styles.competitor_conntent}>
                    <div className={styles.vote_count}>
                        <span>Purchase Votes</span>
                        <div className={styles.vote_controls}>
                            <button type="button">
                                <AiOutlinePlus className={styles.icon}/>
                            </button>
                            <span>50</span>
                            <button type="button">
                        <AiOutlineMinus className={styles.icon}/>
                            </button>
                        </div>
                    </div>
                    <form>
                    <span>Pay with Evc, zaad, and Sahal</span>
                    <input type="text" className={styles.form_control} />
                    <button type="submit" className={styles.vote_now}>Vote Now</button>
                </form>
                </div>

                
            </div>
          
        </Modal>
      </div>
    );
};

export default VoteModal;
