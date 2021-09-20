<script>
    import Hero from "../components/Hero.svelte";
    // import { Link } from "svelte-routing";
    import { link } from "svelte-routing"

    //featured products
    // function getProps() {
    //     return { class: "btn btn-primary btn-hero"}
    // }

</script>

<Hero>
    <a href="/products" class="btn btn-primary btn-hero" use:link>Shop now</a>
    <!-- <Link to="/products" {getProps}>Shop now</Link> -->
</Hero>