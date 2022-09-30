import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Laura Gomes</h1>
      <Sidebar />
      <MainContext />
    </div>
  );
}

export default App;
