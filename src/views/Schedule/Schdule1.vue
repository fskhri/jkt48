<template>
    <div>
      <v-card>
        <!-- Add detailed information about the schedule item here -->
        <v-card-title>{{ scheduleItem.name }}</v-card-title>
        <v-img :src="scheduleItem.src"></v-img>
        <!-- Add more details as needed -->
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScheduleItemDetail',
    props: {
      scheduleItem: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the detailed view if needed */
  </style>
  