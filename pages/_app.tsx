import "../styles/global.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

function App ({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div>
            <Layout key={router.pathname}>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default App;