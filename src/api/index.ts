import axios from "axios";
import {Product, ProductSearchParams} from "@/types";

export async function getAllCategories(): Promise<string[]> {
  const {data} = await axios.get('https://fakestoreapi.com/products/categories');
  return data;
}

export async function getProducts(request: ProductSearchParams): Promise<Product[]> {
  const {data} = await axios.get('https://fakestoreapi.com/products', {
    params: request
  });
  return data;
}

export async function getProductsInCategory(category: string, request: ProductSearchParams): Promise<Product[]> {
  const {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`, {
    params: request
  });
  return data;
}

