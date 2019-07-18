const carouselFormatters = {
  getAltText: ({ data, index }) => data.caption || `${index + 1}`,
  getNextLabel: ({ currentIndex, views, }) => `${currentIndex + 2}`,
  getPrevLabel: ({ currentIndex, views, }) => `${currentIndex}`,
  getNextTitle: () => 'Next',
  getPrevTitle: () => 'Previous',
  getCloseLabel: () => 'Close (esc)',
  getFullscreenLabel: ({ isFullscreen }) => isFullscreen
      ? 'Exit Full Screen (f)'
      : 'View Full Screen (f)',
};
export default carouselFormatters;
