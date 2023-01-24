import "./AboutUsMobile.scss";
import { useSelector } from "react-redux";
import logo from "../../../assets/logo.svg";

const AboutUsMobile = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <section className={darkMode ? "aboutUsMobile aboutUsMobile--styling aboutUsMobile--dark" : "aboutUsMobile aboutUsMobile--styling aboutUsMobile--bright"}>
      <div className="aboutUsMobile__container">
        <h1 className="container__header">{languagePrimary ? "O Nas" : "About Us"}</h1>
        <p className="container__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="container__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="container__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="container__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="container__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
      </div>
      <div className="aboutUsMobile__partnersContainer">
        <h1 className="partnersContainer__header">{languagePrimary ? "Nasi  partnerzy" : "Our Partners"}</h1>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partersContainer__imgBackground">
          <img className="imgBackground__img" src={logo} alt="" />
        </div>
        <div className="partnersContainer__containerLeft"></div>
        <div className="partnersContainer__containerRight"></div>
      </div>
    </section>
  );
};

export default AboutUsMobile;
