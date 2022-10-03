<template>
  <div>
    <query-input />
    <div class="result-container">
      <result-table />
      <query-history />
    </div>
  </div>
</template>

<script>
import QueryInput from "@/components/QueryInput.vue";
import ResultTable from "@/components/ResultTable.vue";
import QueryHistory from "@/components/QueryHistory.vue";
export default {
  components: { QueryInput, ResultTable, QueryHistory },
  name: "QueryPage",
};
</script>

<style>
.result-container {
  display: flex;
  flex: 4 1;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>