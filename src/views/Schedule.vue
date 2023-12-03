<template>
  <section>
    <AppBar />
    <v-container>
      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">Schedule</span>
      <div class="py-2"></div>

      <!-- Add your schedule content here -->
      <v-card outlined v-for="(event, index) in schedule" :key="index">
        <v-card-text>
      <span class="font-weight-bold">{{ event.date }}</span><br/>
      <div class="py-1"></div>
      <span :style="{ 'background-color': event.categoryBackgroundColor }" class="font-weight-medium pink white--text">{{ event.category }}</span><br/>
      <div class="py-2"></div>
      <span class="headline red--text text-decoration-none">
        <a :href="event.link" class="text-decoration-none">
          {{ event.title }}
          <span v-if="event.titles && event.titles.length">
             {{ event.titles.join(' - ') }}
          </span>
        </a>
      </span>
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
  name: 'Schedule',
  components: {
    AppBar,
  },
  data() {
    return {
      schedule: [
        { date: 'December 03 (Minggu), 2023', category: 'TRAINEE', titles: ['Ingin Bertemu'], link: '#', categoryBackgroundColor: 'green'},
        { date: 'December 02 (Sabtu), 2023', category: 'EVENT', titles: ['Wonderful Kukar 2023', 'Motion Ime Festival'], link: '#', categoryBackgroundColor: 'blue'},
        { date: 'December 01 (Jumat), 2023', category: 'JKT48', titles: ['Aturan Anti Cinta'], link: '#', categoryBackgroundColor: 'red'},
        { date: 'November 26 (Minggu), 2023', category: 'JKT48', titles: ['Aturan Anti Cinta'], link: '#', categoryBackgroundColor: 'red'}
      ],
      links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
    };
  },
};
</script>