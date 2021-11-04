export const pageData = (offset, limit, pages) => {
  let firstIndex;
  let lastIndex;
  const currentPages = [];
  const isLastPage = Math.ceil(offset / limit) >= pages;

  if (offset === 0) {
    firstIndex = 0;
    lastIndex = limit * 4;
  } else if (offset === limit) {
    firstIndex = 0;
    lastIndex = limit * 4;
  } else if (isLastPage && pages) {
    firstIndex = offset - limit * 4;
    lastIndex = offset;
  } else {
    firstIndex = offset - limit * 2;
    lastIndex = offset + limit * 2;
  }

  for (let i = firstIndex; i < lastIndex; i += limit) {
    currentPages.push({
      pageNumber: i / limit + 1,
      pageOffset: i,
      active: offset === i,
    });
  }
  return currentPages;
};
