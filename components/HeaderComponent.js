import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../assets/styles/styles";

const HeaderComponent = ({ IrFormulario, setIrFormulario }) => {
    return (
        <View style={styles.header}>
            {IrFormulario ? (
                <TouchableOpacity
                    style={{ marginBottom: 15, alignItems: "flex-end", marginRight: 10 }}
                    onPress={() => setIrFormulario(false)}
                >
                    <Image source={require("../assets/list2.png")} style={styles.listIcon} />
                </TouchableOpacity>
            ) : (
                ""
            )}
            <Text style={{ marginBottom: 20, color: "black", fontSize: 20, textAlign: "center" }}>
                {IrFormulario ? "CREAR PRODUCTO" : "LISTA DE PRODUCTOS"}
            </Text>
        </View>
    );
};

export default HeaderComponent;
