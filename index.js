particlesJS("background", {
    particles:{
        number:{
            value: 20, //es el numero de particulas (count)//
            density:{
                enable: true,
                value_area: 300, //Es el area donde las particulas van a estar//
            },
        },
        color:{
            value: "#ffffff", //color de las particulas//
        },
        shape:{
            type: "triangle" ,//forma//
        },
        opacity:{
            value: 0.8, //opacidad de las particulas//
            random:true,
            anum:{
                enable: true,
                speed: 1,
                opacity_min:0.1,
                sync:false,
            },
        },
        size:{
            value: 5, //tamaño base de las particulas//
            random:true,
            anim:{
                enable: true,
                speed: 4,
                size_min:0.3,
                Sync:false,
            },
            //conectar lineas//
            line_linked:{
                enable:true,
                distance:150,//distancia max entre particulas//
                color:"#ffffff",
                opacity:0.4,
                width:3,

            },
            //Particulas mov
            move:{
                enable:true,
                speed:2,
                direction:"none",
                random: false,
                straight:false,
                out_mode: "bounce",
                bounce:false,

            },

    },
    interactivity:{
        detect_on: "canvas",
        events:{
            onhover:{
                enable:true,
                mode:"repulse",
            },
            onclick:{
                enable:true,//permite clickear
                mode:"push",//empujar particulas cuando clickeas
            },
            resize: true,
        },
    }
},
    retina_detect:true,
    

    
})
