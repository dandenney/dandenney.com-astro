function stringifyList(value) {
  return JSON.stringify(value ?? [], null, 0);
}

function sourceLines(sources = []) {
  return sources
    .map((source) => `- ${source.kind || 'source'}: ${source.url || ''}${source.note ? ` — ${source.note}` : ''}`)
    .join('\n');
}

function researchedLines(researched = []) {
  if (!Array.isArray(researched) || researched.length === 0) return '- None.';
  return researched
    .map((anchor) => `- ${anchor.claim || ''} — ${anchor.sourceUrl || ''}`)
    .join('\n');
}

export function renderNoResPrompt(packet, stylePack) {
  const sourceInput = packet.sourceInput || {};
  const frontmatter = packet.frontmatter || {};
  const location = packet.location || {};
  const bodyBrief = packet.bodyBrief || {};
  const narrativeContext = packet.narrativeContext || {};
  const firsthand = narrativeContext.firsthand || {};
  const confidence = packet.confidence || 'unknown';
  const flags = packet.flags || [];

  return `# Reconstructed Quillan Prompt

This prompt artifact was backfilled after the original run so the run directory preserves the text-generation input. It is reconstructed from \`packet.json\`, the No Reservaitions style pack, and the published workflow contract.

## Task
Write the **Markdown body only** for a No Reservaitions review. Write from inside the remembered experience so the reader feels accompanied at the table, bar, venue, bakery counter, or first tee.

## Style pack
${stylePack.trim()}

## Packet grounding
- Run type: \`${packet.type}\`
- Title: \`${frontmatter.title || ''}\`
- Location label: \`${location.title || frontmatter.title || ''}\`
- Address: \`${frontmatter.address || ''}\`
- City/state/country: \`${frontmatter.city || ''}\`, \`${frontmatter.state || ''}\`, \`${frontmatter.country || ''}\`
- Coordinates: \`${frontmatter.coordinates || ''}\`
- Info URL: \`${frontmatter.infoUrl || ''}\`
- Description: \`${frontmatter.description || ''}\`
- Source items: ${stringifyList(sourceInput.items)}
- Source notes: ${sourceInput.notes || ''}
- Golf mode: ${Array.isArray(frontmatter.tags) && frontmatter.tags.length === 1 && frontmatter.tags[0] === 'golf' ? 'yes — center the course/outing experience; food and drinks are optional secondary details' : 'no'}
- Confidence: \`${confidence}\`
- Flags: ${stringifyList(flags)}

## Narrative anchors
### Firsthand memory
- Why they were there: ${firsthand.whyThere || 'unknown'}
- Companions or occasion: ${firsthand.companionsOrOccasion || 'unknown'}
- Room, setting, or arrival: ${firsthand.roomOrSetting || 'unknown'}
- Strongest sensory memory: ${firsthand.strongestSensoryMemory || 'unknown'}

### Researched context
${researchedLines(narrativeContext.researched)}

### Missing context and readiness
- Missing: ${stringifyList(narrativeContext.missing)}
- Follow-up needed: ${String(narrativeContext.followUpNeeded ?? 'unknown')}

If follow-up is still needed, stop instead of drafting around missing experience.

## Dan-approved calibration
Use Dan's approved Dutch Maid Bakery & Cafe and High Point Restaurant revisions as calibration for immediate sense of place, conversational appetite, sensory specificity, humor with a point of view, food connected to people or occasion, and an ending that explains why the memory mattered. Do not copy their wording, cadence, metaphors, or structure.

## Writing brief
- Angle: ${bodyBrief.angle || ''}
- Must include: ${stringifyList(bodyBrief.mustInclude)}
- Must avoid: ${stringifyList(bodyBrief.mustAvoid)}

## Sources to respect
${sourceLines(packet.sources)}

## Output instructions
- Write 3-5 short paragraphs, usually 180-420 words.
- Markdown body only. No frontmatter or headings.
- Open from a real scene, occasion, or sourced piece of history—not from an abstract topic sentence.
- For standard restaurant/venue reviews, mention at least 2 specific items when the evidence contains them.
- For golf-tagged reviews, mention at least 2 concrete specifics from the course/facility, outing, or source notes.
- Connect food or drink to people, place, history, appetite, or occasion.
- Reject prose that would still work if the venue name were swapped.
- Do not invent atmosphere, flavor, texture, service, dialogue, reactions, ownership, or history.
- Do not mention photos, images, screenshots, prompts, packets, research, or publishing.
- Do not force a caveat, trade-off, “who should go,” or practical takeaway.
- End with an earned judgment, image, or emotional truth specific to this visit.
`;
}
