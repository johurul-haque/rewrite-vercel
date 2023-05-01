## Overview
`rewrite-vercel` is a tool that generates a vercel.json file with pre-written rewrites for client-side routing. Install it globally with `npm` and run `rewrite-vercel` in your project directory to use it.

## Installation
To install Vercel Rewrites, run the following command:

```bash
npm install -g rewrite-vercel
```

## Usage
After installing the package *globally*, navigate to your project directory and run the following command to generate a vercel.json file:

```bash
rewrite-vercel
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

By default, it configures for single-page applications, using client-side routing. If your project uses server-side routing you may need to modify the configuration.

## Contributing

If you encounter any issues or would like to contribute to Vercel Rewrites, please submit an issue or pull request on the [GitHub repository](https://github.com/johurul-haque/vercel-config).

## License
This package is licensed under the MIT License.