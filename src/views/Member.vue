<template>
    <div class="wrapper">
  <section>
    <AppBar />
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Members</span>
      <div class="py-2"></div>
      <v-slide-group v-model="model" class="" mandatory show-arrows="shouldShowArrows">
      <v-slide-item v-for="member in members" :key="member.name" v-slot:default="{ active, toggle}">
        <v-card :color="active ? '' : ''" class="ma-4" height="390" width="320" @click="toggle">
          <v-img :src="member.src"></v-img>
          <v-row class="fill-width" align="center" justify="center">
              <v-card-title v-text="member.name"></v-card-title>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
      <div class="py-3"></div>
    </v-container>
    
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Trainee</span>
      <div class="py-2"></div>
      <v-slide-group v-model="traineeModel" class="" mandatory show-arrows="shouldShowArrows">
        <v-slide-item v-for="trainee in traineeMembers" :key="trainee.name" v-slot:default="{ active, toggle}">
          <v-card :color="active ? '' : ''" class="ma-4" height="390" width="320" @click="toggle">
            <v-img :src="trainee.src"></v-img>
            <v-row class="fill-width" align="center" justify="center">
              <v-card-title v-text="trainee.name"></v-card-title>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <div class="py-3"></div>
    </section>

    
    <v-footer color="red darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="red darken-4 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>JKT48 Operation Team</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
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
        shouldShowArrows: true,
        members: [
        { name: 'Adzana Shaliha', src: 'https://pbs.twimg.com/media/GAU1N_rbIAAruLd?format=jpg&name=medium', link: 'jkt48.com'},
        { name: 'Amanda Sukma', src: 'https://pbs.twimg.com/media/GAU30TgbQAA43x0?format=jpg&name=medium'},
        { name: 'Angelina Christy', src: 'https://pbs.twimg.com/media/GAU6s73bwAAxGE5?format=jpg&name=medium'},
        { name: 'Aurellia', src: 'https://pbs.twimg.com/media/GAU2GCabkAAxj2Q?format=jpg&name=medium'},
        { name: 'Azizi Asadel', src: 'https://pbs.twimg.com/media/GAVfU3ObcAAXOGU?format=jpg&name=medium'},
        { name: 'Callista Alfia', src: 'https://pbs.twimg.com/media/GAZaiYHa8AAp9gt?format=jpg&name=medium'},
        { name: 'Cornelia Vanisa', src: 'https://pbs.twimg.com/media/GAU4Xb_bcAApcop?format=jpg&name=medium'},
        { name: 'Febriola Sinambela', src: 'https://pbs.twimg.com/media/GAVIj0YaoAAo4Tt?format=jpg&name=medium'},
        { name: 'Feni Fitriyanti', src: 'https://pbs.twimg.com/media/GA_EIo5bUAACCgR?format=jpg&name=medium'},
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
        traineeMembers: [
        { name: 'Adzana Shaliha', src: 'https://pbs.twimg.com/media/GAU1N_rbIAAruLd?format=jpg&name=medium', link: 'jkt48.com'},
        { name: 'Amanda Sukma', src: 'https://pbs.twimg.com/media/GAU30TgbQAA43x0?format=jpg&name=medium'},
        { name: 'Angelina Christy', src: 'https://pbs.twimg.com/media/GAU6s73bwAAxGE5?format=jpg&name=medium'},
        { name: 'Aurellia', src: 'https://pbs.twimg.com/media/GAU2GCabkAAxj2Q?format=jpg&name=medium'},
        { name: 'Azizi Asadel', src: 'https://pbs.twimg.com/media/GAVfU3ObcAAXOGU?format=jpg&name=medium'},
        { name: 'Callista Alfia', src: 'https://pbs.twimg.com/media/GAZaiYHa8AAp9gt?format=jpg&name=medium'},
        { name: 'Cornelia Vanisa', src: 'https://pbs.twimg.com/media/GAU4Xb_bcAApcop?format=jpg&name=medium'},
        { name: 'Febriola Sinambela', src: 'https://pbs.twimg.com/media/GAVIj0YaoAAo4Tt?format=jpg&name=medium'},
        { name: 'Feni Fitriyanti', src: 'https://pbs.twimg.com/media/GA_EIo5bUAACCgR?format=jpg&name=medium'},
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
        model: null,
      };
    },
    methods: {
    navigate(route) {
      this.$router.push({ path: `/${route}` });
    },
  },
  };
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Add your other styles here */
</style>
