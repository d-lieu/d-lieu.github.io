export const applyAgentMapFilters = (
  filters: string[],
  videoTags: string[]
) => {
  //FIXME: only works when filtering agents first

  const filteredByAgentTag = filters.includes(videoTags[0]);
  if (filters.length > 1) {
    const filteredByMapTag = filters.includes(videoTags[1]);
    return filteredByAgentTag && filteredByMapTag;
  }
  return filteredByAgentTag;
};

//TODO: support deeper filters, currently only supporting 1map + 1agent filtering
