import { Page } from 'ui/page';
import { topmost } from 'ui/frame';
import { Image } from "ui/image";
import { EventData } from 'data/observable';
import { MainViewModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;

    let imageOne = <Image>page.getViewById('imageOne');
    let imageTwo = <Image>page.getViewById('imageTwo');

    page.bindingContext = new MainViewModel(
        imageOne,
        imageTwo
    );

}