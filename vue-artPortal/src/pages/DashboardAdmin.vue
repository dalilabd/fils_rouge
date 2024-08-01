<template>
  <div class="block">
    <!-- Header -->
    <header class="flex items-center justify-between px-20 py-10 text-black bg-gray-800">
      <div>
        <h1 class="font-bold text-xl text-white">logo</h1>
      </div>
      <nav class="flex space-x-14">
        <RouterLink to="/" class="text-white hover:underline">Home</RouterLink>
        <RouterLink to="/logout" class="text-white hover:underline">logout</RouterLink>
      </nav>
    </header>

    <!-- Admin Management Section -->
    <section class="px-20 py-10 text-black">
      <!-- Add Admin Button -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold">Manage Uses</h2>
        <button @click="openModal('add')" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Add User</button>
      </div>

      <!-- Admins Table -->
      <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-4 py-3">user Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Password</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <!-- Example Admin Row -->
          <tr class="text-gray-700">
            <td class="px-4 py-3 border">John Doe</td>
            <td class="px-4 py-3 border">john@example.com</td>
            <td class="px-4 py-3 border">***********</td>
            <td class="px-4 py-3 border">
              <button @click="openModal('edit', 1)" class="text-blue-500 hover:underline">Edit</button>
              <button @click="deleteAdmin(1)" class="text-red-500 hover:underline ml-4">Delete</button>
            </td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </section>

    <!-- Modal for Add/Edit Admin -->
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
        <form @submit.prevent="handleSubmit">
          <!-- Admin Form Fields -->
          <div class="mb-4">
            <label for="adminName" class="block text-sm font-medium text-gray-700">Admin Name</label>
            <input v-model="form.name" type="text" id="adminName" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>
          <div class="mb-4">
            <label for="adminEmail" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="form.email" type="email" id="adminEmail" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="flex items-center justify-end mt-4">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">Save</button>
            <button @click="closeModal" type="button" class="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:ring-4 focus:ring-gray-300">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      modalTitle: '',
      form: {
        name: '',
        email: ''
      },
      selectedAdminId: null
    };
  },
  methods: {
    openModal(action, id = null) {
      this.modalTitle = action === 'add' ? 'Add Admin' : 'Edit Admin';
      this.isModalOpen = true;
      
      if (action === 'edit' && id) {
        // Load existing data for the selected admin
        this.selectedAdminId = id;
        this.loadAdminData(id);
      } else {
        // Reset form for adding a new admin
        this.resetForm();
      }
    },
    closeModal() {
      this.isModalOpen = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: ''
      };
      this.selectedAdminId = null;
    },
    handleSubmit() {
      if (this.selectedAdminId) {
        // Handle admin update
      } else {
        // Handle admin creation
      }
      this.closeModal();
    },
    loadAdminData(id) {
      // Load existing admin data
      // Example: this.form = fetchedData;
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
