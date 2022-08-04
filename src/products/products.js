
const fs = require('fs')
const products = require('../../public/products.json')

class Contenedor {
  constructor (file){
      this.file = file;
      
  }
  //Add object
  async save(object){
      try {
          if (fs.existsSync(this.file)) {
              const data = await fs.promises.readFile(this.file);
              const array = JSON.parse(data);
              object.id = array.length + 1;
              array.push(object);
              await fs.promises.writeFile(this.file, JSON.stringify(array, null,2));
              console.log('Se guardo el objeto con el id: ' + object.id);
          } else {
              object.id = 1;
              await fs.promises.writeFile(this.file, JSON.stringify([object]));
              console.log('Se guardo el objeto con el id: ' + object.id);
          }
      } catch (err) {
          throw new Error(err);
      }
  }
}
let contenedor = new Contenedor('./public/products.json');
// let id = 4

const list = () => {
  return products
}

const findOne = (id) => {
  return (products.find(product => product.id === parseInt(id)) || { error: 'Producto no encontrado' })
}

const add = (product) => {
  const prod = {
    name: product.name,
    price: product.price,
    thumbnail: product.thumbnail
  }
  contenedor.save(prod)
}

const update = (id, newContent) => {
  const product = findOne(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    product.name = newContent.name
    product.price = newContent.price
    product.thumbnail = newContent.thumbnail
    return product
  } else {
    return 'Producto no encontrado'
  }
}

const remove = (id) => {
  const product = findOne(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    products.splice(products.indexOf(product), 1)
    return 'Producto eliminado'
  } else {
    return 'Producto no encontrado'
  }
}

module.exports = { list, findOne, add, remove, update }