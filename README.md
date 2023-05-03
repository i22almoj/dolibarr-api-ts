# Dolibarr API TS

Typescript library for interacting with Dolibarr REST API

‌

### Installation

Create an instance of the main class indicating the url of your Dolibarr installation

```
npm install dolibarr-api-ts
```

### Basic usage

Create an instance of the main class indicating the url of your Dolibarr installation

```
import { DolibarrAPI } from 'dolibarr-api-ts';

const api = new Dolibarr('https://your-doibarr-url.com');

const username = 'exampleuser';
const password = 'examplepassword';

api.login(username, password).then(
  (response){
    if(response)
       console.log('Login correcto');
    else
      console.log('Login incorrecto');
  },
  (error) => {
    console.log('Error: ', error);
  }
);
```

‌

### Resources classes

- BankAccounts
- Contacts
- Documents
- Invoices
- Proposals
- ThirdParties
- Users

‌

Create a resource instance and get all the items (invoices)

```
import { DolibarrAPI, Invoices } from 'dolibarr-api-ts';

/* ...Create API class instance and login...*/

const invoices = new Invoices(api);

invoices.find().find(
  (data) => {
    console.log(JSON.stringify(data));
  },
  (error) => {
    console.log('Error: ', error);
  }
);

```

‌

`Explore in the code of this library the different classes of resources to consult the documentation of the use of each method and take a look at the documentation of the Dolibarr REST API module`


[https://wiki.dolibarr.org/index.php?title=Module_Web_Services_API_REST_(developer)](https://wiki.dolibarr.org/index.php?title=Module_Web_Services_API_REST_(developer) "smartCard-inline")



### Contributing

1. Fork `develop` branch
2. Push changes to your fork.
3. Submit a pull request.



### Github Repository

[https://github.com/i22almoj/dolibarr-api-ts](https://github.com/i22almoj/dolibarr-api-ts "smartCard-inline")



### License

GPLv3