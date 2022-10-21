export class User {
    page : number
    per_page : number
    total : number
    total_page : number
    data : [Data]
}

export class Data {
    id : number
    email : String
    first_name : String
    last_name : String
    avatar : String
}

export class SingleUser {
    data : Data
}

export class CreateUser {
    name : String
    job : String
}