import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
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
                  route: '/lesson'
                },
                {
                  icon: 'videocam',
                  title: 'Donec quis enim sagittis',
                  color: 's6',
                  route: '/videos'
                },
                {
                  icon: 'logo-game-controller-b',
                  title: 'Integer iaculis justo eget',
                  color: 's7',
                  route: '/exercise'
                },
                {
                  icon: 'image',
                  title: 'Lorem ipsum dolor sit amet',
                  color: 'm2',
                  route: '/infographic'
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
  }

}
