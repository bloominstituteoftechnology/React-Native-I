import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Header: {
        flex:1,
        marginTop: 34,
        marginBottom: 15,
        marginLeft:0,
        width: '90%',
        height:'20%',
        backgroundColor: 'powderblue',
        alignItems: 'center',
    },
    Navbar:{
        flex:1,
        flexDirection: 'row',  
        width:'80%',
        justifyContent: 'center'
    },
    Like :{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        width:'33%',
        height: 30,
        backgroundColor: 'white',
        marginTop: 20,
        marginRight: 5,
    },
    Comment:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        width:'80%',
        height: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom:5,
    }
  });


const {Header, Navbar, Like, Comment} = styles;

module.exports = {
    Header,
    Navbar,
    Like,
    Comment
}