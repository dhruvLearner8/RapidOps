
function makeGetExportCsvAction({getExportCsv,bigCommerceKey,fetch}){
    return async function getExportCsvAction(req,res){
        try{
            await getExportCsv();
            console.log("inside makeget");
            res.status(200).json({"message":"success"});
            
        //     let url = 'https://api.bigcommerce.com/stores/ymarvxmbmu/v3/catalog/products';
        //     console.log(bigCommerceKey);
        //     let options = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         // 'X-Auth-Client': 'm7cfqnhxcj7xg33z5016noe2j5ludbk',
        //         'X-Auth-Token': 'gcyhymupajo8fd94cns3nli4g5r7bom'
        //     },
        //     body:'{"name":"hacker 2","type":"physical","weight":"10","price":"100"}'

        //    };

        //    fetch(url, options)
        //    .then((res) => {
            
        //      if (!res.ok) {
        //        throw new Error(`HTTP error! Status: ${res.status}`);
        //      }
        //      return res.json();
        //    })
        //     .then(json => console.log(json))
        //     .catch(err => console.error('error:' + err));
                    }catch(e){
                        console.log(e);
                        throw e;
                    }
                }
}

module.exports = makeGetExportCsvAction;





// body: {"name":"Smith Journal 13","type":"physical","sku":"SM-13","description":"<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel metus ac est egestas porta sed quis erat. Integer id nulla massa. Proin vitae enim nisi. Praesent non dignissim nulla. Nulla mattis id massa ac pharetra. Mauris et nisi in dolor aliquam sodales. Aliquam dui nisl, dictum quis leo sit amet, rutrum volutpat metus. Curabitur libero nunc, interdum ac libero non, tristique porttitor metus. Ut non dignissim lorem, in vestibulum leo. Vivamus sodales quis turpis eget.</span></p>","weight":9999999999,"width":9999999999,"depth":9999999999,"height":9999999999,"price":0,"cost_price":0,"retail_price":0,"sale_price":0,"map_price":0,"tax_class_id":255,"product_tax_code":"string","categories":[0],"brand_id":1000000000,"brand_name":"Common Good","inventory_level":2147483647,"inventory_warning_level":2147483647,"inventory_tracking":"none","fixed_cost_shipping_price":0,"is_free_shipping":true,"is_visible":true,"is_featured":true,"related_products":[0],"warranty":"string","bin_picking_number":"string","layout_file":"string","upc":"string","search_keywords":"string","availability_description":"string","availability":"available","gift_wrapping_options_type":"any","gift_wrapping_options_list":[0],"sort_order":-2147483648,"condition":"New","is_condition_shown":true,"order_quantity_minimum":1000000000,"order_quantity_maximum":1000000000,"page_title":"string","meta_keywords":["string"],"meta_description":"string","view_count":1000000000,"preorder_release_date":"2019-08-24T14:15:22Z","preorder_message":"string","is_preorder_only":true,"is_price_hidden":true,"price_hidden_label":"string","custom_url":{"url":"string","is_customized":true},"open_graph_type":"product","open_graph_title":"string","open_graph_description":"string","open_graph_use_meta_description":true,"open_graph_use_product_name":true,"open_graph_use_image":true,"gtin":"string","mpn":"string","reviews_rating_sum":3,"reviews_count":4,"total_sold":80,"custom_fields":[{"id":6,"name":"ISBN","value":"1234567890123"}],"bulk_pricing_rules":[{"quantity_min":10,"quantity_max":50,"type":"price","amount":10}],"images":[{"image_file":"string","is_thumbnail":true,"sort_order":-2147483648,"description":"string","image_url":"string","id":0,"product_id":0,"date_modified":"2019-08-24T14:15:22Z"}],"videos":[{"title":"Writing Great Documentation","description":"A video about documenation","sort_order":1,"type":"youtube","video_id":"z3fRu9pkuXE","id":0,"product_id":0,"length":"string"}],"variants":[{"cost_price":0,"price":0,"sale_price":0,"retail_price":0,"weight":0,"width":0,"height":0,"depth":0,"is_free_shipping":true,"fixed_cost_shipping_price":0,"purchasing_disabled":true,"purchasing_disabled_message":"string","upc":"string","inventory_level":2147483647,"inventory_warning_level":2147483647,"bin_picking_number":"string","mpn":"string","gtin":"012345678905","product_id":0,"sku":"string","option_values":[{"option_display_name":"Color","label":"Beige"}],"calculated_price":0,"calculated_weight":0}]}
            