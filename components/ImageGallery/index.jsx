import React from 'react'
import { Section, ImageGalleryItem } from './styles'

const ImageGallery = () => {
  return (
    <Section>
      <ImageGalleryItem src='https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg' alt='' />
      <ImageGalleryItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kobe_Bryant_8.jpg/320px-Kobe_Bryant_8.jpg' alt='' />
      <ImageGalleryItem src='https://cdn.britannica.com/19/233519-050-F0604A51/LeBron-James-Los-Angeles-Lakers-Staples-Center-2019.jpg' alt='' />
      <ImageGalleryItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zion_Williamson_2020.jpg/1200px-Zion_Williamson_2020.jpg' alt='' />
      <ImageGalleryItem src='https://cdn.britannica.com/53/232053-050-024C0309/Giannis-Antetokounmpo-Milwaukee-Bucks-2021-NBA.jpg' alt='' />
    </Section>
  )
}

export default ImageGallery
