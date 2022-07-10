(()=> {


    // Todavía no aplicamos el principio de responabilidad única
    // pero hemos hecho nuestro código más legible

    type Gender = "M"|"F"

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        
        public email: string;
        public role: string;
        public lastAcces: Date;

        constructor({
            birthdate,
            email,
            gender,
            name,
            role
        }: UserProps){
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAcces = new Date()
        }
    
       checkCredentials() {
            return true;
       }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {

        public workingDirectory;
        public lastOpenFolder;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps ){
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21')
    })

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() })

})()