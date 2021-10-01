import { writable } from "svelte/store";

const globalStore = writable({
    sidebar: false,
    cart: false,
    alert: false
})

// customize the store 
const store = { 
    subscribe : globalStore.subscribe,
    toggleItem : (item, value) => {
        globalStore.update(storeValues => {
            return {...storeValues, [item]: value}
        })
    }
    // toggleCart: value => {
    //     globalStore.update(storeValues => {
    //         return { ...storeValues, cart: value};
    //     })
    // }
}

export default store;
