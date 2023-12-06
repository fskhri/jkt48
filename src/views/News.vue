<template>
    <section>
      <AppBar />
      <v-container>
        <div class="py-6"></div>
        <span class="red--text font-weight-black headline">News</span>
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
          { date: '5 Desember 2023', category: 'Other', titles: ['Pengumuman Mengenai JKT48 FLOWERFUL GIVEAWAY (Road to JKT48 12th Anniversary Concert)']},
          { date: '2 Desember 2023', category: 'Theater', titles: ['Pengumuman Mengenai Pre-Order Digital Photobook “FLOWERFUL” dengan bonus Video Call with JKT48']},
          { date: '1 Desember 2023', category: 'Birthday', titles: ['Pengumuman Mengenai Birthday 2-Shot Online Bulan Desember dengan Chekicha'], link: '#', categoryBackgroundColor: 'green'},
          { date: '29 November 2023', category: 'Theater', titles: ['Pengumuman Mengenai Video Call Pengganti Adzana Shaliha, Azizi Asadel, Febriola Sinambela dan Indah Cahya'], link: '#', categoryBackgroundColor: 'blue'},
          { date: '14 November 2023', category: 'Event', titles: ['Pengumuman Mengenai JKT48 OFC Event “Pizza Bonanza - Flavorful Fun Awaits!” with JKT48'], link: '#', categoryBackgroundColor: 'red'},
          { date: '10 November 2023', category: 'Theater', titles: ['Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, Digital Photobook “Sayonara Crawl”'], link: '#', categoryBackgroundColor: 'red'}
        ],
        links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
      };
    },
  };
  </script>