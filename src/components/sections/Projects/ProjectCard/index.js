import "./styles.css";

const ProjectCard = ({
  title,
  description,
  gitHubLink,
  webPageLink,
  image,
}) => {
  console.log(webPageLink);
  return (
    <article className="card-container">
      <a href={gitHubLink}>
        <img src={image}></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>GitHub Link</p>
      </a>
      {webPageLink && <a href={webPageLink}>Project Link</a>}
    </article>
  );
};

export default ProjectCard;
