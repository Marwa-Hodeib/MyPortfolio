import "./styles.css";


const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <ul>
          <li> <a href="#about">About Me</a></li>
          <li> <a href="#projects">Projects</a> </li>
          <li> <a href="#blogs">Blogs</a></li>
          <li> <a href="#contact">Contact me</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
