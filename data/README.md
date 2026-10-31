# Managing the TeeVerse collection

The collection lives in [`products.ts`](./products.ts). Each product has a unique `slug`, a display `name`, a `collection`, an ordered `images` gallery, and one or more `videos`.

To add or update a design, edit the `products` array in `products.ts`:

1. Give each design a unique, URL-friendly `slug` and the name visitors should see.
2. Add image entries in the order they should appear. Use optimized, watermarked preview assets and descriptive alt text.
3. Add video entries with a browser-compatible MP4 URL and a short label. A poster image can be set for each video.
4. Save the file. The collection grid and product pop-up read directly from this catalogue.

The current image and video URLs are replaceable demo media, not TeeVerse product photography. There is no admin panel or database in this starter; the catalogue is managed in code so no credentials or hosting service are needed. A database and authenticated admin area can be added when product uploads need to happen in the browser.

The Kids' Collection concepts and their 3D presenter options are defined in the `teeLooks` list in [`components/storefront.tsx`](../components/storefront.tsx). Update a look's name, fabric color, print color, and two-line artwork there; the kids cards and interactive presenter share the same list.

## Media protection

The storefront adds a visible preview watermark and disables the context menu and dragging on displayed media. The video element hides its download control where browsers support that hint. These are deterrents only: public media URLs can still be inspected, and visitors can capture the screen. For stronger protection, upload watermarked preview renditions to a private media provider and serve them through short-lived signed URLs from an authenticated backend. Keep original artwork masters outside the public web directory.
