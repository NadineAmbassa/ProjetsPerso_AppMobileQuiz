import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
 img:{
   width: 120,
  height: 120,
  marginHorizontal: 120, 
  marginVertical: 20,
 },
  titleHead:{
    backgroundColor: 'teal',
    padding: 16,
    paddingTop: 10,
    marginTop: 30,
    textAlign: 'center',
    color: "white",
    fontSize: 25,
    fontWeight:"bold",
  },
  general:{
    alignItems:"center",
  },
  baseText:{
    marginTop: 10,
    fontWeight:"bold",
    textAlign:"center",
    fontSize:18,
  },
  input:{
    height: 45,
    width:250,
    margin:12,
    marginHorizontal: 70,
    alignItems: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  btnWrapper: {
    marginVertical: 16,
    alignItems:"center",
    flexDirection: 'column',
    justifyContent: 'center',
  },
   btnOp: {
    height: 35,
    width: 250,
    borderWidth: 1,
    marginVertical: 16,
    marginTop:3,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"teal",
   
  },
  btnOp1: {
    height: 35,
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FAEA73",
  },
  btnVert:{
    color:"white",
  },
  
  container:{
    flex: 1,
    flexDirection:"row",
    padding: 10,

  },
  numero:{
    flexGrow: 1,
    fontWeight:"bold",
  },
  
  valeur:{
    flex: 2,
   
  },

  regle:{
    marginHorizontal: 60,
    fontSize: 15,
    fontWeight:"bold",
  },
});
export default styles;