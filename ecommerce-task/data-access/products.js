function makeProductsQuery({mongoose,Product}){
    return ({
        getAllProducts,
        addProduct,
        deleteProduct,
        getProductById,
        updateProduct
    })

    async function getAllProducts(){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const products = await Product.find();
            mongoose.connection.close();
            return products;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function addProduct({productName,productPrice,productQuantity,productCompany}){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const product = new Product({
                name:productName,
                price:productPrice,
                company : productCompany,
                quantity : productQuantity
            });
            await product.save();
            mongoose.connection.close();
            return product;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function deleteProduct(productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const deletedProduct = await Product.findByIdAndRemove(productId);
            return deletedProduct;

        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function getProductById(productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const product = await Product.find({_id:productId});
            mongoose.connection.close();
            return product;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function updateProduct({productId,productName,productPrice,productQuantity,productCompany}){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            await Product.updateOne(
                { _id: productId }, // Replace with the actual document ID
                { $set: { name:productName,price:productPrice,quantity:productQuantity,company:productCompany } }, // Specify the field and its new value
              );
            
           // mongoose.connection.close();
            return ;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    
}

module.exports = makeProductsQuery;