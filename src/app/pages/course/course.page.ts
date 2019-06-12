import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  el;
  noBorder = { 'border-left': '0' };
  course =
    {
      modulos: [
        {
          name: 'Module 1',
          unidades: [
            {
              name: 'Unit 1',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1',
                  route: ''
                },
                {
                  icon: 'videocam',
                  title: 'Donec quis enim sagittis',
                  color: 's6',
                  route: '/login'
                },
                {
                  icon: 'logo-game-controller-b',
                  title: 'Integer iaculis justo eget',
                  color: 's7',
                  route: '/login'
                },
                {
                  icon: 'image',
                  title: 'Lorem ipsum dolor sit amet',
                  color: 'm2',
                  route: '/login'
                },
                {
                  icon: 'document',
                  title: 'Nunc gravida pulvinar urna',
                  color: 's3',
                  route: '/login'
                }
              ]
            },
            {
              name: 'Unit 2',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            }
          ]
        },
        {
          name: 'Module 2',
          unidades: [
            {
              name: 'Unit 1',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                },
                {
                  icon: 'videocam',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            },
            {
              name: 'Unit 2',
              content: [
                {
                  icon: 'document',
                  title: 'Morbi accumsan ultrices arcu',
                  color: 's1'
                }
              ]
            }
          ]
        }
      ]
    };
  constructor(private element: ElementRef) { }

  ngOnInit() {
    console.log(this.element);
  }
  onClick(event) {
    console.log(event);
    // // console.log(param);
    // const el = document.getElementById(param);
    // console.log(this.el);
    // this.element = this.el;

    // this.element.classList.add('selected');
    // // if (param === 'm1u1el5') {
    // //   this.mylblRef.color = 's1';
    // // }
    // // this.noBorder = { 'border-left': '5px solid var(--ion-color-s3)'};
  }

}
