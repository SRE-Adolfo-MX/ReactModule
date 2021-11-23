import CardBody from "./CardBodyIndex";
import CardImage from "./CardImageIndex";
import CardTitle from "./CardTitleIndex";
import styles from "../style/CardIndex.module.scss";

const Card = ({ title = "Sin Título", imgUrl, text, linkBtn }) => {

//   const [oaxaqueno, setOaxaqueno] = useState(false)


  return (
    <div align="center" className={`card ${styles.primary}`} style={{  width: "100rem" }}>
      <CardTitle title={title} />
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        {/* <button>Hoja de Maiz</button>
        <button>Hoja de plátano</button> */}
        <CardBody text={text} />
      </div>
    </div>
  );
};

export default Card;