<template>
    <div class="block">
      <!-- Header -->
      <header class="flex items-center justify-between px-4 py-4 text-black bg-gray-800">
        <div>
          <h1 class="font-bold text-xl text-white">logo</h1>
        </div>
        <nav class="flex space-x-4">
          <RouterLink to="/" class="text-white hover:underline">Home</RouterLink>
          <RouterLink to="/Login" class="text-white hover:underline">Logout</RouterLink>
        </nav>
      </header>
  
      <!-- Image Section -->
      <section class="px-4 py-6 text-black">
        <!-- Roles Table -->
        <div class="mb-8">
          <div class="flex items-center justify-around">
            <h2 class="text-lg font-semibold mb-4">Roles</h2>
            <!-- Add Role Button -->
            <button @click="openModal('add', 'role')" class="mt-4 text-white bg-green-500 hover:bg-green-600 mb-6 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Add Role</button>
          </div>
  
          <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Role Name</th>
                <th class="px-4 py-3">Guard Name</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3 border">Admin</td>
                <td class="px-4 py-3 border">web</td>
                <td class="px-4 py-3 border">
                  <button @click="openModal('edit', 'role', 1)" class="text-blue-500 hover:underline">Edit</button>
                  <button @click="deleteRole(1)" class="text-red-500 hover:underline ml-4">Delete</button>
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
  
        <!-- Permissions Table -->
        <div class="mb-8">
          <div class="flex items-center justify-around">
            <h2 class="text-lg font-semibold mb-4">Permissions</h2>
            <!-- Add Permission Button -->
            <button @click="openModal('add', 'permission')" class="mt-4 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6">Add Permission</button>
          </div>
  
          <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Permission Name</th>
                <th class="px-4 py-3">Guard Name</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3 border">Edit Users</td>
                <td class="px-4 py-3 border">web</td>
                <td class="px-4 py-3 border">
                  <button @click="openModal('edit', 'permission', 1)" class="text-blue-500 hover:underline">Edit</button>
                  <button @click="deletePermission(1)" class="text-red-500 hover:underline ml-4">Delete</button>
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
  
        <!-- Admins Table -->
        <div>
          <div class="flex items-center justify-around">
            <h2 class="text-lg font-semibold mb-4">Admins</h2>
            <!-- Add Admins Button -->
            <button @click="openModal('add', 'admins')" class="mt-4 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6">Add Admins</button>
          </div>
  
          <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Admin Name</th>
                <th class="px-4 py-3">Email</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3 border">John Doe</td>
                <td class="px-4 py-3 border">john@example.com</td>
                <td class="px-4 py-3 border">
                  <button @click="openModal('edit', 'admins', 1)" class="text-blue-500 hover:underline">Edit</button>
                  <button @click="deleteAdmin(1)" class="text-red-500 hover:underline ml-4">Delete</button>
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </section>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto p-6">
          <!-- Modal header -->
          <div class="flex items-start justify-between mb-4 border-b pb-2">
            <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold">
              {{ modalTitle }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <!-- Modal body -->
          <div>
            <form @submit.prevent="handleSubmit">
              <!-- Conditional Form Fields -->
              <div v-if="modalType === 'role'">
                <div class="mb-4">
                  <label for="roleName" class="block text-sm font-medium text-gray-700">Role Name</label>
                  <input v-model="form.name" type="text" id="roleName" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
                <div class="mb-4">
                  <label for="roleGuard" class="block text-sm font-medium text-gray-700">Guard Name</label>
                  <input v-model="form.guard" type="text" id="roleGuard" name="guard" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
              </div>
  
              <div v-if="modalType === 'permission'">
                <div class="mb-4">
                  <label for="permissionName" class="block text-sm font-medium text-gray-700">Permission Name</label>
                  <input v-model="form.name" type="text" id="permissionName" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
                <div class="mb-4">
                  <label for="permissionGuard" class="block text-sm font-medium text-gray-700">Guard Name</label>
                  <input v-model="form.guard" type="text" id="permissionGuard" name="guard" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
              </div>
  
              <div v-if="modalType === 'admins'">
                <div class="mb-4">
                  <label for="adminName" class="block text-sm font-medium text-gray-700">Admin Name</label>
                  <input v-model="form.name" type="text" id="adminName" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
                <div class="mb-4">
                  <label for="adminEmail" class="block text-sm font-medium text-gray-700">Email</label>
                  <input v-model="form.email" type="email" id="adminEmail" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Permissions</label>
                  <div class="mt-2 space-y-2">
                    <div v-for="permission in availablePermissions" :key="permission.id" class="flex items-center">
                      <input type="checkbox" :id="'permission-' + permission.id" :value="permission.id" v-model="form.permissions" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                      <label :for="'permission-' + permission.id" class="ml-2 text-sm text-gray-600">{{ permission.name }}</label>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="flex items-center justify-end mt-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">Save</button>
                <button @click="closeModal" type="button" class="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:ring-4 focus:ring-gray-300">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        modalType: '',
        modalTitle: '',
        form: {
          name: '',
          guard: '',
          email: '',
          permissions: []
        },
        availablePermissions: [] // Fetch available permissions dynamically
      };
    },
    methods: {
      openModal(action, type, id = null) {
        this.modalType = type;
        this.modalTitle = action === 'add' ? `Add ${type.charAt(0).toUpperCase() + type.slice(1)}` : `Edit ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        this.isModalOpen = true;
        
        // Fetch available permissions if type is 'admins'
        if (type === 'admins') {
          this.fetchAvailablePermissions();
        }
  
        // Load existing data if editing
        if (action === 'edit' && id) {
          this.loadExistingData(type, id);
        }
      },
      closeModal() {
        this.isModalOpen = false;
        this.resetForm();
      },
      resetForm() {
        this.form = {
          name: '',
          guard: '',
          email: '',
          permissions: []
        };
      },
      handleSubmit() {
        // Submit form data based on modalType
        if (this.modalType === 'role') {
          // Handle role submission
        } else if (this.modalType === 'permission') {
          // Handle permission submission
        } else if (this.modalType === 'admins') {
          // Handle admin submission
        }
        this.closeModal();
      },
      loadExistingData(type, id) {
        // Load existing data for the selected type
      },
      fetchAvailablePermissions() {
        // Fetch available permissions dynamically from the server
      },
      deleteRole(id) {
        // Handle role deletion
      },
      deletePermission(id) {
        // Handle permission deletion
      },
      deleteAdmin(id) {
        // Handle admin deletion
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  