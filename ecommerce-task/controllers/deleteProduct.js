function makeProductDeleteAction({deleteProduct}){
    return async function productDeleteAction(req,res){
        const productId = req.params.productId;
        const result = await deleteProduct(productId);
        res.redirect('/allProducts');
    }
}

module.exports = makeProductDeleteAction;