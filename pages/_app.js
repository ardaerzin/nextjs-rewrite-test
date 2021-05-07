import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('render app')
  return <Component {...pageProps} />
}

export default MyApp
