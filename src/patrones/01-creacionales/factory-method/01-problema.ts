/**
 * ESCENARIO:
 * En una aplicación tenemos un sistema de registro de usuarios. Nos han pedido que a la hora de hacer el registro los usuarios sean configurados con roles como usuario, administrador y super administrador
 */

/**
 * PROBLEMA:
 * 1. El código queda acoplado y no muy limpio
 * 2. Difícil de extender para nuevos roles
 * 3. Uso repetitivo de "new" 
 */


enum Role{
    User,
    Admin,
    SuperAdmin
}

interface User{
    name: string,
    email: string,
    role: Role
}

class RegularUser implements User{
    name: string;
    email: string;
    role: Role;

    constructor(name: string, email: string){
        this.name = name
        this.email = email
        this.role = Role.User
    }
    
}

class Admin implements User{
    name: string;
    email: string;
    role: Role;

    constructor(name: string, email: string){
        this.name = name
        this.email = email
        this.role = Role.Admin
    }
    
}

class SuperAdmin implements User{
    name: string;
    email: string;
    role: Role;

    constructor(name: string, email: string){
        this.name = name
        this.email = email
        this.role = Role.SuperAdmin
    }
    
}

class ClientTest{
    static execute(name: string, email: string, role: Role){
        let user;

        if(role === Role.SuperAdmin){
            user =  new SuperAdmin(name, email)
        }
        else if(role === Role.Admin){
            user = new Admin(name, email)
        }
        else{
            user =  new RegularUser(name, email)
        }

        console.log({user})
    }
}

ClientTest.execute('Daniel', 'test@gmail.com', Role.Admin)

