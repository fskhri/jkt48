<template>
  <section>
    <AppBar />
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Shop</span>
      <div class="py-2"></div>
      <!-- Add your barang content here -->
      <v-row>
        <v-col v-for="barangItem in barang" :key="barangItem.name" cols="12" sm="6" md="4" lg="3">
          <v-card :color="'grey lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
            <v-img :src="barangItem.src"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-card-title v-text="barangItem.name"></v-card-title>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div class="py-3"></div>
    </v-container>

    <div class="py-5"></div>
    <v-footer color="transparent" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="red darken-4 py-4 text-center white--text" cols="12">{{ new Date().getFullYear() }} — <strong>JKT48 Operation Team</strong></v-col>
      </v-row>
    </v-footer>
  </section>
</template>

<script>
import AppBar from '../components/AppBar';

export default {
  name: 'Shop',
  components: {
    AppBar,
  },
  data() {
    return {
      barang: [
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        // ... (other barang items)
      ],
      links: ['Home', 'News', 'Barang', 'About JKT48', 'Produser', 'Kontak'],
      model: null,
    };
  },
};
</script>
