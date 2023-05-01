## Overview
🚀Quickly generate vercel.json file for your project. With pre-written config, no more `404 NOT FOUND` on **page-relaod**.

## Installation
Install Vercel Rewrites from npm:

```bash
npm install -g rewrite-vercel
```

## Usage
Navigate to your project directory and run the following command to generate a `vercel.json` file:

```bash
rewrite-vercel
```

This will create a the file in your project directory with the following contents:

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

By default, it configures for single-page applications, using client-side routing. If your project uses server-side routing you may need to modify the `rewrites`.

## Contributing

If you encounter any issues or would like to contribute to Vercel Rewrites, please submit an issue or pull request on the [GitHub repository](https://github.com/johurul-haque/vercel-config).

## License
This package is licensed under the MIT License.