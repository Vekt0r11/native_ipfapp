import { scale, ScaledSheet } from 'react-native-size-matters'

const styles = ScaledSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#0a4257',
  },
  form:{
    padding:'30@s',
    width:'100%',
    backgroundColor:'#628ab5',    
  },
  img:{
    width:'200@s',
    height:'200@s',
    alignSelf:'center',
    marginBottom:'10@s'
  },
  inputContainer:{
    alignItems:'center'
  },
  input: {
    borderBottomWidth:'2@s',
    borderColor:'#636c8a',
    borderRadius: '4@s',
    width:'250@s',
    height:'40@s',
    paddingStart: '8@s',
    backgroundColor:'#c2d4f0',

  },
  labels: {
    alignSelf:'flex-start',
    marginStart:'22@s',
    marginVertical:'5@s',
    fontSize:'16@s',
    fontWeight:'400',
    color:'#292827',

  },
  button: {
    alignSelf:'center',
    justifyContent:'center',
    marginTop:'20@s',
    paddingHorizontal:'35@s',
    paddingVertical:'10@s',
    borderRadius:'5@s',
    backgroundColor:'#32b332'
  },
  buttonText:{
    alignSelf:'center',
    fontSize:'14@s'
  }

})

export default styles
