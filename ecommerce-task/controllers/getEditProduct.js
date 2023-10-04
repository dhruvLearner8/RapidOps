function makeGetEditProductAction({getEditProduct}){
    return async function getEditProductAction(req,res){
        const productId = req.params.productId;
        const product = await getEditProduct(productId);
       
        res.render('editProduct',{product});
    }
}

module.exports = makeGetEditProductAction;