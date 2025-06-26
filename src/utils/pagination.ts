/**
 * Generate an array of page numbers and ellipsis for smart pagination display.
 *
 * @param current - The current active page
 * @param total - Total number of pages
 * @returns An array of page numbers and the string "ellipsis"
 *
 * Example (current = 5, total = 10):
 * [1, 'ellipsis', 3, 4, 5, 6, 7, 'ellipsis', 10]
 */
export function paginateResults(current: number, total: number): (number | 'ellipsis')[] {
  const pages: (number | 'ellipsis')[] = [];

  // If total pages is small, show all
  if (total <= 9) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  /**
   * Adds a page number or ellipsis to the list,
   * preventing consecutive duplicates.
   */
  const add = (num: number | 'ellipsis') => {
    if (pages.at(-1) !== num) pages.push(num);
  };

  add(1); // Always show the first page

  if (current > 4) {
    add('ellipsis'); // Ellipsis after the first page
  }

  // Show current ±2 pages (clamped to valid range)
  for (let i = current - 2; i <= current + 2; i++) {
    if (i > 1 && i < total) add(i);
  }

  if (current < total - 3) {
    add('ellipsis'); // Ellipsis before the last page
  }

  add(total); // Always show the last page

  return pages;
}
