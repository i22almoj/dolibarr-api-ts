import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * ThirdParties. Class that helps to interact with the Dolibarr API methods related to the "ThirdParties" endpoint
 */
export default class ThirdParties extends Resources{

    /**
     * Create a new instance of the ThirdParties class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */     
    constructor(api: DolibarrAPI) {
      super(api, 'bankaccounts');
    }
    
    /**
     * Get bank accounts of a third party
     * @param {number} thirdParty_id - Identifier of a third party
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getBankAccounts(thirdParty_id:number): Promise<object[]> {
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/bankaccounts') as Promise<object[]>;
    }

    /**
     * Add a bank account to a given third party
     * @param {number} thirdParty_id - Identifier of a third party
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addBankAccount(thirdParty_id:number, data: object){
        return this.api.post(this.endpoint+'/'+thirdParty_id+'/bankaccounts', data );
    }

    /**
     * Delete a bank account of a given third party
     * @param {number} thirdParty_id - Identifier of a proposal
     * @param {number} bankAccount_id - Identifier of a bank account
     * @returns {Promise} - A promise that resolves with the response data.
     */
    deleteBankAccount(thirdParty_id:number, bankAccount_id:number){
        return this.api.delete(this.endpoint+'/'+thirdParty_id+'/bankaccounts/'+bankAccount_id);
    }

