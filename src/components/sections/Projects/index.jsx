import Card from "../../Card";
import data from "../../../static-data/projects";
import "./styles.css";

const Projects = ({}) => {
  return (
    <div className="projects-container">
      {data.map(({ title, description, image, webPageLink, gitHubLink }) => (
        <Card
          title={title}
          description={description}
          image={image}
          link={{ url: gitHubLink, title: "GitHub Link" }}
          secondLink={webPageLink}
        />
      ))}
      ;
    </div>
  );
};

export default Projects;
