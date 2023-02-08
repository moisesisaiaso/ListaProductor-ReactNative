import { StatusBar } from "expo-status-bar";
import { View, FlatList, Alert, Image, Text } from "react-native";
import { styles } from "./assets/styles/styles";
import HeaderComponent from "./components/HeaderComponent";
import BotonIrComponent from "./components/BotonIrComponent";
import ListProductsComponent from "./components/ListProductsComponent";
import FormularioComponent from "./components/FormularioComponent";
import BotonComponent from "./components/BotonComponent";
import FooterComponent from "./components/FooterComponent";
import { useEffect, useState } from "react";

let products = [];

export default function App() {
    const [IrFormulario, setIrFormulario] = useState(false);
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precioCompra, setPrecioCompra] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [numeroElementos, setNumeroElementos] = useState(products.length);

    const [product, setProduct] = useState();

    const existeCodigo = () => {
        return products.some((product) => product.codigo === codigo);
    };

    useEffect(() => {
        //* con esto puedo mostrar el precio de venta en tiempo real desde su campo y sin tener problemas de renderización infinita por la función de estato setPrecioVenta que se ejecuta cada que ingreso un valor en la variable de estado precioCompra
        //^ parseando campo precioCompra Y precioVenta
        let parsePrecioCompra = parseFloat(precioCompra);

        let precioVentaTotal = parsePrecioCompra * 0.2 + parsePrecioCompra;
        setPrecioVenta(precioVentaTotal);
    }, [precioCompra]);

    //* Crea o edita un producto dependiendo de si existe o no
    let ejecutar = () => {
        let newProduct = {
            codigo,
            nombre,
            categoria,
            precioCompra,
            precioVenta,
        };

        //* validando que los campos estén llenos
        const parseObjectToArray = Object.values(newProduct); //^ el metodo Object.values() permite convertir un objeto a array utilizando solo los valores de las propiedades

        const datosCompletos = parseObjectToArray.some((datos) => datos === ""); //convertí el objeto a un array para poder hacer una busqueda con el metodo some mas rapido

        if (datosCompletos) {
            Alert.alert("INFO", "Debe llenar todos los campos");
        } else if (product) {
            //^Editando Producto
            const codigo = product.codigo;
            let indexProduct = products.findIndex((product) => product.codigo === codigo);

            products[indexProduct] = newProduct;
            setNumeroElementos(products.length);
            setIrFormulario(false);
        } else {
            //* validando el campo codigo para que no se repita
            if (existeCodigo()) {
                Alert.alert("INFO", "Ya existe un producto con el codigo " + codigo);
            } else {
                //^ Creando producto
                products.push(newProduct);
                console.log(products);
                setNumeroElementos(products.length);
                setIrFormulario(false);
            }
        }
    };

    const clear = () => {
        if (product) {
        } else {
            setCodigo(null);
        }
        setNombre(null);
        setCategoria(null);
        setPrecioCompra(null);
        setPrecioVenta(null);
    };

    //* Esto rellena los compos TextInput con el producto a editar
    const handleEdit = (product) => {
        setProduct(product);
        setCodigo(product.codigo);
        setNombre(product.nombre);
        setCategoria(product.categoria);
        setPrecioCompra(product.precioCompra);
        setPrecioVenta(product.precioVenta);
    };

    const eliminar = (productIndex) => {
        const newListProducts = [];
        products.forEach((product, index) => {
            if (index !== productIndex) {
                newListProducts.push(product);
            }
        });

        products = newListProducts;

        setNumeroElementos(products.length); //* esta es una trampita para que me re-renderize la lista de productos, ya que el cambio de valor de este estado va a hacer que se vuelva a renderizar todo el componente
    };

    return (
        <View style={styles.container}>
            {/* //! CABECERA */}
            <HeaderComponent IrFormulario={IrFormulario} setIrFormulario={setIrFormulario} />
            {/* // *FlatList es un componente que permite recorrer y renderizar datos de un array o array de objetos, funciona como un forEach, 
            // ? tiene dos atributos, data={} este atributo es donde va el array, es como cuando aplicamos el array al foreach con el punto pero en este caso lo hacemos desde un atributo, 
            //^ el segundo atributo es renderItem={} y corresponde al equivalente del callback en el forEach, es decir aquí establecemos el JSX que va a renderizar y podemos hacer referencia a cada uno de los elementos del array que van a iterarse atraves de la propiedad de dicho callback */}

            {/*  //! CUERPO  */}

            {IrFormulario ? (
                <FormularioComponent
                    setCodigo={setCodigo}
                    setNombre={setNombre}
                    setCategoria={setCategoria}
                    setPrecioCompra={setPrecioCompra}
                    setPrecioVenta={setPrecioVenta}
                    codigo={codigo}
                    nombre={nombre}
                    categoria={categoria}
                    precioCompra={precioCompra}
                    precioVenta={precioVenta}
                    product={product}
                />
            ) : (
                <View style={styles.body}>
                    <BotonIrComponent
                        setIrFormulario={setIrFormulario}
                        numeroElementos={numeroElementos}
                    />

                    {numeroElementos > 0 ? (
                        <FlatList
                            data={products}
                            renderItem={(product) => {
                                return (
                                    <ListProductsComponent
                                        product={product}
                                        setIrFormulario={setIrFormulario}
                                        handleEdit={handleEdit}
                                        eliminar={eliminar}
                                    />
                                );
                            }}
                            keyExtractor={(item, index) => {
                                return index.toString();
                            }}
                        />
                    ) : (
                        <View style={styles.icoProductsCon}>
                            <Text>Aún no existen productos</Text>
                            <Image
                                source={require("./assets/products.png")}
                                style={styles.icoProducts}
                            />
                        </View>
                    )}
                </View>
            )}

            {IrFormulario ? (
                <BotonComponent
                    ejecutar={ejecutar}
                    clear={clear}
                    product={product}
                    setProduct={setProduct}
                />
            ) : (
                ""
            )}

            {/* //!FOOTER */}
            <FooterComponent />
            <StatusBar style="auto" />
        </View>
    );
}
