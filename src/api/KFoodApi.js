export default {
  fetchRecipes: (search, onLoading, onSuccess, onFailure) => {
    onLoading()
    fetch(`https://www.k-ruoka.fi/kr-api/search?offset=0&q=${search}`)
      .then((response) => response.json())
      .then(onSuccess)
      .catch(onFailure)
  },
}
