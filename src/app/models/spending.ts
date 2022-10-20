export class Spending {

    amount : number
    category : String
    notes? : String

    constructor(amount, category, notes){
        this.amount = amount
        this.category = category
        this.notes = notes
    }
}