import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.css']
})
export class AlbumModalComponent implements OnInit {

  modalVisible: Boolean;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
