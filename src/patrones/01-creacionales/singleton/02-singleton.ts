/**
 * Singleton es un patrón de diseño creacional que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
 * 
 * Resultado:
 * La clase ApiVersionSingleton asegura que solo haya una instancia que maneje las versiones de las APIs. Dependiendo del entorno proporcionado, 
 * la instancia única de ApiVersionSingleton configurará las versiones de las APIs adecuadamente y proporcionará un punto de acceso global para obtener estas versiones.
 * 
 */

// Versionado de APIs que nos llegarián a través de un servicio REST
const apiVersion = {
    dev: {
        userPaymentOperations: "v1.1.0",
        userProfile: "v.1.2.1",
        productCatalog: "v1.3.0",
        productInventory: "v1.4.0"
    },
    prod: {
        userPaymentOperations: "v1.1.0",
        userProfile: "v.1.1.0",
        productCatalog: "v1.2.1",
        productInventory: "v1.0.0"
    }
    
}


// simulación de variables de entorno de nuestra aplicación
const environmentConfig = {
    dev: {
        name: 'dev',
        basePath: "https://api-dev.com",
    },
    prod: {
        name: 'prod',
        basePath: "https://api-prod.com",
    }
}

// Al crear nuestra aplicación se configurará el entorno
const environment = environmentConfig.prod;


// Simulación de la llamada que realizaremos al servicio que nos devolverá el versionado
type EnvironmentName = 'dev' | 'prod';

const fetchApiVersion = (environmentName: string) => apiVersion[environmentName as EnvironmentName];

class ApiVersionSingleton {
    private static instance: ApiVersionSingleton;
    private static apiVersion: {} = {};

    static getInstance(environment: object) {
            if (!ApiVersionSingleton.instance) {
                ApiVersionSingleton.instance = new ApiVersionSingleton();
                ApiVersionSingleton.apiVersion = environment;
            }
            return ApiVersionSingleton.instance;
        }

    public getApiVersion(): object {
        return ApiVersionSingleton.apiVersion;
    }
}

// Uso
class SingletonTest {
    
    static execute() {
        const apiVersion = ApiVersionSingleton.getInstance(fetchApiVersion(environment.name));

        console.log(apiVersion.getApiVersion());

        const apiVersion2 = ApiVersionSingleton.getInstance(fetchApiVersion(environment.name));

        console.log('Misma instancia ', apiVersion === apiVersion2);
    }
}

SingletonTest.execute();


