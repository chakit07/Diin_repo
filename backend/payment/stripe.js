const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("CRITICAL ERROR: STRIPE_SECRET_KEY is missing from environment variables!");
}

// Create Payment Intent (for custom payment forms)
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'INR' } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency,
      payment_method_types: ['card'],
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Checkout Session (for hosted checkout page)
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { planName, price, description, features } = req.body;

    // Parse price string "15,000" -> 15000
    const numericPrice = parseInt(price.replace(/,/g, ''), 10);

    // Create a detailed description for Stripe
    let fullDescription = description || '';
    if (features && Array.isArray(features) && features.length > 0) {
      fullDescription += '\n\nIncludes:\n' + features.map(f => `• ${f}`).join('\n');
    }

    // Truncate to 1000 chars if necessary (Stripe limit)
    if (fullDescription.length > 1000) {
      fullDescription = fullDescription.substring(0, 997) + '...';
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: planName,
              description: fullDescription,
            },
            unit_amount: numericPrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/success`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Confirm Payment
router.post('/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId } = req.body;

    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);

    res.json({
      status: paymentIntent.status,
      paymentIntent,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
