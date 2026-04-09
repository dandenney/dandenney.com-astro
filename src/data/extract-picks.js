/**
 * Expert Picks Extractor
 * Run this in the browser console on the CBS Sports expert picks page.
 *
 * BEFORE RUNNING: Update START_ID to the next sequential ID for expertPicks.ts
 */
(function () {
  const START_ID = 150;        // ← UPDATE THIS before running
  const FILTER_DATE = "Apr 08 2026";  // ← optionally filter by date, e.g. "Apr 04 2026" — null = all picks

  const sections = [...document.querySelectorAll('section')].filter(
    (s) => s.querySelector('[data-tracking-value^="expert-picks_click_market-type"]')
  );

  if (!sections.length) {
    console.warn('No expert pick sections found. Make sure you are on the right page.');
    return;
  }

  const picks = sections.map((section, index) => {
    // Game time — the time span is a sibling of leagueTestId-parent, so go up one level
    const timeEl = section
      .querySelector('[data-testid="leagueTestId-parent"]')
      ?.parentElement
      ?.querySelector('span[class*="bcSPbh"]');
    const gameDateTime = timeEl?.textContent.trim() ?? null;

    // Teams (first = away, second = home with "@ " prefix)
    const teamEls = [...section.querySelectorAll('span[class*="exlKJV"]')];
    const scoreEls = [...section.querySelectorAll('span[class*="fzhjOk"]')];

    const rawTeam1 = teamEls[0]?.textContent.trim() ?? '';
    const rawTeam2 = teamEls[1]?.textContent.trim() ?? '';
    const awayTeam = rawTeam1.startsWith('@ ') ? rawTeam1.slice(2) : rawTeam1;
    const homeTeam = rawTeam2.startsWith('@ ') ? rawTeam2.slice(2) : rawTeam2;

    const s1 = scoreEls[0]?.textContent.trim() ?? '';
    const s2 = scoreEls[1]?.textContent.trim() ?? '';
    const awayScore = s1 === '' ? '' : isNaN(+s1) ? s1 : +s1;
    const homeScore = s2 === '' ? '' : isNaN(+s2) ? s2 : +s2;

    // Bet type and title
    const betType = section.querySelector('span[class*="jzYNBq"]')?.textContent.trim() ?? '';
    const betTitle = section.querySelector('span[class*="kVcCFF"]')?.textContent.trim() ?? '';

    // Result (color attribute: "win" | "loss" | "push")
    const resultEl = section.querySelector('span[color="win"], span[color="loss"], span[color="push"]');
    const result = resultEl?.getAttribute('color') ?? 'win';

    // Author info (from the profile link area)
    const profileLink = section.querySelector('[data-tracking-value="expert-picks_click_profile-avatar"]');
    const authorNameEl = profileLink?.querySelector('span[class*="jTOUQL"]');
    const authorName = authorNameEl?.textContent.trim() ?? '';

    // Author other name: the bcSPbh span inside the same column div as the author name
    const authorCard = authorNameEl?.closest('div[direction="column"]');
    const authorOtherName = authorCard?.querySelector('span[class*="bcSPbh"]')?.textContent.trim() ?? '';

    // Author image: avatar in the profile link area
    const authorImgEl = profileLink?.querySelector('img[data-testid="avatarTestId-image"]');
    const authorImageUrl = authorImgEl?.src ?? null;

    // Analysis paragraph
    const analysisText = section.querySelector('p')?.textContent.trim() ?? null;

    // Pick made time + sportsbook
    // Structure: <span>Pick Made:</span> <span[display=inline-flex]><span>Fri 8:53 am CDT</span></span> <span>on Caesars</span>
    const pickMadeLabel = [...section.querySelectorAll('span[class*="bcSPbh"]')].find(
      (el) => el.textContent.trim() === 'Pick Made:'
    );
    const pickMadeContainer = pickMadeLabel?.parentElement;

    const pickMadeTime =
      pickMadeContainer
        ?.querySelector('span[display="inline-flex"] span[class*="bcSPbh"]')
        ?.textContent.trim() ?? null;

    const sbSpans = pickMadeContainer
      ? [...pickMadeContainer.querySelectorAll('span[class*="bcSPbh"]')]
      : [];
    // Last span is "on Caesars" — strip the "on " prefix
    const sbRaw = sbSpans[sbSpans.length - 1]?.textContent.trim() ?? '';
    const sportsbook = sbRaw.startsWith('on ') ? sbRaw.slice(3) : sbRaw || null;

    return {
      id: START_ID + index,
      gameDateTime,
      homeTeam,
      homeScore,
      awayTeam,
      awayScore,
      betType,
      betTitle,
      result,
      authorName,
      authorOtherName,
      authorImageUrl,
      analysisText,
      pickMadeTime,
      sportsbook,
    };
  });

  const uniqueDates = [...new Set(picks.map((p) => p.gameDateTime).filter(Boolean))];
  console.log('Dates found on page:', uniqueDates);

  const filtered = FILTER_DATE
    ? picks.filter((p) => p.gameDateTime?.includes(FILTER_DATE))
    : picks;

  // Re-sequence IDs after filtering
  filtered.forEach((p, i) => { p.id = START_ID + i; });

  const json = JSON.stringify(filtered, null, 2);
  console.log(json);
  try {
    copy(json);
    console.log(`✓ ${filtered.length} picks copied to clipboard (IDs ${START_ID}–${START_ID + filtered.length - 1})`);
  } catch {
    console.log(`↑ ${filtered.length} picks above (copy() not available — select and copy manually)`);
  }

  return filtered;
})();
