import { useSelector } from "react-redux";
import "./AboutUsDesktop.scss";
import image1 from "../../../assets/images/aboutUs/4065191.jpg";
import logo from "../../../assets/logo.svg";

const AboutUsDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode); // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
  const languagePrimary = useSelector((state) => state.languagePrimary); // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH
  return (
    <section className={darkMode ? "aboutUsDesktop aboutUsDesktop--dark" : "aboutUsDesktop aboutUsDesktop--bright"}>
      <div className="aboutUsDesktop__textContainer">
        <h1 className="textContainer__header">{languagePrimary ? "O nas" : "About us"}</h1>
        <p className="textContainer__paragraph">
          <img class="paragraph__img" src={image1} alt="" />
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="textContainer__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="textContainer__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="textContainer__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <p className="textContainer__paragraph">
          Mauris blandit, tellus eu pharetra viverra, lacus tortor pellentesque enim, eu euismod enim erat id libero. Ut scelerisque, eros vitae dictum accumsan, erat massa interdum sapien, vel elementum mi diam in dui. Curabitur convallis, purus id interdum tristique, eros velit pharetra enim, eget accumsan neque arcu ac libero. Maecenas efficitur auctor nunc sed vehicula. Etiam et lectus sagittis purus posuere blandit sed sit amet turpis. Quisque tellus lacus, volutpat vitae ex at, tincidunt
          dapibus purus. Nullam in est sed sapien rutrum pharetra. Nulla sed ullamcorper sapien. Suspendisse potenti. Etiam felis lacus, pharetra et suscipit vel, rutrum sed lorem. In vel commodo ligula. Morbi in dictum ex, nec luctus mi.
        </p>
        <h1 className="textContainer__header">{languagePrimary ? "Nasi Partnerzy" : "Our Partners"}</h1>
        <div className="textContainer__logoContainer">
          <img className="logoContainer__logo" src={logo} alt="" />
          <img className="logoContainer__logo" src={logo} alt="" />
          <img className="logoContainer__logo" src={logo} alt="" />
        </div>
        <div className="textContainer__logoContainer">
          <img className="logoContainer__logo" src={logo} alt="" />
          <img className="logoContainer__logo" src={logo} alt="" />
          <img className="logoContainer__logo" src={logo} alt="" />
        </div>
      </div>
      <div className="aboutUsDesktop__decoration"></div>
    </section>
  );
};

export default AboutUsDesktop;
