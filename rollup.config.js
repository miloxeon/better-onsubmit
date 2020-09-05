import packageJson from './package.json'

const nameTuple = packageJson.name.split('/')
const name = nameTuple[nameTuple.length - 1]

export default {
    input: packageJson.main,
    output: {
        file: `dist/${name}.js`,
        format: 'iife',
        name
    }
}
