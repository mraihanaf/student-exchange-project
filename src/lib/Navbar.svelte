<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="border lg:hidden border-none bg-transparent" color="dark">
    <NavHamburger color="dark" class="bg-transparent"/>
    <NavUl class="flex bg-transparent justify-center">
        <NavLi href="/" class="">Home</NavLi>
        <NavLi href="/form" class="">Form</NavLi>
        <NavLi href="/dashboard">Dashboard</NavLi>
    </NavUl>
</Navbar>