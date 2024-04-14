export const generateMetadata = ({ params }) => {
  const id = params.productId;
  return {
    title: `Product ${id}`,
  };
};

export default function ProductDetails({ params }) {
  return <h1>This is product no {params.productId}</h1>;
}
