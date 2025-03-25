<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    const routes = [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Form',
        href: '/form'
      },
      {
        label: 'Dashboard',
        href: '/dashboard'
      } 
    ];
  </script>
  
  <Sidebar class="h-screen px-auto border invisible lg:visible">
    <SidebarWrapper class="h-screen bg-slate-900">
      <SidebarGroup class="">
        {#each routes as {label, href}}
        <SidebarItem {label} {href} class="text-white bg-slate-900 border border-cyan-400 hover:bg-gradient-to-b from-slate-900 to-slate-800"/>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>