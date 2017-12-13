const { get: request } = require("snekfetch");
const { SearchResult, Archive } = require("./structures");

const BASE_URL = "https://www.google.com/doodles";

exports.search = async (query, page = 0) => {
    const { body } = await request(`${BASE_URL}/search`).query({
        q: query,
        s: page * 20
    });

    return new SearchResult(body);
};

exports.archive = async (year = (new Date()).getFullYear(), month = (new Date()).getMonth()) => {
    const date = new Date();
    if (year < 1998 || year > date.getFullYear()) return [];

    const { body } = await request(`${BASE_URL}/json/${year}/${month}`);

    return new Archive(body);
};

