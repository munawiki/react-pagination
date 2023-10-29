## `@munawiki/react-pagination`

A React and TypeScript-based library offering a customizable pagination component.

### **Installation**

Install the library using npm or yarn:

```bash
npm install @munawiki/react-pagination
# or
yarn add @munawiki/react-pagination
```

### **Peer Dependencies**

Ensure these dependencies are in your project:

```bash
npm install react@^18.2.0 react-dom@^18.2.0
# or
yarn add react@^18.2.0 react-dom@^18.2.0
```

### **How to Use**

Simply import the `Pagination` component and integrate it:

```jsx
import Pagination from "@munawiki/react-pagination";

function YourComponent() {
  return (
    <Pagination
      currentPage={1}
      totalCount={100}
      onPageChange={(page) => console.log("Switched to Page:", page)}
    />
  );
}
```

### **Component Properties**

|   Property   |          Type          | Default |         Description          |
| :----------: | :--------------------: | :-----: | :--------------------------: |
| currentPage  |         number         |    -    |         Active page.         |
|  totalCount  |         number         |    -    |         Total items.         |
|   perPage    |         number         |   10    |       Items per page.        |
|   prevIcon   |    React.ReactNode     |   "<"   |    Previous button icon.     |
|   nextIcon   |    React.ReactNode     |   ">"   |      Next button icon.       |
| onPageChange | (page: number) => void |    -    | Triggered when page changes. |

### **Custom Styling**

To customize the look, override classes from `Pagination.module.css`.

### **Development Guidelines**

1. **Setup**:

   ```bash
   git clone https://github.com/munawiki/react-pagination.git
   cd react-pagination
   npm install
   ```

2. **Running Locally**:

   ```bash
   npm run dev
   ```

3. **Build**:

   ```bash
   npm run build
   ```

4. **Lint**:
   ```bash
   npm run lint
   ```

### **Contribute**

We welcome contributions! Feel free to open issues or submit PRs for enhancements.
