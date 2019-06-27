<template>
  <b-card class="md-card-login" :class="{ 'md-card-hidden': cardHidden }">
    <b-card-header :class="getClass(headerColor)">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </b-card-header>

    <b-card-text>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
    </b-card-text>

    <b-card-footer>
      <slot name="footer"></slot>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "login-card",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css"></style>
