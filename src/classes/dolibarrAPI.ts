/**
 * DolibarrAPI. Class representing a connection to the Dolibarr API.
 */
export default class DolibarrAPI {
  
    private url: string;
    private token: string;
    
    /**
     * Create a new instance of the DolibarrAPI class.
     * @param {string} url - The URL of the Dolibarr instance to connect to.
     * @param {string} [token='']  (optional) - The API token to use for authentication.
     */
    constructor(url: string, token: string ='') {
      this.url = url.replace(/\/$/, "")+'/api/index.php/';
      this.token = token;
    }

    /**
     * Attempt to log in to the Dolibarr API using the given credentials.
     * @param {string} username - The username to use for authentication.
     * @param {string} password - The password to use for authentication.
     * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating whether the login was successful.
     */
    login(username: string, password: string): Promise<boolean> {
      const url = this.url+'login?login='+username+'&password='+password;
      
      return new Promise( (resolve, reject) => fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          login: username,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(
        async (response) =>{
          const data = await response.json();

          if(response.ok&&data.success !== undefined && data.success.token !== undefined){
            this.token = data.success.token; 
            resolve(true);
          }else{
            resolve(false);
          }
        }, 
        (error) =>{
          console.log('Failed to retrieve data from Dolibarr API login. ' + error.message);
          reject(false);
         
        }
      ));
  
    }

    /**
     * Log out of the Dolibarr API by resetting the API token.
     */
    logout(){
      this.token = '';
    }

    /**
     * Check whether the user is currently logged in to the Dolibarr API.
     * @returns {boolean} - True if the user is logged in, false otherwise.
     */    
    isLoggedIn(){
      if(this.token!='') return true;
      else return false;
    }

    /**
     * Perform a GET request to the specified endpoint of the Dolibarr API.
     * @param {string} endpoint - The API endpoint to request data from.
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    get(endpoint: string, params: object = {}) {
      const queryParams = (Object.keys(params).length > 0) ? Object.entries(params).map(([key,value]) => { `${key}=${value}` }).join('&') : '';
      const url = this.url + endpoint + ((Object.keys(params).length > 0) ? '?'+queryParams : '');
      
      return new Promise( (resolve, reject) => fetch(url, 
        { 
          method: 'GET',
          headers: { 'DOLAPIKEY': this.token }
        }
        )
      .then(
        async (response) => {
          if(response.ok){ 
            const data = await response.json();  
            resolve(data);
          }else{
            reject('Invalid request');
          }
        },
        (error) => {
          reject('Failed to retrieve data from Dolibarr API login. ' + error.message);
        }
      ));
    }
 
    /**
     * Perform a POST request to the specified endpoint of the Dolibarr API.
     * @param {string} endpoint - The API endpoint to send data to.
     * @param {object} [params={}] - The data to send in the request body.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    post(endpoint: string, params: object = {}) {
      
      return new Promise( (resolve, reject) => fetch(this.url+endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'DOLAPIKEY': this.token,
        },
        body: JSON.stringify(params),
      }).then(
        async (response) => {
          if(response.ok){
            const data = await response.json();  
            resolve(data);
          }else{
            reject('Invalid request');
          }
        },
        (error) => {
          reject('Failed to retrieve data from Dolibarr API login. ' + error.message);
        }
      ));
    }

    /**
     * Perform a PUT request to the specified endpoint of the Dolibarr API.
     * @param {string} endpoint - The API endpoint to send data to.
     * @param {object} [params={}] - The data to send in the request body.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    put(endpoint: string, params: object = {}) {
      return new Promise( (resolve, reject) => fetch(this.url+endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'DOLAPIKEY': this.token,
        },
        body: JSON.stringify(params),
      }).then(
        async (response) => {
          if(response.ok){
            const data = await response.json();  
            resolve(data);
          }else{
            reject('Invalid request');
          }
        },
        (error) => {
          reject('Failed to retrieve data from Dolibarr API login. ' + error.message);
        }
      ));
    }

    /**
     * Perform a DELETE request to the specified endpoint of the Dolibarr API.
     * @param {string} endpoint - The API endpoint to send the request to.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */
    delete(endpoint: string) {
      return new Promise( (resolve, reject) => fetch(this.url+endpoint, {
        method: 'DELETE'
      }).then(
        async (response) => {
          if(response.ok){
            const data = await response.json();  
            resolve(data);
          }else{
            reject('Invalid request');
          }
        },
        (error) => {
          reject('Failed to retrieve data from Dolibarr API login. ' + error.message);
        }
      ));
    }

    /**
     * Perform a PATCH request to the specified endpoint of the Dolibarr API.
     * @param {string} endpoint - The API endpoint to send data to.
     * @param {object} [params={}] - The data to send in the request body.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */
    patch(endpoint: string, params: object = {}) {
      return new Promise( (resolve, reject) => fetch(this.url+endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'DOLAPIKEY': this.token,
        },
        body: JSON.stringify(params),
      }).then(
        async (response) => {
          if(response.ok){
            const data = await response.json();  
            resolve(data);
          }else{
            reject('Invalid request');
          }
        },
        (error) => {
          reject('Failed to retrieve data from Dolibarr API login. ' + error.message);
        }
      ));
    }

    /**
     * Retrieve the status of the Dolibarr API.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    status(){
      return this.get('status');
    }

  }