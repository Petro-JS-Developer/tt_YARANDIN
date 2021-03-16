const BASE_URL = 'https://swapi.dev/api';

export const getData = (url = '', id = '') => fetch(`${BASE_URL}${url}/${id}`);
