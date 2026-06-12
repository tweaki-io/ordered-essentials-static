
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.BrBVQSE2.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CPjJZZ37.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.CCckXKKp.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.DTl7-b_1.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.DBqIYFYh.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory-legacy.UvT4MP1e.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.D9dJeA84.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.BDk7UU6J.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.CG8ery6E.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.BOsCBVVb.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.CyjVBsT3.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.DA8j5doM.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.CWL9u26t.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.BfjxF_oD.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation-legacy.C5mbOv6t.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel-legacy.CHXsoX9V.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DG73RC2Y.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.D0cw1yml.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.CeqId601.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.DDfZ5iAb.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.8bA8GSDP.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.CBJtcGze.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.TDBZYl45.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.DskERb1G.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.DNLJ_CcQ.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.VwDqti_l.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.BbqwDAju.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.dn1DXP8z.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.C7DcwzW0.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.BVBYp-dt.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.Sfr7RytN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.D3ryEWjQ.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.CCFnCuvK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.th-ab7sF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.Zo_RDvI0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.D-oeiykt.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.BOkoJ-u9.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.BqJo0aha.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.WjIyw8pb.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.CujxdXpd.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.DwU-MMeb.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.DEDSZqGX.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.CVGpxl8P.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants-legacy.CxiN0GmP.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.6rhwf6lb.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.CAyXzK0d.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.CfnONprA.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CmTOrw4x.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Bp1DI14X.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.ogCPXmW2.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.TiRGSgKm.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.y99eNSPQ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.K9mT5arM.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.D4mFGc9-.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage-legacy.BFJgD7RG.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/1009/7216/7349/files/Ordered_Essentials_logo_nav_564b79a5-9982-4279-a71f-b6e08f0cda5e_x320.png?v=1776678004"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  