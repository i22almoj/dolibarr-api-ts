import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * Invoices. Class that helps to interact with the Dolibarr API methods related to the "Invoices" endpoint
 */
export default class Invoices extends Resources{
  
    /**
     * Create a new instance of the Proposals class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */  
    constructor(api: DolibarrAPI) {
      super(api, 'invoices');
    }

    /**
     * Add a contact type of given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} contact_id - Identifier of a contact
     * @param {string} type - Type of the contact (BILLING, SHIPPING, CUSTOMER)
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addContactType(invoice_id: number, contact_id: number, type: string){
      return this.api.post(this.endpoint+'/'+invoice_id+'/contact/'+contact_id+'/'+type);
    }

    /**
     * Delete a contact type of given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} contact_id - Identifier of a contact
     * @param {string} type - Type of the contact (BILLING, SHIPPING, CUSTOMER)
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    deleteContactType(invoice_id: number, contact_id: number, type: string){
      return this.api.delete(this.endpoint+'/'+invoice_id+'/contact/'+contact_id+'/'+type);
    }

    /**
     * Adds a contact to an invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} data - Element Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addContact(invoice_id: number, data: object){
      return this.api.post(this.endpoint+'/'+invoice_id+'/contacts', data);
    }

    /**
     * Get discount from invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getDiscount(invoice_id: number) {
      return this.api.get(this.endpoint+'/'+invoice_id+'/discount', {} ) as Promise<object>;
    }
 
    /**
     * Get lines of an invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */
    getLines(invoice_id: number) {
      return this.api.get(this.endpoint+'/'+invoice_id+'/lines', {} ) as Promise<object[]>;
    }

    /**
     * Add a line to a given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */        
    addLine(invoice_id: number, data: object){
      return this.api.post(this.endpoint+'/'+invoice_id+'/lines', data);
    }

    /**
     * Delete a line of a given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} line_id - Identifier of a line
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    deleteLine(invoice_id: number, line_id: number){
      return this.api.delete(this.endpoint+'/'+invoice_id+'/lines/'+line_id);
    }

    /**
     * Update a line to a given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} line_id - Identifier of a line
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    updateLine(invoice_id: number, line_id: number, data: object){
      return this.api.put(this.endpoint+'/'+invoice_id+'/lines/'+line_id, data);
    }

    /**
     * Create a discount (credit available) for a credit note or a deposit
     * @param {number} invoice_id - Identifier of an invoice
     * @returns {Promise} - A promise that resolves with the response data.
     */      
    markAsCreditAvailable(invoice_id){
      return this.api.post(this.endpoint+'/'+invoice_id+'/markAsCreditAvailable');
    }

    /**
     * Get list of payments of a given invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */     
    getPayments(invoice_id: number){
      return this.api.get(this.endpoint+'/'+invoice_id+'/payments') as Promise<object[]>;
    }

    /**
     * Add payment line to a specific invoice with the remain to pay as amount.
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addPayment(invoice_id: number, data: object){
      return this.api.post(this.endpoint+'/'+invoice_id+'/payments', data);
    }

    /**
     * Set an invoice as draft
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} [data={}] - Optional element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */       
    setToDraft(invoice_id: number, data: object = {}){
      return this.api.post(this.endpoint+'/'+invoice_id+'/settodraft', data);
    }

    /**
     * Set an invoice as paid
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} [data={}] - Optional element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    setToPaid(invoice_id: number, data: object = {}){
      return this.api.post(this.endpoint+'/'+invoice_id+'/settopaid', data);
    }

    /**
     * Set an invoice as unpaid
     * @param {number} invoice_id - Identifier of an invoice
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    setToUnpaid(invoice_id: number){
      return this.api.post(this.endpoint+'/'+invoice_id+'/settounpaid');
    }

    /**
     * Add an available credit note discount to payments of an existing invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} discount_id - Identifier of a discount
     * @returns {Promise} - A promise that resolves with the response data.
     */      
    useCreditNote(invoice_id: number, discount_id: number){
      return this.api.post(this.endpoint+'/'+invoice_id+'/usecreditnote/'+discount_id);
    }

    /**
     * Add a discount line into an invoice (as an invoice line) using an existing absolute discount
     * @param {number} invoice_id - Identifier of an invoice
     * @param {number} discount_id - Identifier of a discount
     * @returns {Promise} - A promise that resolves with the response data as an object.
     */
    useDiscount(invoice_id: number, discount_id: number){
      return this.api.post(this.endpoint+'/'+invoice_id+'/usediscount/'+discount_id);
    }
    
    /**
     * Validate an invoice
     * @param {number} invoice_id - Identifier of an invoice
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    validate(invoice_id: number, data: object){
      return this.api.post(this.endpoint+'/'+invoice_id+'/validate', data);
    }
    
    /**
     * Create an invoice using an existing order
     * @param {number} order_id - Identifier of an order
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    createFromOrder(order_id: number){
      return this.api.get(this.endpoint+'/createfromorder/'+order_id);
    }

    /**
     * Update a payment
     * @param {number} payment_id - Identifier of a payment
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    updatePayment(payment_id: number, data: object){
      return this.api.put(this.endpoint+'/payments/'+payment_id, data);
    }

    /**
     * Add a payment to pay partially or completely one or several invoices
     * @param {object} data - Element Parameters
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    addPaymentDistributed(data: object){
      return this.api.post(this.endpoint+'/paymentsdistributed', data);
    }

    /**
     * Get properties of an invoice object by ref_ext
     * @param {string} ref_ext - External reference of object
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getByRefExt(ref_ext: string){
      return this.api.get(this.endpoint+'/ref_ext/'+ref_ext) as Promise<object>;
    }

    /**
     * Get properties of an invoice object by ref
     * @param {string} ref - Reference of object
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    getByRef(ref: string){
      return this.api.get(this.endpoint+'/ref/'+ref) as Promise<object>;
    }

    /**
     * Get properties of a template invoice object
     * @param {number} invoice_id - ID of template invoice
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */     
    getTemplates(invoice_id: number){
      return this.api.get(this.endpoint+'/templates/'+invoice_id) as Promise<object>;
    }

}