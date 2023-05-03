import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * Contacts. Class that helps to interact with the Dolibarr API methods related to the "Contacts" endpoint
 */
export default class Contacts extends Resources{
 
    /**
     * Create a new instance of the Contacts class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */    
    constructor(api: DolibarrAPI) {
      super(api, 'contacts');
    }

    /**
     * Get categories for a contact
     * @param {number} contact_id - Identifier of a contact.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */
    getContactCategories(contact_id:number){
        return this.api.get(this.endpoint+'/'+contact_id+'/categories', {} ) as Promise<object[]>;
    }

    /**
     * Remove the link between a category and a contact 
     * @param {number} contact_id - Identifier of a contact.
     * @param {number} category_id - Identifier of a category.
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    removeContactCategory(contact_id:number, category_id: number){
        return this.api.delete(this.endpoint+'/'+contact_id+'/categories/'+category_id );
    }

    /**
     * Add a category to a contact
     * @param {number} contact_id - Identifier of a contact.
     * @param {number} category_id - Identifier of a category.
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addContactCategory(contact_id:number, category_id: number){
        return this.api.post(this.endpoint+'/'+contact_id+'/categories/'+category_id);
    }

    /**
     * Create an user account object from contact (external user)
     * @param {number} contact_id - Identifier of a contact.
     * @param {object} data - Element Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */
    createUser(contact_id: number, data: object){
        return this.api.post(this.endpoint+'/'+contact_id+'/createUser', data );
    }

    /**
     * Get properties of a contact object by Email
     * @param {string} email - Email to search.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getByEmail(email: string): Promise<object>{
        return this.api.get(this.endpoint+'/email/'+email, {} ) as Promise<object>;
    }

}