import { Component, OnInit } from '@angular/core';
import { KatzService } from '../../katz.service';


@Component({
  selector: 'katz-create',
  templateUrl: 'create-kat.component.html',
  styleUrls: ['./create-kat.component.scss']
})
export class CreateKatComponent implements OnInit {

  title: string;
  img: File;

  constructor(private katzService: KatzService) {  }

  ngOnInit() {

  }

  onSubmit(){
    const data = {
      title: this.title,
      img: this.img
    }
    console.log(data);
    this.katzService.createKat(data)
    .subscribe(res => {
      console.log(res.json());
    })
  }

  getFile(e) {
    this.img = e.srcElement.files;
    console.log(this.img);
  }
}
