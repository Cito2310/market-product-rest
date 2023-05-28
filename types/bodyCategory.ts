export interface BodyCreateCategory {
    name: string;
    subcategories?: { 
        name: string;
        brands?: string[];
    }[];
}

export interface BodyUpdateCategory {
    name?: string;
    subcategories?: { 
        name: string;
        brands?: string[];
    }[];
}