import "./Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState<boolean>(false);
  return (
    <div className="Navbar">
      <img
        src="/logo-negate-nobg.png"
        alt="logo"
        className="Navbar__logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="Navbar__navigate">
        <div
          className="Navbar__navigate__link"
          onClick={() => {
            navigate("/");
          }}
        >
          <h3 className="Navbar__navigate__link__text">Home</h3>
        </div>
        <div
          className="Navbar__navigate__link"
          onClick={() => {
            navigate("/party");
          }}
        >
          <h3 className="Navbar__navigate__link__text">Eventi</h3>
        </div>
        <div
          className="Navbar__navigate__link"
          onClick={() => {
            navigate("/gallery");
          }}
        >
          <h3 className="Navbar__navigate__link__text">Gallery</h3>
        </div>
        <a
          className="Navbar__navigate__link"
          href={"https://www.leggimenu.it/menu/terrazzamerlianibistrot"}
          target="blank"
        >
          <h3 className="Navbar__navigate__link__text">Menu</h3>
        </a>
        <div
          className="Navbar__navigate__link"
          onClick={() => {
            navigate("/contatti");
          }}
        >
          <h3 className="Navbar__navigate__link__text">Contatti</h3>
        </div>
      </div>
      <div className="Navbar__menubutton" onClick={ () => { setShowMenu( (prev:boolean) => !prev ) } } />
      {showMenu && <div className="Navbar__mobilemenu" onClick={() => setShowMenu(false)}>
        <a href="/"><h2>Home</h2></a>
        <a href="/party"><h2>Eventi</h2></a>
        <a href="/gallery"><h2>Gallery</h2></a>
        <a href={"https://www.leggimenu.it/menu/terrazzamerlianibistrot"} target="blank"><h2>Menu</h2></a>
        <a href="/contatti"><h2>Contatti</h2></a>
      </div>}
    </div>
  );
};
