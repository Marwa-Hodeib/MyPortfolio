import "./styles.css";

const Card = ({ title, description, link, secondLink, image }) => {
  return (
    <article className="card-container">
      <a href={link.url}>
        <img width="100%" height="100%" src={image}></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{link.title}</p>
      </a>
      {secondLink && <a href={secondLink}>Project Link</a>}
    </article>
  );
};

export default Card;
