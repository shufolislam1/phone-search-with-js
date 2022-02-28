const searchPhone = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);

    // clear the input
    searchField.value = '';

    // start with API
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data))
}

const displaySearchResult = datum =>{
    // console.log(datum.data);
    const dataArray = datum.data;
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    // if(dataArray.length == 0){
    //     const anotherDiv = document.createElement('div')
    //     div.innerText = `Not Found`
    //     anotherDiv.appendChild(div)
    // }
    dataArray.forEach(datas =>{
        // console.log(datas);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col m-5">
        <div class="card h-100 p-5 rounded-3">
          <img src="${datas.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${datas.brand}</h3>
            <h5>${datas.phone_name}</h5
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-success">Details</button>
          </div>
        </div>
      </div>
        `
        searchResult.appendChild(div)
    })
}