// @flow
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { RouteModalContext } from 'src/routes';

/*
  Because route modals (like the thread modal) share the same scroll container 
  as all other views, we want to make sure that if a modal is open that we
  aren't performing unnecessary pagination in the background
*/
const InfiniteScroller = (props: Props) => {
  const [scrollElement, setScrollElement] = useState(null);

  useEffect(() => {
    setScrollElement(document.getElementById('scroller-for-thread-feed'));
    return () => setScrollElement(null);
  }, []);

  return (
    <RouteModalContext.Consumer>
      {({ hasModal }) => {
        let { loadMore, ...rest } = props;
        if (hasModal) loadMore = () => {};

        return (
          <InfiniteScroll
            loadMore={loadMore}
            useWindow={false}
            getScrollParent={() => scrollElement}
            {...rest}
          />
        );
      }}
    </RouteModalContext.Consumer>
  );
};

export default InfiniteScroller;
