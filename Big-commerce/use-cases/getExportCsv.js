function makeGetExportCsv({fs,parse,fetch}){
    return async function getExportCsv(){
        const columnNames = await getColumnNames(fs);
        console.log(columnNames);
        await fs.createReadStream("./products-2023-09-22.csv")
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data",async function (row) {
                const body = {};
                for(let i=0;i<columnNames.length;i++){
                    let col1 = columnNames[i];
                    
                    if(col1 === "weight" || col1==="price")
                    {
                        Object.assign(body,{ [col1]:parseInt(row[i])})
                    }
                    else{
                        Object.assign(body,{ [col1]:row[i]})
                    }
                }
        
                await postProduct(body,fetch);
             //   console.log(row);
            })
            .on("end", function () {
                console.log("finished");
            })
            .on("error", function (error) {
                console.log(error.message);
            });
            return;
    }

    async function getColumnNames(fs){
        return new Promise((resolve,reject)=>{
            fs.createReadStream("./products-2023-09-22.csv")
            .pipe(parse({
                delimiter: ",", from_line: 1
            }))
            .on("data",(row)=>{
                resolve(row);
            })
            .on("error",function(error){
                reject(error);
            })
            
        })
    }
    async function postProduct(body){
        try{
            
            let url = 'https://api.bigcommerce.com/stores/ymarvxmbmu/v3/catalog/products';
            const jsonBody = JSON.stringify(body);
            
            console.log(typeof jsonBody);
        
            let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': 'gcyhymupajo8fd94cns3nli4g5r7bom'
            },
            
            body: jsonBody
           
           };

           fetch(url, options)
           .then((res) => {
             if (!res.ok) {
                console.log(res);
                console.log("some error");
             //  throw new Error(`HTTP error! Status: ${res.status}`);
             }
             return res.json();
           })
            .then(json => console.log(json))
        
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeGetExportCsv;