// Import the createStore function from Vuex
import { createStore } from 'vuex'

// Create and export a new Vuex store instance
export default createStore({
  // Define the initial state of the store
  state: {
    selectedLocation: null, // Initialize selectedLocation as null
  },
  // Define getters to access state properties
  getters: {
    selectedLocation(state) {
      return state.selectedLocation; // Get the selectedLocation from the state
    },
  },
  // Define mutations to modify the state
  mutations: {
    setSelectedLocation(state, location) {
      // Update the selectedLocation in the state with the provided location
      state.selectedLocation = location;
    },
  },
  // Define actions (typically for asynchronous operations)
  actions: {
    // Actions can be defined here if needed
  },
  // Define modules for structured and modularized store setup
  modules: {
    // Modules can be defined here if needed
  }
})
