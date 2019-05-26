import App, { Container } from 'next/app'
import Page from '../components/Page'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from 'react-apollo'

import withData from '../lib/withData'

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}

class HackerNewsApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        pageProps.query = ctx.query
        return { pageProps }
    }
    render() {
        const { Component, pageProps, apollo } = this.props

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(HackerNewsApp)
