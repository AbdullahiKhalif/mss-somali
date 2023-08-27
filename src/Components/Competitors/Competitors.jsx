import competitors from '../../assets/competitors.json';
import styles from "./competitors.module.scss";

const Competitors = () => {
  return (
    <div className={styles.compestitors_container}>
        <div className={styles.competitors_header}>
            <span>MssSomali</span>
            <p>Miss World Somalia Teams up With National Geographic and Whitley Fund for Nature Award Winner to Protect Somali Giraffes.</p>
        </div>

        <div className={styles.competitors}>
            {
                competitors.map((competitor) => (
                    <span key={competitor.id}>{competitor.FirstName}</span>
                ))
            }
        </div>
    </div>
  )
}

export default Competitors