import { http, HttpResponse } from 'msw';

const sampleImgPath = '/src/assets/images/samples/';

export const handlers = [
  http.get('/api/v1/banners', () => {
    return HttpResponse.json({
      data: {
        banners: [
          {
            id: '1',
            title: '메인배너1',
            exposure_location: 'main',
            image: `${sampleImgPath}main_banner1.png`,
            url: import.meta.env.VITE_APP_BASE_URL,
          },
          {
            id: '2',
            title: '메인배너2',
            exposure_location: 'main',
            image: `${sampleImgPath}main_banner1.png`,
            url: import.meta.env.VITE_APP_BASE_URL,
          },
        ],
      },
    });
  }),
];
