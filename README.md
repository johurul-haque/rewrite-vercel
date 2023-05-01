# Vercel Rewrites
## Overview
`rewrite-vercel` is a package that helps you create a `vercel.json` file with pre-written rewrites for your Next.js project. Simply install the package using `npm` or `yarn` and run the command npx v-rewrites in your project directory to generate a vercel.json file.


## Installation
To install Vercel Rewrites, run the following command:

```bash
npm install -g rewrite-vercel
```

## Usage
After installing the package, navigate to your project directory and run the following command to generate a vercel.json file:

```bash
v-rewrite
```


This will create a `vercel.json` file in your project directory with the following contents:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Configuration

By default, Vercel Rewrites configures rewrites for single-page applications built with React and using `react-router`. If your project uses a different framework or routing library, you may need to modify the configuration.

You can customize the contents of the `vercel.json` file by modifying the *generateVercelJson()* function in the `index.js` file of the package.

## Contributing

If you encounter any issues or would like to contribute to Vercel Rewrites, please submit an issue or pull request on the [GitHub repository](https://github.com/your-username/vercel-rewrites).

## License
This package is licensed under the MIT License.