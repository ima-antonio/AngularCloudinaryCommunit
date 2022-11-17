import { Component } from '@angular/core';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img!: CloudinaryImage;
  ngOnInit() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dobhe891y' //Add here your Product environment cloud name
      }
    });
    this.img = cld.image('files/cld-sample-5_vqqlyd');
    this.img.resize(fill().width(250).height(250));
  }
}
