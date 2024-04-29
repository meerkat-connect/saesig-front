import { setupWorker } from 'msw/browser';
import { handlers } from './banner/handlers'; // 경로 바꾸면서 작업 필요

export const worker = setupWorker(...handlers);
