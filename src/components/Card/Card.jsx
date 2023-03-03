import styles from './Card.module.css'

function Card(props) {
   return (
      <div className={styles.divCard}>
          <button onClick={props.onClose}>X</button>
         <h2 className={styles.cardName}>{props.name}</h2>
         <h2 className={styles.cardSpecies}>{props.species}</h2>
         <h2 className={styles.cardGender}>{props.gender}</h2>
         <img  src={props.image} alt="" /> 
      </div>
   );
}

export default Card;