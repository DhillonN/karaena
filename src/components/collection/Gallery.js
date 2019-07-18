import Img from "gatsby-image"
import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images-z-index-fix"
import { Link } from "rebass"
import carouselFormatters from "../../utils/carouselFormatters"
import Masonry from "react-masonry-component"
import withStyles from "@material-ui/core/styles/withStyles"
import facebookPostsStyles from "../FacebookPosts/FacebookPostsStyles"
import galleryStyles from './GalleryStyles'
const Gallery = ({ images, classes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }
  const masonryOptions = {
    transitionDuration: 0
};
  return (
    <>
      <Masonry
        className={classes.masonry} // default ''
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false

      >
        {images.map((image, i) => (
          <div className={classes.columns} key={i}>
            <Link
              key={image.id}
              href={image.originalImg}
              onClick={e => {
                e.preventDefault()
                openModal(i)
              }}
            >
              <Img fluid={image} alt={image.alt} className={classes.imgRounded} />
            </Link>
          </div>
        ))}
      </Masonry>

      {ModalGateway && (
        <ModalGateway  >
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel className={classes.popup}
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  caption,
                }))}
                currentIndex={modalCurrentIndex}
                formatters={carouselFormatters}
                components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </>
  )
}

export default withStyles(galleryStyles, facebookPostsStyles)(Gallery)
