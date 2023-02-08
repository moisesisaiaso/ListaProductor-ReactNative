import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../assets/styles/styles";

const ListProductsComponent = ({ product, setIrFormulario, handleEdit, eliminar }) => {
    return (
        <View style={styles.card}>
            <View style={styles.index}>
                <Text style={[styles.text, { fontWeight: "600", color: "white" }]}>
                    {product.item.codigo}
                </Text>
            </View>

            <View style={styles.contenido}>
                <Text style={styles.text}>{product.item.nombre?.toUpperCase()}</Text>
                {/* // * existe dos parametros -index para acceder al indice del elemento, -item para acceder al elemento, se desglosa así por que el callback solo tiene una propiedad que compone estas dos caracteristicas
                 */}
                <Text style={styles.text}>
                    <Text style={{ fontWeight: "400" }}>{product.item.categoria}</Text>
                </Text>
            </View>
            <View style={styles.precio}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>{product.item.precioVenta}</Text>
            </View>
            <View style={styles.editDelete}>
                <TouchableOpacity
                    style={styles.botonED}
                    onPress={() => {
                        handleEdit(product.item); //! item ojo hay que acceder al objeto puro
                        setIrFormulario(true); // con esto cambio a la vista del formulario por el renderizado opcional
                        console.log(product.item);
                    }}
                >
                    <Image source={require("../assets/edit.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonED} onPress={() => eliminar(product.index)}>
                    <Image source={require("../assets/delete.png")} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ListProductsComponent;
