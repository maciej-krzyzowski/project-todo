export const settings = {
    columnCreatorText: 'Add new column',
    cardCreatorText: 'Add new card',
    creator: {
        buttonOK: 'OK',
        buttonCancel: 'Cancel',
        defaultText: 'Add new item',
    },
    search: {
        defaultText: 'Search...',
        icon: 'search',
    },
    defaultListDescription: '<p>I can do all the things!!!</p>',
    defaultColumnIcon: 'list-alt',
    headerIcon: 'camera',
    infoTitle: 'Info',
    infoImage: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg',
    faqTitle: 'FAQ',
    faqImage: 'http://serwer1894953.home.pl/fio/wp-content/uploads/2018/07/header_faq.png',
    contens: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const pageContents = {
    title: 'My first React app',
    subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    columns: [
        {
            key: 0,
            title: 'Books ',
            icon: 'book',
            cards: [
                {
                    key: 0,
                    index: 0,
                    title: 'This Is Going to Hurt',
                },
                {
                    key: 1,
                    index: 1,
                    title: 'Interpreter of Maladies',
                },
            ],
        }, 
        {
            key: 1,
            title: 'Movies ',
            icon: 'film',
            cards: [
                {
                    key: 0,
                    index: 0,
                    title: 'Harry Potter',
                },
                {
                    key: 1,
                    index: 1,
                    title: 'Star Wars',
                },
            ],
        },
        {
            key: 2,
            title: 'Games ',
            icon: 'gamepad',
            cards: [
                {
                    key: 0,
                    index: 0,
                    title: 'The Witcher',
                },
                {
                    key: 1,
                    index: 1,
                    title: 'Skyrim',
                },
            ],
        },
    ],
};

const lists = [
    {
        id: 'list-1',
        title: 'Things to do <sup>soon!</sup>',
        description: 'Interesting things I want to check out!',
        image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },

    {
        id: 'list-2',
        title: 'Work.',
        description: 'What I have to do.',
        image: 'https://i2.wp.com/vanrijmenam.nl/wp-content/uploads/Future-of-Work-linkedin.jpg?fit=1500%2C700&ssl=1&quality=100.3018042807560',
    },
    
    {
        id: 'list-3',
        title: 'My summer 2020!',
        description: 'Places I wants to see!',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1000&q=80',
    },
];
  
const columns = [
    {
        id: 'column-1',
        listId: 'list-1',
        title: 'Books',
        icon: 'book',
    },
    {
        id: 'column-2',
        listId: 'list-1',
        title: 'Movies',
        icon: 'film',
    },
    {
        id: 'column-3',
        listId: 'list-1',
        title: 'Games',
        icon: 'gamepad',
    },
    {
        id: 'column-4',
        listId: 'list-2',
        title: 'Strange column',
        icon: 'question',
    },
];
  
const cards = [
    {
        id: 'card-1',
        index: 0,
        columnId: 'column-1',
        title: 'This Is Going to Hurt',
    },
    {
        id: 'card-2',
        index: 1,
        columnId: 'column-1',
        title: 'Interpreter of Maladies',
    },
    {
        id: 'card-3',
        index: 0,
        columnId: 'column-2',
        title: 'Harry Potter',
    },
    {
        id: 'card-4',
        index: 1,
        columnId: 'column-2',
        title: 'Star Wars',
    },
    {
        id: 'card-5',
        index: 0,
        columnId: 'column-3',
        title: 'The Witcher',
    },
    {
        id: 'card-6',
        index: 1,
        columnId: 'column-3',
        title: 'Skyrim',
    },
];
  
const initialStoreData = {
    app: {...pageContents},
    lists: [...lists],
    columns: [...columns],
    cards: [...cards],
};
  
export default initialStoreData;
