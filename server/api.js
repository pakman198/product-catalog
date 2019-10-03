import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
});
