import { writable, derived} from "svelte/store";
import localProducts from "../localProducts"

const store = writable(flattenProducts([...localProducts]));

// subscribe
// set
// update

// flattened function
function flattenProducts(data) {
    return data.map(item => {
        let image = item.image.url;
        return{...item, image};
    })
}

// featured store
export const featuredStore = derived(store, $featured => {
    // console.log("hello from derived");
    // console.log($featured)
    return $featured.filter(item => item.featured === true)
})
export default store;

// import { writable } from "svelte/store";
// import localProducts from "../localProducts"

// const store = writable([...localProducts]);

// // subscribe
// // set
// // update

// export default store;



