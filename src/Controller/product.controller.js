const products = require("../products/products")

class Controller {
    static getAll(){
        const producto = products.list();
        return producto;
    }
    static create(name, price, thumbnail) {
        const producto = products.add(name, price, thumbnail);
        return producto;
    }

    static find(id){
        const producto = products.findOne(id)
        return producto;
    }
    static remove(id){
        const producto = products.remove(id)
        return producto;
    }
    static update(id, newContent){
        const producto = products.update(id, newContent);
        return producto
    }
}


module.exports = Controller
