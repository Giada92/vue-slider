var app = new Vue(
    {
        el: "#root",
        data: {
            images: [
                "img/img_1.jpg",
                "img/img_2.jpg",
                "img/img_3.jpg",
                "img/img_4.jpg",
                "img/img_5.jpg"
            ],
            imageIndex: 0
        },
        
        methods: {
            nextImg: function() {
                this.imageIndex++;
                if(this.imageIndex >= this.images.length) {
                    this.imageIndex = 0;
                }
            },
            prevImg: function() {
                this.imageIndex--;
                if(this.imageIndex <= -1) {
                    this.imageIndex = this.images.length - 1;
                }
            },
        },
        created (){
            setInterval(this.nextImg, 3000);
        }
    }
);


/* Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

/* var app=new Vue({
    el: "#app",
    components: {
      'carousel': VueCarousel.Carousel,
      'slide': VueCarousel.Slide
    },
  }); */