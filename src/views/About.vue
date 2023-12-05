<template>
  <section>
    <AppBar />
    <v-container>

      <div class="py-6"></div>
      <span class="red--text font-weight-black headline">About JKT48</span>
      <div class="py-3"></div>
      <!-- Gambar atau video -->
      <iframe width="400" height="315" src="https://www.youtube.com/embed/5cy3vDjTfFY?si=JXZ5uNhyZINkaQ42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <v-card outlined>
        <v-card-text>
          JKT48, sebagaimana grup idol lainnya, memiliki awal yang menarik dan unik dalam pembentukannya. Berikut adalah cerita awal mula pembentukan JKT48:

Pada tahun 2011, produser musik asal Jepang, Yasushi Akimoto, yang juga merupakan otak di balik kelompok idol AKB48 di Jepang, memutuskan untuk membawa konsep "idols you can meet" ke Indonesia. Ide ini berfokus pada interaksi langsung antara penggemar dan anggota idol, di mana anggota idol tidak hanya tampil di atas panggung, tetapi juga berinteraksi langsung dengan penggemar melalui berbagai kesempatan, seperti acara perkenalan dan handshake events.

Bekerjasama dengan perusahaan hiburan Indonesia, Dentsu Media Group Indonesia dan Rakuten, serta agensi bakat peran dan model Zest Inc., Yasushi Akimoto memulai audisi untuk mencari calon anggota JKT48. Audisi ini mencakup proses seleksi ketat untuk menemukan bakat-bakat muda yang akan menjadi bagian dari grup idol pertama di Indonesia.

Pada 17 Desember 2011, JKT48 resmi dibentuk di Jakarta, Indonesia. Grup ini pertama kali tampil di atas panggung pada 3 Februari 2012, di Balai Sarbini, Jakarta. JKT48 kemudian mendirikan teater sendiri, yang menjadi tempat tetap bagi mereka untuk tampil secara rutin dan berinteraksi langsung dengan penggemar.

Sejak pembentukannya, JKT48 terus tumbuh dan berkembang, meraih popularitas yang besar di Indonesia. Mereka tidak hanya aktif dalam dunia musik, tetapi juga terlibat dalam berbagai kegiatan lainnya, termasuk dunia perfilman, iklan, dan kegiatan amal. Keberhasilan JKT48 tidak hanya menciptakan fenomena idol di Indonesia, tetapi juga membawa keunikan konsep "idols you can meet" ke ranah hiburan Tanah Air.

        </v-card-text>
      </v-card>
      <div class="py-3"></div>
    </v-container>
    
    <!-- JKT48 Members Section -->
    <v-container>
      <div class="py-2"></div>
      <v-footer color="red darken-4" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
      <v-col class="red darken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>JKT48 Operation Team</strong>
      </v-col>
    </v-row>
  </v-footer>
    </v-container>

    <!-- Other Sections for JKT48 Information -->

  </section>
</template>

<script>
import AppBar from '../components/AppBar';

export default {
  name: 'About',
  components: {
    AppBar,
  },
  data() {
    return {
      // Remove member data
    };
  },
  links: ['Home', 'News', 'Member', 'About JKT48', 'Produser', 'Kontak'],
        model: null,
  computed: {
    // You can define computed properties specific to the About page here
  },
  methods: {
    // You can define methods specific to the About page here
  },
  // Other lifecycle hooks can be added as needed
};
</script>
