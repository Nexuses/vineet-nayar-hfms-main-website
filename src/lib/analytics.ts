export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-0BT2JXWMK1'

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18043603754'

export const GTM_ID = 'GTM-NJWDT595'

export const GTAG_LOADER_ID = GA_MEASUREMENT_ID || GOOGLE_ADS_ID

export const GA_GTAG_INIT_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ''}
  ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
`

export const GTM_SCRIPT = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`

export const LINKEDIN_PARTNER_ID = '9627468'

export const LINKEDIN_INSIGHT_SCRIPT = `
_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
;(function(l) {
  if (!l) {
    window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[];
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);
`
