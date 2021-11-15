import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ link, text }) => {
  return (
      <a href={link} className={`btn btn-primary ${styles.primaryTitle}`}>
        {text}
      </a>
  );
};

export default PrimaryButton;
