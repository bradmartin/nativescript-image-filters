import { EventData, Page } from '@nativescript/core';
import { MainViewModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new MainViewModel();
}
