const INITIAL_STATE = {
  sections: [
    {
      title: 'ШАШЛЫКИ',
      imageUrl: 'https://imageup.ru/img105/3563571/b2_4.jpg',
      id: 1,
      linkUrl: 'shop/шашлыки'
    },
    {
      title: 'ЗАКУСКИ',
      imageUrl: 'https://imageup.ru/img105/3563584/b4_5.jpg',
      id: 2,
      linkUrl: 'shop/закуски'
    },
    {
      title: 'РЫБНЫЕ ЗАКУСКИ',
      imageUrl: 'https://imageup.ru/img105/3563584/b4_5.jpg',
      id: 3,
      linkUrl: 'shop/рыбные закуски'
    },
    {
      title: 'КОЛБАСКИ К ПИВУ',
      imageUrl: 'https://imageup.ru/img105/3563585/b5_2.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/колбаски к пиву'
    },
    {
      title: 'САЛАТЫ',
      imageUrl: 'https://imageup.ru/img105/3563586/b6_1.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/салаты'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
