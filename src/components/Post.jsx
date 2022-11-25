import { useState, useEffect } from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters'

function Post(props) {

  // console.log(props)
  const { _id, titulo, descripcion, fecha, autor, materia } = props.anuncio
  const { infoPersonal } = autor
  const { nombres, apellidos } = infoPersonal

  const formatedDate = fecha.slice(0, 10).split('-').reverse().join('/')

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.materia}>{materia.nombre}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <View style={{borderBottomWidth:scale(0.5)}}></View>
      </View>
      <View style={styles.descripcionContainer}>
        <Text style={styles.descripcionText}>{descripcion}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>{infoPersonal.nombres}, {infoPersonal.apellidos}</Text>
        <Text style={styles.bottomText}>{formatedDate}</Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b9abd',
    width: '90%',
    marginVertical: '10@s',
    borderRadius:'6@s',
  },
  topContainer: {
    alignSelf: 'flex-start',
    paddingStart: '10@s',
    paddingTop: '5@s',
  },
  descripcionContainer: {
    backgroundColor: '#98bae3',
    paddingHorizontal: '10@s',
    marginVertical: '15@s'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5@s',
  },
  materia: {
    color: 'rgb(0,0,255)',
    fontSize: '16@s',
  },
  titulo: {
    color: '#292827',
    fontSize: '16@s',
    fontWeight: '600',
  },
  descripcionText: {
    color: '#292827',
    textAlign: 'justify',
    color: '#292827',
    fontSize: '14@s',
  },
  bottomText: {
    color:'#4f4f4f'
  },

})

export default Post