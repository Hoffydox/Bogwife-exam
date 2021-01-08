<template>
  <div class="page404" id="404">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <router-link to="/"> &rarr; Return to the Homepage. &larr; </router-link>
  </div>
</template>

<script>
export default {
  name: "page404",
};
</script>

<style scoped>
.page404 {
  padding: 200px 0 0 0;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  z-index: 1;
  background-color: #0c0c0c;
}
h1,
h2 {
  font-weight: bold;
  width: 310px;
  margin: 0 auto;
  padding: 30px;
  cursor: default;
}
h1 {
  color: rgb(253, 177, 76);

  font-size: 7rem;
}
h2 {
  color: rgb(209, 209, 209);
  font-weight: bold;
  font-size: 2.5rem;
}
a {
  font-size: 3rem;
  margin: 50px;
  color: rgb(253, 177, 76);
  
}

a:hover {
  font-size: 3rem;
  padding: 20px;
  color: #d03a3b;
  text-decoration: underline #d03a3b;
}
</style>