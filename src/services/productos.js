import axios from 'axios';

export async function getAllProducts () {
    //SI USARA FETCH USO ESTO:
//     fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

//COMO USAMOS AXIOS ES ASI
return await axios.get('https://dummyjson.com/products')

}

export async function getProductById (id) {
    return await axios.get (`https://dummyjson.com/product/${id}`);
}

export async function getProductsByCategory(id) {
    return await axios.get (`https://dummyjson.com/products/category/${id}`)
    
}

export async function getCategories() {
    return await axios.get (`https://dummyjson.com/products/categories`)
    
}