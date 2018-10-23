import { Component, OnInit } from "@angular/core";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures/gestures";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    icon_x = 50;
    icon_y = 100;
    text_x = 150;
    text_y = 400;
    text = " A ";
    count = 0;
    timer = null;
    interval = 1000;
    itemList = [
        {x:100, y:100, text:' A '},
        {x:60, y:230, text:' B '},
        {x:280, y:300, text:' C '},
        {x:180, y:430, text:' D '},
    ]

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onTouch(event: TouchGestureEventData): void {
        if(event.action == 'down') {
            this.count++;
            if(this.count >= 3) {
                this.interval -= 200;
            }
            this.text_x = event.getX();
            this.text_y = event.getY();    
        }
    }
}
