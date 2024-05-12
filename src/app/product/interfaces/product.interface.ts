export interface Product {
    id?:           number;
    handle:       string;
    title:        string;
    description:  string;
    sku:          string;
    grams:        string;
    stock:        number;
    price:        string;
    comparePrice: number;
    barcode:      string;
    status?:       boolean;
    createdAt?:    Date;
    updatedAt?:    Date;
}
