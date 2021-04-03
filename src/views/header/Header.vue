<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a
          class="nav-link d-flex align-items-center p-0"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <img
            :src="linkedin.imgUrl"
            class="rounded-circle"
            height="45"
            alt=""
            loading="lazy"
          />
        </a>

        <div class="flaot-left">
          <a
            type="button"
            class="btn btn-secondary btn-sm btn-floating nav-item"
            data-mdb-ripple-color="dark"
            v-for="item in header"
            :key="item.name"
            :href="item.url"
            ><b>
              {{ item.name }}
            </b></a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Header from "@/views/header/HeaderScript";
export default Header;
</script>
