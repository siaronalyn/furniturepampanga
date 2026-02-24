# Image Upload Guide

## Folder Structure

Upload your images to the following folders based on their purpose:

### 📁 `assets/images/hero/`
**Purpose:** Hero banner images for the home page
- **File:** `hero-banner.jpg` (or `.png`)
- **Recommended size:** 1920x1080px or larger
- **Usage:** Main hero section on home page

### 📁 `assets/images/products/`
**Purpose:** Product images for catalog and product detail pages
- **Files:** `product-1.jpg`, `product-2.jpg`, etc.
- **Recommended size:** 800x800px (square) or 1200x1200px
- **Usage:** Product cards in catalog and editor's picks

### 📁 `assets/images/products/product-detail/`
**Purpose:** Detailed product images with multiple views
- **Files:** 
  - `main-1.jpg`, `main-2.jpg`, `main-3.jpg`, `main-4.jpg` (main product images)
  - `thumb-1.jpg`, `thumb-2.jpg`, `thumb-3.jpg`, `thumb-4.jpg` (thumbnail versions)
- **Recommended size:** 
  - Main images: 1200x1200px
  - Thumbnails: 150x150px
- **Usage:** Product detail page image gallery

### 📁 `assets/images/editor-picks/`
**Purpose:** Featured products for the Editor's Picks section
- **Files:** `sofa-1.jpg`, `console-table.jpg`, `dining-table.jpg`, `armchair.jpg`
- **Recommended size:** 600x600px or 800x800px
- **Usage:** Home page Editor's Picks section

### 📁 `assets/images/promotional/`
**Purpose:** Promotional banners and themed sections
- **Files:** `comfort-chair.jpg`, `harmony-bird.jpg`
- **Recommended size:** 1200x800px or larger
- **Usage:** Promotional banners and themed sections

### 📁 `assets/images/categories/`
**Purpose:** Category images (if needed)
- **Files:** Category-specific images
- **Usage:** Category navigation (currently using text links)

### 📁 `assets/images/contact/`
**Purpose:** Contact page map image
- **File:** `map-placeholder.jpg` (store location map)
- **Recommended size:** 800x500px or similar
- **Usage:** Contact page store location card (grey placeholder shows if file is missing)

## Image Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names (e.g., `modern-sofa-purple.jpg`)
- Keep file extensions consistent (.jpg or .png)

## Quick Reference

| Location | Folder | Example Files |
|----------|--------|---------------|
| Home Hero | `assets/images/hero/` | `hero-banner.jpg` |
| Product Listings | `assets/images/products/` | `product-1.jpg`, `product-2.jpg` |
| Product Details | `assets/images/products/product-detail/` | `main-1.jpg`, `thumb-1.jpg` |
| Editor's Picks | `assets/images/editor-picks/` | `sofa-1.jpg`, `armchair.jpg` |
| Promotional | `assets/images/promotional/` | `comfort-chair.jpg` |

## Notes

- All image paths in HTML are already set up with the correct folder structure
- If an image is missing, a placeholder will be shown
- Images should be optimized for web (compressed but good quality)
- Supported formats: JPG, PNG, WebP

## Testing

After uploading images:
1. Open `index.html` in your browser
2. Check that all images load correctly
3. Navigate to `catalog.html` to verify product images
4. Open `product.html` to test the image gallery
