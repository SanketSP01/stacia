import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-commercial-solar',
  templateUrl: './commercial-solar.component.html',
  styleUrls: ['./commercial-solar.component.css']
})
export class CommercialSolarComponent implements OnInit {
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
