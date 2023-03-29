// import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';






@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent  {


 

  // quotesStore = [
  //   {
  //     id: '1',
  //     text: 'The only way to do great work is to love what you do.',
  //     author: 'Steve Jobs',
  //     image:'../../assets/images/steveJobs.jpg'

  //   },
  //   {
  //     id: '2',
  //     text: 'You miss 100% of the shots you don’t take.',
  //     author: 'Swami Vivekanda',
  //     image:'../../assets/images/Vivekananda.jpg'
  //   },
  //   {
  //     id: '3',
  //     text: 'Believe you can and you’re halfway there.',
  //     author: 'Larry Page',
  //     image:'../../assets/images/larrypage.jpg'
  //   }
  // ];
  




















  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }






  // quotesStore = [
  //   {
  //     id: '1',
  //     text: 'The only way to do great work is to love what you do.',
  //     author: 'Steve Jobs',
  //     image: '../../assets/images/steveJobs.jpg'
  //   },
  //   {
  //     id: '2',
  //     text: 'You miss 100% of the shots you don’t take.',
  //     author: 'Swami Vivekananda',
  //     image: '../../assets/images/Vivekananda.jpg'
  //   },
  //   {
  //     id: '3',
  //     text: 'Believe you can and you’re halfway there.',
  //     author: 'Larry Page',
  //     image: '../../assets/images/larrypage.jpg'
  //   }
  // ];

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }



  // customOptions: OwlOptions = {
  //   items: 1,
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 1
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true
  // };
  

















  // customOptions: OwlOptions = {
  //   items: 1,
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 1
  //     },
  //     940: {
  //       items: 1
  //     }
  //   },
  //   nav: true
  // };




  @ViewChild('owlCarousel') carousel!: OwlCarousel;

  quotesStore = [
    {
      id: '1',
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      image: '../../assets/images/steveJobs.jpg'
    },
    {
      id: '2',
      text: 'You miss 100% of the shots you don’t take.',
      author: 'Swami Vivekananda',
      image: '../../assets/images/Vivekananda.jpg'
    },
    {
      id: '3',
      text: 'Believe you can and you’re halfway there.',
      author: 'APJ Abdul Kalam',
      image: '../../assets/images/abdulkalam.jpg'
    },
    {
      id: '4',
      text: 'Believe you can and you’re halfway there.',
      author: 'Larry Page',
      image: '../../assets/images/larrypage.jpg'
    }
  ];


  

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<span class="prev-btn  opacity-100 top-1/2 left-0"><i class="fas fa-chevron-left">&nbsp;&nbsp;</i></span>',
      '<span class="next-btn opacity-100"><i class="fas fa-chevron-right">&nbsp;&nbsp;</i></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void { }

  // prevSlide() {
  //   this.carousel.previous();
  // }

  // nextSlide(): void {
  //   this.carousel.next();
  // }


}
