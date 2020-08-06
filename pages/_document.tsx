import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {

    static async getInitialProps(context: DocumentContext): Promise<any> {
        const sheet = new ServerStyleSheet()
        const page = context.renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render(): JSX.Element {
        const { styleTags }: any = this.props

        const GlobalStyles = () => {
            return (
                <style jsx global>{`
					body { 
						font: 16px roboto;
					}
				`}</style>
            )
        }

        return (
            <Html lang="en">
                <title>Insert Title</title>
                <Head>
                    {styleTags}

                    <meta name="Description" content="Insert Description"></meta>
                    <meta name='keywords' content='Keywords' />

                    <link rel="manifest" href="/manifest.json" />
                    <link rel="icon" sizes="192x192" href=".manifest/images/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" href=".manifest/images/appIcon.png" />
                    <meta name="msapplication-square310x310logo" content=".manifest/images/icons/icon-384x384.png" />

                    <meta name="theme-color" content="#ffffff" />

                    <meta charSet='utf-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                </Head>
                <body>
                    <GlobalStyles />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}