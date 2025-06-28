let posts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful framework for React that simplifies building full-stack web applications. It supports server-side rendering, static site generation, API routes, and is optimized for performance and SEO.'
  },
  {
    id: '2',
    title: 'Understanding Routing in Next.js',
    content: 'Routing in Next.js is file-based meaning each file inside the pages/ directory becomes a route. Dynamic routing is also supported using brackets — for example, pages/blog/[id].js maps to URLs like /blog/1 or /blog/abc. It eliminates the need for installing a separate router like React Router.'
  },
  {
    id: '3',
    title: "Data Fetching",
    content: "Next.js supports multiple data fetching methods. You can use getStaticProps for static generation, getServerSideProps for server-side rendering, and getStaticPaths for generating paths in dynamic routes. In client components, you can use fetch() inside useEffect."
  },
  {
    id: '4',
    title: "Components & Layouts",
    content: "Next.js supports reusable layouts across pages. In the new App Router (from Next.js 13+), layouts are defined using layout.js files, allowing consistent structure like headers and footers across multiple pages."
  },
  {
    id: '5',
    title: "API Routes",
    content: "You can create your own backend API endpoints in the pages/api folder. These serverless functions run on demand and are useful for handling form submissions, data processing, or calling external APIs."
  }
];

export default posts