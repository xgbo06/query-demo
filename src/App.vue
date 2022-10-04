<template>
  <div id="app">
    <query />
  </div>
</template>

<script>
import Query from "./containers/Query.vue";

export default {
  name: "App",
  components: {
    Query,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.55rem;
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 0.25rem;
  margin: 5px;
  cursor: pointer;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
textarea {
  overflow: auto;
  resize: vertical;
}
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
