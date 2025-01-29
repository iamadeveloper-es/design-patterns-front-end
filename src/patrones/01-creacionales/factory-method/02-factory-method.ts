/**
 * Factory Method es un patrón de diseño creacional que nos ofrece una forma flexible de crear objetos sin especificar su clase exacta. En lugar de usar new directamente, se delega la creación a un método especializado.
 */

/**
 * VENTAJAS: 
 * 1. Código encapsulado y centralizado en un único punto
 * 2. Fácil de escalar
 * 3. Evita el acoplamiento
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

class UserFactory {

    static create(user: User, role: Role){
        const {name, email} = user
        switch (role) {
            case Role.Admin:
                return new Admin(name, email)
            case Role.SuperAdmin:
                return new SuperAdmin(name, email)
            case Role.User:
                return new RegularUser(name, email)
        }
    }
}

// Uso
class ClientTest{
    static execute(name: string, email: string, role: Role){
        const userData = {
            name,
            email
        } as User

        const user = UserFactory.create(userData, role)

        console.log({user})
    }
}

ClientTest.execute('Daniel', 'test@gmail.com', Role.Admin)
ClientTest.execute('Daniel', 'test@gmail.com', Role.SuperAdmin)