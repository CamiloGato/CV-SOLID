(()=> {

    // Aplicación principio responsabilidad única en clases
    // Priorizar la composición frente a la herencia

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
    }

    class User {
        
        public email: string;
        public role: string;
        public lastAcces: Date;

        constructor({email, role}: UserProps){
            this.email = email;
            this.role = role;
            this.lastAcces = new Date()
        }
    
       checkCredentials() {
            return true;
       }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public workingDirectory;
        public lastOpenFolder;

        constructor({workingDirectory, lastOpenFolder}: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProps){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email, role})
            this.settings = new Settings({workingDirectory, lastOpenFolder})
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

    console.log({ userSettings })

})()