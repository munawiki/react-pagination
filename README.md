## `@munawiki/react-pagination` : React Pagination Component

A customizable pagination component for React applications. Tailor the look and feel using custom styles, control page navigation with intuitive icons, and easily manage page changes with a straightforward callback function.

### Installation

```bash
npm install @munawiki/react-pagination
# or
yarn add @munawiki/react-pagination
```

### Usage

Import the `Pagination` component and CSS module into your React component file, then include the `Pagination` component in your JSX, providing the necessary props for your use case.

```jsx
import Pagination from "@munawiki/react-pagination";
import "@munawiki/react-pagination/dist/main.css";

function App() {
  const handlePageChange = (page) => {
    console.log("Current Page:", page);
  };

  return (
    <Pagination
      currentPage={1}
      totalCount={50}
      onPageChange={handlePageChange}
    />
  );
}

export default App;
```

### Props

- `currentPage`: (required) Current active page number.
- `totalCount`: (required) Total number of items.
- `perPage`: Items per page (default: 10).
- `prevIcon`: JSX for the Previous page icon (default: "<").
- `nextIcon`: JSX for the Next page icon (default: ">").
- `customStyles`: Object for overriding default CSS styles.
- `onPageChange`: Callback function for page changes.

### Development

Clone the repository from GitHub, install the dependencies, and start the development server.

```bash
git clone https://github.com/munawiki/react-pagination.git
cd react-pagination
npm install
npm run dev
```

### Scripts

- `dev`: Start the development server using Vite.
- `build`: Build the component for production.
- `lint`: Lint the project files.
- `preview`: Preview the build.

### Dependencies

- Peer Dependencies: `react` ^18.2.0, `react-dom` ^18.2.0.
- Dev Dependencies: Check `package.json` for development dependencies.
