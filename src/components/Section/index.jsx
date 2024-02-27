import "./styles.css";

const Section = ({ title, children }) => {
  return (
    <div className="wrapper">
      <div className="title-subtitle-container">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Section;
