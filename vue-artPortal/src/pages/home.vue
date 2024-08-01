<template>
    <div class="block">
      <!-- Header -->
      <header class="flex items-center justify-between px-20 py-10 text-black">
        <div>
          <h1 class="font-bold text-xl">logo</h1>
        </div>
        <nav class="flex space-x-14">
          <RouterLink to="/">home</RouterLink>
          <RouterLink to="/Login">Login</RouterLink>
          <RouterLink to="/Register">Create Account</RouterLink>
          <RouterLink to="/DashboardSuperAdmin">Super Admin</RouterLink>
        </nav>
      </header>
      <!-- Image Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 py-10 text-black">
        <h1>im section hero </h1>
      </section>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Home'
    }
  </script>
  
  <style scoped>

  </style>
  