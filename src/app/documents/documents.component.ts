import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
	  {
	  	title: "My First Doc",
		description: 'asdfasdf asdfasdf',
		file_url: 'http://google.com',
		update_at: '07/26/18',
		image_url: 'http://www.besthealthmag.ca/wp-content/uploads/2010/10/Pumpkin-Health-Benefits.jpg',
	  },
	  {
	  	title: "My Second Doc",
		description: 'hello good sir',
		file_url: 'http://google.com',
		update_at: '07/26/18',
		image_url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225358/Pug-On-White-01.jpg',
	  },
	  {
	  	title: "My Third Doc",
		description: 'this is the third time now',
		file_url: 'http://google.com',
		update_at: '07/26/18',
		image_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--_DBGLHVf--/c_scale,f_auto,fl_progressive,q_80,w_800/eibgv7kctah62iddzywm.jpg',
	  },
  ]
}