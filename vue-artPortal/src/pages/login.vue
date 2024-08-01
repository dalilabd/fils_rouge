<script>
export default {
  name: 'Login'
}
</script>
<template>
    <RouterLink to="/">Return Home</RouterLink>
  
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-6 text-center text-black">Login to ArtPortal</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        
        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="********"
          />
        </div>
        
        <!-- Remember Me Checkbox -->
        <div class="flex items-center">
          <input
            v-model="rememberMe"
            id="rememberMe"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="rememberMe" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        
        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
      
      <!-- Link to Register Page -->
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? 
        <router-link to="/register" class="text-indigo-600 hover:text-indigo-700">
          Register here
        </router-link>
      </p>
    </div>
  </div>
</template>

<style>
</style>