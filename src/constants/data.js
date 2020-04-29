
export const groups = [
    {
        groupId: 10,
        name: 'Rassada',
        subGroup: [
            {
                subGroupId: 101,
                name: 'Petunia',
            },
            {
                subGroupId: 102,
                name: 'Labelia',
            },
            {
                subGroupId: 103,
                name: 'Astra',
            },
            {
                subGroupId: 104,
                name: 'Primula',
            },
        ]
    },
    {
        groupId: 20,
        name: 'Perennial',
    },
    {
        groupId: 30,
        name: 'Flowerpot',
    }
];

export const products = [
    {
        productId: 1029,
        title: 'Petunia Pink',
        imageSrc: '/img/img_16.jpg',
        imagesGallery: [
            '/img/img_16.jpg',
            '/img/img_16_01.jpg',
            '/img/img_15.jpg',
            '/img/img_14.jpg',
            '/img/img_16_02.jpg'
        ],
        description: 'Lorem property to create rounded images.',
        price: 12,
        groupId: 10,
        subGroupId: 101,
        type: 'Ampel',
        isPopular: true,
    },
    {
        productId: 1020,
        title: 'Petunia Red',
        imageSrc: '/img/img_1.jpg',
        imagesGallery: [
            '/img/img_1.jpg',
        ],
        description: 'Lorem property to create rounded images.',
        price: 12,
        groupId: 10,
        subGroupId: 101,
        type: 'Ampel',
    },
    {
        productId: 1021,
        title: 'Petunia Gold tower',
        imageSrc: '/img/img_12.jpg',
        imagesGallery: [
            '/img/img_12.jpg',
        ],
        description: 'Lorem property to create rounded images.',
        price: 12,
        groupId: 10,
        subGroupId: 101,
        type: 'Ampel',
    },
    {
        productId: 1022,
        title: 'Petunia Blue cloud',
        imageSrc: '/img/img_13.jpg',
        imagesGallery: [
            '/img/img_13.jpg',
        ],
        description: 'Lorem property to create rounded images.',
        price: 12,
        groupId: 10,
        subGroupId: 101,
        type: 'Ampel',
        isPopular: true,
    },
    {
        productId: 1023,
        title: 'Petunia Yellow',
        imageSrc: '/img/img_2.jpg',
        description: 'You can now safely publish and consume packages within.',
        price: 20,
        groupId: 10,
        subGroupId: 101,
        type: 'Bush',
    },
    {
        productId: 1010,
        title: 'Labelia white',
        imageSrc: '/img/img_21.jpg',
        description: 'You can now safely publish and consume packages within.',
        price: 5,
        groupId: 10,
        subGroupId: 102,
        type: 'Bush',
        isPopular: true,
    },
    {
        productId: 1002,
        title: 'Viola',
        imageSrc: '/img/img_6.jpg',
        description: 'Koo your organization or with the entire world using.',
        price: 5,
        groupId: 20,
    },
    {
        productId: 1003,
        title: 'Lotos',
        imageSrc: '/img/img_3.jpg',
        description: 'Koo your organization or with the entire world using.',
        price: 85,
        groupId: 20,
        isPopular: true,
    },
    {
        productId: 1031,
        title: 'Lotos red',
        imageSrc: '/img/img_14.jpg',
        description: 'Lorem property to create rounded images.',
        price: 12,
        groupId: 20,
        isPopular: true,
    },
    {
        productId: 1004,
        title: 'Surfinia blue',
        imageSrc: '/img/img_4.jpg',
        description: 'Koo your organization or with the entire world using.',
        price: 815,
        groupId: 30,
        type: 'Bush',
    },
    {
        productId: 1005,
        title: 'Surfinia violet',
        imageSrc: '/img/img_5.jpg',
        description: 'Er eer organization or with the entire world using.',
        price: 5,
        groupId: 30,
        type: 'Ampel',
    },
    {
        productId: 1006,
        title: 'Chrizontema',
        imageSrc: '/img/img_7.jpg',
        description: 'Er eer organization or with the entire world using.',
        price: 15,
        groupId: 20,
        type: '50 cm',
    },
    {
        productId: 1101,
        title: 'Astra red',
        imageSrc: '/img/img_17.jpg',
        description: 'Weer eer organization or with the entire world using.',
        price: 3,
        groupId: 10,
        subGroupId: 103,
        type: '80 cm',
    },
    {
        productId: 1102,
        title: 'Astra violet',
        imageSrc: '/img/img_18.jpg',
        description: 'Rito eer organization or with the entire world using.',
        price: 5,
        groupId: 10,
        subGroupId: 103,
        type: '60 cm',
    },
    {
        productId: 1150,
        title: 'Primula pink',
        imageSrc: '/img/img_19.jpg',
        description: 'Pink eer organization or with the entire world using.',
        price: 5,
        groupId: 10,
        subGroupId: 104,
    },
];

export const slides = [
    {
        slideId: 3001,
        articleId: 2001,
        imageSlideSrc: '/img/img_slider_001.jpg',
    },
    {
        slideId: 3002,
        articleId: 2004,
        imageSlideSrc: '/img/img_slider_002.jpg',
    },
    {
        slideId: 3003,
        articleId: 2005,
        imageSlideSrc: '/img/img_slider_003.jpg',
    }
];

export const articles = [
    {
        articleId: 2001,
        title: 'Stone bar toodd',
        imageSrc: '/img/img_8.jpg',
        description: 'Er eer organization or with the entire world using.',
        content: 'Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2002,
        title: 'Article about all',
        imageSrc: '/img/img_9.png',
        description: 'All eer organization or with the entire clinic manager at Eye Consultants of Atlanta, discusses world using.',
        content: 'Irt clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2003,
        title: 'Stones and fire',
        imageSrc: '/img/img_6.jpg',
        description: 'Fire eer organization or with the entire world using.',
        content: 'Or clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2004,
        title: 'Pof oil good!',
        imageSrc: '/img/img_4.jpg',
        description: 'Pof implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses ire eer organization or with the entire world using.',
        content: 'Error clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2005,
        title: 'Green',
        imageSrc: '/img/img_10.jpg',
        description: 'Deer in your garden implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses ire eer organization or with the entire world using.',
        content: 'Error clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2006,
        title: 'Douterian rigul',
        imageSrc: '/img/img_11.jpg',
        description: 'Pof implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses ire eer organization or with the entire world using.',
        content: 'Error clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
    {
        articleId: 2007,
        title: 'Automn beauty',
        imageSrc: '/img/img_12.jpg',
        description: 'Lo implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses ire eer organization or with the entire world using.',
        content: 'Error clinic manager at Eye Consultants of Atlanta, discusses the early stages of implementing telehealth for patient visits and how telehealth is integrated with the electronic medical records system the practice uses',
    },
];