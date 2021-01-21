import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NewI } from 'src/app/interfaces/new.interface';
import { DetailNewService } from 'src/app/services/detail-new-service/detail-new.service';
import { NewService } from 'src/app/services/new/new.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  public newId: string;
  public newspaper: string;
  public newToShow: NewI;

  constructor(
    private detailNewService: DetailNewService,
    private route: ActivatedRoute,
    private newService: NewService,
    private router: Router
  ) {
    this.route.params.subscribe(route => {
      this.newId = route.id;
      this.newspaper = route.newspaper;
    });
  }

  ngOnInit(): void {
    this.detailNewService.getNewFromApi(this.newId, this.newspaper);

    this.detailNewService.newSelectedDataSubject.asObservable().subscribe((data) => {
      this.newToShow = data;
    });
  }

  deleteNew(): void {
    const correctlyRemovedNew = this.newService.removeNew(this.newToShow._id);

    if (correctlyRemovedNew) { this.router.navigate(['']) }
  }

}
