import { AuthProvider } from "@/hooks/auth"

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider> 
            <Component {...pageProps} />
        </AuthProvider>
    )
  }