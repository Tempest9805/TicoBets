import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider" 


export const tnsSingle = () =>{
  let slider = tns({ 
    
    container           : '#tnsSingle',
    items               : 1, 
    slideBy             : 1,
    speed               : 1000,
    autoplay            :true,
    autoplayButtonOutput: false,
    mode                : 'gallery',
    mouseDrag           : true,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};

export const carouselPromotions = () =>{
	let slider = tns({
        container       : '#carouselPromotions',
        items           : 1,
        slideBy         : 1,
        swipeAngle      : false,
        speed           : 400,
        nav             : false,
        mouseDrag       : true,
        controlsText    : [ 
          '<i class="tns-carousell__prev fas fa-chevron-left"></i>',
          '<i class="tns-carousell__next fas fa-chevron-right"></i>'
        ],
        responsive: {
            320: {
                items   : 1
              },
            640: {
              items     : 2
            },
            920: {
              items     : 2
            },
            1080: {
                items   : 2
              },
            1200: {
              items     : 2
            }
          }
    }); 
};
