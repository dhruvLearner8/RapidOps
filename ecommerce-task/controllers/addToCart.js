function makeAddToCartAction({addToCart}){
    return async function(req,res){
        const userId = req.user._id;
        const productId = req.params.productId;
        const result = await addToCart(userId,productId);
      
        res.redirect('/allProducts');
    }
}

module.exports = makeAddToCartAction;