// Global theme configuration
// Edit these colors to customize the site appearance

export const colors = {
  // Page backgrounds
  bg: "#f7f7f7",
  text: "#222222",

  // Brand colors
  forest: "#0066cc",       // Primary blue
  forest2: "#004494",      // Darker blue
  accent: "#00a8e8",       // Light blue accent
  secondary: "#ff6b35",    // Orange accent

  // Section backgrounds (for StoryBand without images)
  section: [
    { bg: "#ffffff", isLight: true },  // White
    { bg: "#f3f4f6", isLight: true },  // Light gray (gray-100)
  ],
};

// For backwards compatibility
export const SECTION_COLORS = colors.section.map((s) => s.bg);
export const SECTION_IS_LIGHT = colors.section.map((s) => s.isLight);
