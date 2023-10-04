function makePostEditProduct({productQuery}){
    return async function postEditProduct({productId,productName,productPrice,productQuantity,productCompany}){
        try{
            await productQuery.updateProduct({productId,productName,productPrice,productQuantity,productCompany});
            return ;
        }catch(e){
            console.log(e);
            throw e;
        }
        
    }
}

module.exports = makePostEditProduct;