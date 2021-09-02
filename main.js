  var screenLoad = new bootstrap.Modal(document.getElementById('screenLoad'), {})

  let list = document.getElementById('list') 
  let listGroup = document.getElementById('listGroup') 
  let empty = document.getElementById('empty') 
  let detail = document.getElementById('detail') 

  let save = document.getElementById('screenSave').addEventListener('click', () => {          
    let product = document.getElementById('screenLoadProduct').value
    let icon = document.getElementById('screenLoadIcon').value
    let info = document.getElementById('screenLoadInfo').value

    document.getElementById('screenLoadProduct').value = ""
    document.getElementById('screenLoadIcon').value = ""
    document.getElementById('screenLoadInfo').value = ""

    let model = `<li class="list-group-item" data-product="${product}" data-icon="${icon}" data-info="${info}"
    ><img src="${icon}" alt="${product}" class="list__img">${product}</li>`
    listGroup.innerHTML += model
    // console.log(product, icon, info, list)  
    screenLoad.hide()
    empty.style.display = 'none'
    list.style.display = 'block'
 })

 let buttonClick = document.getElementById('listGroup').addEventListener('click', (e) => {
   document.getElementById('detailIcon').src = e.target.getAttribute('data-icon')
   document.getElementById('detailProduct').innerHTML = e.target.getAttribute('data-product')
   document.getElementById('detailInfo').innerHTML = e.target.getAttribute('data-info')
   list.style.display = 'none'
   detail.style.display = 'block'
})

let detailButton = document.getElementById('detailButton').addEventListener('click', () => {
  list.style.display = 'block'
  detail.style.display = 'none'
})