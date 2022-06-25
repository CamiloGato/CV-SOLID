
type SizeOld = 'S'|'M'|'XL'

class ProductOld{

    constructor(
        public name: string = '',
        public price: number = 1,
        public size: SizeOld = 'S',
    ){}

    toString(){
        if (this.name.length <= 0) throw Error('name is empty')
        if (this.price <= 0) throw Error('price is empty')
        if (this.size.length <= 0) throw Error('size is empty')

        return `${ this.name } (${ this.price }), ${ this.size }`
    }
}

(()=>{

    const bluePants = new Product("Blue Large Pants", )
    console.log(bluePants.toString());

})();