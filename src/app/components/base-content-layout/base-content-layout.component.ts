import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BaseContentBodyLeftDirective } from 'src/app/directives/base-content-body-left.directive';
import { BaseContentBodyRightDirective } from 'src/app/directives/base-content-body-right.directive';
import { BaseContentFooterDirective } from 'src/app/directives/base-content-footer.directive';
import { BaseContentHeaderDirective } from 'src/app/directives/base-content-header.directive';

@Component({
  selector: 'app-base-content-layout',
  templateUrl: './base-content-layout.component.html',
  styleUrls: ['./base-content-layout.component.scss']
})
export class BaseContentLayoutComponent implements OnInit {

  @ContentChild(BaseContentHeaderDirective, { static: true, read: TemplateRef }) baseContentHeaderTemplate: TemplateRef<any>;
  @ContentChild(BaseContentBodyLeftDirective, { static: true, read: TemplateRef }) baseContentBodyLeftTemplate: TemplateRef<any>;
  @ContentChild(BaseContentBodyRightDirective, { static: true, read: TemplateRef }) baseContentBodyRightTemplate: TemplateRef<any>;
  @ContentChild(BaseContentFooterDirective, { static: true, read: TemplateRef }) baseContentFooterTemplate: TemplateRef<any>;

  constructor() {

  }

  ngOnInit(): void {
  }

}
