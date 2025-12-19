const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if small count
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always show first page
    pages.push(1);

    // Left dots
    if (currentPage > 3) {
      pages.push("...");
    }

    // Middle pages
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Right dots
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-1 mt-5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm rounded-md border border-primary text-white bg-primary hover:text-primary cursor-pointer  hover:bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-2 text-sm text-primary select-none">
            …
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 text-sm rounded-md cursor-pointer border border-primary transition
              ${
                page === currentPage
                  ? "bg-secondary text-white border-primary"
                  : "bg-white text-primary-dark hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm rounded-md border border-primary text-white bg-primary hover:text-primary cursor-pointer  hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
