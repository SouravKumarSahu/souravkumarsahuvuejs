<template>
  <footer class="bg-light text-center fixed-bottom p-0">
    <div class="container-fluid">
      <div class="float-left">
        <a
          v-for="link in credits"
          :key="link.name"
          class="btn-lg m-1 p-0"
          style="color: green"
          :href="link.url"
          role="button"
          ><i :class="link.iconClass"></i
        ></a>
        <a
          class="btn-lg m-1 p-0"
          style="color: purple"
          :href="heroku.url"
          role="button"
          >{{ heroku.name }}</a
        >
      </div>

      <div class="float-right">
        <a
          v-for="link in socialMedia"
          :key="link.name"
          class="btn-lg m-1"
          style="color: #00BFFF"
          :href="link.url"
          role="button"
          ><i :class="link.iconClass"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
import Footer from "@/views/footer/FooterScript";
export default Footer;
</script>
