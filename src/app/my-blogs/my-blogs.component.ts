import { Component, ElementRef, ViewChild } from '@angular/core';

// interface ShowContent {
//   [key: string]: boolean;
// }


// interface Blog {
//   id: string;
//   title: string;
//   content: string;
//   }
  
  
@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent {
 

  topics = [
    { title: 'Topic 1', content: '<p>Content for topic 1</p>', visible: false },
    { title: 'Topic 2', content: '<p>Content for topic 2</p>', visible: false },
    { title: 'Topic 3', content: '<p>Content for topic 3</p>', visible: false },
  ];

  // toggleContent(topic: any) {
  //   topic.visible = !topic.visible;

  // }


  toggleContent(topic: any) {
    for (const t of this.topics) {
      if (t !== topic) {
        t.visible = false;
      }
    }
    topic.visible = !topic.visible;
  }
  

}






  

