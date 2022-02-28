const searchPhone = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    // clear the input
    searchField.value = '';
}