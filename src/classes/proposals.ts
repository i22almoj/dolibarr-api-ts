import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * Proposals. Class that helps to interact with the Dolibarr API methods related to the "Proposals" endpoint
 */
export default class Proposals extends Resources{
 
    /**
     * Create a new instance of the Proposals class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */  
    constructor(api: DolibarrAPI) {
      super(api, 'proposals');
    }

    /**
     * Close (Accept or refuse) a quote / commercial proposal
     * @param {number} proposal_id - Identifier of a proposal
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */ 
    close(proposal_id: number, data: object){
        return this.api.post(this.endpoint+'/'+proposal_id+'/close', data);
    }

    /**
     * Add a contact type of given proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @param {number} contact_id - Identifier of a contact
     * @param {string} type - Type of the contact (BILLING, SHIPPING, CUSTOMER)
     * @returns {Promise} - A promise that resolves with the response data.
     */        
    addContactType(proposal_id: number, contact_id: number, type: string){
      return this.api.post(this.endpoint+'/'+proposal_id+'/contact/'+contact_id+'/'+type);
    }

    /**
     * Delete a contact type of given proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @param {number} contact_id - Identifier of a contact
     * @param {string} type - Type of the contact (BILLING, SHIPPING, CUSTOMER)
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    deleteContactType(proposal_id: number, contact_id: number, type: string){
      return this.api.delete(this.endpoint+'/'+proposal_id+'/contact/'+contact_id+'/'+type);
    }

    /**
     * Get lines of an proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getLines(proposal_id: number): Promise<object[]> {
      return this.api.get(this.endpoint+'/'+proposal_id+'/lines') as Promise<object[]>;
    }

    /**
     * Add a line to a given proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */ 
    addLine(proposal_id: number, data: object){
      return this.api.post(this.endpoint+'/'+proposal_id+'/lines', data);
    }

    /**
     * Delete a line of a given proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @param {number} line_id - Identifier of a line
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    deleteLine(proposal_id: number, line_id: number){
      return this.api.delete(this.endpoint+'/'+proposal_id+'/lines/'+line_id);
    }

    /**
     * Update a line to a given proposal
     * @param {number} proposal_id - Identifier of an proposal
     * @param {number} line_id - Identifier of a line
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    updateLine(proposal_id: number, line_id: number, data: object){
      return this.api.put(this.endpoint+'/'+proposal_id+'/lines/'+line_id, data);
    }

    /**
     * Set an proposal as invoiced
     * @param {number} proposal_id - Identifier of an proposal
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    setInvoiced(proposal_id: number){
        return this.api.post(this.endpoint+'/'+proposal_id+'/setinvoiced');
    }

    /**
     * Set an proposal as draft
     * @param {number} proposal_id - Identifier of an proposal
     * @returns {Promise} - A promise that resolves with the response data.
     */ 
    setToDraft(proposal_id: number){
      return this.api.post(this.endpoint+'/'+proposal_id+'/settodraft');
    }

    /**
     * Validate a proposal
     * @param {number} proposal_id - Identifier of a proposal
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    validate(proposal_id: number, data: object){
      return this.api.post(this.endpoint+'/'+proposal_id+'/validate', data);
    }
  
    /**
     * Get properties of a proposal object by ref_ext
     * @param {string} ref_ext - External reference of object
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getByRefExt(ref_ext: string): Promise<object>{
      return this.api.get(this.endpoint+'/ref_ext/'+ref_ext) as Promise<object>;
    }

    /**
     * Get properties of a proposal object by ref
     * @param {string} ref - Reference of object
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */ 
    getByRef(ref: string): Promise<object>{
      return this.api.get(this.endpoint+'/ref/'+ref) as Promise<object>;
    }

}