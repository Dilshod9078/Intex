

let elAddbtn = document.querySelector(".add-btn")
let elTbody = document.querySelector(".tbody")

let elmodalWrap = document.querySelector(".modal-wrap")
let elModal = document.querySelector(".modal")

let elmodalWrapper = document.querySelector(".modalwrapper")
let elModalInner = document.querySelector(".modal-inner")

let elList = document.querySelector(".list")

let elItem1 = document.querySelector(".hero__item1")
let elItem2 = document.querySelector(".hero__item2")
let elItem3 = document.querySelector(".hero__item3")

let elSearch = document.querySelector(".input-search")
let elListSearch = document.querySelector(".input-list")

let elThead = document.querySelector(".thead")

let zakazProduct = JSON.parse(window.localStorage.getItem("zakazProductList")) || []

let product = JSON.parse(window.localStorage.getItem("product")) || []

elAddbtn.addEventListener("click", function(evt){
    elmodalWrap.classList.add("open-modal")
    elModal.innerHTML = `
    <form class="form-add">
    <label>
    <div class="w-[80%]  mx-auto">
    <img class="add-img" src="./images/choose-img.png" alt="Choose image" width="100%" height="100%"/>
    </div>
    <input class="visually-hidden get-input" required type="file" />
    </label>

    <div class="my-[33px] flex items-center justify-between">
    <div class="w-[48%] flex flex-col gap-[10px]">
    
    <label class="flex flex-col gap-1">
    <div class="modal-card flex items-end gap-[17px]">
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите название продукта</span>
    <input required class=" rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите название продукта" >
    </div>
    </div>
    </label>
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/money.svg" alt="Old money icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите старую цену товара (сумму)</span>
    <input required class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите старую цену товара (сумму)" >
    </div>
    </div>
    </label>
    
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/skidka-money.svg" alt="Old money icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите цену скидки на товар (сумму)</span>
    <input required class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите цену скидки на товар (сумму)" >
    </div>
    </div>
    </label>
    </div>
    
    <div class="w-[48%] flex flex-col gap-[10px]">
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/kolichestvo.svg" alt="Kolichestvo icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите количество товара</span>
    <input required class=" rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите количество товара" >
    </div>
    </div>
    </label>
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/katagory.svg" alt="Katagory icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите категорию продукта</span>
    <select class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" >
    <option value="0">Каркасные</option>
    <option value="1">Надувные</option>
    </select>
    </div>
    </div>
    </label>
    
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/status.svg" alt="Status icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите статус продукта</span>
    <select class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" >
    <option value="0">Hет</option>
    <option value="1">Рекомендуем</option>
    <option value="2">Нет в наличии</option>
    <option value="3">Cкидка</option>
    </select>
    </div>
    </div>
    </label>
    
    
    </div>
    
    </div>
    
    <button class="m-auto w-[150px] bg-[#009398] block p-[10px] rounded-[10px] text-white font-bold">Добавить</button>
    </form>
    `
    let elForm = document.querySelector(".form-add")
    let elAddImg = document.querySelector(".add-img")
    let elchangeInput = document.querySelector(".get-input")

    elchangeInput.addEventListener("change", function(evt){
        elAddImg.src = URL.createObjectURL(evt.target.files[0])
    })

    elForm.addEventListener("submit", function(evt){
        evt.preventDefault();
        let data = {
            id: product.length,
            img: URL.createObjectURL(evt.target[0].files[0]),
            name: evt.target[1].value,
            oldPrice: evt.target[2].value,
            newPrice: evt.target[3].value,
            quantity: evt.target[4].value,
            type: evt.target[5].value,
            status: evt.target[6].value
        }
        product.push(data)
        renderfunc(product, elTbody, evt.target[5].value)
        elmodalWrap.classList.remove("open-modal")
        window.localStorage.setItem("product", JSON.stringify(product))
            if(evt.target[5].value == 0){
                elItem1.classList.add("text-teal-700")
                elItem2.classList.remove("text-teal-700")
            }
           else{
               elItem2.classList.add("text-teal-700")
               elItem1.classList.remove("text-teal-700")
            }
    
    })
})

