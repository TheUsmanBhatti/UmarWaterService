import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    userDetailContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f3f3f3'
    },
    tabLabel: {
        alignSelf: 'center',
        paddingVertical: 7,
        fontSize: 14,
        fontWeight: '600',
        borderBottomWidth: 2,
    },

    infoCardContainer: {
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden'
    },
    infoCardHeadingCont: {
        backgroundColor: '#000',
        padding: 12
    },
    infoCardHeading: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700'
    },
    labelPending: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2e8a53'
    }
});