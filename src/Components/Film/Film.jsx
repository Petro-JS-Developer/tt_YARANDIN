/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './film.scss';

export const Film = ({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
  characters,
  planets,
  starships,
  vehicles,
  species,
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
          <span>{title}</span>
        </div>
      </h1>

      <ul className="short-list">
        <li>
          <span>Episode:</span>
          {episode_id}
        </li>
        <li>
          <span>Description:</span>
          {opening_crawl}
        </li>
        <li>
          <span>Director:</span>
          {director}
        </li>
        <li>
          <span>Producer:</span>
          {producer}
        </li>
        <li key={release_date}>
          <span>Release date:</span>
          {release_date}
        </li>
        <li>
          <span>Characters:</span>
          {characters.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              type="button"
              className="linkItem"
              key={item.slice(20, item.length - 1)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Planets:</span>
          {planets.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              type="button"
              className="linkItem"
              key={item.slice(20, item.length - 1)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Starships:</span>
          {starships.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              type="button"
              className="linkItem"
              key={item.slice(20, item.length - 1)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Vehicles:</span>
          {vehicles.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              type="button"
              className="linkItem"
              key={item.slice(20, item.length - 1)}
            >
              {item}
            </Link>
          ))}
        </li>
        <li>
          <span>Species:</span>
          {species.map((item) => (
            <Link
              to={item.slice(20, item.length - 1)}
              type="button"
              className="linkItem"
              key={item.slice(20, item.length - 1)}
            >
              {item}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  </div>
);

Film.propTypes = {
  title: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired,
  opening_crawl: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string),
  planets: PropTypes.arrayOf(PropTypes.string),
  starships: PropTypes.arrayOf(PropTypes.string),
  vehicles: PropTypes.arrayOf(PropTypes.string),
  species: PropTypes.arrayOf(PropTypes.string),
};

Film.defaultProps = {
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
};