elmodalWrap.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrap"){
        elmodalWrap.classList.remove("open-modal")
    }
})

elmodalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modalwrap"){
        elmodalWrapper.classList.remove("modal-open")
    }
})

function renderfunc(arr, list, id){
    list.innerHTML = ""
   arr.filter(item => {
    if(item.type == id){
        let elTr = document.createElement("tr")
        elTr.classList.add("mt-[10px]")
        elTr.innerHTML=`
          <td class="text-center p-2 bg-white rounded-l-[20px]">
            <img class="mx-auto" src=${item.img} alt="Choose img" width="70" height="40">
          </td>
          <td class="text-center p-2 bg-white">${item.name}</td>
          <td class="text-center p-2 bg-white flex flex-col">
          <span class="text-[15px] line-through">${item.oldPrice}</span>
          <strong class="text-[18px]">${item.newPrice}</strong>
          </td>
            <td class="text-center p-2 bg-white">${item.quantity}</td>
            <td class="text-center p-2 bg-white ${item.status == "0" ? "text-black" : ""}  ${item.status == "1" ? "text-green-500" : ""}  ${item.status == "2" ? "text-red-500" : ""} ${item.status == "3" ? "text-yellow-500" : ""}" >
               ${item.status == "0" ? "Простой" : ""} 
               ${item.status == "1" ? "Рекомендуем" : ""} 
               ${item.status == "2" ? "Нет в наличии" : ""} 
               ${item.status == "3" ? "Cкидка" : ""} 
            </td>
            <td class="text-center p-2 bg-white rounded-r-[20px]">
            <button onclick="updateClickBtn(${item.id})" class="td-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
             </svg> 
        </button>
            <button onclick="deleteClickbtn(${item.id})"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
               <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </button>        
            </td>
        </tr>
        </div>
        `
        list.appendChild(elTr) 
    }
})
  if(id == "2"){
    elThead.innerHTML = `
        <tr>
           <th  class="p-3 bg-white w-[200px] rounded-l-[20px]">Имя клиента</th>
           <th class="p-3 bg-white w-[200px]">Телефон</th>
           <th class="p-3 bg-white w-[200px]">Изображение</th>
           <th class="p-3 bg-white w-[200px]">Цена(сум)</th>
           <th class="p-3 bg-white w-[200px]">Адрес</th>
           <th class="p-3 bg-white w-[200px]">Время</th>
           <th  class="p-3 bg-white w-[200px] rounded-r-[20px]">Действия</th>
        </tr>
    `
    arr.map(item => {
        let elTr = document.createElement("tr")
        elTr.innerHTML = `
         <td class="text-center p-2 bg-white rounded-l-[20px]">${item.name}</td>
         <td class="text-center p-2 bg-white">${item.phone}</td>
         <td class="text-center p-2 bg-white">
            <img class="mx-auto" src="${item.img}" width="60" heigth="40" alt="img">
         </td>
         <td class="text-center p-2 bg-white">${item.price}</td>
         <td class="input-adress text-center p-2 bg-white">${item.adress}</td>
         <td class="text-center p-2 bg-white">${item.time}</td>
         <td class="flex items-center gap-[10px] justify-center p-2 bg-white rounded-r-[20px]">
            <input type="checkbox">
            <button onclick="deleteZakazbtn(${item.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
            </button>
         </td>
         `
         list.appendChild(elTr)
    })
  }

}
renderfunc(product, elTbody, 0)

