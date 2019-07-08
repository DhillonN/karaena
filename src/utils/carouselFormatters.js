const carouselFormatters = {
  getAltText: ({ data, index }) => data.caption || `${index + 1}. kép`,
  getNextLabel: ({ currentIndex, views, }) => `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
  getPrevLabel: ({ currentIndex, views, }) => `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,
  getNextTitle: () => 'Next',
  getPrevTitle: () => 'Previous',
  getCloseLabel: () => 'Close (esc)',
  getFullscreenLabel: ({ isFullscreen }) => isFullscreen
      ? 'Kilépés a teljes képernyős nézetből (f)'
      : 'Teljes képernyőre váltás (f)',
};
export default carouselFormatters;
