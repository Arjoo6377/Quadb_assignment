import axios from 'axios';

export const getShowsAPI = async () => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
    const data = await res.data;
    return data;
};

export const getSingleShow = async (id) => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.data;
    return data;
};