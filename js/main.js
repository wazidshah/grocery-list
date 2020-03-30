dataList = [{"Timestamp":"28/03/2020 18:48:17","type":["bakery items","grocery"],"whatsapp":"no","shopName":"Central bakery - pramila Mapari","anyImage":"","phone":["9665353906"],"location":"Honda tisk, honda panchayat","field8":""},{"Timestamp":"28/03/2020 18:16:24","type":["coconuts","grocery"],"whatsapp":"no","shopName":"Lokesh velingkar/lic.no 9346 A","anyImage":"","phone":["9373362223"],"location":"Valpoi municipal area, thane, mauxi, nagargao panchayat area","field8":""},{"Timestamp":"27/03/2020 23:45:59","type":["Commodity Delivery Service","grocery"],"whatsapp":"no","shopName":"Aldona Constituency Commodity Delivery Service","anyImage":"","phone":["9822126125","7720089913","9657556666"],"location":"Aldona","field8":""},{"Timestamp":"27/03/2020 23:34:14","type":["fish","vegetables"],"whatsapp":"no","shopName":"Atmaram Gadekar","anyImage":"","phone":["8999588064"],"location":"Verla Canca","field8":""},{"Timestamp":"28/03/2020 17:23:56","type":["food for needy"],"whatsapp":"yes","shopName":"Pradosh Amoncar","anyImage":"","phone":["9823498179"],"location":"Bicholim","field8":""},{"Timestamp":"28/03/2020 17:23:57","type":["food for needy"],"whatsapp":"yes","shopName":"Nikhil Dixit","anyImage":"","phone":["9822981325"],"location":"Bicholim","field8":""}];
const sheetsUrl =  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTTUD7zK1YRnkzoaVoD33VGMUywCaFhS9gRZXa2_SAEb5PnIne7YWxWqy8k1vYvdc5ocT75_KleDmSX/pub?gid=0&single=true&output=csv';
// Increment the cache key if the URL format changes completely
const cacheKey = 'v2-' + sheetsUrl;

/// Synchronous function to parse raw data from google sheets to a form we are happy with
/// Expects data in format produced by d3's CSV loading functions
function parseSheetCSV(data) {
    return data.map(d => {
        // Phone and type should be lists, since there can be multiples separated by /
        d['phone'] = d['phone'].split('/').map(n => n.trim());
        d['type'] = d['type'].split('/').map(n => n.trim());
        return d;
    });
}

/// Return initial data for the contact list
/// We return localStorage cached data if found, and count that as 'loaded'
/// If not, we return empty list and mark it as loading
function initialData() {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        return {
            contactList: parseSheetCSV(JSON.parse(cachedData)),
            isLoading: false
        }
    }
    return {
        contactList: [],
        isLoading: true
    };
}

// document.addEventListener("DOMContentLoaded", function() {
const list = new Vue({
    "el": "#contact-list",
    data: initialData(),
    created()
    {

    },
    mounted(){
        d3.csv(sheetsUrl).then(function (data) {
            // After fetching fresh data from Google Sheets, the localStorage cache is updated.
            // Then, fresh data is shown to the end user
            localStorage.setItem(cacheKey, JSON.stringify(data));
            list.contactList = parseSheetCSV(data);
            list.isLoading = false;
        });
        document.getElementById("areas").addEventListener("change",function(e){
            const type = document.querySelector("input[name='type']:checked").value;
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
            };

            let data = [...dataList];
            let typeFiltered = "";
            if(type != "all")
            {
                typeFiltered = data.filter(function(element){
                    if(element.type.includes(type))
                    {
                        return true;
                    }

                    return false;
                });
            }
            else
            {
                typeFiltered = [...dataList];
            }

            var filteredData = new Fuse(typeFiltered,options);

            var result = filteredData.search(`'${areas.value}`)

            var finalResult = result.map(function(res){
                return res.item;
            });

            list.contactList = [...finalResult];
      });

        //for radio buttons
        let radios = document.querySelectorAll("input[name='type']");

        radios.forEach(function(radio){
            radio.addEventListener("click",function(e){
                let type = e.target.value;
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
                if(e.target.checked)
                {
                    let data = [...dataList];
                    let typeFiltered = "";
                    if(type != "all")
                    {
                        typeFiltered = data.filter(function(element){
                            if(element.type.includes(type))
                            {
                                return true;
                            }

                            return false;
                        });
                    }
                    else
                    {
                        typeFiltered = [...dataList];
                    }

                    var filteredData = new Fuse(typeFiltered,options);

                    var result = filteredData.search(`'${areas.value}`)

                    var finalResult = result.map(function(res){
                        return res.item;
                    });

                    list.contactList = [...finalResult];
                }
            })
        })
    },
    updated()
    {
        const modal = document.getElementById("feedback-modal");
        const dataLinks = document.querySelectorAll("[data-link]");
        
        let iframe = document.querySelector("#feedback-modal iframe")
        for(var i =0; i< dataLinks.length; i++)
        {
            dataLinks[i].addEventListener("click",function(e){
                e.preventDefault();
                console.log(e.target);
                iframe.setAttribute("src",e.target.dataset.link)
            })
        }
    }
  });

//   const filterButton = document.getElementById("filter");
  const grocery = document.getElementById("grocery");
  const medical = document.getElementById("medical");



//   filterButton.addEventListener("click",function(e){
//     e.preventDefault();
//     const copyData = [...dataList];
//     const type = document.querySelector("input[name='type']:checked").value;
//     const areas = document.querySelector("#areas option:checked");
//     let options = {
//         useExtendedSearch: true,
//         threshold: 0,
//         location: 0,
//         distance: 100,
//         minMatchCharLength: 1,
//         keys: [
//             "type",
//             "location"
//         ]
//     }
//     // console.log(`"'${areas.value}"`);

//     let typeFiltered = copyData.filter(function(element){
//         if(type==element.type)
//         {
//             return true;
//         }

//         return false;
//     });

//     var filteredData = new Fuse(typeFiltered,options);

//     var result = filteredData.search(`'${areas.value}`)

//     var finalResult = result.map(function(res){
//         return res.item;
//     });

//     list.contactList = [...finalResult];
//     console.log(finalResult);
//   });
//  });
// });
