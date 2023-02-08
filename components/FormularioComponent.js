import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { styles } from "../assets/styles/styles";

const FormularioComponent = ({
    setCodigo,
    setNombre,
    setCategoria,
    setPrecioCompra,
    setPrecioVenta,
    codigo,
    nombre,
    categoria,
    precioCompra,
    precioVenta,
    product,
}) => {
    let precioString = precioVenta?.toString();
    let seEdita;
    if (product) {
        seEdita = false;
    } else {
        seEdita = true;
    }
    return (
        <View style={styles.formularioContainer}>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    value={codigo}
                    onChangeText={setCodigo}
                    placeholder="INGRESE EL CODIGO"
                    keyboardType="numeric"
                    editable={seEdita}
                />
                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="INGRESE EL NOMBRE"
                />
                <TextInput
                    style={styles.input}
                    value={categoria}
                    onChangeText={setCategoria}
                    placeholder="INGRESE LA CATEGORIA"
                />
                <TextInput
                    style={styles.input}
                    value={precioCompra}
                    onChangeText={setPrecioCompra}
                    placeholder="PRECIO DE COMPRA"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={precioVenta}
                    onChangeText={setPrecioVenta}
                    placeholder={precioVenta ? precioString : "PRECIO DE VENTA"}
                    keyboardType="numeric"
                    editable={false}
                />
            </ScrollView>
        </View>
    );
};

export default FormularioComponent;
