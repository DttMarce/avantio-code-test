import { Component, OnInit } from '@angular/core';
import { NewI } from 'src/app/interfaces/new.interface';
import { DetailNewService } from 'src/app/services/detail-new-service/detail-new.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  public newID: number;
  public newToShow: NewI;

  constructor(private detailNewService: DetailNewService) { }

  ngOnInit(): void {
    this.detailNewService.newSelectedDataSubject.asObservable().subscribe((data) => {
      this.newToShow = data;
    });
  }

}
