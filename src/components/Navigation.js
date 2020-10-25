import React, {useState} from "react";

export const Navigation = () => {
  const [liveColor, setLiveColor] = useState('#00e68a');
  const [deadColor, setDeadColor] = useState('#ffffff');

  return (
    <nav>
      <ul>
        <li>
          <button>Randomize Grid</button>
        </li>
        <li>
          <button>Reset Grid</button>
        </li>
        <li>
          <button>Start</button>
        </li>
        <hr />
        <span className="colorPickers">
          <li>
            <label htmlFor="liveColor">Live Cell Color</label>
            <br />
            <input
              onChange= {(e) => setLiveColor(e.target.value)}
              className= 'colors'
              type="color"
              id="liveColor"
              name="liveColor"
              value= {liveColor}
            />
          </li>
          <li>
            <label htmlFor="deadColor">Dead Cell</label>
            <br />
            <input
              onChange= {(e) => setDeadColor(e.target.value)}
              className= 'colors'
              type="color"
              id="deadColor"
              name="deadColor"
              value= {deadColor}
            />
          </li>
        </span>
      </ul>
    </nav>
  );
};
