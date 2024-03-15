
let elKarkasniyList = document.querySelector(".karkasniy__list")
let elNaduvniyList = document.querySelector(".naduvniy__list")

let elmodalWrap = document.querySelector(".modal-wrap")
let elModal = document.querySelector(".modal")

let days = new Date()


let product = JSON.parse(window.localStorage.getItem("product"))

let zakazProduct = JSON.parse(window.localStorage.getItem("zakazProductList")) || []

function renderProductfunc(arr, list, id){
    list.innerHTML = ""
    arr.map(item =>{
        if(item.type == id){
            console.log(item);
            let elItem = document.createElement("li")
            elItem.classList.add("karkasniy__item")
            elItem.innerHTML = `
            <h2 class="item__title">${item.name}</h2>
            <img class="mx-auto" src=${item.img} width="200" height="100" alt="Render image">
             <span class="span-line  
                ${item.status == 1 ? "inline-block h-[28px] w-[140px] py-[5px] px-[15px] text-white text-[15px] font-bold  rounded-br-md shadow-[0px 1px 6px 0px rgba(0, 0, 0, 0.25)] bg-lime-500" : " "}
                ${item.status == 2 ? "inline-block h-[28px] w-[140px] py-[5px] px-[15px] text-white text-[15px] font-bold  rounded-br-md shadow-[0px 1px 6px 0px rgba(0, 0, 0, 0.25)] bg-red-500" : " "}
                ${item.status == 3 ? "inline-block h-[28px] w-[140px] py-[5px] px-[15px] text-white text-[15px] font-bold  rounded-br-md shadow-[0px 1px 6px 0px rgba(0, 0, 0, 0.25)] bg-yellow-500" : " "}
             ">
                ${item.status == 0 ? " " : " "}
                ${item.status == 1 ? "Рекомендуем" : " "}
                ${item.status == 2 ? "Нет в наличии" : " "}
                ${item.status == 3 ? "Cкидка" : " "}
             </span>
              <div class="item__card">
                 <div class="item__card-list">
                 <div class="item__card-inner">
                 <small class="item__oldtext">${item.oldPrice} сум</small>
                 <p class="item__newtext">${item.newPrice} сум</p>
                 </div>
                 <button onclick="zakazClickBtn(${item.id})" class="item__btn">Заказать</button>
                 </div>
              </div>
            `
            list.appendChild(elItem)
        }
    })
}

renderProductfunc(product, elKarkasniyList, "0")
renderProductfunc(product, elNaduvniyList, "1")


// -----------------------Zakaz start ---------------------

function zakazClickBtn(id){
    const data = product.find(item => item.id == id)
    elmodalWrap.classList.add("open-modal")
    elModal.innerHTML= `
      <div class="zakaz">
        <div class="zakaz__card">
          <h2 class="zakaz__title">${data.name}</h2>
          <img src="${data.img}" width="200" heigth="100" alt="Data Zakaz image">
           <p class="zakaz__newtext">${data.newPrice} сум</p>
        </div>
        <form class="zakaz__form">
           <label>
              <input class="form__input" name="user__name" type="text" required autocomplete="off" placeholder="Ваше имя">
           </label>
        <label>
             <input class="form__input" name="user_phone" type="text" required autocomplete="off" placeholder="Ваш номер">
        </label>
        <label class="form__label">
            <input class="form__input-inner" name="user_adress" type="text" required autocomplete="off" placeholder="Ваш адрес">
            <img src="./images/zakaz-icon.svg" width="71" heigth="62" alt="zakaz map icon">
       </label>
       <button class="zakaz__btn">Заказать</button>
        </form>
      </div>
    `
    let elZakazForm = document.querySelector(".zakaz__form")

    elZakazForm.addEventListener("submit", function(evt){
        let eldate = (`${days.getDate().toString().padStart(2, 0)}.${(days.getMonth() + 1).toString().padStart(2, 0)}.${days.getFullYear()} ${days.getHours().toString().padStart(2, 0)}:${days.getMinutes().toString().padStart(2, 0)}`);
       evt.preventDefault()
       let  zakazData ={
           name: evt.target[0].value,
           phone: evt.target[1].value,
           adress: evt.target[2].value,
           time: eldate,
           id: zakazProduct.length ? zakazProduct[zakazProduct.length - 1].id + 1 : 1,
           img: data.img,
           price: data.newPrice,
       }
       zakazProduct.push(zakazData)
       elModal.innerHTML =`
          <div class="spasebo-card">
            <img src="./images/true.svg" width="232" heigth="232" alt="True icon">
            <h2 class="spasebo">Спасибо!</h2>
            <p class="spasebo-text">Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время.</p>
          </div>
       `
       setTimeout(() => {
           elmodalWrap.classList.remove("open-modal")
       },3000)
       window.localStorage.setItem("zakazProductList", JSON.stringify(zakazProduct))
    })
}

elmodalWrap.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrap"){
        elmodalWrap.classList.remove("open-modal")
    }
})
window.localStorage.setItem("zakazProductList", JSON.stringify(zakazProduct))