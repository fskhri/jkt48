<template>
  <section>
    <AppBar />
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Shop</span>
      <div class="py-2"></div>
      <v-row>
        <v-col v-for="bendaItem in benda" :key="bendaItem.name" cols="12" sm="6" md="4" lg="3">
          <v-card :color="'grey lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
            <v-img :src="bendaItem.src"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-card-title v-text="bendaItem.name"></v-card-title>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div class="py-3"></div>
    </v-container>

    <div class="py-5"></div>
    <v-footer color="red darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
      <v-col class="red darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>JKT48 Operation Team</strong>
      </v-col>
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
      benda: [
        { name: 'Lightstick', src: 'https://example.com/lightstick.jpg', link: 'example.com/lightstick'},
        { name: 'T-shirt', src: 'https://example.com/t-shirt.jpg', link: 'example.com/t-shirt'},
        { name: 'Keychain', src: 'https://example.com/keychain.jpg', link: 'example.com/keychain'},
        { name: 'Poster', src: 'https://example.com/poster.jpg', link: 'example.com/poster'},
        { name: 'Handuk', src: 'https://example.com/handuk.jpg', link: 'exmaple.com/handuk'},
        { name: 'Topi', src: 'https://exmaple.com/Topi.jpg', link: 'example.com/topi'}
        // ... (other benda items)
      ],
      links: ['Home', 'News', 'Shop', 'About Us', 'Contact'],
      model: null,
    };
  },
};
</script>
