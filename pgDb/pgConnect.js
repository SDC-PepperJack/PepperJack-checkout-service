CREATE TABLE productDetails(
  productId SERIAL PRIMARY KEY NOT NULL,
  sellerId INT NOT NULL,
  sellerName VARCHAR(50),
  averageReviewScore INT NOT NULL,
  numberReviews INT NOT NULL,
  itemName VARCHAR(50) NOT NULL,
  itemPrice DECIMAL NOT NULL,
  freeShipping BOOLEAN,
  productOptions character[]/ JSON,
  availableQuantity INT NOT NULL,
  onOrder INT NOT NULL
  id unique index
)


CREATE TABLE option (
  id SERIAL PRIMARY KEY,
  optionName VARCHAR(255),
  choice VARCHAR(255)
)

CREATE TABLE productOption (
  productId INT REFERENCES productDetails (id) ON UPDATE CASCADE ON DELETE CASCADE,
  optionId INT REFERENCES option (id) ON UPDATE CASCADE NOT NULL,
  constraint po_id PRIMARY KEY (productId, optionId)
)

CREATE TABLE badge(
  id SERIAL PRIMARY KEY,
  badges VARCHAR(50) NOT NULL
)

CREATE TABLE productBadge(
  productId INT REFERENCES productDetails(id) ON UPDATE CASCADE ON DELETE CASCADE,
  badgeId INT REFERENCES badge(id) ON UPDATE CASCADE NOT NULL,
  constraint b_id PRIMARY KEY(productId, badgeId)
)

// CREATE TABLE sizes(
//   id SERIAL PRIMARY KEY,
//   sizes VARCHAR(50)
// )

// // on update cascade allows you to change the primary key value and any tables that have foreign key references to the value will be changed accordingly
// // use on delete cascade if a row of the referenced table is deleted, then all matching rows in the referencing table are deleted
// CREATE TABLE productSize(
//   productId INT REFERENCES productDetails(id) ON UPDATE CASCADE ON DELETE CASCADE,
//   sizeId INT REFERENCES sizes(id) ON UPDATE CASCADE NOT NULL,
//   constraint s_id PRIMARY KEY(productId, sizeId);
// )

// CREATE TABLE material(
//   id SERIAL PRIMARY KEY,
//   materials VARCHAR(50) NOT NULL
// )

// CREATE TABLE productMaterial(
//   productId INT REFERENCES productDetails(id) ON UPDATE CASCADE ON DELETE CASCADE,
//   materialId INT REFERENCES materials(id) ON UPDATE CASCADE NOT NULL,
//   constraint m_Id PRIMARY KEY(productId, materialId)
// )

// CREATE TABLE pattern(
//   id SERIAL PRIMARY KEY,
//   patterns VARCHAR(50) NOT NULL,
// )

// CREATE TABLE productPattern(
//   productId INT REFERENCES productDetails(id) ON UPDATE CASCADE ON DELETE CASCADE,
//   patternId INT REFERENCES pattern(id) ON UPDATE CASCADE NOT NULL,
//   constraint pat_id PRIMARY KEY(productId, patternId);
// )

// CREATE TABLE font(
//   id SERIAL PRIMARY KEY,
//   fonts VARCHAR(50) NOT NULL
// )


// CREATE TABLE productFont(
//   productId INT REFERENCES productDetails(id) ON UPDATE CASCADE ON DELETE CASCADE,
//   fontId INT REFERENCES font(id) ON UPDATE CASCADE NOT NULL,
//   constraint f_id PRIMARY KEY(productId, fontId)
// )

