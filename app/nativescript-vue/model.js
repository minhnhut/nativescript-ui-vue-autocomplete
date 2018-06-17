'use strict';

const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const TokenModel = require ("nativescript-ui-autocomplete").TokenModel;
const Observable = require("tns-core-modules/data/observable").Observable;

module.exports = class ViewModel extends Observable {
    
    constructor() {
        super();
        this.countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
            "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
            "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
            "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
            "Vatican City", "Chad", "China", "Chile"];
        // var page = args.object;
        // this.autocmp = page.getViewById("autocmp");
        this.initDataItems();
    }

    get dataItems() {
        return this.get("_dataItems");
    }

    set dataItems(value) {
        this.set("_dataItems", value);
    }

    initDataItems() {
        this.dataItems = new ObservableArray();

        for (var i = 0; i < this.countries.length; i++) {
            this.dataItems.push(new TokenModel(this.countries[i], undefined));
        }
    }
}