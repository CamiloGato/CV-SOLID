
type Size = 'S'|'M'|'XL'

class Product{

    constructor(
        public name: string = '',
        public price: number = 1,
        public size: Size = 'S',
    ){}
    
    isProduct(): boolean {
        
        for ( const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if ( (<string>this[key]).length <= 0) throw new Error(`${key} is empty`);
                    break;                
                case 'number':
                    if ( (<number>this[key]) <= 0 ) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not valid`);
            }
        }

        return true;
    }

    toString(){

        if (!this.isProduct()) return;

        return `${ this.name } (${ this.price }), ${ this.size }`
    }
}

(()=>{

    const bluePants = new Product("Blue Large Pants")
    console.log(bluePants.toString());

})();