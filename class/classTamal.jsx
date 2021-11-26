class Cart {
    //// Tu código empieza aquí ///
    constructor(product, price, total, qty) {
        this.product = product;
        this.price = price;
        this.total = 0;
        this.qty = 0;
        this.catalogItem = {};           
    }
   addToCart = (product, price) => {

      this.catalogItem={product, price};   
      console.log(`Tiene ${this.catalogItem}`)
      if (!price){
        console.log("Error precio vacio")
      } else {
        this.total += price
        this.qty += 1
      }
    };
    printItems = () => {
      console.log(`Tu carrito tiene ${this.qty} artículos por un total de $${this.total} MXN`)
    }
    removeFromCart = (product, price) => {
      console.log(`Tiene ${this.catalogItem}`)
    }
}
const carrito = new Cart();

  
  carrito.addToCart("Tamal Verde", 30);
  carrito.addToCart("Tamal Verde", 30);
  carrito.printItems();
  // Tu carrito tiene 2 artículos por un total de $60 MXN
  
carrito.removeFromCart("Tamal Verde", 30);
//  carrito.addToCart("Atole", 20);
//  carrito.printItems();
  // Tu carrito tiene 2 artículos por un total de $50 MXN
  
//  carrito.emptyCart();
 // carrito.printItems();
  // Tu carrito está vacío
  
  // Nice to have:
  //carrito.addToCart("Tamal Verde", 30);
  //carrito.addToCart("Tamal Verde", 30);
  //carrito.removeFromCart("TamalVerde", 60);
  //carrito.printItems();
  // Tu carrito tiene 1 artículos por un total de $0 MXN WTF!??