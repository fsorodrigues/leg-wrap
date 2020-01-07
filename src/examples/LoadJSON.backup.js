// importing utitily functions
import { XMLtoJSON } from './XMLtoJSON';

// importing components

// instantiating components

export const LoadJSON = (url) => {
        const proxyurl = 'https://dig-cors.herokuapp.com/';
        const feed = fetch(proxyurl + url,
            { headers: {"Access-Control-Allow-Headers": "x-requested-with, x-requested-by" },
            credentials: "same-origin"}
        );

        const data = feed.then(response => response.text())
            .catch(() => console.log(`Can’t access ${url} response.`))
            .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
            .then(contents => XMLtoJSON(contents));

        return data;
};

export default LoadJSON;
