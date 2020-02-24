<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            link
            router :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item link>
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <!-- show login when not authenticated -->
                <v-list-item-title v-if="!$auth.isAuthenticated" @click="login">Log in</v-list-item-title>
                <!-- show logout when authenticated -->
                <v-list-item-title v-if="$auth.isAuthenticated" @click="logout">Log out</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down" >BorrelAI</span>
      </v-toolbar-title>

      <v-spacer />

    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <slot/>
      </v-container>
    </v-content>
    <v-footer
      color="blue darken-3"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>

  </v-app>
</template>

<script>

export default {

  name: `LayoutDefault`,
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-contacts', text: 'Home', route: '/' },
        { icon: 'mdi-history', text: 'Queue', route: '/queue'},
      ]
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style lang="scss"></style>