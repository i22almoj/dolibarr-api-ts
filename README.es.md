# Dolibarr API TS

Librería TypeScript para interactuar con la API REST de Dolibarr
‌


### Instalación

Instala el paquete en tu proyecto

```
npm install dolibarr-api-ts
```


### Uso básico

Crea una instancia de la clase principal indicando la URL de tu instalación de Dolibarr

```
import { DolibarrAPI } from 'dolibarr-api-ts';

const api = new Dolibarr('https://your-doibarr-url.com');

const username = 'exampleuser';
const password = 'examplepassword';

api.login(username, password).then(
  (response) => {
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

### Clases de los recursos

- BankAccounts
- Contacts
- Documents
- Invoices
- Proposals
- ThirdParties
- Users

‌

Crea una instancia de un recurso y obtén todos los elementos (facturas)

```
import { DolibarrAPI, Invoices } from 'dolibarr-api-ts';

/* ...Create API class instance and login...*/

const invoices = new Invoices(api);

invoices.find().then(
  (data) => {
    console.log(JSON.stringify(data));
  },
  (error) => {
    console.log('Error: ', error);
  }
);

```

‌

Explora en el código de esta librería las diferentes clases de recursos para consultar la documentación del uso de cada método y echa un vistazo a la documentación del módulo de API REST de Dolibarr


[https://wiki.dolibarr.org/index.php?title=Module_Web_Services_API_REST_(developer)](https://wiki.dolibarr.org/index.php?title=Module_Web_Services_API_REST_(developer) "smartCard-inline")



### Contribución

1. Haz un fork de la rama `develop`
2. Haz un push de tus cambios en tu fork
3. Envía un pull request.



### Repositorio de Github

[https://github.com/i22almoj/dolibarr-api-ts](https://github.com/i22almoj/dolibarr-api-ts "smartCard-inline")



### Licencia

GPLv3