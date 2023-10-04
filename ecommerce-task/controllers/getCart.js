function makeGetCartAction({getCart}){
    return async function getCartAction(req,res){
       
        const userId = req.user._id;
        const cartItems = await getCart(userId);
        console.log(cartItems);
        
        res.render('cart',{cartItems:cartItems,role:req.user.role})
        
    }
}
module.exports = makeGetCartAction;