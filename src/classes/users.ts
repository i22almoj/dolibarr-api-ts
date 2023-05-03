import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * Users. Class that helps to interact with the Dolibarr API methods related to the "Users" endpoint
 */
export default class Users extends Resources{

    /**
     * Create a new instance of the Users class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */     
    constructor(api: DolibarrAPI) {
      super(api, 'users');
    }
    
    /**
     * Get groups for an user
     * @param {number} [user_id] - Identifier of a user
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */    
    getUserGroups(user_id:number): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+user_id+'/groups', {} ) as Promise<object[]>;
    }

    /**
     * Set group for an user
     * @param {number} user_id - Identifier of a user
     * @param {number} group_id - Identifier of a group
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    setGroup(user_id:number, group_id: number){
        return this.api.get(this.endpoint+'/'+user_id+'/setGroup/'+group_id );
    }

    /**
     * Get properties of an user object by Email
     * @param {string} email - Email to search.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */       
    getByEmail(email: string): Promise<object>{
        return this.api.get(this.endpoint+'/email/'+email, {} ) as Promise<object>;
    }

    /**
     * Get a list of groups
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */  
    getGroups(params: object): Promise<object[]>{
        return this.api.get(this.endpoint+'/groups', params ) as Promise<object[]>;
    }

    /**
     * Get properties of a group
     * @param {number} group_id - Identifier of a group
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getGroup(group_id: number): Promise<object>{
        return this.api.get(this.endpoint+'/groups/'+group_id) as Promise<object>;
    }

    /**
     * Get additional information of an user
     * @param {number} user_id - Identifier an user
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */     
    getInfo(user_id: number): Promise<object>{
        return this.api.get(this.endpoint+'/info/'+user_id) as Promise<object>;
    }

}