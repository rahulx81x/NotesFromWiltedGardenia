/**
 * Finds related poems based on tag overlap, ordered by highest overlap
 * and then most recent publish date.
 */
export function getRelatedPoems(poem, allPoems, count = 3) {
  if (!poem?.tags?.length || !Array.isArray(allPoems)) return [];

  const scored = allPoems
    .filter((p) => p.id !== poem.id)
    .map((p) => {
      const overlap = (p.tags || []).filter((t) =>
        poem.tags.some((pt) => pt.toLowerCase() === t.toLowerCase())
      ).length;
      return { poem: p, overlap };
    })
    .filter((s) => s.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap || new Date(b.poem.publish_date) - new Date(a.poem.publish_date));

  return scored.slice(0, count).map((s) => s.poem);
}
