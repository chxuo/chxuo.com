import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
  subheadings: TocItem[];
}

function buildToc(headings: MarkdownHeading[]) {
  const toc: TocItem[] = [];
  const parentHeadings = new Map();
  headings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });
  return toc;
}

function drawPath() {
  const path = document.querySelector("path.toc-marker");
  const links = Array.from(document.querySelectorAll("nav.toc a"));
  if (!links.length) return;

  // Start with an empty array of path data values (joined with
  // spaces later)
  let pathData = [];
  let left = 0; // The last x position / indentation

  // Iterate over each link to build up the pathData
  links.forEach((link, i) => {
    const x = link.offsetLeft;
    const y = link.offsetTop;
    const height = link.offsetHeight;
    if (i === 0) {
      // Like drawing with a pen...
      // 'M'ove to the top left of the first link,
      // and then draw a 'L'ine to the bottom left
      pathData.push("M", x, y, "L", x, y + height);
    } else {
      // If the current link is indented differently than the last,
      // then come down to the current link's top before moving
      // left or right. This ensures we get 90-degrees angle at the
      // corners.
      if (left !== x) pathData.push("L", left, y);

      // Draw a line to the top left of the current link
      pathData.push("L", x, y);

      // Draw a line to the bottom left of the current link
      pathData.push("L", x, y + height);
    }

    // Save the current link's x position to compare with the next
    // link
    left = x;
  });

  // Apply all this path data to the path's d attribute
  path.setAttribute("d", pathData.join(" "));
}

export { buildToc, drawPath };
