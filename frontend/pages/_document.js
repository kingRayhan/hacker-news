import Document, { Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet()

        // Step 2: Retrieve styles from components in the page
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement()

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags }
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
