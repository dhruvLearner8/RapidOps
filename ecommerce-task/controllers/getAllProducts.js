function makeGetAllProductsAction({getAllProducts}){
    return async function getAllProductsAction(req,res){
        try{
            const products = await getAllProducts();
            res.render('allProducts',{products:products,role:req.user.role});
        }
        catch(e){
            console.log(e);
            throw e;
        }
        
    }
}

module.exports = makeGetAllProductsAction;