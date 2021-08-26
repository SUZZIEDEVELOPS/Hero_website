 const dom = {
    formInput: document.querySelector('.add-new-item-form'),
    submitButton:document.querySelector('.submit-button'),
    superheroimage:document.querySelector('.superheroimage'),
    superherobirth:document.querySelector('.superherobirth'),
    superheroname:document.querySelector('.superheroname'),
    intelligence:document.querySelector('.intelligence'),
    strength:document.querySelector('.strength'),
    speed:document.querySelector('.speed'),
    power:document.querySelector('.power'),
    combat:document.querySelector('.combat'),
};

 async function getHeros(name) {
    let url = `https://www.superheroapi.com/api.php/4291945154176301/search/${name}`
     try {
         let res = await fetch(url, {
             method:"GET"
         });
         return await res.json();
     } catch (error) {
         console.log(error);
     }
}

function clickFetchButton(){

    dom.submitButton.onclick = () => {
      getInputAndFetchHeros()
    }
}


async function getInputAndFetchHeros(){
    let name = dom.formInput.value
    let listfromApi = await getHeros(name);
    let result = listfromApi.results
    let singleobj;
    if (result.length == 1){
         singleobj = result[0]
    }else if (name == "spider-man"){
          singleobj = result[0]
    }else{
         singleobj = result[1]
    }

   
    updateItems(singleobj)
    
}

function updateItems(obj){
    dom.superheroname.innerText = `Name: ${obj.name}`
     dom.superherobirth.innerText = `Race: ${obj.appearance.race}`
     dom.intelligence.innerText = obj.powerstats.intelligence
     dom.strength.innerText = obj.powerstats.strength
     dom.speed.innerText = obj.powerstats.speed
     dom.power.innerText = obj.powerstats.power
     dom.combat.innerText = obj.powerstats.combat
     dom.superheroimage.src = obj.image.url
}

clickFetchButton()