import { backendApi } from '@/api/http';

const api_path = '/api/v1';

const getBanners = () =>
  backendApi
    .get(api_path + '/banners')
    .then((res) => res.banners)
    .catch((err) => console.log(err));

export { getBanners };
