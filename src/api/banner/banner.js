import { backendApi } from '@/api/http';

const api_path = '/api/v1';

/**
 * @enum {{ MAIN: '메인 배너', EVENT: '이벤트 배너' }} BANNER_LOCATION
 */
export const BANNER_LOCATION = {
  MAIN: 'MAIN',
  EVENT: 'EVENT',
};
Object.freeze(BANNER_LOCATION);

/**
 * 위치별 배너정보 반환
 * @param {string} location 위치
 * @returns 배너정보
 */
const getBanners = (location = BANNER_LOCATION.MAIN) =>
  backendApi
    .get(api_path + '/banner', {
      params: {
        exposureLocation: location,
      },
    })
    .then((res) => res.banners)
    .catch((err) => console.log(err));

export { getBanners };
