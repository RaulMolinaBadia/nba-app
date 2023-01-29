import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  width: 800px;
  height: 430px;
`

export const ImageGalleryItem = styled.img`
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 0.5s ease;
  &:hover {
    width: 300px;
    opacity: 1;
    filter: constrast(120%);
  }
`
