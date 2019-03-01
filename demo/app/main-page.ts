import { Page } from 'tns-core-modules/ui/page';
import { EventData } from 'tns-core-modules/data/observable';
import { MainViewModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new MainViewModel();
}
