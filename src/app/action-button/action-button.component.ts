import { CdkPortal, DomPortalHost, Portal, PortalHost } from '@angular/cdk/portal';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template:
    `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal)
  private portal: CdkPortal;

  private host: DomPortalHost;
  // private host: PortalHost;
  constructor(private componentFactoriResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }



  ngAfterViewInit(): void {
    this.host = new DomPortalHost(
      document.querySelector('#action'),
      this.componentFactoriResolver,
      this.applicationRef,
      this.injector
    );
    this.host.attach(this.portal);
  }


  ngOnDestroy(): void {
    this.host.detach();
  }



}
