<script>
    import user from "../stores/user";
    import { link } from "svelte-routing";
    // logout function
    import globalStore from "../stores/globalStore"
</script>

{#if $user.jwt}
    <a 
    href="/" 
    use:link
    class="logout-btn" 
    on:click={() => {
        globalStore.toggleItem("sidebar", false)
    }}>
        Logout
    </a>
{:else}
    <a 
    href="/login" 
    use:link
    on:click={() => {
        globalStore.toggleItem("sidebar", false)
    }}>
        Login
    </a>
{/if}
