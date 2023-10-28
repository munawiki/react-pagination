# @munawiki/react-pagination

A customizable pagination component library built with React and TypeScript.

## Installation

```bash
npm install @munawiki/react-pagination
# or
yarn add @munawiki/react-pagination
```

## Peer Dependencies

Ensure you have the peer dependencies installed:

```bash
npm install react@^18.2.0 react-dom@^18.2.0
# or
yarn add react@^18.2.0 react-dom@^18.2.0
```

## Usage

Import and use the `Pagination` component in your React project.

```jsx
import Pagination from "@munawiki/react-pagination";

// In your component
<Pagination
  currentPage={1}
  totalCount={100}
  onPageChange={(page) => console.log("Current Page:", page)}
/>;
```

### Props

| Prop         | Type                   | Default | Description                               |
| ------------ | ---------------------- | ------- | ----------------------------------------- |
| currentPage  | number                 |         | The current active page.                  |
| totalCount   | number                 |         | Total number of items.                    |
| perPage      | number                 | 10      | Items per page.                           |
| prevIcon     | React.ReactNode        | "<"     | Icon for the Previous button.             |
| nextIcon     | React.ReactNode        | ">"     | Icon for the Next button.                 |
| onPageChange | (page: number) => void |         | Callback when the page number is changed. |

### Styling

Override the CSS classes defined in `Pagination.module.css` to customize the styling to your preference.

## Development

Clone the repository and install the dependencies:

```bash
git clone https://github.com/munawiki/react-pagination.git
cd react-pagination
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Building

Build the library:

```bash
npm run build
# or
yarn build
```

### Linting

Lint the codebase:

```bash
npm run lint
# or
yarn lint
```

## Contributing

Feel free to open issues or PRs for any bugs or improvements.
