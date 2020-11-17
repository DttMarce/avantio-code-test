import { Injectable } from '@angular/core';
import { NewI } from '../../interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailNewService {
  private id: string;
  private newSelectedData: NewI;

  constructor() {}
}
