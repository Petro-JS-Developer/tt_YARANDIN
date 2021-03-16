/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './film.scss';
import { getData } from '../../api';
import { Loader } from '../Loader/Loader';

export const Film = () => {
  const history = useHistory();
  const [selectedObject, setSelectedObject] = useState({});
  const getNewObject = (url) => {
    getData(url)
      .then((res) => res.json())
      .then((res) => {
        setSelectedObject(res);
      });
  };

  useEffect(() => {
    getNewObject(history.location.pathname);
  }, []);
  const {
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
  } = selectedObject;
  return (
    <>
      {Object.keys(selectedObject).length > 0 ? (
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
      ) : <Loader /> }
    </>
  );
};
