<script>
	// export let name;
	// pages 
	import Login from "./pages/Login.svelte";
	import Checkout from "./pages/Checkout.svelte";
	import productTemplate from "./pages/productTemplate.svelte";
	import Products from "./pages/Products.svelte";
	import About from "./pages/About.svelte";
	import Home from "./pages/Home.svelte";

	// Router
	import { Router, Route, Link } from "svelte-routing"

	// components
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Sidebar from "./components/Navbar/Sidebar.svelte";
</script>

<Router>
	<Navbar />
	<Sidebar />
	<!-- <nav class="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/products">Products</Link>
		<Link to="/products/5">Prod 5</Link>
		<Link to="/products/8">Prod 8</Link>
	</nav> -->

	<Route path="/" component={Home}/>
	<Route path="/about" component={About}/>
	<Route path="/login" component={Login}/>
	<Route path="/products" component={Products}/>
	<Route path="/products/:id" component={productTemplate}/>
	<Route path="/Checkout" component={Checkout}/>
</Router>

<style>
	
</style>
