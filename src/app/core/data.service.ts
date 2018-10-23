import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    description: string;
    src: string;
}

@Injectable()
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1",
            src: "https://www.rp.edu.sg/images/default-source/library/floor-directory/library-map-2018.png"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2",
            src: "https://library.appstate.edu/sites/library.appstate.edu/files/floor_map_ll_201703.png"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3",
            src: "https://www.libraries.rutgers.edu/sites/default/files/maps/chang_library.png"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4",
            src: "https://library.gwu.edu/sites/default/files/communications/gelman-2nd-02.png"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5",
            src: "https://www.wells.edu/files/public/library/library-first-floor.png"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6",
            src: "https://www.uncp.edu/sites/default/files/2017-08/lib%20map%202nd%20floor.png"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7",
            src: "https://www.cpp.edu/~library/about/about-the-library/library-floor-maps/images/Online-Maps_2ND%20Floor.png"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
