import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  img_src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8524Xdg57C-RlhERDkNMxzwpPQxKAyzoMt5rlhy3u0epciSPI';
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit() {
  }

}