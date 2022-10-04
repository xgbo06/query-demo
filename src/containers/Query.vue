<template>
  <div>
    <query-input />
    <div class="action-button-container">
      <button
        class="btn btn-success"
        type="button"
        @click="toggleHistoryExpand"
      >
        {{ showHistory ? "Collapse" : "Expand" }} History
        {{ showHistory ? "⏫" : "⏬" }}
      </button>
      <button class="btn btn-success" type="button">Add to Favorite ⭐️</button>
    </div>
    <query-history v-show="showHistory" transition="fadeIn" />
    <vue-virtual-table :config="headers" :data="result" bordered>
    </vue-virtual-table>
    <!-- No Good Virtualization this i could find or implement 
    <div class="result-container">
      <div class="query-result-container"></div>
      <query-history />
    </div> -->
  </div>
</template>

<script>
import QueryInput from "@/components/QueryInput.vue";
import QueryHistory from "@/components/QueryHistory.vue";
import VueVirtualTable from "vue-virtual-table";

import { getCustomers, getPrettyHeader } from "@/util/FakePromise";

export default {
  components: { QueryInput, QueryHistory, VueVirtualTable },
  name: "QueryPage",
  data() {
    return {
      showHistory: false,
      result: [],
      headers: [],
    };
  },
  methods: {
    toggleHistoryExpand() {
      this.showHistory = !this.showHistory;
    },
  },
  mounted() {
    getCustomers().then((r) => {
      this.result = r;
      this.headers = getPrettyHeader(r[0]);
    });
  },
};
</script>

<style>
.result-container {
  display: flex;
  flex: 4 1;
  flex-wrap: wrap;
  flex-grow: 1;
}
.query-result-container {
  border: solid black 1px;
  flex-grow: 1;
  flex-basis: 500px;
}
.action-button-container {
  display: flex;
  justify-content: flex-end;
}
</style>