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
      </header>
    </div>
  );
}

export default App;
