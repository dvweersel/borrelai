<template>
  <div class="SongTable">
    <v-simple-table height="300px">
      <template v-slot:default>
        <thead>
        <tr>
            <th class="text-left">Song</th>
            <th class="text-left">Artist</th>
            <th class="text-left">Votes</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="song in songs" :key="song.id" :sort-by="song.votes">
            <td>{{ song.song }}</td>
            <td>{{ song.artist }}</td>
            <td><v-btn small @click="increaseVotes(song)">{{ song.votes }}</v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  export default {
    name: 'song-table',
    data() {
      return {
        songs: [
          { id: 0, song: "Rampeneren", artist: 'K-liber', votes: 0, voted: 0},
          { id: 1, song: "Ik leef niet meer voor jou", artist: 'Marco Borsato', votes: 5, voted: 0 },
          { id: 2, song: "Nothing else matters", artist: 'Metallica', votes: 0, voted: 0 },
          { id: 3, song: "Dancing Queen", artist: 'ABBA', votes: 0, voted: 0 }
        ]
      }
    },
    methods: {
        increaseVotes: function (song) {
          if (song.voted == 0) {
            song.votes++;
          }

          song.voted = 1
        }
    },
  }
</script>

<style></style>