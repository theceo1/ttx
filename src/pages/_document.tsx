// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
