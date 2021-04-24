import { Observable } from 'rxjs';
import { WaitingList, Buyer } from '../../models/index';

export interface IWaitingListService{

	GetWaitingLists(): Observable<WaitingList[]>;
	GetWaitingList(Id: string): Observable<WaitingList>;

	AddWaitingList(value: WaitingList): Observable<boolean>;
	SubscribeWaitingList(value: Buyer): Observable<boolean>;

	UnsubscribeWaitingList(value: Buyer): Observable<boolean>;
}