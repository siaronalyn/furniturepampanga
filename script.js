(function runMain() {
function main() {
(function() {
    var isProductPage = location.pathname.indexOf('product.html') !== -1;
    var params = isProductPage ? new URLSearchParams(location.search) : null;
    var productId = params ? params.get('id') : null;
    var productName = params ? params.get('name') : null;

    var HIGH_BACK_CHAIRS = {
        valen: {
            name: 'Valen',
            price: '₱13,000.00',
            shortDesc: 'Elegant high-back dining chair with off-white upholstery and dark wooden legs. Simple, classic design for a timeless dining space.',
            description: 'The Valen dining chair brings understated elegance to your table. Crafted with premium off-white upholstery and sturdy dark wood legs, its high backrest offers excellent support. The clean lines and classic silhouette suit both traditional and contemporary settings.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Off-white upholstery, dark wood legs | Assembly: Required',
            care: 'Clean with a soft, dry cloth. For stains, use a mild detergent solution. Avoid direct sunlight to prevent fading. Professional cleaning recommended for deep cleaning.'
        },
        aurex: {
            name: 'Aurex',
            price: '₱13,000.00',
            shortDesc: 'Light cream high-back dining chair with dark tapered wooden legs. Clean, modern silhouette for a fresh look.',
            description: 'The Aurex combines comfort and style with its light cream or beige upholstery and dark, slightly tapered wooden legs. The high back and modern silhouette make it a versatile choice for any dining room.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Light cream upholstery, dark wood legs | Assembly: Required',
            care: 'Clean with a soft, dry cloth. For stains, use a mild detergent solution. Avoid direct sunlight to prevent fading. Professional cleaning recommended for deep cleaning.'
        },
        serin: {
            name: 'Serin',
            price: '₱13,000.00',
            shortDesc: 'Sophisticated dark brown high-back dining chair with tufted back and decorative studs. Leather or faux leather finish.',
            description: 'The Serin dining chair makes a bold statement with its dark brown leather or faux leather upholstery. The tufted high back and decorative studs along the edges add a touch of sophistication. Dark wooden legs complete the refined look.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Dark brown leather/faux leather, dark wood legs | Assembly: Required',
            care: 'Wipe with a damp cloth. Use leather conditioner for genuine leather. Avoid sharp objects and direct heat. Professional cleaning recommended for deep cleaning.'
        },
        calver: {
            name: 'Calver',
            price: '₱13,000.00',
            shortDesc: 'High-back dining chair in light beige fabric with visible dark wood frame and distinctive brass caps on front legs.',
            description: 'The Calver features light beige fabric upholstery with a visible dark wood frame that outlines the back and seat. Its front legs are finished with distinctive brass caps, adding a subtle touch of luxury to your dining space.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Light beige fabric, dark wood frame, brass leg caps | Assembly: Required',
            care: 'Clean with a soft, dry cloth. For stains, use a mild detergent solution. Polish brass caps occasionally. Avoid direct sunlight to prevent fading.'
        },
        elowen: {
            name: 'Elowen',
            price: '₱13,000.00',
            shortDesc: 'High-back dining chair in light brown linen-textured fabric with a prominent dark wood frame from back to legs.',
            description: 'The Elowen dining chair offers a warm, natural look with its light brown, linen-textured fabric. A prominent dark wood frame encompasses the back and curves down to form the legs, creating a cohesive and sturdy design.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Linen-textured fabric, dark wood frame | Assembly: Required',
            care: 'Clean with a soft, dry cloth. For stains, use a mild detergent solution. Avoid direct sunlight to prevent fading. Professional cleaning recommended for deep cleaning.'
        },
        ravelle: {
            name: 'Ravelle',
            price: '₱13,000.00',
            shortDesc: 'Distinctly designed high-back dining chair with off-white upholstery and an elegant curved, wingback-like profile.',
            description: 'The Ravelle stands out with its unique curved profile. Off-white upholstery and a dark wood frame create an elegant, almost wingback-like high backrest. Dark wooden legs complete this statement piece for your dining room.',
            specifications: 'Dimensions: 24" W x 22" D x 42" H | Weight: 18 kg | Material: Off-white upholstery, dark wood frame and legs | Assembly: Required',
            care: 'Clean with a soft, dry cloth. For stains, use a mild detergent solution. Avoid direct sunlight to prevent fading. Professional cleaning recommended for deep cleaning.'
        }
    };

    if (isProductPage) {
        var productNameEl = document.querySelector('.product-title');
        var breadcrumbEl = document.getElementById('breadcrumb-product-name');
        var overlayEl = document.getElementById('productTitleOverlay');
        var breadcrumbCategory = document.getElementById('breadcrumb-category');
        var productPriceEl = document.querySelector('.product-price');
        var productShortDescEl = document.querySelector('.product-short-desc');

        var variant = params.get('variant');
        var sub = params.get('sub');
        var category = params.get('category');
        var subToKey = sub ? { 'high-back': 'highback', 'low-back': 'lowback', 'upholstered': 'upholstered', 'padded': 'padded', 'solhiya': 'solhiya' }[sub] : null;
        var variantData = null;
        if (variant && subToKey) {
            try {
                var vRaw = localStorage.getItem('furniturePampangaCatalogVariants_chair_' + subToKey);
                if (vRaw) {
                    var vData = JSON.parse(vRaw);
                    variantData = vData[variant] || null;
                }
            } catch (e) {}
        }

        var highBackInfo = (category === 'chair' && sub === 'high-back' && variant) ? HIGH_BACK_CHAIRS[variant] : null;

        if (highBackInfo) {
            var displayName = highBackInfo.name;
            if (productNameEl) productNameEl.textContent = displayName;
            if (breadcrumbEl) breadcrumbEl.textContent = displayName;
            if (overlayEl) overlayEl.textContent = displayName;
            if (productPriceEl) productPriceEl.textContent = highBackInfo.price;
            if (productShortDescEl) productShortDescEl.textContent = highBackInfo.shortDesc;
            var descEl = document.querySelector('#description');
            var specEl = document.querySelector('#specifications');
            var careEl = document.querySelector('#care');
            if (descEl) descEl.innerHTML = '<p>' + (highBackInfo.description + '').replace(/\n/g, '</p><p>') + '</p>';
            if (specEl) specEl.innerHTML = '<ul><li>' + (highBackInfo.specifications + '').replace(/\|/g, '</li><li>') + '</li></ul>';
            if (careEl) careEl.innerHTML = '<p>' + (highBackInfo.care + '').replace(/\n/g, '</p><p>') + '</p>';
        }

        if (variantData && (variantData.images || []).length > 0) {
            if (!highBackInfo) {
                var displayName = (variantData.name || variant).replace(/^\w/, function(c) { return c.toUpperCase(); });
                if (productNameEl) productNameEl.textContent = displayName;
                if (breadcrumbEl) breadcrumbEl.textContent = displayName;
                if (overlayEl) overlayEl.textContent = displayName;
            }
            var mainImg = document.getElementById('mainProductImage');
            var thumbBtns = document.querySelectorAll('.gallery-thumbnails .thumbnail');
            var images = variantData.images || [];
            var firstUrl = '';
            [0, 1, 2, 3].forEach(function(i) {
                var url = (images[i] || '').trim();
                if (thumbBtns[i]) {
                    var btn = thumbBtns[i];
                    btn.setAttribute('data-image', url);
                    var img = btn.querySelector('img');
                    if (img) { img.src = url || ''; img.alt = 'Thumbnail ' + (i + 1); }
                    if (url && !firstUrl) firstUrl = url;
                }
            });
            if (mainImg && firstUrl) mainImg.src = firstUrl;
            if (variantData.description && !highBackInfo) {
                var descEl = document.querySelector('#description');
                if (descEl) descEl.innerHTML = '<p>' + (variantData.description + '').replace(/\n/g, '</p><p>') + '</p>';
            }
        } else if (!highBackInfo && productName) {
            if (productNameEl) productNameEl.textContent = productName;
            if (breadcrumbEl) breadcrumbEl.textContent = productName;
            if (overlayEl) overlayEl.textContent = productName;
        }

        if (breadcrumbCategory && category) {
            var subParam = params.get('sub');
            breadcrumbCategory.href = 'catalog.html?category=' + encodeURIComponent(category) + (subParam ? '&sub=' + encodeURIComponent(subParam) : '');
            breadcrumbCategory.textContent = subParam === 'high-back' ? 'Dining Chair (High-Back Category)' : (category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' '));
        }

        var STORAGE_KEY = 'furniturePampangaProductData';
        var data = {};
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) data = JSON.parse(raw);
        } catch (e) {}

        if (!variantData && !highBackInfo && productId && data[productId]) {
            var product = data[productId];
            var images = product.images || [];
            var mainImg = document.getElementById('mainProductImage');
            var thumbBtns = document.querySelectorAll('.gallery-thumbnails .thumbnail');

            var firstUrl = '';
            [0, 1, 2, 3].forEach(function(i) {
                var url = (images[i] || '').trim();
                if (thumbBtns[i]) {
                    var btn = thumbBtns[i];
                    btn.setAttribute('data-image', url);
                    var img = btn.querySelector('img');
                    if (img) {
                        img.src = url || '';
                        img.alt = 'Thumbnail ' + (i + 1);
                    }
                    if (url && !firstUrl) firstUrl = url;
                }
            });
            if (mainImg && firstUrl) mainImg.src = firstUrl;

            var descEl = document.querySelector('#description');
            var specEl = document.querySelector('#specifications');
            var careEl = document.querySelector('#care');
            var reviewsEl = document.querySelector('#reviews');
            if (product.description && descEl) descEl.innerHTML = '<p>' + product.description.replace(/\n/g, '</p><p>') + '</p>';
            if (product.specifications && specEl) specEl.innerHTML = '<ul><li>' + product.specifications.replace(/\n/g, '</li><li>') + '</li></ul>';
            if (product.care && careEl) careEl.innerHTML = '<p>' + product.care.replace(/\n/g, '</p><p>') + '</p>';
            if (product.reviews && reviewsEl) reviewsEl.innerHTML = product.reviews;
        }

        var thumbnails = document.querySelectorAll('.gallery-thumbnails .thumbnail');
        var mainImg = document.getElementById('mainProductImage');
        thumbnails.forEach(function(btn) {
            btn.addEventListener('click', function() {
                thumbnails.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                var src = btn.getAttribute('data-image') || (btn.querySelector('img') && btn.querySelector('img').src);
                if (mainImg && src) mainImg.src = src;
            });
        });

        var tabBtns = document.querySelectorAll('.product-tabs .tab-btn');
        var tabPanes = document.querySelectorAll('.tab-content .tab-pane');
        tabBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var tabId = btn.getAttribute('data-tab');
                tabBtns.forEach(function(b) { b.classList.remove('active'); });
                tabPanes.forEach(function(p) { p.classList.remove('active'); });
                btn.classList.add('active');
                var pane = document.getElementById(tabId);
                if (pane) pane.classList.add('active');
            });
        });
    }

    // Home page: apply background image from admin (Home background image)
    var heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        try {
            var homeBg = (localStorage.getItem('furniturePampangaHomeBg') || '').trim();
            if (homeBg) heroImg.src = homeBg;
        } catch (e) {}
    }
})();
}
if (window.runWhenStorageReady) {
    window.runWhenStorageReady(main);
} else {
    main();
}
})();
