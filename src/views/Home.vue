<template>
  <section>
    <AppBar />
    <v-carousel cycle v-model="topNewsIndex" hide-delimiters style="width: 100%"
    hide-on="sm-and-up" show-on="xs">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">News</span>
      <div class="py-2"></div>
      <v-tabs fixed-tabs color="red darken-4">
      <v-tab>All</v-tab>
      </v-tabs>
      <div class="py-3"></div>
      <v-card outlined>
        <v-card-text>
          <span class="font-weight-bold">5 Desember 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Other</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai JKT48 FLOWERFUL GIVEAWAY (Road to JKT48 12th Anniversary Concert)</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-text>
          <span class="font-weight-bold">2 Desember 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Theater</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai Pre-Order Digital Photobook “FLOWERFUL” dengan bonus Video Call with JKT48</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-text>
          <span class="font-weight-bold">1 Desember 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Birthday</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai Birthday 2-Shot Online Bulan Desember dengan Chekicha</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-text>
          <span class="font-weight-bold">29 November 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Theater</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai Video Call Pengganti Adzana Shaliha, Azizi Asadel, Febriola Sinambela dan Indah Cahya</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-layout justify-center>
      <v-btn outlined color="red">
        <router-link to="/News"  class="red--text">READ MORE</router-link>
      </v-btn>
      <div class="py-3"></div>
    </v-layout>
      <div class="py-3"></div>
    </v-container>
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Member</span>
      <div class="py-2"></div>
      <v-tabs fixed-tabs color="red darken-4">
        <v-tab>Team JKT48</v-tab>
      </v-tabs>
      <div class="py-3"></div>

      <v-slide-group v-model="model" class="" mandatory :show-arrows="shouldShowArrows">
  <v-slide-item v-for="memberItem in member" :key="memberItem.name" v-slot:default="{ active, toggle }">
    <v-card :color="active ? '' : ''" class="ma-4" height="250" width="200" @click="toggle" flat>
      <v-img :src="memberItem.src"></v-img>
      <v-row class="fill-width" align="center" justify="center">
        <v-card-title v-text="memberItem.name"></v-card-title>
      </v-row>
    </v-card>
  </v-slide-item>
</v-slide-group>


      <div class="py-3"></div>
    </v-container>
    <div class="py-5"></div>
    <v-footer color="red darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="red darken-4 py-4 text-center white--text" position="fixed" cols="12">{{ new Date().getFullYear() }} — <strong>JKT48 Operation Team</strong></v-col>
      </v-row>
    </v-footer>
  </section>
</template>

<script>
import AppBar from '../components/AppBar';

