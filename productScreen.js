import { ScrollView } from "react-native";
import Product from "./products";

  class ProductScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        } 
    }
    componentDisMount(){
        this.setState ({
            products: data
        })
    }
    render(){
        return (
          <ScrollView>
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.title}>Top products of 2024</Text>
                <FlatList data={this.state.products}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View>
                            <Product
                                name={item.name}
                                category={item.category}
                                price={item.price}
                                stock={item.stock}
                                image={item.image}
                                desc={item.description}
                                ></Product>
                        </View>
                    )}>
                    </FlatList>
            </View>
          </ScrollView>
        )
    }
  }
  export default ProductScreen;