import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should return the correct item name', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
    });

    // Quality degrades by one under normal scenario
    it('Quality degrades by one when sell by date has not passed', function() {
        const gildedRose = new GildedRose([ new Item('Age Cheddar', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    // Once the sell by date has passed, Quality degrades twice as fast
    it('Quality degrade twice as fast once sell by date is passed', function() {
        const gildedRose = new GildedRose([ new Item('Age Cheddar', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

    // The Quality of an item is never negative
    it('The Quality of an item is never negative', function() {
        const gildedRose = new GildedRose([ new Item('Age Cheddar', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    // Aged Brie actually increases in Quality the older it gets
    it('Aged Brie actually increases in Quality the older it gets', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
    });

    // The Quality of an item is never more than 50
    it('Aged Brie actually increases in Quality the older it gets', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    // Sulfuras, being a legendary item, never has to be sold or decreases in Quality
    it('Sulfuras, Hand of Ragnaros never has to be sold or decreases in quality', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
        expect(items[0].sellIn).to.equal(5);
    });

    // Backstage passes, like aged brie, increases in Quality as its SellIn value approaches;
    // Quality increases by 2 when there are 10 days or less by 3 when there are 5 days or less
    it('Backstage passes increase in quality as its sellIn value approaches (sellIn = 10 days or less)', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 11) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

    it('Backstage passes increase in quality as its sellIn value approaches (sellIn = 5 days or less)', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

});
