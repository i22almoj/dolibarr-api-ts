import DolibarrAPI from './dolibarrAPI';
import Resources from './resources';

/**
 * BankAccounts. Class that helps to interact with the Dolibarr API methods related to the "BankAccounts" endpoint
 */
export default class BankAccounts extends Resources{

    /**
     * Create a new instance of the BankAccounts class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */     
    constructor(api: DolibarrAPI) {
      super(api, 'bankaccounts');
    }
    
    /**
     * Get lines for a bank account
     * @param {number} bankAccount_id - Identifier of a bank account.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */    
    getLines(bankAccount_id:number): Promise<object[]>{
        return this.api.get(this.endpoint+'/'+bankAccount_id+'/lines', {} ) as Promise<object[]>;
    }

    /**
     * Add a line for a bank account
     * @param {number} bankAccount_id - Identifier of a bank account.
     * @param {object} data - Line Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    addLine(bankAccount_id:number, data: object){
        return this.api.post(this.endpoint+'/'+bankAccount_id+'/lines', data );
    }

    /**
     * Add a link to an account line
     * @param {number} bankAccount_id - Identifier of a bank account.
     * @param {number} line_id - Identifier of a line.
     * @param {object} data - Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    addLineLink(bankAccount_id:number, line_id: number, data: object){
        return this.api.post(this.endpoint+'/'+bankAccount_id+'/lines/'+line_id+'/links', data );
    }

    /**
     * Create an internal wire transfer between two bank accounts
     * @param {object} data - Parameters. 
     * @returns {Promise} - A promise that resolves with the response data.
     */  
    transfer(data: object){
        return this.api.post(this.endpoint+'/transfer', data );
    }

}