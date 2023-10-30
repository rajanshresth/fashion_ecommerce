import { pgTable, pgEnum, uuid, varchar, text, numeric, integer, foreignKey, date } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])
export const orderStatus = pgEnum("order_status", ['delivered', 'shipped', 'pending'])
export const orderPaymentStatus = pgEnum("order_payment_status", ['NOT-PAID', 'PAID'])


export const product = pgTable("product", {
	productId: uuid("product_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description").notNull(),
	price: numeric("price", { precision: 10, scale:  2 }),
	stockQuantity: integer("stock_quantity"),
	category: varchar("category", { length: 255 }),
	size: varchar("size", { length: 255 }),
	color: varchar("color", { length: 255 }),
	brand: varchar("brand", { length: 255 }),
});

export const productImage = pgTable("product_image", {
	imageId: uuid("image_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	productId: uuid("product_id").references(() => product.productId),
	imageUrl: varchar("image_url", { length: 255 }),
});

export const orders = pgTable("orders", {
	orderId: uuid("order_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	userId: uuid("user_id").references(() => users.usersId),
	orderDate: date("order_date"),
	status: orderStatus("status"),
	shippingAddress: varchar("shipping_address", { length: 255 }).notNull(),
	totalPrice: numeric("total_price", { precision: 10, scale:  2 }),
});

export const users = pgTable("users", {
	usersId: uuid("users_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	username: varchar("username", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }),
	password: varchar("password", { length: 255 }).notNull(),
});

export const orderItems = pgTable("order_items", {
	orderItemId: uuid("order_item_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	orderId: uuid("order_id").references(() => orders.orderId),
	productId: uuid("product_id").references(() => product.productId),
	quantity: integer("quantity").notNull(),
	itemPrice: numeric("item_price", { precision: 10, scale:  2 }),
});

export const reviewRating = pgTable("review_rating", {
	reviewId: uuid("review_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	userId: uuid("user_id").references(() => users.usersId),
	productId: uuid("product_id").references(() => product.productId),
	rating: numeric("rating", { precision: 2, scale:  1 }),
	reviewText: text("review_text"),
	reviewDate: date("review_date"),
});

export const payment = pgTable("payment", {
	paymentId: uuid("payment_id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	orderId: uuid("order_id").references(() => orders.orderId),
	paymentDate: date("payment_date"),
	paymentAmount: numeric("payment_amount", { precision: 10, scale:  2 }),
	paymentMethod: varchar("payment_method", { length: 255 }),
	paymentStatus: orderPaymentStatus("payment_status"),
	transactionId: uuid("transaction_id").default(sql`uuid_generate_v4()`),
});