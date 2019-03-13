class Helper {
  static baseURL() {
    return 'https://api.foursquare.com/v2';
  }
  static auth() {
    const keys = {
      client_id: '2UYQNSXWEVKBSPYUDNBB3DYOU3JQCM313RM3DYC2TEHS0AVI',
      client_secret: 'DOAOTX52EGBVXK0CEYA4R3ZF1DBJ4FGILQEWNF4GAOPXXP4C',
      v: '20190311'
    };
    return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join('&');
  }

  static urlBuilder(urlParams) {
    if (!urlParams) {
      return "";
    }
    return Object.keys(urlParams).map(key => `${key}=${urlParams[key]}`)
      .join('&');
  }

  static headers() {
    return {
      Accept: 'application/json'
    };
  }

  // https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
  static checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error = response;
      throw error;
    }
  }

  static simpleFetch(endpoint, method, urlParams) {
     let requestData = {
       method,
       headers: Helper.headers()
   };
   return fetch(
     `${Helper.baseURL()}${endpoint}?${Helper.auth()}&${Helper.urlBuilder(
       urlParams
     )}`,
     requestData
   ).then(Helper.checkStatus).then(response => response.json())
      .catch(error => {
        alert(
          'An error occurred while trying to fetch data from Foursquare - Error Code of: ' +error.response
        );
      });
 }
}
export default class SquareAPI {
  static search(urlParams) {
    return Helper.simpleFetch('/venues/search', 'GET', urlParams);
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET');
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET');
  }
}
