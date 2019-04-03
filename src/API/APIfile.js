class Helper {
  static baseURL() {
    return 'https://api.foursquare.com/v2';
  }
  static auth() {
    const keys = {
      client_id: '',
      client_secret: '',
      v: '20190313'
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

/* API calls to Foursquare are limited. Function verifies response and displays message if error occurs. */
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
   ).then(Helper.checkStatus)
   .then(response => response.json())
      .catch(error => {
        window.APIvalid= false;
        //this.setState({ APIvalid: false });
      //  assign_APIvalid("set","false");
        alert('An error occurred while trying to fetch data from Foursquare- Requests exceeded.'
        );
      });
 }
}

/*Foursquare API call*/
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
