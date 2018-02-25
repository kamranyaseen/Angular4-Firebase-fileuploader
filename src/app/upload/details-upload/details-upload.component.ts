import {Component, OnInit, Input} from '@angular/core';
import {FileUpload} from '../fileupload';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor() {}

  ngOnInit() {
  }

}
