const getAnuncios = async (id) => {

  const URL = `http://192.168.216.96:4000/anuncio/propio/${id}`

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const anuncios = await fetch(URL, config)
    .then(anuncios => {
      return anuncios.json()
    })
  return anuncios
}
export default getAnuncios