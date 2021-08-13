export enum Tab {
    Products = 'Products',
    Recipes = 'Recipes',
    Search = 'Search'
}

export type LocalStorageMethods = {
    set(value: string): void,
    get(): string,
    remove(): void
}
