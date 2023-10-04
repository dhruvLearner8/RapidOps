function makeGetCart({cartQuery}){
    return async function getCart(userId){
        try{
            const cartItem = await cartQuery.getCartItemsByUserId(userId);
            return cartItem;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeGetCart;