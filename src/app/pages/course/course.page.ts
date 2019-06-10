import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

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
                  color: 's1'
                },
                {
                  icon: 'videocam',
                  title: 'Morbi accumsan ultrices',
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
  constructor() { }

  ngOnInit() {
  }

}
