import { ProductAdd , ProductEdit , ProductGetAll , ProductRemove , ProductGetById } from "./actionTypes"


export const getAll = () =>({
    type: ProductGetAll,
    
})

// این کانست ورودی یه ایدی میگیره
export const getById = id => ({
    type: ProductGetById,
    payload : id
})


// بجای پیلود میشد بنویسی دیتا
export const add = item => ({
    type: ProductAdd,
    payload: item 
})


export const remove = id => ({
    type: ProductRemove ,
    payload : id
})

export const edit = item => ({
    type:"PRODUCT_EDIT " ,
    payload : item
})



