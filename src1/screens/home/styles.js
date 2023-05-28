import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 5
    },

    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e8e8e8',
    },

    badge: {
        backgroundColor: '#353535',
        justifyContent: 'center',
        alignItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 10,
        position: 'absolute',
        right: -5,
        top: -5
    },

    badgeText: { 
        color: '#fff', 
        fontSize: 12, 
        fontWeight: '600' 
    },

    flatlist: {
        padding: 10,
    },

    btn: {
        backgroundColor: '#454141',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnTitle: {
        color: '#fff',
        fontSize: 16
    },

    loadingContainer: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    }

});