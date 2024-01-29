// import fs from fs;

// class ProductManager {
//     constructor() {
//       this.products = []; 
//       this.lastId = 0;    
//     }
  
//     create(title, description, price, photo, stock) {
//       const id = this.lastId++; 
//       const product = { id, title, description, price, photo, stock };
//       this.products.push(product);
//       return product;
//     }
//     read(){
//         return this.products;
//     }
    
//   readOne(id){
//     return this.products.find(product =>{
//        return product.id === id;
//     })
// }
//   }

//   const productManager = new ProductManager();
//   const product1 = productManager.create("Bomba de agua", "1 pulgada", 34000, "link", 10);
//   const product2 = productManager.create("aro de luz led", "20 CM", 15000, "link", 15);


//   const readProducts = productManager.read();
//   const readOneProducts = productManager.readOne(Number(0))

//   console.log(readOneProducts); 
  
