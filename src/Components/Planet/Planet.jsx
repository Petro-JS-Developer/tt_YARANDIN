/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './planet.scss';
import { getData } from '../../api';
import { Loader } from '../Loader/Loader';

export const Planet = () => {
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
      ) : <Loader />}
    </>

  );
};
