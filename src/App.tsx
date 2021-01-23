import './App.css';

import { vexAvatarFromUUID } from "@vex-chat/avatar-generator";
import * as uuid from "uuid";

function App() {
  const avatar = vexAvatarFromUUID(uuid.v4())
  console.log(avatar);

  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <br />
        <br />
        <button onClick={() => { download(avatar) }}>Download</button>
      </header>
    </div>
  );
}

export default App;

function download(avatarSrc: string) {
  var element = document.createElement("a");
  element.setAttribute("href", avatarSrc);
  element.setAttribute("download", "avatar.svg");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}