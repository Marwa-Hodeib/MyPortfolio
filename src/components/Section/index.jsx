import "./styles.css";

const Section = ({ title, children,id }) => {
  return (
    <div id={id} className="wrapper">
      <div className="title-subtitle-container">
        <h1>{title}</h1>
      </div>
      {children}
      <div className="space"></div>
    </div>
  );
};

export default Section;
