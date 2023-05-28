import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },

    headerContainer: {
        flexDirection: 'row',
        padding: 15,
        marginTop: 5
    },

    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e8e8e8',
    },

    flatlist: {
        padding: 10,
    },

    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    errorText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    }
});