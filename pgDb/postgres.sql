CREATE TABLE productDetails (
  id SERIAL PRIMARY KEY,
  productId INT NOT NULL,
  sellerId INT NOT NULL,
  sellerName VARCHAR(50),
  averageReviewScore INT NOT NULL,
  numberReviews INT NOT NULL,
  itemName VARCHAR(50) NOT NULL,
  freeShipping BOOLEAN,
  personalization BOOLEAN,
  availableQuantity INT NOT NULL,
  onOrder INT NOT NULL
  itemPrice INT NOT NULL,
)


CREATE TABLE badge (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  badges VARCHAR(50) NOT NULL
)

CREATE TABLE size (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  sizes VARCHAR(50) NOT NULL
)

CREATE TABLE material (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  materials VARCHAR(50) NOT NULL
)

CREATE TABLE pattern (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  patterns VARCHAR(50) NOT NULL
)

CREATE TABLE font (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  fonts VARCHAR(50) NOT NULL
)

