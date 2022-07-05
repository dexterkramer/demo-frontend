import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NetworkLoaderService } from './network-loader.service';

/**
 * Network loader for UI rendering
 */
@Component({
    selector: 'network-loader',
    templateUrl: './network-loader.component.html',
    styleUrls: ['./network-loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkLoaderComponent implements OnInit, OnDestroy {
    public networkLoaderSubscription: Subscription = new Subscription;
    public networkLoaderStyleSubscription: Subscription = new Subscription;

    // We declare those vars as input as
    // it is required for onPush change detection strategy
    @Input() type = 'success';
    @Input() loads?: number;
    @Input() mode = 'indeterminate';

    constructor(private networkLoaderService: NetworkLoaderService, private cb: ChangeDetectorRef) {}

    ngOnInit() {
        this.networkLoaderSubscription = this.networkLoaderService.getLoaderCount().subscribe(
            (loads: number): void => {
                this.loads = loads;
                this.cb.detectChanges();
            },
            (error) => {
                console.error(error);
            }
        );

        this.networkLoaderStyleSubscription = this.networkLoaderService.getType().subscribe(
            (type: string): void => {
                this.type = type;
                this.cb.detectChanges();
            },
            (error) => {
                console.error(error);
            }
        );
    }

    ngOnDestroy = (): void => {
        if (this.networkLoaderSubscription) {
            this.networkLoaderSubscription.unsubscribe();
        }

        if (this.networkLoaderStyleSubscription) {
            this.networkLoaderStyleSubscription.unsubscribe();
        }
    };
}
