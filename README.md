## Overview
Quickly generate pre-written Vercel config file for single-page applications

No more `404 NOT FOUND` on **page-reload**.

## Installation
```bash
npm install -g rewrite-vercel
```

## Usage
Navigate to the root of your project and run the following command:

```bash
rewrite-vercel
```

This will create a `vercel.json` file with the following contents at the root of your project.

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

## License
This package is licensed under the MIT License.
