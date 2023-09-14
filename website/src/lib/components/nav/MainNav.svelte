<script>
    import Menu from "svelte-material-icons/Menu.svelte"

    import LibrePassIcon from "$lib/images/LibrePass.svelte"
</script>

<div class="navbar bg-base-100 fixed top-0 z-50 max">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <Menu class="h-5 w-5" />
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/auth/register">Register</a></li>
        <!-- <li><a href="/auth/login">Login</a></li> -->
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">
        <LibrePassIcon class="h-6 w-6" />
        LibrePass
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/auth/register">Register</a></li>
      <!-- <li><a href="/auth/login">Login</a></li> -->
      <li><a href="/privacy">Privacy Policy</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <!-- <a class="btn">Button</a> -->
  </div>
</div>
