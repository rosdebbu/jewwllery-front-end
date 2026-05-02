import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret_indiglam_key';

app.use(cors());
app.use(express.json());

// --- Health Check ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Indiglam API is running!' });
});

// --- Auth Routes ---
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

import { OAuth2Client } from 'google-auth-library';
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || '334978160494-aicrlo8m07kdpejtv420e79ddfp1qrvu.apps.googleusercontent.com');

app.post('/api/auth/google', async (req, res) => {
  try {
    const { access_token } = req.body;
    
    if (!access_token) {
      return res.status(400).json({ error: 'Access token is required' });
    }

    // Fetch user info using the access_token
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!userInfoResponse.ok) {
      return res.status(400).json({ error: 'Invalid Google token' });
    }

    const payload = await userInfoResponse.json();
    
    if (!payload || !payload.email) {
      return res.status(400).json({ error: 'Failed to retrieve email from Google' });
    }

    const email = payload.email;
    const name = payload.name || 'Google User';

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      // Create user if they don't exist
      const salt = await bcrypt.genSalt(10);
      const randomPassword = Math.random().toString(36).slice(-8); // Random placeholder password
      const hashedPassword = await bcrypt.hash(randomPassword, salt);
      
      user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword, // Dummy password for Google users
        }
      });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error('Google Auth Error:', error);
    res.status(500).json({ error: 'Server error during Google Authentication' });
  }
});

// --- Product Routes ---
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching products' });
  }
});

// Seed Initial Products
app.post('/api/products/seed', async (req, res) => {
  try {
    const count = await prisma.product.count();
    if (count > 0) {
      return res.json({ message: 'Products already seeded' });
    }

    const initialProducts = [
      { name: 'Earing', category: 'Earrings', price: 90301, image: '/assets/earrings.png' },
      { name: 'Diamond Vine', category: 'Earrings', price: 120500, image: '/assets/diamond-vine.png' },
      { name: 'Gold Ring', category: 'Rings', price: 45000, image: '/assets/ring.png' },
      { name: 'Pearl Necklace', category: 'Necklace', price: 150000, image: '/assets/necklace.png' }
    ];

    await prisma.product.createMany({ data: initialProducts });
    res.status(201).json({ message: 'Products seeded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error seeding products' });
  }
});

import { authenticateToken, AuthRequest } from './middleware/auth';

// --- Cart Routes ---
app.get('/api/cart', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.userId;
    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: { product: true }
    });
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

app.post('/api/cart', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.userId;
    const { productId, quantity = 1 } = req.body;

    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: { userId_productId: { userId, productId } }
    });

    if (existingItem) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
        include: { product: true }
      });
      return res.json(updatedItem);
    }

    const newItem = await prisma.cartItem.create({
      data: { userId, productId, quantity },
      include: { product: true }
    });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

app.put('/api/cart/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.userId;
    const cartItemId = req.params.id as string;
    const { quantity } = req.body;

    const item = await prisma.cartItem.findUnique({ where: { id: cartItemId } });
    if (!item || item.userId !== userId) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    const updatedItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
      include: { product: true }
    });
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update cart item' });
  }
});

app.delete('/api/cart/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.userId;
    const cartItemId = req.params.id as string;

    const item = await prisma.cartItem.findUnique({ where: { id: cartItemId } });
    if (!item || item.userId !== userId) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    await prisma.cartItem.delete({ where: { id: cartItemId } });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove cart item' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
