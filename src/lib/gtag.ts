declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const ADS_ID = "AW-853490942";

// Google Ads conversion labels — fill in after creating conversion actions in Google Ads
export const CONVERSION_LABELS = {
  form_submit: "", // Google Ads > Goals > Conversions > "お問い合わせフォーム送信"
  phone_click: "", // Google Ads > Goals > Conversions > "電話クリック"
  sms_click:   "", // Google Ads > Goals > Conversions > "SMSクリック"
};

function gtagFire(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

/** GA4 + Google Ads conversion (call after form succeeds) */
export function trackFormSubmit() {
  gtagFire("event", "generate_lead", { event_category: "contact", event_label: "form" });
  if (CONVERSION_LABELS.form_submit) {
    gtagFire("event", "conversion", { send_to: `${ADS_ID}/${CONVERSION_LABELS.form_submit}` });
  }
}

/** GA4 + Google Ads conversion (call on phone link click) */
export function trackPhoneClick() {
  gtagFire("event", "click", { event_category: "contact", event_label: "phone" });
  if (CONVERSION_LABELS.phone_click) {
    gtagFire("event", "conversion", { send_to: `${ADS_ID}/${CONVERSION_LABELS.phone_click}` });
  }
}

/** GA4 + Google Ads conversion (call on SMS link click) */
export function trackSmsClick() {
  gtagFire("event", "click", { event_category: "contact", event_label: "sms" });
  if (CONVERSION_LABELS.sms_click) {
    gtagFire("event", "conversion", { send_to: `${ADS_ID}/${CONVERSION_LABELS.sms_click}` });
  }
}
