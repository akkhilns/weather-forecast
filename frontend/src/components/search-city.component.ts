// Import Vue class and Options decorator from vue-class-component
import { Options, Vue } from 'vue-class-component';

// Import the Vuex store instance
import store from '@/store';

// Use the Options decorator to define component options
@Options({
  props: {
    // Props can be defined here if needed
  }
})
export default class SearchCity extends Vue {
  // Define a property to store the selected place's coordinates
  selectedPlace: { lat: number; lng: number } | null = null;

  // Method to handle when the place selection changes
  placeChanged(place: any) {
    // Update the selectedPlace property with the new coordinates
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    // Commit the selected location to the Vuex store using a mutation
    store.commit('setSelectedLocation', this.selectedPlace);
  }

  // Method to handle when the map is clicked
  handleMapClick(event: any) {
    // Update the selectedPlace property with the clicked coordinates
    this.selectedPlace = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // Commit the selected location to the Vuex store using a mutation
    store.commit('setSelectedLocation', this.selectedPlace);
  }
}
