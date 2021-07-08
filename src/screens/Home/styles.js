const {StyleSheet} = require('react-native');


export const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%'
    },
    welcome:{
        paddingHorizontal: 15,
        fontSize: 25, 
        color: 'white', 
        fontWeight: 'bold', 
        letterSpacing: 1 
    },
    headerButtonsContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end' 
    },
    headerButtons:{ 
        borderRadius: 100, 
        backgroundColor: '#900AD1', 
        color: 'white', 
        width: 50, 
        height: 50, 
        marginRight: 10, 
        justifyContent: 'center', 
        paddingHorizontal: 10 
    },
    headerButtonsImage:{
        tintColor: 'white' 
    },
    containerVertical:{ 
        width: '100%' 
    },
    containerCartãoCrédito:{ 
        backgroundColor: '#fff', 
        height: 180, 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20 
    },
    containerConta:{ 
        backgroundColor: '#fff', 
        height: 160, borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20 
    },
    containerEmprestimo:{
        backgroundColor: '#fff', 
        height: 180, 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20
    },
    containerVida:{ 
        backgroundColor: '#fff', 
        height: 180, 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20 
    },
    containerInvest:{ 
        backgroundColor: '#fff', 
        height: 200, borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20 
    },
    containerWpp:{
        backgroundColor: '#fff', 
        height: 300, 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20
    },
    containerPay:{ 
        backgroundColor: '#fff', 
        height: 180, 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        margin: 10, 
        padding: 20 
    },
    containerTitleTextIconImage:{ 
        flexDirection: 'row', 
        textAlignVertical: 'center' 
    },
    titleText:{ 
        color: '#696969', 
        fontSize: 18, 
        paddingLeft: 20, 
        textAlignVertical: 'center', 
        letterSpacing: 0.5 
    },
    titleSpecial:{ 
        color: '#900AD1', 
        fontSize: 22, 
        paddingLeft: 20, 
        textAlignVertical: 'center', 
        letterSpacing: 0.5
    },
    subTitle:{ 
        color: 'black', 
        fontSize: 15, 
        letterSpacing: 0.5, 
        fontWeight: 'bold' 
    },
    IconImage:{ 
        tintColor: '#696969' 
    },
    descriptionText:{ 
        color: '#696969', 
        fontSize: 15,  
        letterSpacing: 0.5 
    },
    creditoValue:{ 
        color: '#1E90FF', 
        fontSize: 30, 
        fontWeight: 'bold', 
        letterSpacing: 0.5 
    },
    limitValue:{ 
        color: 'green', 
        fontSize: 15,
        textAlignVertical: 'center',
        fontWeight: 'bold', 
        letterSpacing: 0.5 
    },
    contaValue:{ 
        color: 'black', 
        fontSize: 30, 
        fontWeight: 'bold', 
        letterSpacing: 0.5 
    },
    emprestimoValue:{ 
        color: 'black', 
        fontSize: 15, 
        fontWeight: 'bold', 
        letterSpacing: 0.5
    },
    buttom:{ 
        color: '#900AD1', 
        borderWidth: 1, 
        borderColor: '#900AD1', 
        borderRadius: 5, 
        padding: 10, 
        letterSpacing: 0.5, 
        fontWeight: 'bold' 
    },
    containerHorizontal:{ 
        flexDirection: 'row', 
        height: 180, 
        paddingBottom: 10, 
        paddingTop: 10 
    },
    smallContainers:{ 
        flex: 1, 
        width: 95, 
        backgroundColor: '#900AD1', 
        borderRadius: 3, 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        marginVertical: 10, 
        marginLeft: 10 
    },
    smallImage:{ 
        tintColor: 'white', 
        margin: 7  
    },
    smallText:{ 
        color: '#e5e5e5e5', 
        fontSize: 15, 
        padding: 7 
    }
    
})