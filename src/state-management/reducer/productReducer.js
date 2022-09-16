import * as _ from "lodash";

const initialState = {
  productList: [],
  productListOnType_Size: [],
  currSizeArr: [],
  currtypeArr: [],
  isFitlerOn: false,
  searchList: [],
  isSearching: false,
  reset: false,
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCS":
      // console.log(state.currSizeArr,"<-currSizeALl", state.currtypeArr, "<-currTYPEALl")
      return {
        ...state,
        productList: action.payload,
        productListOnType_Size: [], //not necessary check
        searchList: [],
        isFitlerOn: false, //if only both dropdowns are empty or ALL
        isSearching: false,
        reset: true,
      };

    case "UPDATE_CATEGORY_FILTERED_DATA":
      const value1 = action.payload.data.value;
      let typesArr = ["All", "T-Shirt", "Hoodie", "Coats"];
      return {
        ...state,
        currtypeArr:
          value1 > 10 ? typesArr.slice(value1 / 10 - 1, value1 / 10) : [],
        isFitlerOn:
          value1 === 10 && state.currSizeArr.length === 0 ? false : true,
        isSearching: false,
        reset: false,
      };

    case "UPDATE_SIZE_FILTERED_DATA":
      const value2 = action.payload.data.value;
      let sizeArr = ["All", "S", "M", "L", "XL"]; //extract from data dummy
      return {
        ...state,
        currSizeArr:
          value2 > 10 ? sizeArr.slice(value2 / 10 - 1, value2 / 10) : [],
        isFitlerOn:
          value2 === 10 && state.currtypeArr.length === 0 ? false : true,
        isSearching: false,
        reset: false,
      };

    case "SORT_BY_TYPE":
      return {
        ...state,
        searchList: [],
        productListOnType_Size:
          state.currSizeArr.length > 0 && state.currtypeArr.length > 0
            ? _.filter(state.productList, {
                size: state.currSizeArr,
                category: state.currtypeArr.toLocaleString(),
              })
            : state.currSizeArr.length === 0 && state.currtypeArr.length > 0
            ? _.filter(state.productList, {
                category: state.currtypeArr.toLocaleString(),
              })
            : state.currSizeArr.length > 0 &&
              state.currtypeArr.length === 0 &&
              _.filter(state.productList, {
                size: state.currSizeArr,
              }),
      };

    case "SORT_UP_BY_COLOR":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["color"], ["asc"]), //look for when filteredIsON
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["color"],
          ["asc"]
        ),
        searchList: _.orderBy(state.searchList, ["color"], ["asc"]),
      };

    case "SORT_DOWN_BY_COLOR":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["color"], ["desc"]),
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["color"],
          ["desc"]
        ),
        searchList: _.orderBy(state.searchList, ["color"], ["desc"]),
      };

    case "SORT_UP_BY_STOCK":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["instock"], ["desc"]),
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["instock"],
          ["desc"]
        ),
        searchList: _.orderBy(state.searchList, ["instock"], ["desc"]),
      };

    case "SORT_DOWN_BY_STOCK":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["instock"], ["asc"]),
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["instock"],
          ["asc"]
        ),
        searchList: _.orderBy(state.searchList, ["instock"], ["asc"]),
      };

    case "SORT_UP_BY_PRICE":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["price"], ["asc"]),
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["price"],
          ["asc"]
        ),
        searchList: _.orderBy(state.searchList, ["price"], ["asc"]),
      };

    case "SORT_DOWN_BY_PRICE":
      return {
        ...state,
        productList: _.orderBy(state.productList, ["price"], ["desc"]),
        productListOnType_Size: _.orderBy(
          state.productListOnType_Size,
          ["price"],
          ["desc"]
        ),
        searchList: _.orderBy(state.searchList, ["price"], ["desc"]),
      };

    case "SEARCH_PRODUCT": //CLEAR TEXT
      console.log(state);
      return {
        ...state,

        searchList: !state.isFitlerOn
          ? _.filter(state.productList, function (it) {
              return it.name.includes(action.payload);
            })
          : _.filter(state.productListOnType_Size, function (it) {
              return it.name.includes(action.payload);
            }),
        isSearching: action.payload ? true : false,
      };

    case "ADD_PRODUCT_TO_CART":
      // console.log(action.payload,"======")
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
        // console.log(action.payload, "]]]]]");
      if (existingCartItem) {
        // console.log("first")
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === existingCartItem.id) {
              // console.log("seconf")
              return { ...item, cartVal: action.payload.cartVal };
            } else {
              // console.log("third")
              return { ...item };
            }
          }),
        };
      } else {
        // console.log("four")
        return {
          ...state,
          cart: state.cart.concat(action.payload),
        };
      }


      case "REMOVE_PRODUCT_FROM_CART":
        const existingCartItem2 = state.cart.find(
          (item) => item.id === action.payload.id
        );

        if(existingCartItem2){
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== existingCartItem2.id)
          }
        }
       
    case "ADD_PRODUCT_TO_CART_BTN":
      const existingCartItem3 = state.cart.find(
        (item) => item.id === action.payload.id
      );

        if(existingCartItem3){
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.id === existingCartItem3.id && item.cartVal < existingCartItem3.totalQuantity) {
                return { ...item, cartVal: item.cartVal+1 };
              } else {
                return { ...item };
              }
            }),
          }
        }

        case "MINUS_PRODUCT_TO_CART_BTN":
          const existingCartItem4 = state.cart.find(
            (item) => item.id === action.payload.id
          );
    
            if(existingCartItem4){
              return {
                ...state,
                cart: state.cart.map((item) => {
                  if (item.id === existingCartItem4.id && item.cartVal > 0) {
                    return { ...item, cartVal: item.cartVal-1 };
                  } else {
                    return { ...item };
                  }
                }),
              }
            }    

    default:
      return state;
  }
};

export default productReducer;
