import type { CollectionEntry } from 'astro:content';

type Review = CollectionEntry<'reviews'>;

function titleCase(str: string): string {
	return str
		.replace(/-/g, ' ')
		.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/** Episode number = position in pubDate-ascending order, 1-based. */
export function episodeMap(all: Review[]): Map<string, number> {
	const sorted = [...all].sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
	return new Map(sorted.map((review, i) => [review.id, i + 1]));
}

export function reviewSlug(review: Review): string {
	return review.id.replace(/\.mdx?$/, '');
}

export function placeLabel(review: Review): string {
	const region =
		review.data.country === 'United States' ? titleCase(review.data.state ?? '') : review.data.country;
	return `${titleCase(review.data.city)}, ${region}`;
}

export function airDate(review: Review): string {
	return review.data.pubDate
		.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
		.toUpperCase();
}
