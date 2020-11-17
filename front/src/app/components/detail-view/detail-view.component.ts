import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  public newID: number;
  public newToShow: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newID = this.route.snapshot.params.id;


  }

}
