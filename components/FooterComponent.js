import React from "react";
import { styles } from "../assets/styles/styles";
import { View, Text } from "react-native";

const FooterComponent = () => {
    return (
        <View style={styles.footer}>
            <Text style={{ textAlign: "center", color: "#868484" }}>
                &copy; 2023 DESARROLLADO POR
                <Text style={{ fontWeight: "700" }}> ORTIZ GRACIA MOISES</Text>
            </Text>
        </View>
    );
};

export default FooterComponent;
