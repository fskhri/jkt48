<template>
  <section>
    <AppBar />
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Shoping</span>
      <div class="py-2"></div>
      <v-slide-group v-model="model" class="" mandatory show-arrows="shouldShowArrows">
      <v-slide-item v-for="benda in benda" :key="benda.name" v-slot:default="{ active, toggle}">
        <v-card :color="active ? '' : ''" class="ma-4" height="390" width="320" @click="toggle">
          <v-img :src="benda.src"></v-img>
          <v-row class="fill-width" align="center" justify="center">
              <v-card-title v-text="benda.name"></v-card-title>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
      <div class="py-3"></div>
    </v-container>

    <div class="py-5"></div>
    <v-footer fixed color="red darken-4" padless>
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
    name: 'Benda',
    components: {
      AppBar,
    },
    data() {
      return {
        shouldShowArrows: true,
        benda: [
        { name: 'Kipas', src: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/27/7415a4ba-1499-4722-afe0-096611029f47.jpg.webp?ect=4g', link: 'jkt48.com'},
        { name: 'Handuk', src: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/14/24ec5012-df30-4394-8d6c-8105ed7bbe77.jpg'},
        { name: 'T-Shirt', src: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/27/0cd4900a-cbd8-4d05-82f7-e4750a54845f.jpg.webp?ect=4g'},
        { name: 'Light Stick', src: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/28/80e84233-0404-4f59-916f-f2fd8bc474b2.jpg.webp?ect=4g'},
        ],
        links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
        model: null,
      };
    },
  };
  </script>
  