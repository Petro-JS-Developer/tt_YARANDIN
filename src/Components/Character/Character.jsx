/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './character.scss';

export const Character = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  films,
  species,
  vehicles,
  starships,
  getNewObject,
}) => (
  <div className="fcols fx-row">
    <div className="fLeft">
      <div className="fImg img-wide">
        <img src="https://uaserials.pro/posters/1352.jpg" alt="Мандалорець" />
      </div>
    </div>
    <div className="fright fx-1 fx-col">
      <h1 className="short-title fx-1">
        <div>
          <span>{name}</span>
        </div>
      </h1>

      <ul className="short-list">
        <li>
          <span>height:</span>
          {height}
        </li>
        <li>
          <span>mass:</span>
          {mass}
        </li>
        <li>
          <span>hair_color:</span>
          {hair_color}
        </li>
        <li>
          <span>skin_color:</span>
          {skin_color}
        </li>
        <li>
          <span>eye_color:</span>
          {eye_color}
        </li>
        <li>
          <span>birth_year:</span>
          {birth_year}
        </li>
        <li>
          <span>gender:</span>
          {gender}
        </li>
        <li>
          <span>homeworld:</span>
          {homeworld}
        </li>
        <li>
          <span>Films:</span>
          {films.map((item, i) => (
            <Link
              to="/film"
              className="linkItem"
              onClick={() => {
                getNewObject(`films/${i + 1}`);
              }}
              key={item.slice(20)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Starships:</span>
          {starships.map((item, i) => (
            <Link
              to="/starship"
              className="linkItem"
              onClick={() => {
                getNewObject(`starships/${i + 1}`);
              }}
              key={item.slice(20)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Vehicles:</span>
          {vehicles.map((item, i) => (
            <Link
              to="/vehicle"
              className="linkItem"
              onClick={() => {
                getNewObject(`vehicles/${i + 1}`);
              }}
              key={item.slice(20)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Species:</span>
          {species.map((item, i) => (
            <Link
              to="/specie"
              className="linkItem"
              onClick={() => {
                getNewObject(`species/${i + 1}`);
              }}
              key={item.slice(20)}
            >
              {item}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.string),
  starships: PropTypes.arrayOf(PropTypes.string),
  vehicles: PropTypes.arrayOf(PropTypes.string),
  species: PropTypes.arrayOf(PropTypes.string),
  getNewObject: PropTypes.func.isRequired,
};

Character.defaultProps = {
  films: [],
  starships: [],
  vehicles: [],
  species: [],
};
