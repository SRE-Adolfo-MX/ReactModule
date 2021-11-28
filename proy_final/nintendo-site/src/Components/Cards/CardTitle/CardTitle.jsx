import { Link } from "react-router-dom";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ title, oferta, id }) => {
  const titleMayusculas = title.toUpperCase();
  const classOferta = oferta ? "text-success" : "";
  return (
    <Link to={id}>
      <h5 className={`card-title ${styles.primaryTitle} ${classOferta}`}>
        {titleMayusculas}
      </h5>
    </Link>
  );
};

export default CardTitle;
