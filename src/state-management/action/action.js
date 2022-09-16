import { productData } from "../../data/dummyProduct"

export const fetchAllProducts = () => {
    return {
        type: "FETCH_ALL_PRODUCS",
        payload: productData
    }
}

export const changeCategoryFilteredStatus = (data) => {
    return {
        type: "UPDATE_CATEGORY_FILTERED_DATA",
        payload: data
    }
}

export const changeSizeFilteredStatus = (data) => {
    return {
        type: "UPDATE_SIZE_FILTERED_DATA",
        payload: data
    }
}

export const sortByType = (data) => {
    return {
        type: "SORT_BY_TYPE",
        payload: data
    }
}

export const sortupByColor = () => {
    return {
        type: "SORT_UP_BY_COLOR",
       
    }
}

export const sortDownByColor = () => {
    return {
        type: "SORT_DOWN_BY_COLOR",
       
    }
}

export const sortUpByStock = () => {
    return {
        type: "SORT_UP_BY_STOCK",
       
    }
}

export const sortDownByStock = () => {
    return {
        type: "SORT_DOWN_BY_STOCK",
       
    }
}

export const sortUpByPrice = () => {
    return {
        type: "SORT_UP_BY_PRICE",
       
    }
}

export const sortDownByPrice = () => {
    return {
        type: "SORT_DOWN_BY_PRICE",
       
    }
}

export const searchByText = (searchText) => {
    return {
        type: "SEARCH_PRODUCT",
        payload: searchText
       
    }
}


export const addProductToCart = (product) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: product
       
    }
}


export const removeProductFromCart = (product) => {
    return {
        type: "REMOVE_PRODUCT_FROM_CART",
        payload: product
       
    }
}

export const addProductToCartBtn = (product) => {
    return {
        type: "ADD_PRODUCT_TO_CART_BTN",
        payload: product
    }
}

export const minusProductToCartBtn = (product) => {
    return {
        type: "MINUS_PRODUCT_TO_CART_BTN",
        payload: product
    }
}
