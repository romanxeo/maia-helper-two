import path from "path";
import {IBuildEnv, IBuildOptions, IBuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: IBuildEnv) => {

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || "development"
    const isDev = mode === "development"
    const port = env.port || 3000

    const options: IBuildOptions = {
        mode,
        paths,
        isDev,
        port,
    }

    return buildWebpackConfig(options)
}
