import React from 'react';
import './WeaponDisplay.scss';

interface WeaponDisplayProps {
    name: string;
    children?: React.ReactNode;
  }

function WeaponDisplay(props : WeaponDisplayProps) {
    const name : string = props.name;

    return (
        <div className="weapon-display">
            <div className="weapon-image"></div>
            <div className="weapon-name">{name}</div>
        </div>
    );
}

export default WeaponDisplay;