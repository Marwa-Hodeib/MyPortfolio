import ProjectCard from "./ProjectCard";
import data from "../../../static-data/projects";
import "./styles.css";

const Projects = ({}) => {
  return (
    <div className="projects-container">
      {data.map(({ title, description, image, webPageLink, gitHubLink }) => (
        <ProjectCard
          title={title}
          description={description}
          image={image}
          gitHubLink={gitHubLink}
          webPageLink={webPageLink}
        />
      ))}
      ;
    </div>
  );
};

export default Projects;
