import Dexie, { Table } from 'dexie';

export interface BffOrderBook {
  id?: number;
  orderBookKey: string;
}

export interface BffOOR {
  id?: number;
  OORKey: string;
}

export interface BffOTR {
  id?: number;
  OTRKey: string;
}

export interface BffSA {
  id?: number;
  SAKey: string;
}

export interface BffOLR {
  id?: number;
  OLRKey: string;
}


export class AppDB extends Dexie {
    bffOrderBook!: Table<BffOrderBook, number>;
    bffOOR!: Table<BffOOR, number>;
    bffOTR!: Table<BffOTR, number>;
    bffSA!: Table<BffSA, number>;
    bffOLR!: Table<BffOLR, number>;

  constructor() {
    super('BrandixDB');
    this.version(3).stores({
      bffOrderBook: '++id, OBKey, OORKey, OTRKey, SAKey, OLRKey',
      bffOOR: '++id, OORKey',
      bffOTR: '++id, OTRKey',
      bffSA: '++id, SAKey',
      bffOLR: '++id, OLRKey',
    });
    this.on('populate', () => console.log("Starting the dexie database", new Date() ));
  }
}

export const db = new AppDB();
