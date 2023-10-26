import React, { useState } from 'react';
import './ItemListAccordion.scss';

function ItemListAccordion() {

    // accordion for gear selection list
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    }

    return (
          <ul>
            <li className={`selection-list-item ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
              <span>EXAMPLE</span>
              <button>
                {isActive ? '▲' : '▼'}
              </button>
            </li>
            {isActive && <div className="accordion-subcomponent">
              This is the accordion content.
            </div>}
          </ul>
    );
}

export default ItemListAccordion;