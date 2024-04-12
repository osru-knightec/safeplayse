import logo from "./assets/splash.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://safeplay.orubensson.se">
          <img src={logo} className="logo" alt="SafePlay+ logo" />
        </a>
      </div>
      <h1>Välkommen!</h1>
      <div className="card">
        <p>Denna sida är under konstruktion. Men vår app är redan live! Ladda ner den här:</p>
        <div className="buttons">
          <a className="app-link" href="https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus">
            Google Play
          </a>
          <a className="app-link" href="https://apps.apple.com/se/app/safeplay/id6445820584">
            App Store
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
