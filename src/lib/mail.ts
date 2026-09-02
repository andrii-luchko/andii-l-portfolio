/**
 * Gmail's web compose URL. Unlike `mailto:` this needs no mail handler
 * registered on the visitor's machine — it just opens a browser tab with the
 * recipient already filled in.
 */
export function gmailCompose(to: string, subject?: string, body?: string) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Plain mailto:, for visitors who would rather use their own mail client. */
export function mailto(to: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${to}${query}`;
}

export const DEFAULT_SUBJECT = "Project enquiry";
