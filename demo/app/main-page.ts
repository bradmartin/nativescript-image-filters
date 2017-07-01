import { Page } from "ui/page";
import { EventData } from "data/observable";
import { MainViewModel } from "./main-view-model";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  var page = <Page>args.object;
  page.bindingContext = new MainViewModel();
}
