# graphql-github-api

apollo/client を利用して graphql で GitHub のデータを取得します。

# 各ファイル説明

- ./src/generated.ts
  - クエリドキュメント・型などを定義
- ./src/index.tsx
  - apollo/client を利用するための記述
- ./src/App.tsx
  - graphQL より値を取得
- ./codegen.yml
  - codegen の設定ファイル

# 利用

- codegen.yml, index.tsx のエンドポイントのヘッダーに GitHub のトークンを付与する必要あり
- `$ npm run generate`で`./src/generated.ts`を作成
