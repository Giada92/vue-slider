var app = new Vue(
    {
        el: "#root",
        components: {
            'carousel': VueCarousel.Carousel,
            'slide': VueCarousel.Slide
        },
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
        mounted (){
            setInterval(this.nextImg, 4000);
        }
    }
);


/* Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */
