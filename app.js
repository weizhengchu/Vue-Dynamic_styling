const app = Vue.createApp({
  data() {
    return {
      input1: "",
      boxASelected: false,
      inputBackground: "",
    };
  },
  computed: {
    optionConfirm() {
      if (this.boxASelected) {
        return this.input1 + " " + "visible";
      } else {
        return "hidden";
      }
    },
  },
  methods: {
    setStyle(event) {
      this.input1 = event.target.value;
    },
    boxSelected() {
      this.boxASelected = !this.boxASelected;
    },
  },
});

app.mount("#assignment");
