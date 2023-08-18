

interface CarouselStyles {
    carousel: React.CSSProperties;
}
export const carouselStyles: CarouselStyles = {
    carousel: {
        borderRadius:'2rem',
        display: 'inline-flex',
        overflowX: 'hidden',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    },
};