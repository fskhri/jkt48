<template>
    <section>
      <AppBar />
      <v-container>
        <div class="py-6"></div>
        <span class="red--text font-weight-black headline">Members</span>
        <div class="py-2"></div>
        <!-- Add your members content here -->
        <v-slide-group v-model="model" class="" mandatory show-arrows="hide-md-and-up">
          <v-slide-item v-for="member in members" :key="member.name" v-slot:default="{ active, toggle}">
            <v-card :color="active ? 'red darken-4' : 'grey lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
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
    name: 'Members',
    components: {
      AppBar,
    },
    data() {
      return {
        members: [
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
        model: null,
      };
    },
  };
  </script>
  