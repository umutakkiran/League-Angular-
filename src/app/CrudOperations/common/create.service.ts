import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private requestService: RequestService) { }

}
