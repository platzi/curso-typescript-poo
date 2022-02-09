import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService  {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }

}
