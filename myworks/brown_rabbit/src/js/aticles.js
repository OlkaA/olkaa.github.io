let articles = [
    {
        img: 'img/post-1.jpg',
        title: 'Wonderful Copenhagen 2011',
        posted: 'Posted: 23/1-2011',
        text: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory...',
        text_added: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory. The program will be a mix of aroma sessions, basic taste theory.'
    },
    {
        img: 'img/post-2.jpg',
        title: 'Nordic Barista Cup 2011 in Copenhagen',
        posted: 'Posted: 22/1-2011',
        text: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page....',
        text_added: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page. More information will follow on this page.'
    },
    {
        img: 'img/post-3.jpg',
        title: '2010 Winners: Sweden',
        posted: 'Posted: 12/1-2011',
        text: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here....',
        text_added: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here. At least that is what I think, since I havent seen much of anything else around here.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Lorem Ipsum 2015',
        posted: 'Posted: 23/2-2012',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book....',
        text_added: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Where Does it come from?',
        posted: 'Posted: 23/2-2012',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure...',
        text_added: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Why do we use it?',
        posted: 'Posted: 23/2-2012',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'...',
        text_added: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
        img: 'img/post-1.jpg',
        title: 'Wonderful Copenhagen 2011',
        posted: 'Posted: 23/1-2011',
        text: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory...',
        text_added: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory. The program will be a mix of aroma sessions, basic taste theory.'
    },
    {
        img: 'img/post-3.jpg',
        title: '2010 Winners: Sweden',
        posted: 'Posted: 12/1-2011',
        text: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here....',
        text_added: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here. At least that is what I think, since I havent seen much of anything else around here.'
    },
    {
        img: 'img/post-2.jpg',
        title: 'Nordic Barista Cup 2011 in Copenhagen',
        posted: 'Posted: 22/1-2011',
        text: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page....',
        text_added: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page. More information will follow on this page.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Lorem Ipsum 2015',
        posted: 'Posted: 23/2-2012',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book....',
        text_added: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Why do we use it?',
        posted: 'Posted: 23/2-2012',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'...',
        text_added: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
        img: 'img/post-1.jpg',
        title: 'Wonderful Copenhagen 2011',
        posted: 'Posted: 23/1-2011',
        text: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory...',
        text_added: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory. The program will be a mix of aroma sessions, basic taste theory.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Where Does it come from?',
        posted: 'Posted: 23/2-2012',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure...',
        text_added: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
        img: 'img/post-2.jpg',
        title: 'Nordic Barista Cup 2011 in Copenhagen',
        posted: 'Posted: 22/1-2011',
        text: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page....',
        text_added: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark. Dates: 25th - 27th August 2011. The theme for the 2011 seminar is: SENSORY. More information will follow on this page. More information will follow on this page.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Lorem Ipsum 2015',
        posted: 'Posted: 23/2-2012',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book....',
        text_added: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Where Does it come from?',
        posted: 'Posted: 23/2-2012',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure...',
        text_added: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
        img: 'img/post-3.jpg',
        title: 'Why do we use it?',
        posted: 'Posted: 23/2-2012',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'...',
        text_added: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
        img: 'img/post-3.jpg',
        title: '2010 Winners: Sweden',
        posted: 'Posted: 12/1-2011',
        text: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here....',
        text_added: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo, well, at least that is what I think, since I havent seen much of anything else around here. At least that is what I think, since I havent seen much of anything else around here.'
    }
];