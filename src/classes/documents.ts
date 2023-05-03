import DolibarrAPI from './dolibarrAPI';

/**
 * Documents. Class that helps to interact with the Dolibarr API methods related to the "Documents" endpoint
 */
export default class Documents{
    protected api: DolibarrAPI
    protected endpoint: string;

    /**
     * Create a new instance of the Documents class.
     * @param {DolibarrAPI} api - Instance of the DolibarrAPI class.
     */    
    constructor(api: DolibarrAPI) {
        this.api = api;
        this.endpoint = 'documents';
    }

    /**
     * Get a list of documents.
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {object} [params={}] - Optional query parameters to include in the request.
     * @returns {Promise<object[]>} - A promise that resolves with the response data as an array of objects.
     */    
    find(modulepart: string, params: object = {}) {
        params['modulepart'] = modulepart;
        return this.api.get(this.endpoint, params ) as Promise<object[]>;
    }

    /**
     * Get properties of an specific element
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {number} document_id - Identifier of the document to search.
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */    
    get(modulepart: string, document_id: number): Promise<object>{
        return this.api.get(this.endpoint, { 'modulepart': modulepart, 'id': document_id}) as Promise<object>;
    }

    /**
     * Get properties of an specific element by reference
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {string} ref - Ref of element
     * @returns {Promise<object>} - A promise that resolves with the response data as an object.
     */      
    getByRef(modulepart: string, ref: string): Promise<object> {
        return this.api.post(this.endpoint, {'modulepart': modulepart, 'ref': ref} ) as Promise<object>;
    }

    /**
     * Build a document
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {object} [data={}] - Optional query parameters to include in the request.
     * @returns {Promise} - A promise that resolves with the response data.
     */     
    builddoc(modulepart: string, data: object = {}) {
        data['modulepart'] = modulepart;
        return this.api.post(this.endpoint+'/builddoc', data );
    }

    /**
     * Download a document
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {object} [data={}] - Optional query parameters to include in the request.
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    download(modulepart: string, data: object = {}) {
        data['modulepart'] = modulepart;
        return this.api.post(this.endpoint+'/download', data );
    }

    /**
     * Upload a document
     * @param {string} modulepart - Name of module or area concerned by file download ('product', ...).
     * @param {object} [data={}] - Optional query parameters to include in the request.
     * @returns {Promise} - A promise that resolves with the response data.
     */    
    upload(modulepart: string, data: object = {}) {
        data['modulepart'] = modulepart;
        return this.api.post(this.endpoint+'/upload', data );
    }

}