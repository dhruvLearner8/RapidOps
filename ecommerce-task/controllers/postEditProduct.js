function makePostEditProductAction({postEditProduct}){
    return async function postEditProductAction(req,res){
        try{
            const productId = req.params.productId;
            const productName = req.body.name;
            const productPrice = req.body.price;
            const productQuantity = req.body.quantity;
            const productCompany = req.body.company;
           
            await postEditProduct({productId,productName,productPrice,productQuantity,productCompany});
            res.redirect('/allProducts');
        }catch(e){
            console.log(e);
            throw e;
        }
        
    }
}

module.exports = makePostEditProductAction;