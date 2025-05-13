import React from 'react';
import { HustlepayPaymentGateway } from '@hustlepay/payment-gateway';
import '@hustlepay/payment-gateway/dist/index.css';

const order = {
  customer_id: -1,
  order_id: 1,
  full_name: 'John Doe',
  email: 'test@example.com',
  amount: 9998,
  order_items: [
    {
      name: 'Muscles & Joints Extra Strength Cream (XR)',
      price: 49.99,
      quantity: 2,
      image: '/assets/images/ReLeaf.webp',
    },
  ],
  billing_address_1: '',
  billing_address_2: '',
  redirect_url: 'http://localhost:8080/?wc-api=hustlepay_payment_processed',
};

const config = {
  pluginUrl: './', // TODO: replace with CDN url in the future, for now we get images from public assets
  publicKey: process.env.PUBLIC_KEY,
  secretKey: process.env.SECRET_KEY,
  stripeConfig: {
    apiUrl: process.env.API_URL,
    publishableKey: process.env.PUBLISHABLE_KEY,
  },
};

const Checkout = () => {
  return <HustlepayPaymentGateway config={config} order={order} />;
};

export default Checkout;
