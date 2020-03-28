
  const list = new Vue({
    "el": "#contact-list",
    data:{
        contactList: [...dataList]
    },
    mounted(){
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
    // console.log(`"'${areas.value}"`);

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