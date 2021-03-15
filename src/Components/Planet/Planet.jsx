/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './planet.scss';

export const Planet = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
  residents,
  films,
  getNewObject,
}) => {
  console.log('planets', name,
    rotation_period,
    orbital_period);

  return (
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
            <span>Rotation period:</span>
            {rotation_period}
          </li>
          <li>
            <span>Orbital period:</span>
            {orbital_period}
          </li>
          <li>
            <span>Diameter:</span>
            {diameter}
          </li>
          <li>
            <span>Climate:</span>
            {climate}
          </li>
          <li>
            <span>Gravity:</span>
            {gravity}
          </li>
          <li>
            <span>Terrain:</span>
            {terrain}
          </li>
          <li>
            <span>Surface_water:</span>
            {surface_water}
          </li>
          <li>
            <span>Population:</span>
            {population}
          </li>
          <li>
            <span>Residents:</span>
            {residents.map((item) => (
              <Link
                to="/people"
                className="linkItem"
                onClick={() => {
                  getNewObject(item.slice(21, item.length - 1));
                }}
                key={item.slice(20)}
              >
                {item}
              </Link>
            ))}
          </li>
          <li>
            <span>Films:</span>
            {films.map((item) => (
              <Link
                to="/film"
                className="linkItem"
                onClick={() => {
                  getNewObject(item.slice(21, item.length - 1));
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
};

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  rotation_period: PropTypes.number.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surface_water: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
  getNewObject: PropTypes.func.isRequired,
};

Planet.defaultProps = {
  films: [],
  residents: [],
};