elList.addEventListener("click", function(evt){
        if(evt.target.id == 0){
            elItem1.classList.add("text-teal-700")
            elItem2.classList.remove("text-teal-700")
            elItem3.classList.remove("text-teal-700")
            renderfunc(product, elTbody, evt.target.id)
        }
        else if(evt.target.id == 1){
            elItem2.classList.add("text-teal-700")
            elItem1.classList.remove("text-teal-700")
            elItem3.classList.remove("text-teal-700")
            renderfunc(product, elTbody, evt.target.id)
         }
         else{
            elItem2.classList.remove("text-teal-700")
            elItem1.classList.remove("text-teal-700")
            elItem3.classList.add("text-teal-700")
            renderfunc(zakazProduct, elTbody, evt.target.id)
        }
})


// ------------------Update start----------

function updateClickBtn(id){
    let data = product.find(item => item.id == id)
    elmodalWrap.classList.add("open-modal")
    elModal.innerHTML = `
    <form class="form-update">
    <label>
    <div class="w-[80%]  mx-auto">
    <img class="update-img" src="${data.img}" alt="Choose image" width="100%" height="100%"/>
    </div>
    <input class="visually-hidden update-input" type="file" />
    </label>
    
    <div class="my-[33px] flex items-center justify-between">
    <div class="w-[48%] flex flex-col gap-[10px]">
    
    <label class="flex flex-col gap-1">
    <div class="modal-card flex items-end gap-[17px]">
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите название продукта</span>
    <input value="${data.name}" required class=" rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите название продукта" >
    </div>
    </div>
    </label>
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/money.svg" alt="Old money icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите старую цену товара (сумму)</span>
    <input value="${data.oldPrice}" required class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите старую цену товара (сумму)" >
    </div>
    </div>
    </label>
    
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/skidka-money.svg" alt="Old money icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите цену скидки на товар (сумму)</span>
    <input value="${data.newPrice}" required class="rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите цену скидки на товар (сумму)" >
    </div>
    </div>
    </label>
    </div>
    
    <div class="w-[48%] flex flex-col gap-[10px]">
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/kolichestvo.svg" alt="Kolichestvo icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите количество товара</span>
    <input value="${data.quantity}" required class=" rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" type="text" placeholder="Введите количество товара" >
    </div>
    </div>
    </label>
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/katagory.svg" alt="Katagory icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите категорию продукта</span>
    <select class="update-type-select rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" >
    <option value="0">Каркасные</option>
    <option value="1">Надувные</option>
    </select>
    </div>
    </div>
    </label>
    
    
    <label class="flex flex-col gap-1">
    <div class="flex items-end gap-[17px]">
    <img class="" src="./images/status.svg" alt="Status icon" width="31" height="28"/>
    <div class="w-[100%] flex flex-col gap-1">
    <span class="font-normal text-[14px] leading-[24px] text-[#878787]">Введите статус продукта</span>
    <select class="update-status-select rounded-md p-2 border-b-[2px] border-black outline-none font-normal text-[14px] leading-[24px] text-[#545454]" >
    <option value="0">Hет</option>
    <option value="1">Рекомендуем</option>
    <option value="2">Нет в наличии</option>
    <option value="3">Cкидка</option>
    </select>
    </div>
    </div>
    </label>
    
    
    </div>
    
    </div>
    
    <button class="m-auto w-[150px] bg-[#009398] block p-[10px] rounded-[10px] text-white font-bold">Добавить</button>
    </form>
    `
    let elUpdateform = document.querySelector(".form-update")
    let elTypeSelect = document.querySelector(".update-type-select")
    let elStatusSelect = document.querySelector(".update-status-select")
    let elUpdateImg = document.querySelector(".update-img")
    let elUpdateInput = document.querySelector(".update-input")

    elTypeSelect.value = data.type
    elStatusSelect.value = data.status

    elUpdateInput.addEventListener("change", function(evt){
        elUpdateImg.src = URL.createObjectURL(evt.target.files[0])
    })

    elUpdateform.addEventListener("submit", function(evt){
        evt.preventDefault()
        data.img = elUpdateImg.src
        data.name = evt.target[1].value
        data.oldPrice = evt.target[2].value
        data.newPrice  = evt.target[3].value
        data.quantity = evt.target[4].value
        data.type = evt.target[5].value
        data.status = evt.target[6].value

        renderfunc(product, elTbody, evt.target[5].value)
        window.localStorage.setItem("product", JSON.stringify(product))
        elmodalWrap.classList.remove("open-modal")
        if(evt.target[5].value == 0){
            elItem1.classList.add("text-teal-700")
            elItem2.classList.remove("text-teal-700")
        }
       else{
           elItem2.classList.add("text-teal-700")
           elItem1.classList.remove("text-teal-700")
        }
    })
}

