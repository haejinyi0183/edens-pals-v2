const image = require("../images/pawprint.png");
const imageLogo = require("../images/pet.png")

const Nav = () => {
  return (
    <header className="bg-dark text-white">
      <img
        className="paws"
        src={image}
        alt="paws menu"
        width="50px"
        height="50px"
      />

      <a href="/" className="logo">
      <img
          className="headerLogo"
          src={imageLogo}
          alt="logo"
          width="50px"
          height="50px"

        />
        EDENS PALS 
      </a>
    </header>
  );
};

export default Nav;
