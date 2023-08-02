

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

export const getBlogs = async () => {
    const response = await fetch('/api/blog/')
    const data = await response.json()
    return data
}

export const getBlog = async (id) => {
    const response = await fetch(`/api/blog/${id}`)
    const data = await response.json()
    return data
}