// ------------------Update end----------


// -----------------Delete start---------------------

function deleteClickbtn(id){
    elmodalWrapper.classList.add("modal-open")
    elModalInner.innerHTML=`
    <div class="delete-card">
      <strong class="delete-bold">Are you sure you want to delete it?</strong>
      <div class="delete-card-inner">
        <button onclick="cancelClickBtn()" class="cancel">Cancel</button>
        <button onclick="deleteClickBtn(${id})" class="delete">Delete</button>
      </div>
      </div> 
    `
}

function cancelClickBtn(id){
    elmodalWrapper.classList.remove("modal-open")
}

function deleteClickBtn(id){
   elmodalWrapper.classList.add("modal-open")
   let elNewobj = product.find(item => item.id == id)
   let data = product.findIndex(item => item.id == id)
   product.splice(data, 1)
   renderfunc(product, elTbody, elNewobj.type)
   window.localStorage.setItem("product", JSON.stringify(product))
   elmodalWrapper.classList.remove("modal-open") 
}

// ------------------delete zakaz---------------
 
function deleteZakazbtn(id){
    elmodalWrapper.classList.add("modal-open")
    elModalInner.innerHTML=`
    <div class="delete-card">
      <strong class="delete-bold">Are you sure you want to delete it?</strong>
      <div class="delete-card-inner">
        <button onclick="cancelZakazBtn()" class="cancel">Cancel</button>
        <button onclick="deleteZakazClickBtn(${id})" class="delete">Delete</button>
      </div>
      </div> 
    `
}

function cancelZakazBtn(id){
   elmodalWrapper.classList.remove("modal-open")
}


function deleteZakazClickBtn(id){
    elmodalWrapper.classList.add("modal-open")
    let result = zakazProduct.findIndex(item => item.id == id)
    zakazProduct.splice(result, 1)
    renderfunc(zakazProduct, elTbody, "2")
    window.localStorage.setItem("zakazProductList", JSON.stringify(zakazProduct))
    elmodalWrapper.classList.remove("modal-open")
}

// ------------------delete zakaz-end--------------


// -----------------Delete end---------------------


// ---------------Search start ------------------

elSearch.addEventListener("keyup", function(evt){
     let data = product.filter(item => item.name.toLowerCase().includes(evt.target.value.toLowerCase()))
     elListSearch.innerHTML = ""
     data.map(item => {
        let elListItem = document.createElement("li")
        elListItem.className = `p-[5px] hover:bg-white rounded-[5px] cursor-pointer`
        elListItem.dataset.id = item.id
        elListItem.textContent = `${item.name} - ${item.newPrice}`
        elListSearch.appendChild(elListItem)

        elListItem.addEventListener("click", function(evt){
           let clickid = evt.target.dataset.id
           let dataClick = product.find(item => item.id == clickid)
           elSearch.value = `${dataClick.name} - ${dataClick.newPrice}`

           let elSearchFilter = product.filter(item => item.id ==clickid)
           renderfunc(elSearchFilter, elTbody, dataClick.type)
        })
     })
     if(evt.target.value){
        elListSearch.classList.add("open-list")
     }
     else{
        elListSearch.classList.remove("open-list")
     }
})

elSearch.addEventListener("blur", function(evt){
    setTimeout(() => {
        elListSearch.classList.remove("open-list")
    },100)
})
// -------------------Search end--------------------------