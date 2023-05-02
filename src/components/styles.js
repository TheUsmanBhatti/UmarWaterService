import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        width: '47%',
        backgroundColor: '#363535',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    image: {
        width: '100%', 
        height: 150, 
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },
    title: {
        fontSize: 16,
        color: '#e8e8e8',
        fontWeight: '600',
        marginTop: 5,
    },
    releaseYear: {
        fontSize: 14,
        color: 'gray'
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#00000080'
    }
})