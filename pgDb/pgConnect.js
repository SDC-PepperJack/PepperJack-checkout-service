CREATE TABLE productDetails(
  productId SERIAL PRIMARY KEY NOT NULL,
  sellerId INT NOT NULL,
  sellerName VARCHAR(50),
  averageReviewScore INT NOT NULL,
  numberReviews INT NOT NULL,
  itemName VARCHAR(50) NOT NULL,
  badge VARCHAR(50) NOT NULL,
  itemPrice DECIMAL NOT NULL,
  freeShipping BOOLEAN,
  availableQuantity INT NOT NULL,
  productOptions character[]/ JSON,
)

// CREATE UNIQUE INDEX ON productId