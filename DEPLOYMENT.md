# Production deployment

## Required Awin configuration
Edit `assets/awin-config.js` and replace the publisher ID and each advertiser ID with values from your approved Awin account. Do not publish placeholder IDs as tracked links. Until configured, links intentionally fall back to the merchant destinations.

For product-level tracking, replace each card's `data-destination` with the approved product deep-link destination and use a distinct `data-clickref` value. The script builds the Awin tracking link at page load.

## Product images
No image uses lazy loading. When adding approved product images, include explicit `width` and `height`, an accurate `alt`, and preferably local AVIF/WebP files. Keep the initial mobile payload small because eager loading means every image downloads immediately.

## Deploy
Upload the files at the ZIP root to the domain root. `_headers` is compatible with Cloudflare Pages-style static headers. Verify equivalent headers if using another host.
