<
<script>
export default {
  name: "Footer",
  data() {
    return {
      copyRights: { text: "< © 2020 WIP >" },
      socialMedia: {
        phone: {
          name: "phone",
          iconClass: "fas fa-phone-alt",
          url: "tel:+91750608837",
        },
        gmail: {
          name: "gmail",
          iconClass: "fas fa-envelope-open-text",
          url: "mailto:sourav.insa@gmail.com",
        },
        skype: {
          name: "skype",
          iconClass: "fab fa-skype",
          url: "https://join.skype.com/invite/As97YswyTGYK",
        },
        // linkedin: { name: "linkedin", iconClass: "fab fa-linkedin", url: "" },
        facebook: { name: "facebook", iconClass: "fab fa-facebook", url: "" },
      },
      credits: {
        vue: {
          name: "vue",
          iconClass: "fab fa-vuejs",
          url: "https://vuejs.org/",
        },
        mdb: {
          name: "mdb",
          iconClass: "fab fa-mdb",
          url: "https://mdbootstrap.com/",
        },
      },
      heroku: { name: "heroku", url: "https://dashboard.heroku.com/apps" },
    };
  },
  computed: {},
  methods: {},
};
</script>
