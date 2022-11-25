import { useState, useEffect, useRef } from 'react'
import { Text, View, ScrollView } from 'react-native'
import getAnuncios from '../../utils/getAnuncios'
import Post from '../../components/Post'

function Main({ navigation, route }) {

  const { userInfo } = route.params
  const firstRenderRef = useRef(true)

  const [anuncios, setAnuncios] = useState([])

  const loadAnuncios = () => {

    return anuncios.map((anuncio, key) => {
      return <Post anuncio={anuncio} key={key} />
    })
  }

  useEffect(() => {
    if (userInfo.id && firstRenderRef) {
      getAnuncios(userInfo.id)
        .then((res) => {
          setAnuncios(res)
        })
      firstRenderRef.current = false
    }
  }, [userInfo])

  useEffect(() => {

  }, [anuncios])

  return (
    <ScrollView style={{backgroundColor:'#0a4257'}} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      {
        anuncios.length > 0
          ? loadAnuncios(anuncios)
          : null
      }
    </ScrollView>
  )
}

export default Main