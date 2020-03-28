const replace = require("replace-in-file");
const csv = require("csvtojson");
const fs = require('fs'); 

const output = [];

const replaceCSVtitle = async () => {
    const options = {
        files: 'data.csv',
        from: /Timestamp,Shop Type,Whatsapp Only,Shop Name,Any Image : If available,Phone Number,Location/g,
        to: 'Timestamp,type,whatsapp,shopName,anyImage,phone,location',
    };

    try {
        const results = await replace(options)
        console.log('Replacement results:', results);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }

}

const csvToJSON = async () => {
    const csvFilePath = 'data.csv';
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
}

const checkIfAlreadyPresent = () => {

}

const convertToJS = (data)=>{
    var jsonContent = JSON.stringify(data);

    const jsFile = `
        // this is ana auto generated file

        const dataList = ${jsonContent};
    `;
    fs.writeFile("data.js", jsFile, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    }); 
}

const formatData = (data) => {
    let x = data.map(shop => {
        shop.type = shop.type
            .trim()
            .split('/')
            .map(t => t.trim());
        shop.phone = shop.phone
            .trim()
            .split('/')
            .map(p => p.trim());
        return shop;
    });

    return x;
}


async function main() {
    await replaceCSVtitle();
    const jsonData = await csvToJSON();
    const formatedData = formatData(jsonData);
    convertToJS(formatedData);
}

main()