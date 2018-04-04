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
    
    menu: {
        margin: 10,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,        
        backgroundColor: '#006666',
    },
    menuBtn: {
        margin: 10,                
        width: 100, 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 50,
    },
});

export default styles