<script setup>
    import { page } from '$app/stores';
    import Menu from 'svelte-material-icons/Menu.svelte';
    import MenuOpen from 'svelte-material-icons/MenuOpen.svelte';
    import ThemeToggle from './ThemeToggle.svelte';

    export const menus = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/Aboutus' },
        { name: 'Other things ', href: '/Otherthings ' },
        { name: 'Contact Us', href: '/Contactus' },
    ];

    let menuOpen = false;
</script>

<style>
    .selected {
        color: #2980b9; 
    }
</style>

<header class="w-full mb-4">
    <nav class="flex flex-col md:flex-row justify-between gap-4">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-3 group min-w-fit">
                
                <a>
                    <img src="https://avatars.githubusercontent.com/u/151253223?s=200&v=4" alt="pfp" class="h-10 w-10 rounded-full shadow-lg" />
                </a>
                <a href="/" class="text-2xl font-bold"> Everydaywebthings </a>
            </div>
            <button
                class="md:hidden"
                on:mouseup={() => {
                    menuOpen = !menuOpen;
                }}
            >
                {#if menuOpen}
                    <MenuOpen class="h-8 w-8" />
                {:else}
                    <Menu class="h-8 w-8" />
                {/if}
            </button>
        </div>
        <ul
            class="md:flex flex-wrap items-center gap-4 justify-center pt-4 {!menuOpen
                ? 'hidden'
                : 'flex'}"
            style="border-top: 1px solid transparent;"
        >
            {#each menus as menu}
                <li>
                    <a
                        href={menu.href}
                        class="text-lg hover:underline text-center {menu.href === $page.route.id
                            ? 'selected' 
                            : ''}"
                        on:mouseup={() => {
                            menuOpen = false;
                        }}
                    >
                        {menu.name}
                    </a>
                </li>
            {/each}
            
            <li class="flex items-center gap-4">
                
                <ThemeToggle />
            </li>
        </ul>
    </nav>
</header>
