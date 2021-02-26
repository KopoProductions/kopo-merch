const INITIAL_STATE = {
  collections: {
    tops: {
      id: 'tops',
      name: 'TOPS',
      routeName: 'tops',
      items: {
        top1: {
          id: 'top1',
          name: 'Top 1',
          price: 420,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        top2: {
          id: 'top2',
          name: 'Top 2',
          price: 6900,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        top3: {
          id: 'top3',
          name: 'Top 3',
          price: 10000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        top4: {
          id: 'top4',
          name: 'Top 4',
          price: 42069,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
      }
    },
    sweaters: {
      id: 'sweaters',
      name: 'SWEATERS',
      routeName: 'sweaters',
      items: {
        sweater1: {
          id: 'sweater1',
          name: 'Sweater 1',
          price: 420,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        sweater2: {
          id: 'sweater2',
          name: 'Sweater 2',
          price: 6900,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        sweater3: {
          id: 'sweater3',
          name: 'Sweater 3',
          price: 10000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        sweater4: {
          id: 'sweater4',
          name: 'Sweater 4',
          price: 42069,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
      }
    },
    bottoms: {
      id: 'bottoms',
      name: 'BOTTOMS',
      routeName: 'bottoms',
      items: {
        bottoms1: {
          id: 'bottoms1',
          name: 'Bottom 1',
          price: 420,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        bottoms2: {
          id: 'bottoms2',
          name: 'Bottom 2',
          price: 6900,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        bottoms3: {
          id: 'bottoms3',
          name: 'Bottom 3',
          price: 10000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        bottoms4: {
          id: 'bottoms4',
          name: 'Bottom 4',
          price: 42069,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        }
      }
    },
    towels: {
      id: 'towels',
      name: 'TOWELS',
      routeName: 'towels',
      items: {
        towel1: {
          id: 'towel1',
          name: 'Towel 1',
          price: 420,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        towel2: {
          id: 'towel2',
          name: 'Towel 2',
          price: 6900,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        towel3: {
          id: 'towel3',
          name: 'Towel 3',
          price: 10000,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        },
        towel4: {
          id: 'towel4',
          name: 'Towel 4',
          price: 42069,
          url: 'https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          colors: ['White', 'Blue', 'Black', 'Green', 'Gray'],
          description: 'This item is lit!!',
          secondaryImages: ['https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FpinkTopOrange.png?alt=media&token=d7cdfd8e-95da-45a7-a411-e93df4084c42','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FyogaPantsOrange.png?alt=media&token=ae1f0774-adf1-4090-808f-042b2503ca38','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieGirl.png?alt=media&token=2bc97207-7ccf-4ae2-8851-8bae6a3eadc4','https://firebasestorage.googleapis.com/v0/b/kopomerch.appspot.com/o/placeHolders%2Fitems%2FhoodieBasket.png?alt=media&token=edb4baaa-f2c0-4cf4-ba3f-e8db7d665d2a']
        }
      }
    }
  }
};


const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;