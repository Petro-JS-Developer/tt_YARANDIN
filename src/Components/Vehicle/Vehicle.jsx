/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './vehicle.scss';
import { getData } from '../../api';
import { Loader } from '../Loader/Loader';

export const Vehicle = () => {
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
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
    pilots,
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
                <span>Vehicle class:</span>
                {vehicle_class}
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
      ) : <Loader />}
    </>
  );
};
