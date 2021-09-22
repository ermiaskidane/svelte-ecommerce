<script>
    import { onMount, onDestroy } from "svelte";
    import products from "../../stores/defaultProducts";
    // import localProducts from "../../localProducts";
    // console.log(products);
    let unsubscribe;

    let localProducts = [];

    onMount(() => {
        unsubscribe = products.subscribe(value => {
            console.log("subscribed")
            
            localProducts = value;
        })
    })

    onDestroy(() => {
        unsubscribe()
    })
</script>
<h1>hello from products component</h1>
{#each localProducts as product}
    <h2>{product.title}</h2>
{/each}