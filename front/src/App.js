import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  function onClose() {
    tg.close();
  }
  return (
    <div className="App">
      <burron>Закрыть</burron>
    </div>
  );
}

export default App;
