

const ADZUNA_APP_KEY = process.env.REACT_APP_ADZUNA_APP_KEY; 
const ADZUNA_APP_ID = process.env.REACT_APP_ADZUNA_APP_ID;

const get_url = (path) => {
    return `https://api.adzuna.com/v1/api/${path}?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&content-type=application/json`;
 }


export const getJobHistory = async (category, countryCode, location) => {
    const url = get_url(`jobs/${countryCode}/history`) + `&location0=${location}&category=${category}`;
    const response = await fetch(url, {method: "POST"});
    const data = await response.json();
    return data;
}

