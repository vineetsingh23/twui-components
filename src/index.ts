
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import global styles. Vite will process this and extract it to dist/style.css during build.
import './styles/main.css';

// Export components
export * from './components/Button';
export * from './components/Card';
export * from './components/Breadcrumb';

// Consumers of the library will need to import the CSS like:
// import 'my-ui-library/dist/style.css'; (old way)
// or preferably, with the `exports` map in package.json:
// import 'my-ui-library/style.css';
