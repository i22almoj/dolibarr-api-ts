import DolibarrAPI from './dolibarrAPI';

/**
 * Resources. Abstract class that groups methods used by the classes of each Dolibarr API resource
 */
export default class Resources {
    protected api: DolibarrAPI
    protected endpoint: string;
    
    /**
     * Create a new instance of the Resources class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     * @param {string} endpoint - Base endpoint for the API methods
     */
    constructor(api: DolibarrAPI, endpoint: string) {
      this.api = api;
      this.endpoint = endpoint.replace(/\/$/, "");
    }
    
    /**
     * Get a list of elements of a resource type.
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object>} - A promise that resolves with the response data as an array objects.
     */
    find(params: object = {}): Promise<object[]> {
      return this.api.get(this.endpoint, params ) as Promise<object[]>;
    }

    /**
     * Get properties of an element
     * @param {number} id - Identifier of the element to search.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */
    get(id: number): Promise<object>{
      return this.api.get(this.endpoint+'/'+id) as Promise<object>;
    }

    /**
     * Add an element
     * @param {object} data - Element Parameters.
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    add(data: object){
      return this.api.post(this.endpoint, data);
    }

    /**
     * Update an element
     * @param {number} id - Identifier of the element to update.
     * @param {object} data - Element Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */ 
    update(id: number, data: object){
      return this.api.put(this.endpoint+'/'+id, data);
    }

    /**
     * Delete an element
     * @param {number} id - Identifier of the element to update.
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    delete(id: number){
      return this.api.delete(this.endpoint+'/'+id);
    }
    
}