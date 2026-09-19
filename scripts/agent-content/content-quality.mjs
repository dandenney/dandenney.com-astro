const SOURCE_ARTIFACT_PATTERNS = [
  /\bthis entry\b/gi,
  /\bthe (?:attached |supplied |provided |standard [\w'-]+ )?(?:photo|image|screenshot)\b/gi,
  /\b(?:photo|image|screenshot) (?:shows|showed|captures|captured|depicts|pictured)\b/gi,
  /\b(?:fresh )?photographic evidence\b/gi,
  /\bpictured\b/gi,
  /\bthe user (?:said|provided|supplied|mentioned)\b/gi,
];

export function lintNoReservaitionsBody(body) {
  const text = String(body || '');
  const issues = [];

  for (const pattern of SOURCE_ARTIFACT_PATTERNS) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      issues.push(
        `Published review body must not narrate source artifacts or the publishing process: matched "${match[0]}".`,
      );
    }
  }

  return issues;
}
