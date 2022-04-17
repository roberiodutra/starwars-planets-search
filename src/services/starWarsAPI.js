const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default starWarsAPI;
