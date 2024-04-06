class ProductManager {
    constructor(){
        this.Products = [];
    }

    static id = 0

    addProducts(title, description, price, image, code, stock){
        for (let i = 0; i < this.Products.length; i++) {
            if(this.Products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct = {
            title, description, price, image, code, stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.Products.push({
                ...newProduct,
                id:ProductManager.id})
        } else {
            console.log("Todos los campos son requeridos")
        }
    }

    getProducts(){
        return this.Products;
    }

    Founded(id){
        return this.Products.find((Productos) => Productos.id === id);
    }

    getProductsById(id){
        !this.Founded(id) ? console.log("Not Found") : console.log(this.Founded(id));
    }

    getProductsById(id){
        if(!this.Founded(id)){
        console.log("Not Found")
        } else{
        console.log(this.Founded(id));
        }
    }
}



const Productos = new ProductManager();

console.log(Productos.getProducts());

Productos.addProducts("titulo1", "descripcion1", 1000, "img1", "abc123", 5);
Productos.addProducts("titulo2", "descripcion2", 1000, "img2", "abc124", 6);

console.log(Productos.getProducts());

Productos.addProducts("titulo2", "descripcion2", 1000, "img2", "abc124", 7);

Productos.getProductsById(2)

Productos.getProductsById(4)