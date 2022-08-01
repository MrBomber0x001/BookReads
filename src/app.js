import express from 'express';
import readerRoutes from './routes/user/reader.routes.js';
import storeRoutes from './routes/user/store.routes.js';
import authRoutes from './routes/auth.routes.js'
import shelfRoutes from './routes/shelf.routes.js'
import meRoutes from './routes/me.routes.js'
import bookRoutes from './routes/book.routes.js'
import reviewRoutes from './routes/review.routes.js'
import clubRoutes from './routes/club.routes.js'

const app = express();

// middlewares

app.use(express.json());

//ROUTES
app.use(readerRoutes);
app.use(storeRoutes);
app.use(authRoutes);
app.use(shelfRoutes);
app.use(meRoutes);
app.use(bookRoutes);
app.use(reviewRoutes);
app.use(clubRoutes);

// // app.use(commentRoutes);
// app.use(authorRoutes);

export default app;