export default {
  name: 'Home',
  components: {
    AppBar,
  },
  data() {
    return {
      shouldShowArrows: true,
      items: [
        { src: 'https://pbs.twimg.com/media/F_zL_t_bsAAv_uP?format=jpg&name=4096x4096' }
      ],
      topNewsIndex: 0,
      model: null,
      member: [
      { name: 'Adzana Shaliha', src: 'https://pbs.twimg.com/media/GAU1N_rbIAAruLd?format=jpg&name=medium', link: 'jkt48.com'},
        { name: 'Amanda Sukma', src: 'https://pbs.twimg.com/media/GAU30TgbQAA43x0?format=jpg&name=medium'},
        { name: 'Angelina Christy', src: 'https://pbs.twimg.com/media/GAU6s73bwAAxGE5?format=jpg&name=medium'},
        { name: 'Aurellia', src: 'https://pbs.twimg.com/media/GAU2GCabkAAxj2Q?format=jpg&name=medium'},
        { name: 'Azizi Asadel', src: 'https://pbs.twimg.com/media/GAVfU3ObcAAXOGU?format=jpg&name=medium'},
        { name: 'Callista Alfia', src: 'https://pbs.twimg.com/media/GAZaiYHa8AAp9gt?format=jpg&name=medium'},
        { name: 'Cornelia Vanisa', src: 'https://pbs.twimg.com/media/GAU4Xb_bcAApcop?format=jpg&name=medium'},
        { name: 'Febriola Sinambela', src: 'https://pbs.twimg.com/media/GAVIj0YaoAAo4Tt?format=jpg&name=medium'},
        { name: 'Feni Fitriyanti', src: 'https://jkt48.com/profile/feni_fitriyanti.jpg?v=20230116'},
        { name: 'Fiony Alveria', src: 'https://pbs.twimg.com/media/GAUqENmaUAAvvjk?format=jpg&name=medium'},
        { name: 'Flora Shafiq', src: 'https://pbs.twimg.com/media/GAU4WpZbQAA2Wef?format=jpg&name=medium'},
        { name: 'Freya Jayawardana', src: 'https://pbs.twimg.com/media/GAU2As8b0AA0QM9?format=jpg&name=medium'},
        { name: 'Gabriella Abigail', src: 'https://pbs.twimg.com/media/GAUp40daIAAACJe?format=jpg&name=medium'},
        { name: 'Gita Sekar Andarini', src: 'https://pbs.twimg.com/media/GAVuinubwAA0uZY?format=jpg&name=medium'},
        { name: 'Helisma Putri', src: 'https://pbs.twimg.com/media/GAUrF4xakAATcHg?format=jpg&name=medium'},
        { name: 'Indah Cahya', src: 'https://pbs.twimg.com/media/GAU1O0tawAAiULz?format=jpg&name=medium'},
        { name: 'Indira Seruni', src: 'https://pbs.twimg.com/media/GAUp-Arb0AA8ofY?format=jpg&name=medium'},
        { name: 'Jessica Chandra', src: 'https://pbs.twimg.com/media/GAUqJMrbUAAmb6I?format=jpg&name=medium'},
        { name: 'Jesslyn Elly', src: 'https://pbs.twimg.com/media/GAVCKVabYAAVQ98?format=jpg&name=medium'},
        { name: 'Kathrina Irene', src: 'https://pbs.twimg.com/media/GAU1NSUbMAEvPJa?format=jpg&name=medium'},
        { name: 'Lulu Salsabila', src: 'https://pbs.twimg.com/media/GAU4YTHbwAAyaAg?format=jpg&name=medium'},
        { name: 'Marsha Lenathea', src: 'https://pbs.twimg.com/media/GAU4WIjbUAAufzn?format=jpg&name=medium'},
        { name: 'Mutiara Azzahra', src: 'https://pbs.twimg.com/media/GAU4uzSbQAAFqyF?format=jpg&name=medium'},
        { name: 'Raisha Syifa', src: 'https://pbs.twimg.com/media/GAU-MijaMAANw6x?format=jpg&name=medium'},
        { name: 'Reva Fidela', src: 'https://pbs.twimg.com/media/GAU9swkaUAA9Znp?format=jpg&name=medium'},
        { name: 'Shani Indira Natio', src: 'https://pbs.twimg.com/media/GAV70MGaYAATPfZ?format=jpg&name=medium'},
        { name: 'Shania Gracia', src: 'https://pbs.twimg.com/media/GAV4escaYAArTOi?format=jpg&name=medium'},
        { name: 'Yessica Tamara', src: 'https://pbs.twimg.com/media/GAWWjMCbEAAo7Mj?format=jpg&name=medium'},
      ],
      links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
    };
  },
  computed: {
    computedShouldShowArrows() {
    // Implement your logic here to determine when to show or hide arrows
    return this.someCondition; // Adjust this condition based on your needs
  },
},
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.autoSlideTimer = setInterval(() => {
        this.topNewsIndex = (this.topNewsIndex + 1) % this.items.length;
      }, 5000);
    },
  },
  beforeDestroy() {
    clearInterval(this.autoSlideTimer);
  },
};
</script>
