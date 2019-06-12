import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.page.html',
  styleUrls: ['./glossary.page.scss'],
})
export class GlossaryPage implements OnInit {
  text = 'dasda';
  glossary = [
    {
      unit: [
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        }
      ]
    },
    {
      unit: [
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'attach',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        },
        {
          icon: 'link',
          text: 'Consectetur adipiscing elit',
          color: 's1'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
