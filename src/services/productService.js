import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:49755/api/Products/getAll?PageSize=10")
    }

    getByProductName(productName){
        return axios.get("http://localhost:49755/api/Products/getByProductName?name="+productName)
    }
}