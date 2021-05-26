import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    clickableBtn: {
        borderRadius: 25,
        backgroundColor: "black",
        width: 200.5,
        height: 40.5,
        padding: 5,
        elevation: 2,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#CECECE',
        shadowColor: '#CECECE',
        shadowOffset: {
            width: 0,
            height: 1
        },
        justifyContent: 'center'
    },
    unclickableBtn: {
        borderRadius: 25,
        backgroundColor: "white",
        width: 200.5,
        height: 40.5,
        padding: 5,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#CECECE',
        shadowColor: '#CECECE',
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    clickableText: {
        color: "#FFFFFF",
        padding: 3,
        marginLeft: 3,
        marginRight: 3,
        textAlign: 'center',
        justifyContent: "center",
        fontWeight: '500',
        fontSize: 24,
    },
    unclickableText: {
        color: "rgba(0,0, 0, 0.5)",
        padding: 3,
        marginLeft: 3,
        marginRight: 3,
        textAlign: 'center',
        justifyContent: "center",
        fontWeight: '500',
        fontSize: 24,
    },
    underLineText: {
        fontSize: 13,
        textDecorationLine: 'underline',
    },
    underLineBtn: {
        color: '#000000'
    }
})