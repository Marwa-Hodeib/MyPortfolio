import Card from "../../Card";
import data from "../../../static-data/blogs";
import "./styles.css";

const Blogs = ({}) => {
  return (
    <div className="projects-container">
      {data.map(({ title, description, image, blogLink }) => (
        <Card
          title={title}
          description={description}
          image={image}
          link={{ url: blogLink, title: "Blog Link" }}
        />
      ))}
      ;
    </div>
  );
};

export default Blogs;
