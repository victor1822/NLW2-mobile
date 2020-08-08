import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#8257E5',
        padding: 40
    },
    banner:{
        width: '100%',
        resizeMode: 'contain'
    },
    title:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: '#FFF',
        lineHeight: 30,
        marginTop: 90
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button:{
        backgroundColor: '#333',
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    buttonPrimary:{
        backgroundColor: '#9871f5'
    },
    buttonSecondary:{
        backgroundColor: '#04D361'
    },
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },
    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxHeight: 140,
        marginTop: 40,
    }
});

export default styles;