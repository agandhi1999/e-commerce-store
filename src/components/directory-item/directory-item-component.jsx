import { 
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  H2,
  TextStyled
 } from './directory-item-styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)

    return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl = {imageUrl}></BackgroundImage>
          <Body>
          <H2>{title}</H2>
          <TextStyled>Shop Now</TextStyled>
          </Body>
      </DirectoryItemContainer>    
  ); 
}

export default DirectoryItem;