import Avatar from "../img/photo.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <p>imagem</p>
      <img src={Avatar} alt="Laura Gomes" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
