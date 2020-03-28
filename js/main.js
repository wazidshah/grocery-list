// const dataList = [
//     {
//       "timestamp": "27/03/2020 21:08:58",
//       "type": "medicine",
//       "whatsapp": "",
//       "shopName": "Ashwini Medico",
//       "anyImage": "",
//       "phone": 9960468459,
//       "location": "Near Canara Bank, Marcela, Goa"
//     },
//     {
//       "timestamp": "27/03/2020 21:43:59",
//       "type": "grocery",
//       "whatsapp": "no",
//       "shopName": "CCP's Grocery Delivery Service",
//       "anyImage": "https://drive.google.com/open?id=1zZRNhHdwP6c5A9uSUYssZY6UEtmK6vHD",
//       "phone": "08047191000",
//       "location": "Panaji"
//     },
//     {
//       "timestamp": "27/03/2020 22:00:25",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Ajay  Pednekar",
//       "anyImage": "https://drive.google.com/open?id=1U-5akFOqJ8bCBksbWhQXSkXh2AmBsX4o",
//       "phone": 8007540367,
//       "location": "Morjim"
//     },
//     {
//       "timestamp": "27/03/2020 22:01:55",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Pritesh Naik",
//       "anyImage": "https://drive.google.com/open?id=1BZWfkjf9uL3X2ClXv_BgvEVF_4_TY8Nz",
//       "phone": 7083739520,
//       "location": "Mapusa"
//     },
//     {
//       "timestamp": "27/03/2020 22:03:00",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Sandesh Naik",
//       "anyImage": "",
//       "phone": 9158540200,
//       "location": "Mapusa"
//     },
//     {
//       "timestamp": "27/03/2020 22:04:00",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Prakash Vaingankar",
//       "anyImage": "https://drive.google.com/open?id=1XoZ6kBdK3tZad93f9JFPgbHJk7V52OYW",
//       "phone": 9423315860,
//       "location": "Mapusa"
//     },
//     {
//       "timestamp": "27/03/2020 22:05:00",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Damodar Prabhu",
//       "anyImage": "",
//       "phone": 8007595997,
//       "location": "Aldona"
//     },
//     {
//       "timestamp": "27/03/2020 22:05:47",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Deepa Wadekar",
//       "anyImage": "",
//       "phone": 8412940480,
//       "location": "Margao"
//     },
//     {
//       "timestamp": "27/03/2020 22:06:52",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Sham Jadhav",
//       "anyImage": "",
//       "phone": 7020157149,
//       "location": "Gogol , Margao"
//     },
//     {
//       "timestamp": "27/03/2020 22:07:40",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Sanjay Lotlikar",
//       "anyImage": "",
//       "phone": 9923878406,
//       "location": "Power House ,  Margao"
//     },
//     {
//       "timestamp": "27/03/2020 22:08:34",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Vasudev Sonal",
//       "anyImage": "",
//       "phone": 8600418406,
//       "location": "Old Station, Margao"
//     },
//     {
//       "timestamp": "27/03/2020 22:09:17",
//       "type": "milk",
//       "whatsapp": "no",
//       "shopName": "Vishwanath More",
//       "anyImage": "",
//       "phone": 9823121316,
//       "location": "Margao"
//     }
//   ];

  const list = new Vue({
    "el": "#contact-list",
    data:{
        contactList: [...dataList]
    }
  });

  const filterButton = document.getElementById("filter");
  const grocery = document.getElementById("grocery");
  const medical = document.getElementById("medical");

  
  

  filterButton.addEventListener("click",function(e){
    e.preventDefault();
    const copyData = [...dataList];
    const type = document.querySelector("input[name='type']:checked").value;
    const areas = document.querySelector("#areas option:checked");
    let options = {
        useExtendedSearch: true,
        threshold: 0,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
            "type",
            "location"
        ]
    }
    console.log(`"'${areas.value}"`);

    let typeFiltered = copyData.filter(function(element){
        if(type==element.type)
        {
            return true;
        }

        return false;
    });

    var filteredData = new Fuse(typeFiltered,options);

    var result = filteredData.search(`'${areas.value}`)

    var finalResult = result.map(function(res){
        return res.item;
    });

    list.contactList = [...finalResult];
    console.log(finalResult);
  });