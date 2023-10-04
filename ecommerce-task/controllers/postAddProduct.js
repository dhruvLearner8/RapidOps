function makePostAddProductAction({postAddProduct}){
    return async function postAddProductAction(req,res){
        const productName = req.body.name;
        const productPrice = req.body.price;
        const productQuantity = req.body.quantity;
        const productCompany = req.body.company;
        const result = await postAddProduct({productName,productPrice,productQuantity,productCompany});
        res.redirect('/allProducts');
    }
}

module.exports = makePostAddProductAction;