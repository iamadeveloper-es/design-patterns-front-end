/**
 * ESCENARIO: 
 * Actualmente en nuestra aplicación Front tenemos diferentes archivos de configuración que contiene las versiones de las APIs a las que debemos llamar dependiendo del entorno en el que nos encontremos.
 * 
 * Debido a diferentes incidencias, se ha detectado que en ocasiones al hacer subidas a producción se están llamando a versiones de APIs incorrectas.
 * Para solucionar esto actualmente se necesitaría volver a a subir la aplicación Front a producción lo que conlleva un tiempo en muchas ocasiones considerable, un riesgo y un coste ya que mientras se sube la nueva versión la aplicación puede dejar sin servicio a partes críticas.
 * 
 * Tras analizar la situación se ha decidido que lo mejor sería recoger ese versionado a través de un servicio REST y de esta manera en caso de error en alguna versión del api de producción se pueda cambiar una versión de manera instantánea tocando las tablas de la base de datos sin necesidad de subir la aplicación Front.
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


// Uso
const API_VERSIONS = fetchApiVersion(environment.name)
console.log(API_VERSIONS)

// Ejemplo de construcción de URL
const productsUrl = `${environment.basePath}/${API_VERSIONS.productCatalog}/products`
console.log(productsUrl)


