const app = new Vue
(
    {
        el: "#app",
        data: {
            hola: "Hola Ángela"
        },
	mounted: function() {
        console.log(this.$http);
      }
    }
)