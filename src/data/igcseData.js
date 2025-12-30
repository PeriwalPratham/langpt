// IGCSE Second Language (Foreign Language) Exam Data
// Accurate information for Cambridge IGCSE examinations

export const igcseLanguages = {
    english: {
        code: 'en',
        name: 'English',
        flag: '🇬🇧',
        nativeName: 'English',
        subjectCode: '0510/0511',
        fullTitle: 'Cambridge IGCSE English as a Second Language',
        description: 'Develop the ability to communicate clearly, accurately and effectively in English.',

        examStructure: {
            core: {
                name: 'Core (Grades C-G)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Reading and Writing (Core)',
                        duration: '2 hours',
                        marks: 80,
                        weight: '70%',
                        description: 'Six reading exercises and two writing tasks'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Listening (Core)',
                        duration: '45 minutes',
                        marks: 40,
                        weight: '30%',
                        description: 'Six listening exercises'
                    }
                ]
            },
            extended: {
                name: 'Extended (Grades A*-E)',
                papers: [
                    {
                        number: 'Paper 3',
                        title: 'Reading and Writing (Extended)',
                        duration: '2 hours',
                        marks: 80,
                        weight: '70%',
                        description: 'Seven reading exercises and two writing tasks'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Listening (Extended)',
                        duration: '50 minutes',
                        marks: 40,
                        weight: '30%',
                        description: 'Seven listening exercises'
                    }
                ]
            },
            oral: {
                name: 'Oral Endorsement (Optional)',
                papers: [
                    {
                        number: 'Component 5',
                        title: 'Speaking',
                        duration: '10-15 minutes',
                        marks: 40,
                        weight: 'Endorsement only',
                        description: 'Conversation and discussion on topics'
                    }
                ]
            }
        },

        skillsAssessed: [
            'Reading comprehension',
            'Writing (emails, articles, reports, summaries)',
            'Listening comprehension',
            'Speaking (if taking oral endorsement)',
            'Grammar and vocabulary in context'
        ],

        topicAreas: [
            'Personal identification',
            'House and home',
            'Daily routine',
            'School and career',
            'Free time and entertainment',
            'Travel and holidays',
            'Relations with others',
            'Health and fitness',
            'Food and drink',
            'Services',
            'Places and buildings',
            'Language',
            'Weather'
        ]
    },

    french: {
        code: 'fr',
        name: 'French',
        flag: '🇫🇷',
        nativeName: 'Français',
        subjectCode: '0520',
        fullTitle: 'Cambridge IGCSE French - Foreign Language',
        description: 'Develop the ability to understand and use French effectively for practical communication.',

        examStructure: {
            core: {
                name: 'Core (Grades C-G)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Core)',
                        duration: '45 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Four listening exercises with questions in French'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Core)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Four reading exercises with questions in French'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Core)',
                        duration: '10 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play and conversation'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Core)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks'
                    }
                ]
            },
            extended: {
                name: 'Extended (Grades A*-E)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Extended)',
                        duration: '50 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Five listening exercises with questions in French'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Extended)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Five reading exercises with questions in French'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Extended)',
                        duration: '15 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play, topic conversation, and general conversation'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Extended)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks of increasing difficulty'
                    }
                ]
            }
        },

        skillsAssessed: [
            'Listening comprehension',
            'Reading comprehension',
            'Speaking (role play and conversation)',
            'Writing (messages, letters, articles)',
            'Grammar and vocabulary application'
        ],

        topicAreas: [
            'Area A: Everyday activities',
            'Area B: Personal and social life',
            'Area C: The world around us',
            'Area D: The world of work',
            'Area E: The international world',
            'Home life and school',
            'Food, health and fitness',
            'Leisure and entertainment',
            'Travel and transport',
            'Holidays and special occasions',
            'Services and shopping',
            'Future plans and careers'
        ]
    },

    mandarin: {
        code: 'zh',
        name: 'Mandarin Chinese',
        flag: '🇨🇳',
        nativeName: '中文',
        subjectCode: '0547',
        fullTitle: 'Cambridge IGCSE Mandarin Chinese - Foreign Language',
        description: 'Develop the ability to understand and use Mandarin Chinese effectively for practical communication.',

        examStructure: {
            core: {
                name: 'Core (Grades C-G)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Core)',
                        duration: '45 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Four listening exercises with questions in Mandarin'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Core)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Four reading exercises with questions in Mandarin'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Core)',
                        duration: '10 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play and conversation in Mandarin'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Core)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks in simplified or traditional characters'
                    }
                ]
            },
            extended: {
                name: 'Extended (Grades A*-E)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Extended)',
                        duration: '50 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Five listening exercises with questions in Mandarin'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Extended)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Five reading exercises with questions in Mandarin'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Extended)',
                        duration: '15 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play, topic conversation, and general conversation'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Extended)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks of increasing difficulty'
                    }
                ]
            }
        },

        skillsAssessed: [
            'Listening comprehension (Pinyin and characters)',
            'Reading comprehension (simplified/traditional characters)',
            'Speaking (pronunciation, tones, conversation)',
            'Writing (characters, grammar, composition)',
            'Cultural understanding'
        ],

        topicAreas: [
            'Area A: Everyday activities',
            'Area B: Personal and social life',
            'Area C: The world around us',
            'Area D: The world of work',
            'Area E: The international world',
            'Family and friends',
            'School life and education',
            'Food and drink',
            'Sports and hobbies',
            'Festivals and celebrations',
            'Travel and tourism',
            'Technology and media'
        ]
    },

    hindi: {
        code: 'hi',
        name: 'Hindi',
        flag: '🇮🇳',
        nativeName: 'हिन्दी',
        subjectCode: '0549',
        fullTitle: 'Cambridge IGCSE Hindi as a Second Language',
        description: 'Develop the ability to understand and use Hindi effectively for practical communication.',

        examStructure: {
            core: {
                name: 'Core (Grades C-G)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Core)',
                        duration: '45 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Four listening exercises with questions in Hindi'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Core)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Four reading exercises with questions in Hindi'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Core)',
                        duration: '10 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play and conversation in Hindi'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Core)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks in Devanagari script'
                    }
                ]
            },
            extended: {
                name: 'Extended (Grades A*-E)',
                papers: [
                    {
                        number: 'Paper 1',
                        title: 'Listening (Extended)',
                        duration: '50 minutes',
                        marks: 45,
                        weight: '25%',
                        description: 'Five listening exercises with questions in Hindi'
                    },
                    {
                        number: 'Paper 2',
                        title: 'Reading (Extended)',
                        duration: '1 hour',
                        marks: 45,
                        weight: '25%',
                        description: 'Five reading exercises with questions in Hindi'
                    },
                    {
                        number: 'Paper 3',
                        title: 'Speaking (Extended)',
                        duration: '15 minutes',
                        marks: 40,
                        weight: '25%',
                        description: 'Role play, topic conversation, and general conversation'
                    },
                    {
                        number: 'Paper 4',
                        title: 'Writing (Extended)',
                        duration: '1 hour',
                        marks: 50,
                        weight: '25%',
                        description: 'Three writing tasks of increasing difficulty'
                    }
                ]
            }
        },

        skillsAssessed: [
            'Listening comprehension',
            'Reading comprehension (Devanagari script)',
            'Speaking (pronunciation, conversation)',
            'Writing (Devanagari script, grammar, composition)',
            'Cultural and contextual understanding'
        ],

        topicAreas: [
            'Area A: Everyday activities',
            'Area B: Personal and social life',
            'Area C: The world around us',
            'Area D: The world of work',
            'Area E: The international world',
            'Family relationships',
            'Education and school',
            'Food and health',
            'Leisure activities',
            'Indian festivals and culture',
            'Travel and places',
            'Technology and modern life'
        ]
    }
};
