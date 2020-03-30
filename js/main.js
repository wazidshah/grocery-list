dataList = [{"Timestamp":"28/03/2020 18:48:17","type":["bakery items","grocery"],"whatsapp":"no","shopName":"Central bakery - pramila Mapari","anyImage":"","phone":["9665353906"],"location":"Honda tisk, honda panchayat","field8":""},{"Timestamp":"28/03/2020 18:16:24","type":["coconuts","grocery"],"whatsapp":"no","shopName":"Lokesh velingkar/lic.no 9346 A","anyImage":"","phone":["9373362223"],"location":"Valpoi municipal area, thane, mauxi, nagargao panchayat area","field8":""},{"Timestamp":"27/03/2020 23:45:59","type":["Commodity Delivery Service","grocery"],"whatsapp":"no","shopName":"Aldona Constituency Commodity Delivery Service","anyImage":"","phone":["9822126125","7720089913","9657556666"],"location":"Aldona","field8":""},{"Timestamp":"27/03/2020 23:34:14","type":["fish","vegetables"],"whatsapp":"no","shopName":"Atmaram Gadekar","anyImage":"","phone":["8999588064"],"location":"Verla Canca","field8":""},{"Timestamp":"28/03/2020 17:23:56","type":["food for needy"],"whatsapp":"yes","shopName":"Pradosh Amoncar","anyImage":"","phone":["9823498179"],"location":"Bicholim","field8":""},{"Timestamp":"28/03/2020 17:23:57","type":["food for needy"],"whatsapp":"yes","shopName":"Nikhil Dixit","anyImage":"","phone":["9822981325"],"location":"Bicholim","field8":""}];

// document.addEventListener("DOMContentLoaded", function() {
const list = new Vue({
    "el": "#contact-list",
    data:{
        contactList: [...dataList],
        isLoading: true
    },
    created()
    {

    },
    mounted(){
        d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTTUD7zK1YRnkzoaVoD33VGMUywCaFhS9gRZXa2_SAEb5PnIne7YWxWqy8k1vYvdc5ocT75_KleDmSX/pub?gid=0&single=true&output=csv').then(function (data) {
            dataList = data.map(d => {
                d['phone'] = d['phone'].split('/').map(n => n.trim());
                d['type'] = d['type'].split('/').map(n => n.trim());
                return d;
            });
            list.contactList = [...dataList];
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

// Menu open-close

$(document).ready(function() {
  $(".menu-open").click(function(){
    $(".menu-open").addClass("open");
    $(".menu-close").addClass("open");
    $(".main-site-navigation").addClass("open");
  });

  $(".menu-close").click(function(){
    $(".menu-open").removeClass("open");
    $(".menu-close").removeClass("open");
    $(".main-site-navigation").removeClass("open");
  });

});
