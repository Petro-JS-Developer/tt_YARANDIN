/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './specie.scss';

export const Specie = ({
  name,
  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  eye_colors,
  average_lifespan,
  homeworld,
  language,
  people,
  films,
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
          <span>Classification:</span>
          {classification}
        </li>
        <li>
          <span>Designation:</span>
          {designation}
        </li>
        <li>
          <span>Average height:</span>
          {average_height}
        </li>
        <li>
          <span>Skin colors:</span>
          {skin_colors}
        </li>
        <li>
          <span>Hair colors:</span>
          {hair_colors}
        </li>
        <li>
          <span>Eye colors:</span>
          {eye_colors}
        </li>
        <li>
          <span>Average lifespan:</span>
          {average_lifespan}
        </li>
        <li>
          <span>Home world:</span>
          {/* <Link
            to="/planet"
            className="linkItem"
            onClick={() => {
              getNewObject(homeworld.slice(21, homeworld.length - 1));
            }}
            key={homeworld.slice(20)}
          >
            {homeworld}
          </Link> */}
          {homeworld}
        </li>
        <li>
          <span>language:</span>
          {language}
        </li>
        <li>
          <span>People:</span>
          {people.map((item) => (
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
          {' '}
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

Specie.propTypes = {
  name: PropTypes.string.isRequired,
  classification: PropTypes.number.isRequired,
  designation: PropTypes.string.isRequired,
  average_height: PropTypes.string.isRequired,
  skin_colors: PropTypes.string.isRequired,
  hair_colors: PropTypes.string.isRequired,
  eye_colors: PropTypes.string.isRequired,
  average_lifespan: PropTypes.string.isRequired,
  homeworld: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.string),
  getNewObject: PropTypes.func.isRequired,
};

Specie.defaultProps = {
  films: [],
  people: [],
};
