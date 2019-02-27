import React from 'react';
import {
  func,
  number,
} from 'prop-types';

const uuidv4 = require('uuid/v4');

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  // eslint-disable-next-line no-shadow
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Paginationv2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 0,
      totalRecords: 1,
      pageLimit: 20,
      pageNeighbours: 2,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.init(this.props);
  }

  componentDidUpdate(preProps) {
    const { totalRecords } = this.props;
    if (preProps.totalRecords !== totalRecords) {
      this.init();
    }
  }

  init = () => {
    const { totalRecords, pageLimit, pageNeighbours } = this.props;
    let totalRecordsLet = totalRecords;
    let pageLimitLet = pageLimit;
    let pageNeighboursLet = pageNeighbours;

    pageLimitLet = typeof pageLimit === 'number' ? pageLimit : 30;
    totalRecordsLet = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    pageNeighboursLet = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    const totalPages = Math.ceil(totalRecords / pageLimit);

    this.setState({
      totalPages,
      totalRecords: totalRecordsLet,
      pageLimit: pageLimitLet,
      pageNeighbours: pageNeighboursLet,
      currentPage: 1,
    });
  }

  gotoPage = (page) => {
    // eslint-disable-next-line react/prop-types
    const { onPageChanged = f => f } = this.props;
    const {
      totalPages,
      pageLimit,
      totalRecords,
    } = this.state;
    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }

  handleClick = page => (evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = (evt) => {
    const { currentPage, pageNeighbours } = this.state;
    evt.preventDefault();
    this.gotoPage(currentPage - (pageNeighbours * 2) - 1);
  }

  handleMoveRight = (evt) => {
    const { currentPage, pageNeighbours } = this.state;
    evt.preventDefault();
    this.gotoPage(currentPage + (pageNeighbours * 2) + 1);
  }

  fetchPageNumbers = () => {
    const { totalPages, currentPage, pageNeighbours } = this.state;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  render() {
    const { totalRecords, totalPages } = this.state;
    if (!totalRecords || totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <React.Fragment>
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            {pages.map((page) => {
              if (page === LEFT_PAGE) {
                return (
                  <li key={uuidv4()} className="page-item" onClick={this.handleMoveLeft}>
                    Prev
                  </li>
                );
              }

              if (page === RIGHT_PAGE) {
                return (
                  <li key={uuidv4()} className="page-item" onClick={this.handleMoveRight}>
                    Next
                  </li>
                );
              }

              return (
                <li
                  onClick={this.handleClick(page)}
                  key={uuidv4()}
                  className={`page-item${currentPage === page ? ' active' : ''}`}
                >
                  {page}
                </li>
              );
            })}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

Paginationv2.propTypes = {
  totalRecords: number.isRequired,
  pageLimit: number.isRequired,
  pageNeighbours: number.isRequired,
  onPageChanged: func.isRequired,
};

export default Paginationv2;
