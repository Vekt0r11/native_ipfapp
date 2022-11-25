import { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import getJWT from '../../utils/getJWT'
import getUserInfo from '../../utils/getUserInfo'
import styles from './styles'


function Login({ navigation }) {

  const { navigate } = navigation
  const { container, form, img, inputContainer, input, labels, button, buttonText } = styles
  const [data, setData] = useState({ nombreUsuario: '', contrasenia: '' })

  const handleChange = (nativeEvent, name) => {

    const { text } = nativeEvent

    setData({
      ...data,
      [name]: text
    })
  }

  const handleLogin = async () => {

    const jwt = await getJWT(data)
      .then((res) => {
        if (res.loggedIn) {
          getUserInfo(res.token)
            .then((res) => navigate('main', { userInfo: res })
          )
  } else {
    return console.log(res)
}
      })
  }

return (


  <View style={container}>
    <View style={form}>
      <Image style={img} source={require('../../../assets/IPF-logo.png')} ></Image>
      <View style={inputContainer}>
        <Text style={labels}>Usuario</Text>
        <TextInput style={input} onChange={(e) => handleChange(e.nativeEvent, 'nombreUsuario')} />
      </View>

      <View style={inputContainer}>
        <Text style={labels}>Contraseña</Text>
        <TextInput passwordRules={{}} secureTextEntry={true} style={input} onChange={(e) => handleChange(e.nativeEvent, 'contrasenia')} />
      </View>

      <TouchableOpacity style={button} disabled={data.nombreUsuario === '' || data.contrasenia === '' ? true : false} onPress={() => handleLogin()}><Text style={buttonText}>Iniciar sesión</Text></TouchableOpacity>
    </View>
  </View>
)
}

export default Login