  var screenLoad = new bootstrap.Modal(document.getElementById('screenLoad'), {})

  let list = document.getElementById('list')
  let listGroup = document.getElementById('listGroup')
  let empty = document.getElementById('empty')

  let save = document.getElementById('screenSave').addEventListener('click', () => {          
    let product = document.getElementById('screenLoadProduct').value
    let icon = document.getElementById('screenLoadIcon').value
    let info = document.getElementById('screenLoadInfo').value

    document.getElementById('screenLoadProduct').value = ""
    document.getElementById('screenLoadIcon').value = ""
    document.getElementById('screenLoadInfo').value = ""

    let model = `<li class="list-group-item"><img src="${icon}" alt="${product}" class="list__img">${product}</li>`
    list.innerHTML += model
    console.log(product, icon, info, list)  
    screenLoad.hide()
    empty.style.display = 'none'
    list.style.display = 'block'

 })