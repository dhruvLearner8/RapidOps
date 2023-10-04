function makeGetAllProducts({productQuery}){
    return async function getAllProducts(){
        try{
            const products = await productQuery.getAllProducts();
            return products;
        }catch(e){
            console.log(e);
            throw e;
        }
        
    }
}

module.exports = makeGetAllProducts;