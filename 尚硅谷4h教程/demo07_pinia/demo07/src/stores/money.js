import {defineStore} from "pinia";
import {computed, ref} from "vue";

// export const useMoneyStore = defineStore('money', {
//     // option写法
//     state: () => {
//         return {money: 100}
//     },
//     getters: {
//         rmb: state => state.money,
//         usd: state => state.money * 0.14,
//     },
//     actions: {
//         win(arg) {
//             this.money += arg;
//         },
//         cost(arg) {
//             this.money -= arg;
//         }
//
//     }
//
// })


//setup写法
export const useMoneyStore = defineStore('money', ()=>{
    const money = ref(100);
    const rmb=computed(()=>money.value);
    const usd=computed(()=>rmb.value*0.14);

    const win = (arg)=>{
        money.value += arg;
    }
    const cost = (arg)=>{
        money.value -= arg;
    }

    return {money,rmb,usd,win,cost};

})