    /**
     * Update a bank account of a given third party
     * @param {number} thirdParty_id - Identifier of a proposal
     * @param {number} bankAccount_id - Identifier of a bank account
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    updateBankAccount(thirdParty_id:number, bankAccount_id:number, data: object){
        return this.api.put(this.endpoint+'/'+thirdParty_id+'/bankaccounts/'+bankAccount_id, data);
    }

    /**
     * Get customer categories for a thirdparty
     * @param {number} thirdParty_id - Identifier of a third party
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */
    getCategories(thirdParty_id:number, params: object = {}): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/categories', params ) as Promise<object[]>;
    }

    /**
     * Add a customer category to a thirdparty
     * @param {number} thirdParty_id - Identifier of a third party
     * @param {number} category_id - Identifier of a category
     * @returns {Promise} - A promise that resolves with the response data
     */
    addCategory(thirdParty_id:number, category_id: number){
        return this.api.post(this.endpoint+'/'+thirdParty_id+'/categories/'+category_id);
    }

    /**
     * Remove the link between a customer category and the thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {number} category_id - Identifier of a category
     * @returns {Promise} - A promise that resolves with the response data.
     */ 
    deleteCategory(thirdParty_id:number, category_id:number){
        return this.api.delete(this.endpoint+'/'+thirdParty_id+'/categories/'+category_id);
    }

    /**
     * Get fixed amount discount of a thirdparty (all sources: deposit, credit note, commercial offers...)
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an object.
     */     
    getFixedAmountDiscounts(thirdParty_id:number, params: object = {}): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/fixedamountdiscounts', params ) as Promise<object[]>;
    }

    /**
     * Get a specific gateway attached to a thirdparty (by specifying the site key)
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} site_key - Site key
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */ 
    getGateway(thirdParty_id:number, site_key: string): Promise<object>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/gateways', { 'site': site_key  }) as Promise<object>;
    }

    /**
     * Create and attach a new gateway to an existing thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    addGateway(thirdParty_id:number, data: object){
        return this.api.post(this.endpoint+'/'+thirdParty_id+'/gateways', data);
    }

    /**
     * Delete all gateways attached to a thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    deleteGateways(thirdParty_id:number){
        return this.api.delete(this.endpoint+'/'+thirdParty_id+'/gateways');
    }

    /**
     * Delete a specific site gateway attached to a thirdparty (by gateway id)
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} site_key - Site key
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    deleteSiteGateway(thirdParty_id:number, site_key: string){
        return this.api.delete(this.endpoint+'/'+thirdParty_id+'/gateways/'+site_key);
    }

    /**
     * Update specified values of a specific gateway attached to a thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} site_key - Site key
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    updateSiteGateway(thirdParty_id:number, site_key: string, data: object){
        return this.api.patch(this.endpoint+'/'+thirdParty_id+'/gateways/'+site_key, data);
    }

    /**
     * Create and attach a new (or replace an existing) specific site gateway to a thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} site_key - Site key
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    addSiteGateway(thirdParty_id:number, site_key: string, data: object){
        return this.api.put(this.endpoint+'/'+thirdParty_id+'/gateways/'+site_key, data);
    }

    /**
     * Generate a Document from a bank account record (like SEPA mandate)
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {number} companyBank_id - Identifier of a company bank
     * @param {string} model - Model of document to generate
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    generateBankAccountDocument(thirdParty_id:number, companyBank_id: number, model: string){
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/generateBankAccountDocument/'+companyBank_id+'/'+model);
    }

    /**
     * Return list of invoices qualified to be corrected by a credit note
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getInvoicedQualifiedForCreditNote(thirdParty_id:number): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/getinvoicesqualifiedforcreditnote') as Promise<object[]>;
    }

    /**
     * Return list of invoices qualified to be replaced by another invoice
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getInvoicedQualifiedForReplacement(thirdParty_id:number): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/getinvoicesqualifiedforreplacement') as Promise<object[]>;
    }

    /**
     * Merge a thirdparty into another one
     * @param {number} thirdParty_id_1 - Identifier of a thirdparty
     * @param {number} thirdParty_id_2 - Identifier of another invoice
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    merge(thirdParty_id_1:number, thirdParty_id_2:number){
        return this.api.put(this.endpoint+'/'+thirdParty_id_1+'/merge/'+thirdParty_id_2);
    }

    /**
     * Get outstanding invoices of thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} mode - 'customer' or 'supplier'
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getOutstandingInvoices(thirdParty_id:number, mode: string): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/outstandinginvoices/'+mode) as Promise<object[]>;
    }

    /**
     * Get outstanding orders of thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} mode - 'customer' or 'supplier'
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */    
    getOutstandingOrders(thirdParty_id:number, mode: string): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/outstandingorders/'+mode) as Promise<object[]>;
    }

    /**
     * Get outstanding proposals of thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} mode - 'customer' or 'supplier'
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */    
    getOutstandingProposals(thirdParty_id:number, mode: string): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/outstandingproposals/'+mode) as Promise<object[]>;
    }

    /**
     * Get representatives of thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} mode - 0=Array with properties, 1=Array of id
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */
    getRepresentatives(thirdParty_id:number, mode: string): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/representatives/'+mode) as Promise<object[]>;
    }

    /**
     * Set new price level for the given thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {number} priceLevel - Price level
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    setPriceLevel(thirdParty_id:number, priceLevel: number){
        return this.api.put(this.endpoint+'/'+thirdParty_id+'/setpricelevel', { "priceLevel": priceLevel});
    }

    /**
     * Get supplier categories for a thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getSupplierCategories(thirdParty_id:number, params: object): Promise<object[]>{
        return this.api.put(this.endpoint+'/'+thirdParty_id+'/supplier_categories', params) as Promise<object[]>;
    }

    /**
     * Remove the link between a category and the thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise} - A promise that resolves with the response data.
     */  
    deleteSupplierCategory(thirdParty_id:number, category_id: number){
        return this.api.delete(this.endpoint+'/'+thirdParty_id+'/supplier_categories/'+category_id);
    }

    /**
     * Add a supplier category to a thirdparty
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {number} category_id - Identifier of a category
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    addSupplierCategory(thirdParty_id:number, category_id: number){
        return this.api.post(this.endpoint+'/'+thirdParty_id+'/supplier_categories/'+category_id);
    }

    /**
     * Get properties of a thirdparty object by barcode
     * @param {number} thirdParty_id - Identifier of a thirdparty
     * @param {string} barcode - Barcode
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */      
    getBarcode(thirdParty_id:number, barcode: string): Promise<object>{
        return this.api.get(this.endpoint+'/'+thirdParty_id+'/barcode/'+barcode) as Promise<object>;
    }

    /**
     * Get properties of a thirdparty object by Email
     * @param {string} email - Email to search.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */      
    getByEmail(email:string): Promise<object>{
        return this.api.get(this.endpoint+'/email/'+email) as Promise<object>;
    }

}