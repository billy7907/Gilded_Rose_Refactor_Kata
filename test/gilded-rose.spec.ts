import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    describe('with normal items', () => {
        let  gildedRose: GildedRose;

        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Long Sword', 5, 10)]);
        });
        
        it('should return the correct item name', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Long Sword');
        })

        it('should decrease in quality as time passed', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(9);
        })

        it('should decrease in sell in date when updateQuality is called', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(4);
        })

        it('when quality is 0, it should not decrease any further', () => {
            gildedRose.items[0].quality = 0;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        })
    })

    describe('with Aged Brie item', () => {
        let gildedRose: GildedRose;
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
        });

        it('should increase in quality when time passed', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
        })

        it('quality should not exceed 50', () => {
            gildedRose.items[0].quality = 50;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
        })
    })

    describe('with "Sulfuras, Hand of Ragnaros", item', () => {
        let gildedRose: GildedRose;
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 10)]);
        });

        it('should not decrease in Sell in date', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(5);
        });

        it('should not decrease or increase in quality', () => {
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(10);
        })
    })

    describe('with Backstage passes to a TAFKAL80ETC concert item', () => {
        let gildedRose: GildedRose;
        beforeEach(() => {
            gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
        });

        it('should increase in quality by 1 when sell in date is over 10 days', () => {
            gildedRose.items[0].sellIn = 12;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
        })

        it('should increase in quality by 2 when sell in date is less than or equal to 10', () => {
            gildedRose.items[0].sellIn = 10;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(12);
        })

        it('should increase in quality by 3 when sell in date is less than or equal to 5', () => {
            gildedRose.items[0].sellIn = 5;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(13);
        })

        it('should decrease quality to 0 after the sell in date has passed', () => {
            gildedRose.items[0].sellIn = 0;
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        })
    })
});
