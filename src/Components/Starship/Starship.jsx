/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './starship.scss';

export const Starship = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
  pilots,
  films,
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
          <span>Model:</span>
          {model}
        </li>
        <li>
          <span>Manufacturer:</span>
          {manufacturer}
        </li>
        <li>
          <span>Cost in credits:</span>
          {cost_in_credits}
        </li>
        <li>
          <span>length:</span>
          {length}
        </li>
        <li>
          <span>Max atmosphering speed:</span>
          {max_atmosphering_speed}
        </li>
        <li>
          <span>Crew:</span>
          {crew}
        </li>
        <li>
          <span>Passengers:</span>
          {passengers}
        </li>
        <li>
          <span>Cargo capacity:</span>
          {cargo_capacity}
        </li>
        <li>
          <span>Consumables:</span>
          {consumables}
        </li>
        <li>
          <span>Hyperdrive rating:</span>
          {hyperdrive_rating}
        </li>
        <li>
          <span>MGLT:</span>
          {MGLT}
        </li>
        <li>
          <span>Starship class:</span>
          {starship_class}
        </li>
        <li>
          <span>Pilots:</span>
          {pilots.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              className="linkItem"
              key={item.slice(20)}
            >
              {item}
            </Link>
          ))}
          .
        </li>
        <li>
          <span>Films:</span>
          {films.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              className="linkItem"
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

Starship.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  max_atmosphering_speed: PropTypes.string.isRequired,
  crew: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  cargo_capacity: PropTypes.string.isRequired,
  consumables: PropTypes.string.isRequired,
  hyperdrive_rating: PropTypes.string.isRequired,
  MGLT: PropTypes.string.isRequired,
  starship_class: PropTypes.string.isRequired,
  pilots: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
};

Starship.defaultProps = {
  films: [],
  pilots: [],
};
