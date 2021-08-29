import './About.scss';
import React from 'react';

export function About(): JSX.Element {
  return (
    <div className="about__wrapper">
      <h4>Henry V, William Shakespeare </h4>
      <div className="text__wrapper">
        <p className="about__text">And Crispin Crispian shall ne’er go by,</p>
        <p className="about__text">From this day to the ending of the world,</p>
        <p className="about__text">But we in it shall be remembered;</p>
        <p className="about__text">We few, we happy few, we band of brothers;</p>
        <p className="about__text">For he to-day that sheds his blood with me</p>
        <p className="about__text">Shall be my brother; be he ne’er so vile,</p>
        <p className="about__text">This day shall gentle his condition:</p>
        <p className="about__text">And gentlemen in England now a-bed</p>
        <p className="about__text">Shall think themselves accursed they were not here,</p>
        <p className="about__text">And hold their manhoods cheap whiles any speaks</p>
        <p className="about__text">That fought with us upon Saint Crispin’s day.</p>
      </div>
    </div>
  );
}
