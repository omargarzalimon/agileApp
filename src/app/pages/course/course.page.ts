import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage  {
 public items: any = [];


  constructor() {
    this.items = [
      { expanded: false ,
        nombre: 'Module 1',
        unidades: [
          { expanded: false,
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
          { expanded: false,
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
      { expanded: false,
        nombre: 'Module 2',
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
        ] },
        { expanded: false,
          nombre: 'Module 3',
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
          ]}
    ];
  }

  expandItem(item): void {
    if (item.expanded === true) {
      item.expanded = false;
    } else {
        this.items.map(listItem => {
        if (item === listItem) {
            listItem.expanded = true;
          } else {
            listItem.expanded = false;
          }
        return listItem;
       });
    }
  }

  expandItem3(item, i, unidad): void {
    if (item.expanded === true) {
      item.expanded = false;

      if (unidad.expanded === true) {
        unidad.expanded = false;
      } else {
        this.items[i].unidades.map(listItem => {
          if (unidad === listItem) {
          listItem.expanded = true;
        } else {
            listItem.expanded = false;
           }
          return listItem;
         });
      }


    } else {
      this.items.map(listItem => {
      if (item === listItem) {
          listItem.expanded = true;
        } else {
          listItem.expanded = false;
        }
      return listItem;
     });

    }


  }



}
