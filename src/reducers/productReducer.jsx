import {ProductAdd , ProductGetAll , ProductRemove , ProductGetById} from '../actions/actionTypes' ;

const initialState = {
    items :[
        {id:1 , productName: "Product A" , price:100 },
        {id:2 , productName: "Product B" , price:200 },
        {id:3 , productName: "Product C" , price:300 },
    ],

    isLoading : true,
};


// اینجا ما به کمک سوییچ میایم همه اگر هایی که مد نظرمون هست رو مینویسیم و می گیم اگر مثلا از ما پروداکت اد رو خواس بیا و این کیس را اجرا کن و حالا اون اقداماتی که میخوایم رو روش انجام میدیم داخل ریترن هر کیس
function productReducer (state=initialState , action){
    switch (action.type) {
            case ProductGetAll :
                return{ ...state, items: state.items};
        // این ریترن ها میره تو استور میشینه و اونها کار سِت استیت رو میکنن
        // باید ایتم این استیت رو بگیریم. کل ایتم رو نمیخواد که بگیریم
        //  در اکشن پیلودش مساوی با ایدی هس پس ما هم اینجا مساوی با ایدی معیارشو قرار می دیم  
            case ProductGetById:
                return {...state, items: state.items.find ((x)=> x.id == action.payload)};

            case ProductAdd:
                //چون ما دو تا ویژگی داریم تو اینیشیال پس باید ریترن رو برگردونیم به ابجکت بعدش مثل پایین ادامه بدیم و بگیم که استیت قبلی رو نگه دار بعدش به ایتم بیا این چیزایی که نوشتیم رو اضافه کن و به اصطلاح اپدیت کن ایتم رو
                //  بجای کانکَت میتونیم پوش بذاریم ولی پوش یه آرایه اضافه می کنه ولی کانکَت میاد یه ارایه اضافه میکنه و یه ارایه جدید میسازه
                return {...state, items: state.items.concat([action.payload])};

            case ProductRemove :
                return {...state, items: state.items.filter(x => x.id != action.payload)};

        default: 
        return state;
    }
}
export default productReducer;


