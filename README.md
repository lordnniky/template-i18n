# 🌍 Next.js Internationalization Template

Welcome to the **template-i18n** repository! This project provides a ready-made template for developing Next.js applications with full internationalization (i18n) support using next-intl. 

[![Latest Release](https://img.shields.io/github/v/release/lordnniky/template-i18n?style=flat-square)](https://github.com/lordnniky/template-i18n/releases)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Internationalization with next-intl](#internationalization-with-next-intl)
- [Middleware for Language Detection](#middleware-for-language-detection)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

This template comes with a variety of features to enhance your Next.js applications:

- **Internationalization (i18n)**: Dynamic message loading for easy translation management.
- **Modular Structure**: Organize translations per page and section for better maintainability.
- **Automatic Language Detection**: Middleware to automatically detect user language preferences.
- **Production-Ready**: Built with performance and scalability in mind.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lordnniky/template-i18n.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd template-i18n
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

For the latest releases, check out the [Releases section](https://github.com/lordnniky/template-i18n/releases). Download the latest version and execute it to get started.

## Folder Structure

The folder structure of this template is designed for clarity and ease of use:

```
template-i18n/
├── public/
│   └── images/          # Store images here
├── src/
│   ├── components/      # Reusable components
│   ├── locales/         # Translation files
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── .env                 # Environment variables
├── next.config.js       # Next.js configuration
└── package.json         # Project metadata and dependencies
```

## Configuration

To configure the internationalization settings, update the `next.config.js` file. You can specify the default language and the supported languages in this file.

Example configuration:

```javascript
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
};
```

## Usage

To use the internationalization features in your components, import the `useTranslation` hook from `next-intl`. Here’s a simple example:

```javascript
import { useTranslation } from 'next-intl';

const MyComponent = () => {
  const { t } = useTranslation('common');

  return <h1>{t('welcome')}</h1>;
};
```

Make sure to create a corresponding translation file in the `locales` directory.

## Internationalization with next-intl

The `next-intl` library simplifies the process of adding internationalization to your Next.js applications. It provides a straightforward API for loading and using translations.

### Adding Translations

Create JSON files in the `locales` directory for each language you want to support. For example:

- `locales/en/common.json`
- `locales/fr/common.json`

Each file should contain key-value pairs for your translations:

```json
// locales/en/common.json
{
  "welcome": "Welcome to our application!"
}

// locales/fr/common.json
{
  "welcome": "Bienvenue dans notre application!"
}
```

### Dynamic Message Loading

With `next-intl`, you can load messages dynamically based on the user's language. This allows for a seamless experience when switching languages.

## Middleware for Language Detection

The middleware in this template automatically detects the user's language based on their browser settings. You can customize this behavior in the `middleware.js` file.

### Example Middleware

Here’s a simple example of how the middleware can be set up:

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const lang = request.headers.get('accept-language')?.split(',')[0] || 'en';
  return NextResponse.rewrite(new URL(`/${lang}`, request.url));
}
```

This middleware will redirect users to the appropriate language version of your site based on their browser settings.

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, feel free to reach out:

- GitHub: [lordnniky](https://github.com/lordnniky)
- Email: lordnniky@example.com

Explore the latest releases at [Releases section](https://github.com/lordnniky/template-i18n/releases). Download the latest version and execute it to get started.

Happy coding!