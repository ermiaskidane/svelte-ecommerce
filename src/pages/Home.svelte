<script>
    import Hero from "../components/Hero.svelte";
    import { Link } from "svelte-routing";

    //featured products
    function getProps() {
        return { class: "btn btn-primary btn-hero"}
    }

</script>

<Hero>
    <Link to="/products" {getProps}>Shop now</Link>
</Hero>