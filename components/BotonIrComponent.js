import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../assets/styles/styles";

const BotonIrComponent = ({ setIrFormulario, numeroElementos }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
            }}
        >
            <Text>Productos: {numeroElementos} </Text>

            <TouchableOpacity style={styles.botonIr} onPress={() => setIrFormulario(true)}>
                <Text style={{ color: "#2dce89", fontSize: 16, lineHeight: 18, fontWeight: "400" }}>
                    Añadir Producto
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BotonIrComponent;
