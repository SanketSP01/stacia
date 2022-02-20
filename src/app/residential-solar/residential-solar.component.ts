import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-residential-solar',
  templateUrl: './residential-solar.component.html',
  styleUrls: ['./residential-solar.component.css']
})
export class ResidentialSolarComponent implements OnInit {

  
 
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    
  }

 

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
     this.modalRef.setClass('modal-lg');
  }

  ngOnInit(): void {
  }

}
