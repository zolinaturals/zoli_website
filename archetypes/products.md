---
date: {{ .Date }}
draft: true

# Type must be "products".
type: "products"

productID: ""

price: "0.00"
priceBefore: ""
showPrice: false

images:
  - image: "images/products/product-1.png"

title: "{{ replace .Name "-" " " | title }}"

# Description change to correct language.
description: "Short meta description for SEO"


# Short description, change to correct language.
shortDescription: "Short product description shown in listings"
---

> [!IMPORTANT] Write localized product details.

This paragraph represents the **main product description**.

## Product Details

- Feature 1
- Feature 2
- Feature 3

## Usage

Explain how the product should be used.

## Additional Information

Any extra notes, warnings, or specifications.
