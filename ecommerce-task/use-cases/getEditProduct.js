function makeGetEditProduct({productQuery}){
    return async function getEditProduct(productId){
        try{
            const product = await productQuery.getProductById(productId);
            return product;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeGetEditProduct;