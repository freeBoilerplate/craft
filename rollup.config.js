import styles from "rollup-plugin-styles";
const autoprefixer = require('autoprefixer');
import babel from '@rollup/plugin-babel';

// the entry point for the library
const input = 'index.js'

// 
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]




var config = []


MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            // then name of your package
            name: "craft",
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: "auto",
            globals: {
              'react': 'React',
              'react-dom': 'ReactDOM',
              'prop-types': 'PropTypes'
            }
        },
        // this externelizes react to prevent rollup from compiling it
        external: ["react", 'react-dom', 'prop-types'],
        plugins: [
            // these are babel comfigurations
            babel({
                exclude: 'node_modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            }),
            // this adds sourcemaps
            null,
            // this adds support for styles
            styles({
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            })
        ]
    }
    config.push(conf)
})

export default [
  ...config,
]