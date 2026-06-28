export const analyticsEvents = {
  headerCta: 'cta_header_whatsapp',
  heroWhatsapp: 'cta_hero_whatsapp',
  heroContact: 'cta_hero_contact',
  quickQuote: 'cta_quick_quote_whatsapp',
  formSubmit: 'form_quote_whatsapp',
  floatingWhatsapp: 'cta_floating_whatsapp'
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function analyticsAttrs(event: AnalyticsEvent) {
  return {
    'data-analytics-event': event
  };
}
