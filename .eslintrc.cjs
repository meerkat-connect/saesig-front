module.exports = {
  root: true, // Monorepo 환경에서 유용하지만 ESLint 설정 파일이 하나만 있는 코드 저장소에서도 혹여나 상위 폴더에 있는 설정 파일에 영향을 받는 일이 없도록 root 옵션을 true로 설정하는 경우가 많음.
  env: {
    browser: true, // 브라우저 환경을 사용한다.
    es2021: true, // ECMAScript 2021 환경을 사용한다.
    node: true,
  },
  extends: [
    'eslint:recommended', //사용하지 않는 변수와 같은 코드 품질 검사는 ESLint 추천 규칙 사용
    'plugin:react/recommended', // ESLint 설정에서 React 플러그인의 권장 규칙 세트를 활성화
    'plugin:prettier/recommended', // eslint-config-prettier를 실제로 활성화시켜서 중복되는 룰을 끄도록 하는 설정.
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // jsx 활성화 *jsx 구문 지원과 react 지원은 틀리므로 react를 사용하는 경우 eslint-plugin-react 사용
    },
  },
  plugins: [
    'react',
    'import',
    'promise',
    'react-hooks',
    'prettier',
    'eslint-plugin-simple-import-sort',
    'unused-imports',
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // React 컴포넌트를 작성할 때 createClass 함수를 사용하는 경우
      pragma: 'React', // JSX 코드에서 React의 가상 DOM 요소를 나타내는데 사용되는 식별자를 지정
      version: 'detect', // ESLint가 사용중인 React 버전을 감지하고 적절한 규칙을 적용
    },
  },
  rules: {
    'no-var': 'error', // var 허용 금지
    'no-empty-static-block': 'error', // 빈 함수를 허용하지 않음.
    'unused-imports/no-unused-imports': 'error', // 사용되지 않는 import 문을 검사하여 코드베이스에서 불필요한 import 문을 감지
    'require-await': 'error', // async 사용 시 await 사용 필수
    'react-hooks/rules-of-hooks': 'error', // React Hooks 사용에 관련된 규칙 적용
    'react-hooks/exhaustive-deps': 'warn', // React Hooks의 useEffect 함수에서 의존성 배열을 검사
    'no-console': 'warn', // 빈 콘솔에 대한 경고
    'react/react-in-jsx-scope': 'off', //import React from 'react' 없이 사용 가능한 설정
    'react/prop-types': 'off', //  PropTypes를 사용하지 않도록 설정
    'prettier/prettier': 'error', // Prettier와 ESLint의 충돌을 방지하고 코드 스타일을 통일
  },
};
