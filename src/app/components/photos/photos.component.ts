import { Component, OnInit } from '@angular/core';
import { PhotosService} from '../../services/photos.service';
import { Photo} from '../../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor( public photoService: PhotosService) { }

  photos: Photo[] = [];

  ngOnInit(): void{
    this.photoService.getPhotos()
    .subscribe(
      photos => {console.log(photos);
                 this.photos = photos;
      },
      err => console.log(err)
    );
  }

}
