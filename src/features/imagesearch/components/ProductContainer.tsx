import { NativeText, NativeView } from '@components';
import { useAppDispatch, useAppSelector } from '@hooks';
import { Product } from '@types';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  addToCart,
  selectFavorites,
  selectFilteredProducts,
  toggleFavorite,
} from '../redux';
import Card, {
  CardAddButton,
  CardBadge,
  CardFavoriteButton,
  CardImageContainer,
} from './Card';
import ImagePlaceHolder from './ImagePlaceHolder';

type Props = {};

const ProductContainer = ({}: Props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFilteredProducts) as Product[];
  const favorites = useAppSelector(selectFavorites);

  return (
    <NativeView
      wrap
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
    >
      {products.map(product => (
        <Card key={product.id}>
          <CardImageContainer>
            <ImagePlaceHolder hight={'100%'} width={'100%'} />

            <NativeView
              margin="sm"
              style={StyleSheet.absoluteFill}
              alignItems="flex-start"
              justifyContent="space-between"
              flexDirection="row"
            >
              {product.trending && (
                <CardBadge backgroundColor="cyan" title="Trending" />
              )}

              {product.discount && (
                <CardBadge
                  backgroundColor="green"
                  title={`${product.discount}% Off`}
                />
              )}

              <CardFavoriteButton
                active={favorites.includes(product.id)}
                onPress={() => dispatch(toggleFavorite(product.id))}
              />
            </NativeView>
          </CardImageContainer>
          <NativeView
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <NativeView flex={1}>
              <NativeText size="sm" family="bold">
                QAR {product.price}
              </NativeText>
              <NativeText size="xs" trim>
                {product.title}
              </NativeText>
            </NativeView>
            <CardAddButton onPress={() => dispatch(addToCart(product.id))} />
          </NativeView>
        </Card>
      ))}
    </NativeView>
  );
};

export default ProductContainer;
