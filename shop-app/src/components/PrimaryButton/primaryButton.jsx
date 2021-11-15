import React from 'react';
import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({text, type, className, url}) => {
    return (
        <a   href={url} type={type} className={`btn ${styles.primaryTitle}` }>
            {text}
        </a>             
    )
}


export default PrimaryButton;