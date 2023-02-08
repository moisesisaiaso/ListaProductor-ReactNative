import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //* VISTA GENERAL
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 15,
    },

    header: {
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 5,
    },

    listIcon: {
        width: 30,
        height: 30,
    },

    //^  VISTA LISTA DE PRODUCTOS
    botonIr: {
        height: 50,
        borderColor: "#2dce89",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
    },

    body: {
        flex: 6,
    },

    icoProductsCon: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },

    icoProducts: {
        marginTop: 20,
        height: 140,
        width: 180,
    },

    card: {
        backgroundColor: "#25b9b9",
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    index: {
        flex: 1,
        alignItems: "flex-start",
    },

    contenido: {
        flex: 3,
    },

    text: {
        fontWeight: "600",
        fontSize: 16,
    },

    precio: {
        flex: 1,
        alignItems: "flex-start",
        paddingRight: 5,
    },

    editDelete: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    botonED: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
    },

    icon: {
        width: 26,
        height: 28,
    },

    //^ VISTA FORMULARIO
    formularioContainer: {
        flex: 4,
    },

    input: {
        height: 50,
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "700",
    },

    botonContainer: {
        flex: 2,
    },
    boton: {
        height: 50,
        backgroundColor: "#2dcebd",
        color: "white",
        borderRadius: 25,
        marginTop: 10,
    },

    textBoton: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
        fontSize: 15,
    },

    //* VISTA GENERAL
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",

        paddingVertical: 20,
    },
});
