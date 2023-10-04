function makeAddToCart({cartQuery}){
    return async function addToCart(userId,productId){
        try{
            // check if product is already there in cart?
            const product = await cartQuery.checkForProduct(userId,productId);
            if(product.length>0){
                await cartQuery.increaseCartQuantity(userId,productId);
                return "Success";
            }
            const result = await cartQuery.addToCart(userId,productId);
            return result;
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = makeAddToCart;