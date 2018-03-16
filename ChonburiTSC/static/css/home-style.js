import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    containerLogin: {
        flex: 1,        
        padding: 20,
        backgroundColor: '#FF85BA',            
    },
    logo: {
        alignItems: 'center',
        margin: '10%'
    },
    input: {
        height: 40,
        backgroundColor: '#FFAED8',
        marginBottom: 15,
        padding: 10
    },
    logintext: {
        fontSize: 20,
        textAlign: 'center',
        color: '#B21970',    
        margin: 10,
    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#B21970',
        borderRadius: 10
    },
    btnText: {
        color: '#fff',
        padding: 10
    },
    welcome: {
        backgroundColor: '#00b3b3', 
        alignItems: 'center',
        justifyContent: 'flex-end',         
        height: '45%',
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        margin: 10,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,        
        backgroundColor: '#006666',
    },
    bill: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6e6ff',
        borderRadius: 50,
    },
    money: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6f9ff',
        borderRadius: 50,
    },
    guarantee: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f9f2ec',
        borderRadius: 50,
    },
    receive: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#fff0e6',
        borderRadius: 50,
    },
    calculator: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#ffe6f9',
        borderRadius: 50,
    },
    todolist: {
        margin: 10,        
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#e6ffe6',
        borderRadius: 50,
    }
});

export default styles