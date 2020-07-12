<template>
  <div>
    <p>gotrue</p>
    <v-btn @click="signUp">
      sign up
    </v-btn>
  </div>
</template>

<script>
const { log } = console
export default {
  methods: {
    signUp() {
      try {
        this.$auth.signup('vincentgiraud@live.fr', 'motdepasse')
        log('success')
      } catch {
        log('fail')
      }
    },
  },
}
</script>
