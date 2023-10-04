function makeDeleteProduct({productQuery,cartQuery}){
    return async function deleteProduct(productId){
        try{
            const result = await productQuery.deleteProduct(productId);
            await cartQuery.deleteCartItems(productId)
            return result;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeDeleteProduct;