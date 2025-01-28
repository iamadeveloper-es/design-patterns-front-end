/**
 * El patrón singleton tal y como está implemetado en el ejemplo anterior rompe el principio SRP de responsabilidad única ya que la clase "ApiVersionSingleton" tiene dos responsabilidades
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

// Clase intermedia para separar responsabilidades
class ApiVersionService{
    private versions: object = {};

    load(versionData: object){
        this.versions = versionData
    }

    getVersion(): object {
        return this.versions
    }
}


// Clase Singleton
class ApiVersionSingleton {
    private static instance: ApiVersionSingleton
    private apiVersionService: ApiVersionService

    constructor(apiVersionService: ApiVersionService){
        this.apiVersionService = apiVersionService
    }

    static getInstance(apiVersionService: ApiVersionService): ApiVersionSingleton{
        if(!ApiVersionSingleton.instance){
            ApiVersionSingleton.instance = new ApiVersionSingleton(apiVersionService)
        }
        return ApiVersionSingleton.instance
    }

    public getApiVersion(): Record<string, any>{
        return this.apiVersionService.getVersion()
    }
}


// Uso
class SingletonTest {
    
    static execute() {
        const response = fetchApiVersion(environment.name)
        const apiVersionService = new ApiVersionService()
        apiVersionService.load(response)

        // Crear instancia del singleton
        const apiVersionSingleton = ApiVersionSingleton.getInstance(apiVersionService);
        const apiVersionSingleton2 = ApiVersionSingleton.getInstance(apiVersionService);

        console.log(apiVersionSingleton.getApiVersion());

        console.log('Misma instancia ', apiVersionSingleton === apiVersionSingleton2);

        // Ejemplo de construcción de URL
        const productsUrl = `${environment.basePath}/${apiVersionSingleton.getApiVersion().productCatalog}/products`
        console.log(productsUrl)
    }
}

SingletonTest.execute();


