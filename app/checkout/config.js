if (!process.env.BASE_URL)
  throw new Error(`BASE_URL environment variable is required!`);

if (!process.env.PUBLIC_KEY)
  throw new Error(`PUBLIC_KEY environment variable is required!`);

if (!process.env.SECRET_KEY)
  throw new Error(`SECRET_KEY environment variable is required!`);

if (!process.env.API_URL)
  throw new Error(`API_URL environment variable is required!`);

if (!process.env.PUBLISHABLE_KEY)
  throw new Error(`PUBLISHABLE_KEY environment variable is required!`);

export const order = {
  customer_id: -1,
  order_id: 1,
  full_name: "John Doe",
  email: "test@example.com",
  //amount: amount,
  order_items: [],
  billing_address_1: "",
  billing_address_2: "",
  redirect_url: process.env.BASE_URL,
};

export const config = {
  pluginUrl: process.env.BASE_URL, // TODO: replace with CDN url in the future, for now we get images from public assets
  publicKey: process.env.PUBLIC_KEY,
  secretKey: process.env.SECRET_KEY,
  stripeConfig: {
    apiUrl: process.env.API_URL,
    publishableKey: process.env.PUBLISHABLE_KEY,
  },
};