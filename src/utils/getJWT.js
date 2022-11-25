const getJWT = async (data) => {
  const URL = 'http://192.168.216.96:4000/usuario/login'

  const body = JSON.stringify(data)

  const config = {
    body: body,
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch(URL, config)
    .then(response => response.json())

  return response
}
export default getJWT