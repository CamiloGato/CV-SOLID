(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento


    // Clase Persona tiene bajo acoplamiento
    // Esto porque al editar esta clase es suficiente y necesario

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }


    // Tiene alto acoplamiento, si queremos modificar algo en Person
    // Habría que hacer modificaciones grandes en User, pero esta
    // modificación afectará a UserSettings

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        name      : string,
        gender    : Gender,
        birthdate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            name,
            gender,
            birthdate
        )
    }
}
    


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()