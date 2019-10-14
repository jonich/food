export abstract class DataProvider {
  abstract getFeaturedCategories(): Promise<any[]>;
  abstract getCategory(categoryGuid): Promise<any[]>;
  abstract getCategories(): Promise<any[]>;
  abstract getFeaturedProducts(): Promise<any[]>;
  abstract getProducts(categoryGuid): Promise<any[]>;
  abstract getBusiness(): Promise<any>;
  abstract getHomeSlider(): Promise<any>;
  abstract getFeaturedProduct(productId: string): Promise<any>;
  abstract getProduct(productId: string): Promise<any>;
  abstract getArticles(): Promise<any[]>;
  abstract getArticle(id: string): Promise<any[]>;
}
