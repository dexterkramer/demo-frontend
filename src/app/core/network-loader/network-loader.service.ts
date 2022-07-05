import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Bridge for graphql request handling and UI rendering.
 * Service should be loaded in app module
 */
@Injectable()
export class NetworkLoaderService {
    // request load counter
    public loads: Subject<number> = new Subject<number>();
    public type: Subject<string> = new Subject<string>();

    private count = 0;

    /**
     * Increment load counter
     */
    addLoad = (): void => {
        this.count++;
        this.loads.next(this.count);
    };

    /**
     * Decrement load counter
     */
    public removeLoad = (): void => {
        if (this.count > 0) {
            this.count--;
        }
        this.loads.next(this.count);
    };

    /**
     * Allows request tracking subscription
     */
    public getLoaderCount(): Observable<number> {
        return this.loads.asObservable();
    }

    /**
     * Reset load counter
     */
    public resetLoads = (): void => {
        this.loads.next(0);
    };

    public getType = (): Observable<string> => {
        return this.type.asObservable();
    };

    public setType = (type: string) => {
        this.type.next(type);
    };
}
