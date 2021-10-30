import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
    <Popup trigger={<span className="resetButton">Rules</span>} position="top left">
      {close => (  
        <div className="popup-content">
          <a className="popup-arrow" onClick={close}>
          ❌
          </a>
          <ul>
              <li>When two tiles with equal values collide, they merge into one tile that displays their sum.</li>
              <li>Your objective is to reach 2048 before the board fills up!</li>
          </ul>

        </div>
      )}
    </Popup>
  );