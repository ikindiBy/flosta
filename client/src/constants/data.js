
export const groups = [
    {
        groupId: 10,
        name: 'Саженцы',
        subGroup: [
            {
                subGroupId: 101,
                name: 'Петуния',
            },
            {
                subGroupId: 102,
                name: 'Лабелия',
            },
            {
                subGroupId: 103,
                name: 'Астра',
            },
        ]
    },
    {
        groupId: 20,
        name: 'Вазоны и подвесы',
    },
    // {
    //     groupId: 30,
    //     name: 'Другое',
    // }
];

export const products = [
    {
        productId: 1029,
        title: 'Петуния вегетативная среднецветковая',
        imageSrc: '/img/img_1_01.jpg',
        imagesGallery: [
            '/img/img_1_01.jpg',
            '/img/img_1_02.jpg',
        ],
        description: 'Кустовая петуния.',
        price: 2.5,
        groupId: 10,
        subGroupId: 101,
        type: 'Вегетативная',
        isPopular: true,
    },
];

export const slides = [
    {
        slideId: 3001,
        articleId: 2001,
        imageSlideSrc: '/img/img_slider_002.jpg',
    },
    {
        slideId: 3002,
        articleId: 2002,
        imageSlideSrc: '/img/img_slider_003.jpg',
    },
];

export const articles = [
    {
        articleId: 2001,
        title: 'Тестовая статья 1',
        imageSrc: '/img/img_1_02.jpg',
        description: 'Тест.',
        content: 'Тест текст',
    },
    {
        articleId: 2002,
        title: 'Тестовая статья 2',
        imageSrc: '/img/img_1_01.jpg',
        description: 'Тест.',
        content: 'Тест текст',
        },
];