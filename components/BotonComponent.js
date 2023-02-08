import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../assets/styles/styles";

const BotonComponent = ({ ejecutar, clear, product, setProduct }) => {
    return (
        <View style={styles.botonContainer}>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => {
                    ejecutar();
                    setProduct(); // Con esto seteo el valor de product para poder volver a crear productos
                }}
            >
                <Text style={styles.textBoton}>{product ? "GUARDAR" : "CREAR"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.boton, { marginTop: 10 }]} onPress={() => clear()}>
                <Text style={styles.textBoton}>LIMPIAR</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BotonComponent;
