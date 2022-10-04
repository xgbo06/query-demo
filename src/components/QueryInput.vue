<template>
  <div>
    <form @submit.prevent="onQuerySubmit" @keyup.ctrl.enter="onQuerySubmit">
      <textarea class="form-control" v-model="query"></textarea>
      <button class="btn btn-success" type="submit" :disabled="!query">
        Submit
      </button>
      <button class="btn btn-warning" type="reset">Reset</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "QueryInput",
  props: {
    msg: String,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onQuerySubmit() {
      if (this.query) {
        this.$emit("onSearch", { query: this.query });
      }
    },
  },
};
</script>