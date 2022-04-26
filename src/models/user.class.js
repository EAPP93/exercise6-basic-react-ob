export default class User {
    name = ''
    password = ''
    email = ''

    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
}