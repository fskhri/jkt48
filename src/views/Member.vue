<template>
    <section>
      <AppBar />
      <v-container>
        <div class="py-6"></div>
        <span class="red--text font-weight-black headline">Members</span>
        <div class="py-2"></div>
        <!-- Add your members content here -->
        <v-slide-group shwo-arrow v-model="model" class="" mandatory show-arrows="hide-md-and-up">
          <v-slide-item v-for="member in members" :key="member.name" v-slot:default="{ active, toggle}">
            <v-card :color="active ? 'red darken-4' : 'grey lighten-1'" class="ma-4" height="520" width="520" @click="toggle">
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
        { name: 'Adzana Shaliha', src: 'https://pbs.twimg.com/media/GAU1N_rbIAAruLd?format=jpg&name=medium', link: 'jkt48.com'},
        { name: 'Amanda Sukma', src: 'https://pbs.twimg.com/media/GAU30TgbQAA43x0?format=jpg&name=medium'},
        { name: 'Angelina Christy', src: 'https://pbs.twimg.com/media/GAU6s73bwAAxGE5?format=jpg&name=medium'},
        { name: 'Aurellia', src: 'https://pbs.twimg.com/media/GAU2GCabkAAxj2Q?format=jpg&name=medium'},
        { name: 'Azizi Asadel', src: 'https://pbs.twimg.com/media/GAVfU3ObcAAXOGU?format=jpg&name=medium'},
        { name: 'Callista Alfia', src: 'https://jkt48.com/profile/callista_alifia.jpg?v=20230531'},
        { name: 'Cornelia Vanisa', src: 'https://jkt48.com/profile/cornelia_vanisa.jpg?v=20230116'},
        { name: 'Febriola Sinambela', src: 'https://jkt48.com/profile/febriola_sinambela.jpg?v=20230116'},
        { name: 'Feni Fitriyanti', src: 'https://jkt48.com/profile/feni_fitriyanti.jpg?v=20230116'},
        { name: 'Fiony Alveria', src: 'https://pbs.twimg.com/media/GAUqENmaUAAvvjk?format=jpg&name=medium'},
        { name: 'Flora Shafiq', src: 'https://jkt48.com/profile/flora_shafiq.jpg?v=20230116'},
        { name: 'Freya Jayawardana', src: 'https://pbs.twimg.com/media/GAU2As8b0AA0QM9?format=jpg&name=medium'},
        { name: 'Gabriella Abigail', src: 'https://pbs.twimg.com/media/GAUp40daIAAACJe?format=jpg&name=medium'},
        { name: 'Gita Sekar Andarini', src: 'https://pbs.twimg.com/media/GAVuinubwAA0uZY?format=jpg&name=medium'},
        { name: 'Helisma Putri', src: 'https://pbs.twimg.com/media/GAUrF4xakAATcHg?format=jpg&name=medium'},
        { name: 'Indah Cahya', src: 'https://pbs.twimg.com/media/GAU1O0tawAAiULz?format=jpg&name=small'},
        { name: 'Indira Seruni', src: 'https://pbs.twimg.com/media/GAUp-Arb0AA8ofY?format=jpg&name=medium'},
        { name: 'Jessica Chandra', src: 'https://pbs.twimg.com/media/GAUqJMrbUAAmb6I?format=jpg&name=medium'},
        { name: 'Jesslyn Elly', src: 'https://jkt48.com/profile/jesslyn_elly.jpg?v=20230531'},
        { name: 'Kathrina Irene', src: 'https://pbs.twimg.com/media/GAU1NSUbMAEvPJa?format=jpg&name=medium'},
        { name: 'Lulu Salsabila', src: 'https://jkt48.com/profile/lulu_salsabila.jpg?v=20230116'},
        { name: 'Marsha Lenathea', src: 'https://jkt48.com/profile/marsha_lenathea.jpg?v=20230116'},
        { name: 'Mutiara Azzahra', src: 'https://jkt48.com/profile/mutiara_azzahra.jpg?v=20230116'},
        { name: 'Raisha Syifa', src: 'https://jkt48.com/profile/raisha_syifa.jpg?v=20230530'},
        { name: 'Reva Fidela', src: 'https://pbs.twimg.com/media/GAU9swkaUAA9Znp?format=jpg&name=medium'},
        { name: 'Shani Indira Natio', src: 'https://pbs.twimg.com/media/GAV70MGaYAATPfZ?format=jpg&name=medium'},
        { name: 'Shania Gracia', src: 'https://pbs.twimg.com/media/GAV4escaYAArTOi?format=jpg&name=medium'},
        { name: 'Yessica Tamara', src: 'https://jkt48.com/profile/yessica_tamara.jpg?v=20230116'},
        ],
        links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
        model: null,
      };
    },
  };
  </script>
  