import React from 'react'
import styles from "./Buttot.module.css"

const Button = ({buttonName}) => {
    return (
        <button className={`${styles.btn} ${styles.btn_orange}`} type="button" > {buttonName} </button>
    );
}

const ButtonAdd = ({buttonNameAdd}) => {
    return (
        <button className={`${styles.btn_add} ${styles.btn_orange_add}`} type="button" > {buttonNameAdd} <span className={styles.add}>+</span> </button>
    );
}

export  {ButtonAdd, Button};