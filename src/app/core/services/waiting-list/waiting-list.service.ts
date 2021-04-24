import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WaitingList, Buyer } from '../../models';
import waitingListMockData from './mock-data/get-waiting-lists.json';
import { IWaitingListService } from './waiting-list.service.interface';

@Injectable({
  providedIn: 'root'
})
export class WaitingListService implements IWaitingListService {

  constructor() { }

	GetWaitingLists(): Observable<WaitingList[]> {
		return of(waitingListMockData);
	}
	GetWaitingList(Id: string): Observable<WaitingList> {
		throw new Error('Method not implemented.');
	}
	AddWaitingList(value: WaitingList): Observable<boolean> {
		throw new Error('Method not implemented.');
	}
	SubscribeWaitingList(value: Buyer): Observable<boolean> {
		throw new Error('Method not implemented.');
	}
	UnsubscribeWaitingList(value: Buyer): Observable<boolean> {
		throw new Error('Method not implemented.');
	}
}
