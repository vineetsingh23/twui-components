/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Card, Breadcrumb } from './src'; // Importing from the library's entry point
import './src/styles/main.css'; // Import the library's global styles (includes Tailwind)

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);


const AppDemo = () => {
  const breadcrumbItemsBase = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Gadgets' },
  ];

  const breadcrumbItemsWithIcons = [
    { label: 'Dashboard', href: '#dashboard', icon: <InfoIcon /> },
    { label: 'Settings', href: '#settings', icon: <InfoIcon /> },
    { label: 'Profile' },
  ];


  return (
    <div className="space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-sky-400">
          UI Component Library Demo
        </h1>
        <p className="text-xl text-gray-400 mt-2">Showcasing Button, Card, and Breadcrumb components.</p>
      </header>

      {/* Buttons Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-sky-300">Buttons</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2 text-gray-300">Variants & Sizes</h3>
            <div className="flex items-start space-x-4 mb-4 p-4 bg-gray-800 rounded-lg">
              {(['primary', 'secondary', 'ghost'] as const).map(variant => (
                <div key={variant} className="flex flex-col space-y-2 items-center">
                  <span className="text-sm capitalize text-gray-400">{variant}</span>
                  <Button variant={variant} size="sm" onClick={() => alert(`${variant} sm clicked`)}>Small</Button>
                  <Button variant={variant} size="md" onClick={() => alert(`${variant} md clicked`)}>Medium</Button>
                  <Button variant={variant} size="lg" onClick={() => alert(`${variant} lg clicked`)}>Large</Button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 text-gray-300">Disabled State</h3>
            <div className="flex space-x-4 p-4 bg-gray-800 rounded-lg">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
              <Button variant="ghost" disabled>Ghost Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-sky-300">Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="default" title="Default Card" footer={<Button variant="primary" size="sm">Action</Button>}>
            <p>This is a default card. It has a subtle shadow and border.</p>
          </Card>
          <Card variant="elevated" title="Elevated Card" footer={<Button variant="secondary" size="sm">Learn More</Button>}>
            <p>This card has a more prominent shadow, making it appear elevated.</p>
          </Card>
          <Card variant="flat" title="Flat Card" footer={<Button variant="ghost" size="sm">Details</Button>}>
            <p>This card is flat, with no shadow, suitable for a cleaner look.</p>
          </Card>
        </div>
      </section>

      {/* Breadcrumbs Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-sky-300">Breadcrumbs</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-gray-300">Slash Separator</h3>
            <Breadcrumb items={breadcrumbItemsBase} variant="slash" />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-gray-300">Arrow Separator</h3>
            <Breadcrumb items={breadcrumbItemsBase} variant="arrow" separator={<span className="mx-2 text-gray-500">&gt;</span>} />
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-gray-300">Bullet Separator (Custom) & Icons</h3>
            <Breadcrumb items={breadcrumbItemsWithIcons} variant="bullet" separator={<span className="mx-2 text-sky-400">&bull;</span>} />
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} My UI Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppDemo />
    </React.StrictMode>
  );
} else {
  console.error("Root element #root not found in the DOM.");
}