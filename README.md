## Overview
Create `vercel.json` file with pre-written SPA configurations. No more `404 NOT FOUND` on page reload.

## Usage
```bash
# Install globally
$ npm install -g rewrite-vercel

# Then run this at the root of your project
$ rewrite-vercel
```

```bash
# Or use the npx command without installing globally
$ npx rewrite-vercel
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
