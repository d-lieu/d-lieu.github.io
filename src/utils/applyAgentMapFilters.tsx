export const applyAgentMapFilters = (
  filters: string[],
  videoTags: string[]
) => {
  const filteredByAgentTag = filters.includes(videoTags[0]);
  if (filters.length > 1) {
    const filteredByMapTag = filters.includes(videoTags[1]);
    return filteredByAgentTag && filteredByMapTag;
  }
  return filteredByAgentTag;
};
