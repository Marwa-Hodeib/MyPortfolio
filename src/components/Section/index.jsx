import "./styles.css";

const Section = ({ title, content }) => {
  return (
    <div className="wrapper">
      <div className="title-subtitle-container">
        <h1>{title}</h1>

        <p>{content}</p>
      </div>
    </div>
  );
};

export default Section;
