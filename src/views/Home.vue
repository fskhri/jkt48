<template>
  <section>
    <AppBar />
    <v-carousel cycle v-model="topNewsIndex" :show-arrows="true" hide-delimiters style="width:100%;">
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
      <v-tab>Theater</v-tab>
      <v-tab>Event</v-tab>
      <v-tab>Release</v-tab>
      <v-tab>Other</v-tab>
      <v-tab>Team JKT48</v-tab>
      <v-tab>Team Trainee</v-tab> <!-- New tab for Team Trainee -->
    </v-tabs>
      <div class="py-3"></div>
      <v-card outlined>
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
        <v-card-text>
          <span class="font-weight-bold">14 November 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Event</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai JKT48 OFC Event “Pizza Bonanza - Flavorful Fun Awaits!” with JKT48</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-text>
          <span class="font-weight-bold">10 November 2023</span><br/>
          <div class="py-1"></div>
          <span class="font-weight-medium pink white--text">Theater</span><br/>
          <div class="py-2"></div>
          <span class="headline red--text text-decoration-none"><a href="#" class="text-decoration-none">Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, Digital Photobook “Sayonara Crawl”</a></span>
          <div class="py-3"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="red">
            <span class="white--text">READ MORE</span>
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="py-3"></div>
    </v-container>
    <v-layout justify-center>
      <v-btn outlined color="red">Load More</v-btn>
      <div class="py-3"></div>
    </v-layout>
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Member</span>
      <div class="py-2"></div>
      <v-tabs fixed-tabs color="red darken-4">
        <v-tab>Team JKT48</v-tab>
        <v-tab>Team Trainee</v-tab>
      </v-tabs>
      <div class="py-3"></div>
      <v-slide-group v-model="model" class="" mandatory :show-arrows="shouldShowArrows">
        <v-slide-item v-for="member in member" :key="member.name" v-slot:default="{ active, toggle}">
          <v-card :color="active ? 'red darken-4' : 'grey lighten-1'" class="ma-4" height="141" width="100" @click="toggle">
            <v-img :src="member.src"></v-img>
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-card-title v-if="active" v-text="member.name"></v-card-title>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <div class="py-3"></div>
    </v-container>
    <v-layout justify-center>
      <v-btn outlined color="red">Load More</v-btn>
      <div class="py-3"></div>
    </v-layout>
    <div class="py-5"></div>
    <v-footer color="red darken-4" padless>
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
        { name: 'Adzana Shaliha', src: 'https://jkt48.com/profile/adzana_shaliha.jpg?v=20230116', link: 'jkt48.com'},
        { name: 'Amanda Sukma', src: 'https://jkt48.com/profile/amanda_sukma.jpg?v=20230530'},
        { name: 'Angelina Christy', src: 'https://jkt48.com/profile/angelina_christy.jpg?v=20230116'},
        { name: 'Aurellia', src: 'https://jkt48.com/profile/aurellia.jpg?v=20230531'},
        { name: 'Azizi Asadel', src: 'https://jkt48.com/profile/azizi_asadel.jpg?v=20230116'},
        { name: 'Callista Alfia', src: 'https://jkt48.com/profile/callista_alifia.jpg?v=20230531'},
        { name: 'Cornelia Vanisa', src: 'https://jkt48.com/profile/cornelia_vanisa.jpg?v=20230116'},
        { name: 'Febriola Sinambela', src: 'https://jkt48.com/profile/febriola_sinambela.jpg?v=20230116'},
        { name: 'Feni Fitriyanti', src: 'https://jkt48.com/profile/feni_fitriyanti.jpg?v=20230116'},
        { name: 'Fiony Alveria', src: 'https://jkt48.com/profile/fiony_alveria.jpg?v=20230116'},
        { name: 'Flora Shafiq', src: 'https://jkt48.com/profile/flora_shafiq.jpg?v=20230116'},
        { name: 'Freya Jayawardana', src: 'https://jkt48.com/profile/freya_jayawardana.jpg?v=20230116'},
        { name: 'Gabriella Abigail', src: 'https://jkt48.com/profile/gabriela_abigail.jpg?v=20230531'},
        { name: 'Gita Sekar ANdarini', src: 'https://jkt48.com/profile/gita_sekar_andarini.jpg?v=20230116'},
        { name: 'Helisma Putri', src: 'https://jkt48.com/profile/helisma_putri.jpg?v=20230116'},
        { name: 'Indah Cahya', src: 'https://jkt48.com/profile/indah_cahya.jpg?v=20230116'},
        { name: 'Indira Seruni', src: 'https://jkt48.com/profile/indira_seruni.jpg?v=20230531'},
        { name: 'Jessica Chandra', src: 'https://jkt48.com/profile/jessica_chandra.jpg?v=20230116'},
        { name: 'Jesslyn Elly', src: 'https://jkt48.com/profile/jesslyn_elly.jpg?v=20230531'},
        { name: 'Kathrina Irene', src: 'https://jkt48.com/profile/kathrina_irene.jpg?v=20230116'},
        { name: 'Lulu Salsabila', src: 'https://jkt48.com/profile/lulu_salsabila.jpg?v=20230116'},
        { name: 'Marsha Lenathea', src: 'https://jkt48.com/profile/marsha_lenathea.jpg?v=20230116'},
        { name: 'Mutiara Azzahra', src: 'https://jkt48.com/profile/mutiara_azzahra.jpg?v=20230116'},
        { name: 'Raisha Syifa', src: 'https://jkt48.com/profile/raisha_syifa.jpg?v=20230530'},
        { name: 'Reva Fidela', src: 'https://jkt48.com/profile/reva_fidela.jpg?v=20230116'},
        { name: 'Shani Indira Natio', src: 'https://jkt48.com/profile/shani_indira_natio.jpg?v=20230116'},
        { name: 'Shania Gracia', src: 'https://jkt48.com/profile/shania_gracia.jpg?v=20230116'},
        { name: 'Yessica Tamara', src: 'https://jkt48.com/profile/yessica_tamara.jpg?v=20230116'},
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
