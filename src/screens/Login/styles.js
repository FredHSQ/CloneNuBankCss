const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
    containerGeral:{ 
        backgroundColor: 'white', 
        height: 650, width: '95%', 
        justifyContent: 'space-around', 
        margin: '2.5%', 
        borderRadius: 5, 
        marginTop: 5 
    },
    title:{ 
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize: 25, 
        letterSpacing: 0.5, 
        marginTop: 30, 
        marginBottom: 10 
    },
    inputTitle:{ 
        marginHorizontal: '18%', 
        color: 'orange', 
        fontSize: 18 
    },
    input:{ 
        marginHorizontal: '18%', 
        borderStyle: 'dotted', 
        borderRadius: 1, 
        borderBottomWidth: 0.5, 
        borderColor: 'orange', 
        color: 'black' 
    },
    loginButton:{
        textAlign: 'center',
        height: 75,
        textAlignVertical: 'center',
        borderWidth: 1,
        borderRadius: 5,
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    otherOptions:{ 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        color: '#900AD1', 
        letterSpacing: 0.5, 
        fontWeight: 'bold', 
        fontSize: 18
    }
})