import React, { useState } from 'react';
import './Home.scss';
import WeaponDisplay from '../../components/WeaponDisplay/WeaponDisplay';

function Home() {

  // accordion for gear selection list
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  }


  return (
    <div className="home-container">
      <section className="gear-preview">
        <div className="preview-mannequin-window">
          <div className="preview-mannequin"></div>
          <div className="weapon-previews">
            <WeaponDisplay name="PRIMARY_WEAPON">
            </WeaponDisplay>
            <WeaponDisplay name="SECONDARY_WEAPON">
            </WeaponDisplay>
          </div>
        </div>
        <div className="preview-gear-selection">
          <div className="selection-tactical">
            <div className="title">TACTICAL</div>
          </div>
          <div className="selection-items">
            <div className="title">GEAR</div>
          </div>
          <div className="selection-clothing">
            <div className="title">CLOTHING</div>
          </div>
        </div>
      </section>
      <section className="gear-selection-menu">
        <div className="selection-header">
          

          <select className="loadout-preset-selector">
            <option value="" disabled>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>

        </div>
        <div className="selection-list">
          <ul>
            <li className={`selection-list-item ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
              <span>EXAMPLE</span>
              <button>
                {isActive ? '▲' : '▼'}
              </button>
            </li>
            <div className="accordion-subcomponent">
              This is the accordion content.
            </div>
          </ul>
        </div>
        <div className="selection-checkout">
          <div className="save-loadout">SAVE_LOADOUT</div>
          <div className="checkout-button">CHECKOUT</div>
        </div>
      </section>


    </div>
  );
}

export default Home;
