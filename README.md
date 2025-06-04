
# My UI Library

A reusable UI component library built with React, Vite, Tailwind CSS, and TypeScript. Includes Button, Card, and Breadcrumb components.

## Disclaimer

**This is an example project. Before publishing to npm, you should customize the package name, author, repository URLs, and other details in `package.json`.**

## Installation

You can install the library using npm or yarn:

```bash
npm install my-ui-library
# or
yarn add my-ui-library
```

Replace `my-ui-library` with the actual package name if you've changed it.

## Usage

Import the components you want to use and the library's stylesheet.

### 1. Import CSS

In your main application file (e.g., `App.tsx`, `main.ts`, or `index.js`):

```javascript
import 'my-ui-library/style.css';
```

### 2. Import Components

```jsx
import React from 'react';
import { Button, Card } from 'my-ui-library';

function MyApp() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
      <Card title="My Awesome Card">
        <p>This is content inside the card.</p>
      </Card>
    </div>
  );
}

export default MyApp;
```

## Available Components

*   `Button`
*   `Card`
*   `Breadcrumb`

Check the demo in `main.tsx` for more examples.

## Development (Running the Demo)

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server (runs the demo app):
    ```bash
    npm run dev
    ```

## Building the Library

To build the distributable files for the library:

```bash
npm run build
```
This will generate the `dist` folder.

## Type Checking

To run TypeScript type checking:
```bash
npm run typecheck
```

## License

This project is licensed under the Apache-2.0 License.
