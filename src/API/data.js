const categories = {
    docs: [
        {
            _id: "all",
            categoryName: "모든 장르",
            thumbnails: "http://assets.sample.com/web/all.png",
            order: 0,
        },
        {
            _id: "recommendation_now",
            categoryName: "구독하고 바로보기",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 11,
            visible: true,
        },
        {
            _id: "recommendation_cultural_life",
            categoryName: "누워서 문화생활",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 12,
            visible: true,
        },
        {
            _id: "recommendation_morning_coffee",
            categoryName: "모닝커피 메이트",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 13,
            visible: true,
        },
        {
            _id: "recommendation_tired_wednesday",
            categoryName: "지치는 수요일엔",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 14,
            visible: true,
        },
        {
            _id: "recommendation_freshman_fighting",
            categoryName: "취준생 화이팅",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 15,
            visible: true,
        },
        {
            _id: "recommendation_marketer_medicine",
            categoryName: "마케터에게 보약",
            thumbnails: "http://assets.sample.com/web/event_developer.png",
            order: 16,
            visible: true,
        },
        {
            _id: "current_issue",
            categoryName: "시사",
            thumbnails: "http://assets.sample.com/web/current_issue.png",
            order: 101,
            visible: true,
        },
        {
            _id: "finance",
            categoryName: "금융/재테크",
            thumbnails: "http://assets.sample.com/web/finance.png",
            order: 102,
            visible: true,
        },
        {
            _id: "marketing",
            categoryName: "마케팅",
            thumbnails: "http://assets.sample.com/web/marketing.png",
            order: 103,
            visible: true,
        },
        {
            _id: "lifestyle",
            categoryName: "라이프스타일",
            thumbnails: "http://assets.sample.com/web/lifestyle.png",
            order: 104,
            visible: true,
        },
        {
            _id: "design_art",
            categoryName: "디자인/아트",
            thumbnails: "http://assets.sample.com/web/design_art.png",
            order: 105,
            visible: true,
        },
        {
            _id: "tech",
            categoryName: "테크",
            thumbnails: "http://assets.sample.com/web/tech.png",
            order: 106,
            visible: true,
        },
        {
            _id: "movie_music",
            categoryName: "영화/음악",
            thumbnails: "http://assets.sample.com/web/movie_music.png",
            order: 107,
            visible: true,
        },
        {
            _id: "food",
            categoryName: "푸드",
            thumbnails: "http://assets.sample.com/web/food.png",
            order: 108,
            visible: true,
        },
    ],
};

const newLetterDatas = [
    {
        _id: "2021-07-19",
        count: 13,
    },
    {
        _id: "2021-07-18",
        count: 2,
    },
    {
        _id: "2021-07-17",
        count: 3,
    },
    {
        _id: "2021-07-16",
        count: 15,
    },
    {
        _id: "2021-07-15",
        count: 14,
    },
    {
        _id: "2021-07-14",
        count: 17,
    },
    {
        _id: "2021-07-13",
        count: 16,
    },
    {
        _id: "2021-07-12",
        count: 20,
    },
    {
        _id: "2021-07-11",
        count: 2,
    },
    {
        _id: "2021-07-10",
        count: 4,
    },
    {
        _id: "2021-07-09",
        count: 16,
    },
    {
        _id: "2021-07-08",
        count: 14,
    },
    {
        _id: "2021-07-07",
        count: 14,
    },
    {
        _id: "2021-07-06",
        count: 15,
    },
    {
        _id: "2021-07-05",
        count: 17,
    },
    {
        _id: "2021-07-04",
        count: 1,
    },
    {
        _id: "2021-07-03",
        count: 3,
    },
    {
        _id: "2021-07-02",
        count: 16,
    },
    {
        _id: "2021-07-01",
        count: 16,
    },
    {
        _id: "2021-06-30",
        count: 17,
    },
    {
        _id: "2021-06-29",
        count: 15,
    },
    {
        _id: "2021-06-28",
        count: 19,
    },
    {
        _id: "2021-06-27",
        count: 1,
    },
    {
        _id: "2021-06-26",
        count: 3,
    },
    {
        _id: "2021-06-25",
        count: 14,
    },
    {
        _id: "2021-06-24",
        count: 28,
    },
    {
        _id: "2021-06-23",
        count: 13,
    },
    {
        _id: "2021-06-22",
        count: 15,
    },
    {
        _id: "2021-06-21",
        count: 19,
    },
    {
        _id: "2021-06-20",
        count: 1,
    },
    {
        _id: "2021-06-19",
        count: 3,
    },
    {
        _id: "2021-06-18",
        count: 16,
    },
    {
        _id: "2021-06-17",
        count: 18,
    },
    {
        _id: "2021-06-16",
        count: 13,
    },
    {
        _id: "2021-06-15",
        count: 15,
    },
    {
        _id: "2021-06-14",
        count: 19,
    },
    {
        _id: "2021-06-13",
        count: 1,
    },
    {
        _id: "2021-06-12",
        count: 3,
    },
    {
        _id: "2021-06-11",
        count: 13,
    },
    {
        _id: "2021-06-10",
        count: 15,
    },
    {
        _id: "2021-06-09",
        count: 6,
    },
    {
        _id: "2021-06-08",
        count: 15,
    },
    {
        _id: "2021-06-07",
        count: 20,
    },
    {
        _id: "2021-06-06",
        count: 1,
    },
    {
        _id: "2021-06-05",
        count: 3,
    },
    {
        _id: "2021-06-04",
        count: 16,
    },
    {
        _id: "2021-06-03",
        count: 15,
    },
    {
        _id: "2021-06-02",
        count: 13,
    },
    {
        _id: "2021-06-01",
        count: 14,
    },
    {
        _id: "2021-05-31",
        count: 16,
    },
    {
        _id: "2021-05-30",
        count: 1,
    },
    {
        _id: "2021-05-29",
        count: 3,
    },
    {
        _id: "2021-05-28",
        count: 15,
    },
    {
        _id: "2021-05-27",
        count: 15,
    },
    {
        _id: "2021-05-26",
        count: 17,
    },
    {
        _id: "2021-05-25",
        count: 19,
    },
    {
        _id: "2021-05-24",
        count: 16,
    },
    {
        _id: "2021-05-23",
        count: 1,
    },
    {
        _id: "2021-05-22",
        count: 2,
    },
    {
        _id: "2021-05-21",
        count: 13,
    },
    {
        _id: "2021-05-20",
        count: 15,
    },
    {
        _id: "2021-05-19",
        count: 6,
    },
    {
        _id: "2021-05-18",
        count: 16,
    },
    {
        _id: "2021-05-17",
        count: 19,
    },
    {
        _id: "2021-05-16",
        count: 1,
    },
    {
        _id: "2021-05-15",
        count: 2,
    },
    {
        _id: "2021-05-14",
        count: 13,
    },
    {
        _id: "2021-05-13",
        count: 21,
    },
    {
        _id: "2021-05-12",
        count: 16,
    },
    {
        _id: "2021-05-11",
        count: 8,
    },
    {
        _id: "2021-05-10",
        count: 5,
    },
    {
        _id: "2021-05-08",
        count: 4,
    },
    {
        _id: "2021-05-07",
        count: 17,
    },
    {
        _id: "2021-05-06",
        count: 17,
    },
    {
        _id: "2021-05-05",
        count: 6,
    },
    {
        _id: "2021-05-04",
        count: 19,
    },
    {
        _id: "2021-05-03",
        count: 21,
    },
    {
        _id: "2021-05-02",
        count: 1,
    },
    {
        _id: "2021-05-01",
        count: 3,
    },
    {
        _id: "2021-04-30",
        count: 23,
    },
    {
        _id: "2021-04-29",
        count: 19,
    },
    {
        _id: "2021-04-28",
        count: 18,
    },
    {
        _id: "2021-04-27",
        count: 19,
    },
    {
        _id: "2021-04-26",
        count: 17,
    },
    {
        _id: "2021-04-25",
        count: 2,
    },
    {
        _id: "2021-04-24",
        count: 7,
    },
    {
        _id: "2021-04-23",
        count: 13,
    },
    {
        _id: "2021-04-22",
        count: 9,
    },
    {
        _id: "2021-04-21",
        count: 8,
    },
    {
        _id: "2021-04-20",
        count: 7,
    },
    {
        _id: "2021-04-19",
        count: 11,
    },
    {
        _id: "2021-04-18",
        count: 2,
    },
    {
        _id: "2021-04-17",
        count: 1,
    },
    {
        _id: "2021-04-16",
        count: 8,
    },
    {
        _id: "2021-04-15",
        count: 6,
    },
    {
        _id: "2021-04-14",
        count: 13,
    },
    {
        _id: "2021-04-13",
        count: 10,
    },
];

//////////
export const newLetterPageTwo = {
    pagination: {
        from: 20,
        limit: 20,
        page: 2,
        isPaginated: true,
    },
    total: 1102,
    contents: [
        {
            _id: "2021-07-16",
            docs: [
                {
                    _id: "60f16183f7cd3b00087efc1a",
                    contentIdentifier:
                        "bm9yZXBseUByb2Jpbmhvb2QuY29tXyEqJF/wn4+mIFRoZSBCaWcgQmFuayB0aGVvcnlfISokX2VuXyEqJF9rb18hKiRfNjBmMTYxODNmN2NkM2IwMDA4N2VmYzE5",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T10:37:55.307Z",
                    updatedAt: "2021-07-16T10:38:15.416Z",
                    fromEmail: "noreply@robinhood.com",
                    fromName: "Robinhood Snacks",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "Robinhood Snacks<noreply@robinhood.com>",
                    preview: "",
                    previewOriginal:
                        "...and have you had your yearly check-up (the ans",
                    s3Info: {
                        object: {
                            key: "4cb9f9b6-a091-4f66-8ad1-5ecc64ff9807",
                            size: 109975,
                            eTag: "3ba47db36c1f64833c77f8a39fd970ab",
                            sequencer: "0060F1619600F2375D",
                        },
                    },
                    searchKeywords: [
                        "🏦",
                        "빅뱅크",
                        "이론",
                        "🏦",
                        "The",
                        "Big",
                        "Bank",
                        "theory",
                    ],
                    sourceLanguage: "en",
                    subject: "🏦 빅뱅크 이론",
                    subjectOriginal: "🏦 The Big Bank theory",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://cdn.robinhood.com/marketsnacks_assets/v2/snacks.png",
                    newslettersMetadata: [
                        {
                            _id: "Robinhood Snacks<noreply@robinhood.com>",
                            title: "Robinhood Snacks",
                            categoryIds: [
                                "finance",
                                "recommendation_funjoomal",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "데일리",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "robinhood.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "금융거래플랫폼 로빈후드가 제공하는 파이낸셜 뉴스레터",
                            subscribeLink: "https://snacks.robinhood.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/robinhood-snacks.png",
                            updatedAt: "2021-06-04T02:55:48.145Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f158c5226feb0008a4d4dd",
                    contentIdentifier:
                        "Y3Jld0Btb3JuaW5nYnJldy5jb21fISokX+KYle+4jyBEb2dlY29pbiBpbnZlbnRvciBzcGVha3Mgb3V0XyEqJF9lbl8hKiRfa29fISokXzYwZjE1OGM1MjI2ZmViMDAwOGE0ZDRkYw==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T10:00:37.040Z",
                    updatedAt: "2021-07-16T11:09:32.829Z",
                    fromEmail: "crew@morningbrew.com",
                    fromName: "Morning Brew",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "Morning Brew<crew@morningbrew.com>",
                    preview:
                        "MBA 프로그램이 직접 돌아옵니다. 2021년 7월 16일 함께 힘든 휴식이지만 우리는",
                    previewOriginal:
                        "MBA programs are coming back in-person July 16, 2",
                    s3Info: {
                        object: {
                            key: "f640b2f2-8b3d-41eb-a786-f6a61e8d6944",
                            size: 203522,
                            eTag: "ecbf241223fd32437df136908164f06a",
                            sequencer: "0060F158D5891C2C12",
                        },
                    },
                    searchKeywords: [
                        "☕️",
                        "Dogecoin",
                        "발명가가",
                        "말하는",
                        "☕️",
                        "Dogecoin",
                        "inventor",
                        "speaks",
                        "out",
                    ],
                    sourceLanguage: "en",
                    subject: "☕️ Dogecoin 발명가가 말하는",
                    subjectOriginal: "☕️ Dogecoin inventor speaks out",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://ad.doubleclick.net/ddm/trackimp/N7442.3407870MORNINGBREW/B25957551.305077288;dc_trk_aid=497862572;dc_trk_cid=152104409;ord=1316908626;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=?",
                    readedAt: "2021-07-16T11:09:32.829Z",
                    newslettersMetadata: [
                        {
                            _id: "Morning Brew<crew@morningbrew.com>",
                            title: "Morning Brew",
                            categoryIds: [
                                "current_issue",
                                "finance",
                                "recommendation_4years",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T10:36:49.151Z",
                            domain: "morningbrew.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "월가에서 실리콘벨리까지 당신의 하루에 필요한 정보들을 쏙쏙골라 담은 뉴스레터",
                            subscribeLink: "https://www.morningbrew.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/morningbrew.png",
                            updatedAt: "2021-06-08T00:57:40.454Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0f645c113060008ed4bc0",
                    contentIdentifier:
                        "ZWRpdG9yQGJlbGV0dGVyLmVtYWlsXyEqJF/imqsg7LGFIOyGjeydmCDtlonsmrTsnYQg67Cc6rKs7ZWgIOyImCDsnojrj4TroZ0sIEJvbm5lIENoYW5jZSFfISokX2tvXyEqJF9rb18hKiRfNjBmMGY2NDVjMTEzMDYwMDA4ZWQ0YmJm",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T03:00:21.816Z",
                    updatedAt: "2021-07-16T05:58:16.852Z",
                    fromEmail: "editor@beletter.email",
                    fromName: "BE. LETTER",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "BE. LETTER<editor@beletter.email>",
                    preview:
                        "추천 책과 독서 모임 발제문까지 공유하는 북 큐레이션 뉴스레터 💬 한마디로 말하면? <s",
                    previewOriginal:
                        "추천 책과 독서 모임 발제문까지 공유하는 북 큐레이션 뉴스레터 💬 한마디로 말하면? <s",
                    s3Info: {
                        object: {
                            key: "71d431ba-b521-4633-9f2e-faceefcd1807",
                            size: 53888,
                            eTag: "3d7a1ab09751c7e2c94606d378f05f03",
                            sequencer: "0060F0F6486FA9F399",
                        },
                    },
                    searchKeywords: [
                        "⚫",
                        "책",
                        "속의",
                        "행운을",
                        "발견할",
                        "수",
                        "있도록,",
                        "Bonne",
                        "Chance!",
                        "⚫",
                        "책",
                        "속의",
                        "행운을",
                        "발견할",
                        "수",
                        "있도록,",
                        "Bonne",
                        "Chance!",
                    ],
                    sourceLanguage: "ko",
                    subject:
                        "⚫ 책 속의 행운을 발견할 수 있도록, Bonne Chance!",
                    subjectOriginal:
                        "⚫ 책 속의 행운을 발견할 수 있도록, Bonne Chance!",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/26511_1624266398.png",
                    readedAt: "2021-07-16T05:58:16.852Z",
                    newslettersMetadata: [
                        {
                            _id: "BE. LETTER<editor@beletter.email>",
                            title: "BE.LETTER",
                            categoryIds: ["marketing"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "금",
                            createdAt: "2021-03-25T06:48:04.722Z",
                            domain: "beletter.email",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "스티비에서 발행하는 뉴스레터를 소개하는 뉴스레터",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/62723",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/be-letter.png",
                            updatedAt: "2021-03-25T06:48:04.722Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0de2db4ba4f0008de7106",
                    contentIdentifier:
                        "Z2xvYmFsX25ld3NAd2lzZXN0LmNvLmtyXyEqJF9Nb1lhIOq4gOuhnOuyjCDribTsiqTroIjthLAgKDIwMjEtMDctMTYpXyEqJF9lbl8hKiRfa29fISokXzYwZjBkZTJkYjRiYTRmMDAwOGRlNzEwNQ==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T01:17:33.253Z",
                    updatedAt: "2021-07-16T01:17:42.097Z",
                    fromEmail: "global_news@wisest.co.kr",
                    fromName: "MoYa Global News Team",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "MoYa Global News Team<global_news@wisest.co.kr>",
                    preview:
                        "MoYa 뉴스 레터는 천안안 세계 주요 뉴스를 인공지능으로 옮긴다. 도현, 전 도현의 전",
                    previewOriginal:
                        "MoYa 뉴스레터는 놓쳐선 안 될 세계 주요 뉴스를 인공지능으로 요약 및 번역한 후 매일",
                    s3Info: {
                        object: {
                            key: "c69c903f-25bc-489d-ad86-c8741d9636f6",
                            size: 180355,
                            eTag: "e5d8b55c9f7d78cca5801e0d5f26264d",
                            sequencer: "0060F0DE343617D401",
                        },
                    },
                    searchKeywords: [
                        "모야",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-16)",
                        "MoYa",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-16)",
                    ],
                    sourceLanguage: "en",
                    subject: "모야 글로벌 뉴스레터 (2021-07-16)",
                    subjectOriginal: "MoYa 글로벌 뉴스레터 (2021-07-16)",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://image.cnbcfm.com/api/v1/image/106712834-1600800653401-gettyimages-1227823297-urn_newsml_dpa_com_20090101_200729-99-965480-2.jpeg?v=1612388538",
                    newslettersMetadata: [
                        {
                            _id: "MoYa Global News Team<global_news@wisest.co.kr>",
                            newsletterLanguage: "en",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "wisest.co.kr",
                            subscribeLink: null,
                            createdAt: "2021-04-26T08:00:56.901Z",
                            updatedAt: "2021-04-26T08:00:56.901Z",
                        },
                    ],
                },
                {
                    _id: "60f0d1072b8a0e0009e56706",
                    contentIdentifier:
                        "dGVhbUBzb29uc2FsLmNvbV8hKiRf4pq97LaV6rWs7Lm065OcIO2MlOyVhOyEnCDsl7Drp6TstpwgMeyhsOybkCDrhJjripQg7ZqM7IKsIFs37JuUIDE27J28XV8hKiRfa29fISokX2tvXyEqJF82MGYwZDEwNzJiOGEwZTAwMDllNTY3MDU=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T00:21:27.503Z",
                    updatedAt: "2021-07-16T00:21:32.810Z",
                    fromEmail: "team@soonsal.com",
                    fromName: "순살브리핑 Soonsal",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "순살브리핑 Soonsal<team@soonsal.com>",
                    preview:
                        '손흥민 카드는?? ▪ 한편 중국이 비트코인에 대한 규제<span style="font-s',
                    previewOriginal:
                        '손흥민 카드는?? ▪ 한편 중국이 비트코인에 대한 규제<span style="font-s',
                    s3Info: {
                        object: {
                            key: "fa59f5fa-6ff9-4336-bbb8-208163819de1",
                            size: 177060,
                            eTag: "3769a8b75ff6c1f32a6d92fff713aeee",
                            sequencer: "0060F0D10AE94F0417",
                        },
                    },
                    searchKeywords: [
                        "⚽축구카드",
                        "팔아서",
                        "연매출",
                        "1조원",
                        "넘는",
                        "회사",
                        "[7월",
                        "16일]",
                        "⚽축구카드",
                        "팔아서",
                        "연매출",
                        "1조원",
                        "넘는",
                        "회사",
                        "[7월",
                        "16일]",
                    ],
                    sourceLanguage: "ko",
                    subject:
                        "⚽축구카드 팔아서 연매출 1조원 넘는 회사 [7월 16일]",
                    subjectOriginal:
                        "⚽축구카드 팔아서 연매출 1조원 넘는 회사 [7월 16일]",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://stibee.com/assets/images/editor/share_gray_web.png",
                    newslettersMetadata: [
                        {
                            _id: "순살브리핑 Soonsal<team@soonsal.com>",
                            title: "순살브리핑",
                            categoryIds: [
                                "finance",
                                "recommendation_morning_coffee",
                                "recommendation_freshman_fighting",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "평일 아침 10시",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "soonsal.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "전 세계 금융/경제 뉴스를 살코기만 발라 제공하는 뉴스레터",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/51845",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/soonsal.png",
                            updatedAt: "2021-07-16T03:43:13.587Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0cc16e8f65900095f7461",
                    contentIdentifier:
                        "cGluZWFwcGxlQGZubmV3cy5jb21fISokX1vwn42N7ZWc7KGw6rCBXSDrsJjrs7XrkJwg7Iuc7IaM6rKM7J6ELCDsp4DquIjsnYAg64iE6rWsIOywqOuhgD9fISokX2tvXyEqJF9rb18hKiRfNjBmMGNjMTZlOGY2NTkwMDA5NWY3NDYw",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T00:00:22.119Z",
                    updatedAt: "2021-07-16T00:00:32.696Z",
                    fromEmail: "pineapple@fnnews.com",
                    fromName: "파인애플",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "파인애플<pineapple@fnnews.com>",
                    preview:
                        '가치주와 성장주의 관계 이번주 </span> 파인애플<span style="font-si',
                    previewOriginal:
                        '가치주와 성장주의 관계 이번주 </span> 파인애플<span style="font-si',
                    s3Info: {
                        object: {
                            key: "86145743-f070-4d68-8623-15b2bd9bf34a",
                            size: 222930,
                            eTag: "bf00071d81ee448fdf298098652e1f98",
                            sequencer: "0060F0CC1EF9022CB2",
                        },
                    },
                    searchKeywords: [
                        "[🍍한조각]",
                        "반복된",
                        "시소게임,",
                        "지금은",
                        "누구",
                        "차례?",
                        "[🍍한조각]",
                        "반복된",
                        "시소게임,",
                        "지금은",
                        "누구",
                        "차례?",
                    ],
                    sourceLanguage: "ko",
                    subject: "[🍍한조각] 반복된 시소게임, 지금은 누구 차례?",
                    subjectOriginal:
                        "[🍍한조각] 반복된 시소게임, 지금은 누구 차례?",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/30489_1592892833.gif",
                    newslettersMetadata: [
                        {
                            _id: "파인애플<pineapple@fnnews.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "fnnews.com",
                            subscribeLink: null,
                            createdAt: "2021-04-23T14:47:01.622Z",
                            updatedAt: "2021-04-26T08:23:02.830Z",
                        },
                    ],
                },
                {
                    _id: "60f0be56e7fcaa00081038f9",
                    contentIdentifier:
                        "ZnVuam9vbWFsQGdtYWlsLmNvbV8hKiRf7KO866eQ656t7J207JW8IOyXrOumhOydhCDrtoDtg4HtlbTwn5iOXyEqJF9rb18hKiRfa29fISokXzYwZjBiZTU2ZTdmY2FhMDAwODEwMzhmOA==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T23:01:42.795Z",
                    updatedAt: "2021-07-15T23:23:36.674Z",
                    fromEmail: "funjoomal@gmail.com",
                    fromName: "주말랭이",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "주말랭이<funjoomal@gmail.com>",
                    preview:
                        '🍨빙수 맛집🧤집콕 만들기🌜열대야 꿀잠 한껏 더워진 요즘<span lang="EN-US">',
                    previewOriginal:
                        '🍨빙수 맛집🧤집콕 만들기🌜열대야 꿀잠 한껏 더워진 요즘<span lang="EN-US">',
                    s3Info: {
                        object: {
                            key: "dd8eca70-bf8d-4731-857d-9af02a701601",
                            size: 448907,
                            eTag: "e8f2b4d49fb5ea2786c8849cb141da2d",
                            sequencer: "0060F0BE9E413BBA2C",
                        },
                    },
                    searchKeywords: [
                        "주말랭이야",
                        "여름을",
                        "부탁해😎",
                        "주말랭이야",
                        "여름을",
                        "부탁해😎",
                    ],
                    sourceLanguage: "ko",
                    subject: "주말랭이야 여름을 부탁해😎",
                    subjectOriginal: "주말랭이야 여름을 부탁해😎",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/33388_1616683821.jpg",
                    readedAt: "2021-07-15T23:23:36.674Z",
                    newslettersMetadata: [
                        {
                            _id: "주말랭이<funjoomal@gmail.com>",
                            title: "주말랭이",
                            categoryIds: ["travel", "lifestyle"],
                            confirmationEmail:
                                "구독 확인 메일 -> 구독 버튼-> 구독 완료",
                            contentReleaseSchedule: "금",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "gmail.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "소중한 주말을 알차게 보내기위한 주말 가이드를 보내주는 뉴스레터",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/78183",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/funjoomal.png",
                            updatedAt: "2021-03-25T06:48:04.723Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0b24c58078d000923b58c",
                    contentIdentifier:
                        "ZWRpdG9yQGhhbmt5dW5nLmNvbV8hKiRfW+2VnOqyvSBXYXZlXSAg66+47Iug6rO8IO2VmeusuCDsgqzsnbQsIOyCrOyjvCDsgqzsmqkg7ISk66qF7IScXyEqJF9rb18hKiRfa29fISokXzYwZjBiMjRjNTgwNzhkMDAwOTIzYjU4Yg==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T22:10:20.293Z",
                    updatedAt: "2021-07-15T22:11:02.477Z",
                    fromEmail: "editor@hankyung.com",
                    fromName: "한경 💌 Wave",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "한경 💌 Wave<editor@hankyung.com>",
                    preview:
                        "2021. 7. 16 나의 사주는 좋은 사주일까. 나쁜 사주일까. 나와 같은 날 태어난",
                    previewOriginal:
                        "2021. 7. 16 나의 사주는 좋은 사주일까. 나쁜 사주일까. 나와 같은 날 태어난",
                    s3Info: {
                        object: {
                            key: "13b5d35b-ea6e-4563-8a1a-856a4680c1e4",
                            size: 202143,
                            eTag: "9f85b71197a6f3363dacedb04b02f8e8",
                            sequencer: "0060F0B24F4DE6614E",
                        },
                    },
                    searchKeywords: [
                        "[한경",
                        "Wave]",
                        "",
                        "미신과",
                        "학문",
                        "사이,",
                        "사주",
                        "사용",
                        "설명서",
                        "[한경",
                        "Wave]",
                        "",
                        "미신과",
                        "학문",
                        "사이,",
                        "사주",
                        "사용",
                        "설명서",
                    ],
                    sourceLanguage: "ko",
                    subject: "[한경 Wave]  미신과 학문 사이, 사주 사용 설명서",
                    subjectOriginal:
                        "[한경 Wave]  미신과 학문 사이, 사주 사용 설명서",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/35366_1617277045.jpg",
                    readedAt: "2021-07-15T22:11:02.477Z",
                    newslettersMetadata: [
                        {
                            _id: "한경 💌 Wave<editor@hankyung.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "hankyung.com",
                            subscribeLink: null,
                            createdAt: "2021-04-22T22:14:27.477Z",
                            updatedAt: "2021-05-12T07:49:43.496Z",
                            categoryIds: ["current_issue", "finance"],
                        },
                    ],
                },
                {
                    _id: "60f0b15b58078d000923b57a",
                    contentIdentifier:
                        "d2VAZG90ZmFjZS5rcl8hKiRf7JWE67mg6rCAIOyViCDrgrgg6rG06rCV67O07ZeY66OMLCDqsJHsnpDquLAg64KY67O06rOgIOuCtOudvOqzoD/wn6S34oCN4pmA77iPXyEqJF9rb18hKiRfa29fISokXzYwZjBiMTViNTgwNzhkMDAwOTIzYjU3OQ==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T22:06:19.431Z",
                    updatedAt: "2021-07-15T22:10:47.878Z",
                    fromEmail: "we@dotface.kr",
                    fromName: "닷페이스 다다닷",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "닷페이스 다다닷<we@dotface.kr>",
                    preview:
                        '닷페이스의 글과 영상, 그 모든 이야기들 안녕하세요! <span style="color:',
                    previewOriginal:
                        '닷페이스의 글과 영상, 그 모든 이야기들 안녕하세요! <span style="color:',
                    s3Info: {
                        object: {
                            key: "945bcd0c-346a-4e2f-b54a-9a859032819b",
                            size: 110061,
                            eTag: "480a29c468d13862a2293c0f9139460f",
                            sequencer: "0060F0B15E400F7506",
                        },
                    },
                    searchKeywords: [
                        "아빠가",
                        "안",
                        "낸",
                        "건강보험료,",
                        "갑자기",
                        "나보고",
                        "내라고?🤷‍♀️",
                        "아빠가",
                        "안",
                        "낸",
                        "건강보험료,",
                        "갑자기",
                        "나보고",
                        "내라고?🤷‍♀️",
                    ],
                    sourceLanguage: "ko",
                    subject: "아빠가 안 낸 건강보험료, 갑자기 나보고 내라고?🤷‍♀️",
                    subjectOriginal:
                        "아빠가 안 낸 건강보험료, 갑자기 나보고 내라고?🤷‍♀️",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/21391_1626336343.png",
                    readedAt: "2021-07-15T22:10:47.878Z",
                    newslettersMetadata: [
                        {
                            _id: "닷페이스 다다닷<we@dotface.kr>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: "닷페이스",
                            tags: [],
                            domain: "dotface.kr",
                            subscribeLink: null,
                            createdAt: "2021-07-08T03:00:29.349Z",
                            updatedAt: "2021-07-08T03:59:41.207Z",
                        },
                    ],
                },
                {
                    _id: "60f0b05682fe3e00081fa84e",
                    contentIdentifier:
                        "ZWRpdG9yQGhhbmt5dW5nLmNvbV8hKiRfJ+ynhOuLqO2CpO2KuCDrjIDsnqXso7wnIOyXkOyKpOuUlOuwlOydtOyYpOyEvOyEnCDsmKTripgg7IOB7J6l4oCmJ+uUsOyDgScg6rCA64ql7ZWg6rmMXyEqJF9rb18hKiRfa29fISokXzYwZjBiMDU2ODJmZTNlMDAwODFmYTg0ZA==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T22:01:58.519Z",
                    updatedAt: "2021-07-15T22:11:11.839Z",
                    fromEmail: "editor@hankyung.com",
                    fromName: "한경 💌 Issue  Today",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "한경 💌 Issue  Today<editor@hankyung.com>",
                    preview:
                        '페이스북에 공유하기</a></span><span style="list-style: non',
                    previewOriginal:
                        '페이스북에 공유하기</a></span><span style="list-style: non',
                    s3Info: {
                        object: {
                            key: "0b3e8804-7078-4262-84bb-da7096e46881",
                            size: 136091,
                            eTag: "7bc76b8877fae15fc5c4a6691d0a6d9d",
                            sequencer: "0060F0B0590CE1DAEA",
                        },
                    },
                    searchKeywords: [
                        "'진단키트",
                        "대장주'",
                        "에스디바이오센서",
                        "오늘",
                        "상장…'따상'",
                        "가능할까",
                        "'진단키트",
                        "대장주'",
                        "에스디바이오센서",
                        "오늘",
                        "상장…'따상'",
                        "가능할까",
                    ],
                    sourceLanguage: "ko",
                    subject:
                        "'진단키트 대장주' 에스디바이오센서 오늘 상장…'따상' 가능할까",
                    subjectOriginal:
                        "'진단키트 대장주' 에스디바이오센서 오늘 상장…'따상' 가능할까",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/35366_1626071061.jpg",
                    readedAt: "2021-07-15T22:11:11.839Z",
                    newslettersMetadata: [
                        {
                            _id: "한경 💌 Issue  Today<editor@hankyung.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "hankyung.com",
                            subscribeLink: null,
                            createdAt: "2021-04-21T21:52:28.063Z",
                            updatedAt: "2021-05-12T07:49:52.037Z",
                            categoryIds: ["current_issue", "finance"],
                        },
                    ],
                },
                {
                    _id: "60f0a855c994eb00089ac322",
                    contentIdentifier:
                        "bW9uZXlsZXR0ZXJAdXBwaXR5LmNvLmtyXyEqJF/wn5Kw66+47Iig7Yis7J6QLCDsnbTqsoPrp4zsnYAg7JWM6rOgIOqwgOyEuOyalCFfISokX2tvXyEqJF9rb18hKiRfNjBmMGE4NTVjOTk0ZWIwMDA4OWFjMzIx",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T21:27:49.862Z",
                    updatedAt: "2021-07-15T22:11:29.160Z",
                    fromEmail: "moneyletter@uppity.co.kr",
                    fromName: "UPPITY",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "UPPITY<moneyletter@uppity.co.kr>",
                    preview:
                        '#하이브리드카 #신규상장 #위클리도슨트 코스피 3,286.22 <span style="c',
                    previewOriginal:
                        '#하이브리드카 #신규상장 #위클리도슨트 코스피 3,286.22 <span style="c',
                    s3Info: {
                        object: {
                            key: "d1627003-473a-4b5b-8a87-09258e4f2bdb",
                            size: 239418,
                            eTag: "004b8098959ad5ead036d13b1fba85c2",
                            sequencer: "0060F0A85A7C8F89A9",
                        },
                    },
                    searchKeywords: [
                        "💰미술투자,",
                        "이것만은",
                        "알고",
                        "가세요!",
                        "💰미술투자,",
                        "이것만은",
                        "알고",
                        "가세요!",
                    ],
                    sourceLanguage: "ko",
                    subject: "💰미술투자, 이것만은 알고 가세요!",
                    subjectOriginal: "💰미술투자, 이것만은 알고 가세요!",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/8466_1626303809.png",
                    readedAt: "2021-07-15T22:11:29.160Z",
                    newslettersMetadata: [
                        {
                            _id: "UPPITY<moneyletter@uppity.co.kr>",
                            title: "어피티",
                            categoryIds: ["finance", "lifestyle"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "평일 아침 8시",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "uppity.co.kr",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "사회초년생이 꼭 알아야 할 금융정보를 쉽게 이야기해주는 경제 뉴스레터",
                            subscribeLink: "https://uppity.co.kr/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/uppity.png",
                            updatedAt: "2021-03-25T06:48:04.723Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0a274809e8e0008ed742d",
                    contentIdentifier:
                        "Ynl0ZXRlYW0zNjVAZ21haWwuY29tXyEqJF/qsKTrn63si5wg7IiY64Kc7Iuc64yALCDsgrzshLHsnZgg64yA7LKY64qUPyDwn6SUXyEqJF9rb18hKiRfa29fISokXzYwZjBhMjc0ODA5ZThlMDAwOGVkNzQyYw==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T21:02:44.689Z",
                    updatedAt: "2021-07-15T22:11:43.578Z",
                    fromEmail: "byteteam365@gmail.com",
                    fromName: "DAILY_BYTE",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "DAILY_BYTE<byteteam365@gmail.com>",
                    preview:
                        '5G의 현주소 | 갤럭시 수난시대 | 뉴스 모아보기 15일 <a href="https:/',
                    previewOriginal:
                        '5G의 현주소 | 갤럭시 수난시대 | 뉴스 모아보기 15일 <a href="https:/',
                    s3Info: {
                        object: {
                            key: "f3ff405c-a6ea-4a2f-8f66-7d0c9239a1c0",
                            size: 223057,
                            eTag: "e941461987f59324a0f92b56f097c5c6",
                            sequencer: "0060F0A27845DB8D14",
                        },
                    },
                    searchKeywords: [
                        "갤럭시",
                        "수난시대,",
                        "삼성의",
                        "대처는?",
                        "🤔",
                        "갤럭시",
                        "수난시대,",
                        "삼성의",
                        "대처는?",
                        "🤔",
                    ],
                    sourceLanguage: "ko",
                    subject: "갤럭시 수난시대, 삼성의 대처는? 🤔",
                    subjectOriginal: "갤럭시 수난시대, 삼성의 대처는? 🤔",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/34563_1626350696.png",
                    readedAt: "2021-07-15T22:11:43.578Z",
                    newslettersMetadata: [
                        {
                            _id: "DAILY_BYTE<byteteam365@gmail.com>",
                            title: "데일리바이트",
                            categoryIds: ["current_issue"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T21:11:08.029Z",
                            domain: "gmail.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "비즈니스 뉴스의 흐름과 용어를 쉽게 설명해주는 뉴스레터",
                            subscribeLink: "http://mydailybyte.com",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/mydailybyte.png",
                            updatedAt: "2021-05-06T09:56:59.400Z",
                            verified: true,
                            visible: false,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f09bb58f7d5600086a6ddb",
                    contentIdentifier:
                        "d2hhdHN1cEBuZXduZWVrLmNvXyEqJF/wn6aU7Ja065SU7JW8PyDsmZwg7JWE7KeBIOyViCDsmYA/XyEqJF9rb18hKiRfa29fISokXzYwZjA5YmI1OGY3ZDU2MDAwODZhNmRkYQ==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T20:33:57.185Z",
                    updatedAt: "2021-07-15T20:34:01.914Z",
                    fromEmail: "whatsup@newneek.co",
                    fromName: "NEWNEEK",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "NEWNEEK<whatsup@newneek.co>",
                    preview:
                        "카카오택시,남아공,장마 언젠가부터 택시를 부를 때 손을 흔드는 대신 스마트폰을 꺼내게 됐",
                    previewOriginal:
                        "카카오택시,남아공,장마 언젠가부터 택시를 부를 때 손을 흔드는 대신 스마트폰을 꺼내게 됐",
                    s3Info: {
                        object: {
                            key: "c4b9e825-1889-4f77-8ed0-254e3ffa3685",
                            size: 248650,
                            eTag: "df9c226c6f6cb7c2f6cc7365bfa33670",
                            sequencer: "0060F09BB92ED5ECC8",
                        },
                    },
                    searchKeywords: [
                        "🦔어디야?",
                        "왜",
                        "아직",
                        "안",
                        "와?",
                        "🦔어디야?",
                        "왜",
                        "아직",
                        "안",
                        "와?",
                    ],
                    sourceLanguage: "ko",
                    subject: "🦔어디야? 왜 아직 안 와?",
                    subjectOriginal: "🦔어디야? 왜 아직 안 와?",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/10535_1605149766.png",
                    newslettersMetadata: [
                        {
                            _id: "NEWNEEK<whatsup@newneek.co>",
                            title: "뉴닉",
                            categoryIds: [
                                "current_issue",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "no",
                            contentReleaseSchedule: "월/수/금 아침",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "newneek.co",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "밀레니얼 타겟 쉽고 재밌는 시사 뉴스레터",
                            subscribeLink: "https://newneek.co/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/newneek.png",
                            updatedAt: "2021-07-16T00:26:47.485Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
            ],
        },
        {
            _id: "2021-07-15",
            docs: [
                {
                    _id: "60f0375de8d1a700094f4357",
                    contentIdentifier:
                        "YmxvZ0BodWJzcG90LmNvbV8hKiRfV2lsbCBQZW9wbGUgQnV5IEZhc3RlciBXaGVuIFByb2R1Y3RzIEFyZSBHb2luZyBPdXQgb2YgU3RvY2s/IFtEYXRhXV8hKiRfZW5fISokX2tvXyEqJF82MGYwMzc1ZGU4ZDFhNzAwMDk0ZjQzNTY=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T13:25:49.081Z",
                    updatedAt: "2021-07-15T13:25:57.424Z",
                    fromEmail: "blog@hubspot.com",
                    fromName: "HubSpot Blog, Marketing",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "HubSpot Blog, Marketing<blog@hubspot.com>",
                    preview:
                        "희소성 원칙과 실제 브랜드가 이를 어떻게 활용하여 시장에 출시하고 더 높은 수요를 창출하",
                    previewOriginal:
                        "Learn about the scarcity principle and how real b",
                    s3Info: {
                        object: {
                            key: "adaed9ed-751c-41dd-976b-c680e349e396",
                            size: 143544,
                            eTag: "a842c6d241f26319dda929a37ab129fc",
                            sequencer: "0060F037632CBC40BD",
                        },
                    },
                    searchKeywords: [
                        "제품이",
                        "품절되면",
                        "사람들이",
                        "더",
                        "빨리",
                        "구매합니까?",
                        "[데이터]",
                        "Will",
                        "People",
                        "Buy",
                        "Faster",
                        "When",
                        "Products",
                        "Are",
                        "Going",
                        "Out",
                        "of",
                        "Stock?",
                        "[Data]",
                    ],
                    sourceLanguage: "en",
                    subject:
                        "제품이 품절되면 사람들이 더 빨리 구매합니까? [데이터]",
                    subjectOriginal:
                        "Will People Buy Faster When Products Are Going Out of Stock? [Data]",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://www.hubspot.com/hs-fs/hubfs/scarcity-principle-email-1.jpeg?width=1200&upscale=true&name=scarcity-principle-email-1.jpeg",
                    newslettersMetadata: [
                        {
                            _id: "HubSpot Blog, Marketing<blog@hubspot.com>",
                            title: "HubSpot",
                            categoryIds: ["marketing", "current_issue"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T06:48:04.722Z",
                            domain: "hubspot.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "최신 마케팅, 서비스, 세일즈 팁 및 리서치를 정리해서 보내주는 뉴스레터",
                            subscribeLink:
                                "https://blog.hubspot.com/subscriptions",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/hubspot.png",
                            updatedAt: "2021-05-03T02:17:54.935Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f0229de9e2df00083b2894",
                    contentIdentifier:
                        "bmV3c0BwaXRjaGJvb2suY29tXyEqJF9FeHBsb3JpbmcgYSBzdXJnaW5nIGJ1eW91dHMgbWFya2V0XyEqJF9lbl8hKiRfa29fISokXzYwZjAyMjlkZTllMmRmMDAwODNiMjg5Mw==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T11:57:17.662Z",
                    updatedAt: "2021-07-15T11:57:40.389Z",
                    fromEmail: "news@pitchbook.com",
                    fromName: "PitchBook News",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "PitchBook News<news@pitchbook.com>",
                    preview:
                        "피치북 2021년 7월 15일 뉴스레터가 마음에 드시나요? 데이터 출처 (phokin/게",
                    previewOriginal:
                        "PitchBook July 15, 2021 Like our newsletter? The",
                    s3Info: {
                        object: {
                            key: "f9783963-2ce3-4205-abc9-0d956622f1de",
                            size: 550014,
                            eTag: "3e9353d57b211be6c2904dfd92377aeb",
                            sequencer: "0060F022B273058B1C",
                        },
                    },
                    searchKeywords: [
                        "급증하는",
                        "바이아웃",
                        "시장",
                        "탐색",
                        "Exploring",
                        "a",
                        "surging",
                        "buyouts",
                        "market",
                    ],
                    sourceLanguage: "en",
                    subject: "급증하는 바이아웃 시장 탐색",
                    subjectOriginal: "Exploring a surging buyouts market",
                    targetLanguage: "ko",
                    thumbnails: "https://my.pitchbook.com/n/44721.2968052.gif",
                    newslettersMetadata: [
                        {
                            _id: "PitchBook News<news@pitchbook.com>",
                            title: "PitchBook ",
                            categoryIds: ["tech", "finance"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T12:17:29.262Z",
                            domain: "pitchbook.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "VC, M&A등 변화하는 세상에 앞서나가는데 필요한 정보를 제공하는 뉴스레터",
                            subscribeLink: "https://pitchbook.com/subscribe",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/pitchbook.png",
                            updatedAt: "2021-04-22T04:29:22.486Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f01643e9e2df00083b2806",
                    contentIdentifier:
                        "aW5mb0BjYXJuZXkuY29fISokX1NvY2lhbCBTd2VldCBUb290aCDwn42tXyEqJF9lbl8hKiRfa29fISokXzYwZjAxNjQzZTllMmRmMDAwODNiMjgwNQ==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T11:04:35.206Z",
                    updatedAt: "2021-07-15T11:04:43.688Z",
                    fromEmail: "info@carney.co",
                    fromName: "The Daily Carnage",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "The Daily Carnage<info@carney.co>",
                    preview:
                        "음악과 전환의 감미로운 소리. ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
                    previewOriginal:
                        "The sweet sound of music and conversions. ‌ ‌ ‌ ‌",
                    s3Info: {
                        object: {
                            key: "89068a2e-8a6f-46ce-8737-190aa9b706d0",
                            size: 226201,
                            eTag: "f600babbfc8b55bff71c433cbce0dbed",
                            sequencer: "0060F01649CD8A466A",
                        },
                    },
                    searchKeywords: [
                        "소셜",
                        "스위트",
                        "투스",
                        "🍭",
                        "Social",
                        "Sweet",
                        "Tooth",
                        "🍭",
                    ],
                    sourceLanguage: "en",
                    subject: "소셜 스위트 투스 🍭",
                    subjectOriginal: "Social Sweet Tooth 🍭",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://carney.co/wp-content/uploads/2021/07/71521-Hinge-Watch-1024x629.png",
                    newslettersMetadata: [
                        {
                            _id: "The Daily Carnage<info@carney.co>",
                            title: "Carney",
                            categoryIds: ["marketing"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "carney.co",
                            newsletterLanguage: "en",
                            shortDescription:
                                "베스트 마케팅 콘텐츠를 골라 매일 보내주는 뉴스레터",
                            subscribeLink: "https://carney.co/daily-carnage/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/carney.png",
                            updatedAt: "2021-03-25T06:48:04.723Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f00fe6c6de8d00091713e6",
                    contentIdentifier:
                        "bm9yZXBseUByb2Jpbmhvb2QuY29tXyEqJF/wn5KwIFRoZSBzZWNyZXQgc3RpbXVsdXNfISokX2VuXyEqJF9rb18hKiRfNjBmMDBmZTZjNmRlOGQwMDA5MTcxM2U1",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T10:37:26.488Z",
                    updatedAt: "2021-07-15T10:37:38.237Z",
                    fromEmail: "noreply@robinhood.com",
                    fromName: "Robinhood Snacks",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "Robinhood Snacks<noreply@robinhood.com>",
                    preview:
                        "...$300/월 아동 세금 공제, 설명 어제의 시장 움직임 필라델피아는 항상 화창하지만",
                    previewOriginal:
                        "...the $300/month child tax credit, explained Yes",
                    s3Info: {
                        object: {
                            key: "b1a98ce4-8e1a-40f4-8e82-1585811b2a42",
                            size: 136651,
                            eTag: "b8fa70392a7976c4de58e50ba104ede3",
                            sequencer: "0060F00FF0BCE2C29E",
                        },
                    },
                    searchKeywords: [
                        "💰",
                        "은밀한",
                        "자극",
                        "💰",
                        "The",
                        "secret",
                        "stimulus",
                    ],
                    sourceLanguage: "en",
                    subject: "💰 은밀한 자극",
                    subjectOriginal: "💰 The secret stimulus",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://cdn.robinhood.com/marketsnacks_assets/v2/snacks.png",
                    newslettersMetadata: [
                        {
                            _id: "Robinhood Snacks<noreply@robinhood.com>",
                            title: "Robinhood Snacks",
                            categoryIds: [
                                "finance",
                                "recommendation_funjoomal",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "데일리",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "robinhood.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "금융거래플랫폼 로빈후드가 제공하는 파이낸셜 뉴스레터",
                            subscribeLink: "https://snacks.robinhood.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/robinhood-snacks.png",
                            updatedAt: "2021-06-04T02:55:48.145Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f00cb17ca1220008e4f911",
                    contentIdentifier:
                        "c3VwcG9ydEB0aWNrbGVpbnZlc3QuY29tXyEqJF/wn5iOIOuvuOq1rSAz64yAIOuMgO2RnCDsp4DsiJjqsIAg7JWM66Ck7KO864qUIO2IrOyekCDrsKnrspUhXyEqJF9rb18hKiRfa29fISokXzYwZjAwY2IxN2NhMTIyMDAwOGU0ZjkxMA==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T10:23:45.510Z",
                    updatedAt: "2021-07-15T10:23:50.366Z",
                    fromEmail: "support@tickleinvest.com",
                    fromName: "TICKLETTER -  가장 쉬운 미국주식 레터 💌",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "TICKLETTER -  가장 쉬운 미국주식 레터 💌<support@tickleinvest.com>",
                    preview:
                        '주식이 어려워? 그럴 땐 나 따라와볼래?🙋 | <a href="https://event.',
                    previewOriginal:
                        '주식이 어려워? 그럴 땐 나 따라와볼래?🙋 | <a href="https://event.',
                    s3Info: {
                        object: {
                            key: "e26811c8-56af-4fe4-ab30-fc8e85bbea28",
                            size: 189231,
                            eTag: "a328b94f9f478164132d5434a21f8563",
                            sequencer: "0060F00CB4F5596984",
                        },
                    },
                    searchKeywords: [
                        "😎",
                        "미국",
                        "3대",
                        "대표",
                        "지수가",
                        "알려주는",
                        "투자",
                        "방법!",
                        "😎",
                        "미국",
                        "3대",
                        "대표",
                        "지수가",
                        "알려주는",
                        "투자",
                        "방법!",
                    ],
                    sourceLanguage: "ko",
                    subject: "😎 미국 3대 대표 지수가 알려주는 투자 방법!",
                    subjectOriginal:
                        "😎 미국 3대 대표 지수가 알려주는 투자 방법!",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/20843_1594359907.png",
                    newslettersMetadata: [
                        {
                            _id: "TICKLETTER -  가장 쉬운 미국주식 레터 💌<support@tickleinvest.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            tags: [],
                            domain: "tickleinvest.com",
                            subscribeLink: null,
                            createdAt: "2021-07-15T10:23:00.049Z",
                            updatedAt: "2021-07-15T10:23:00.049Z",
                        },
                    ],
                },
                {
                    _id: "60f007a10439070008ae370b",
                    contentIdentifier:
                        "Y3Jld0Btb3JuaW5nYnJldy5jb21fISokX+KYle+4jyBCb3NzIGJhYnlfISokX2VuXyEqJF9rb18hKiRfNjBmMDA3YTEwNDM5MDcwMDA4YWUzNzBh",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T10:02:09.761Z",
                    updatedAt: "2021-07-15T10:02:20.384Z",
                    fromEmail: "crew@morningbrew.com",
                    fromName: "Morning Brew",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "Morning Brew<crew@morningbrew.com>",
                    preview:
                        "새로운 자녀 세금 공제에 대해 알아야 할 사항 2021년 7월 15일 후원 올해 트위터는",
                    previewOriginal:
                        "What you need to know about the new child tax cre",
                    s3Info: {
                        object: {
                            key: "b506d29b-977f-4a9d-95ee-55f549f9eb1b",
                            size: 219337,
                            eTag: "e6bc2c1d8ef9e4b9b7665160b1ef2689",
                            sequencer: "0060F007AB4C136836",
                        },
                    },
                    searchKeywords: [
                        "☕️",
                        "보스",
                        "베이비",
                        "☕️",
                        "Boss",
                        "baby",
                    ],
                    sourceLanguage: "en",
                    subject: "☕️ 보스 베이비",
                    subjectOriginal: "☕️ Boss baby",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://ad.doubleclick.net/ddm/trackimp/N805.3407870MORNINGBREW/B25066716.302483025;dc_trk_aid=500147598;dc_trk_cid=153452797;ord=631627439;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=?",
                    newslettersMetadata: [
                        {
                            _id: "Morning Brew<crew@morningbrew.com>",
                            title: "Morning Brew",
                            categoryIds: [
                                "current_issue",
                                "finance",
                                "recommendation_4years",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T10:36:49.151Z",
                            domain: "morningbrew.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "월가에서 실리콘벨리까지 당신의 하루에 필요한 정보들을 쏙쏙골라 담은 뉴스레터",
                            subscribeLink: "https://www.morningbrew.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/morningbrew.png",
                            updatedAt: "2021-06-08T00:57:40.454Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60ef92a71aed440009f5caed",
                    contentIdentifier:
                        "Z2xvYmFsX25ld3NAd2lzZXN0LmNvLmtyXyEqJF9Nb1lhIOq4gOuhnOuyjCDribTsiqTroIjthLAgKDIwMjEtMDctMTUpXyEqJF9lbl8hKiRfa29fISokXzYwZWY5MmE3MWFlZDQ0MDAwOWY1Y2FlYw==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-15T01:43:03.116Z",
                    updatedAt: "2021-07-15T01:43:22.208Z",
                    fromEmail: "global_news@wisest.co.kr",
                    fromName: "MoYa Global News Team",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "MoYa Global News Team<global_news@wisest.co.kr>",
                    preview:
                        "MoYa 뉴스 레터는 천안안 세계 주요 뉴스를 인공지능으로 옮긴다. 페이스북, 2022년",
                    previewOriginal:
                        "MoYa 뉴스레터는 놓쳐선 안 될 세계 주요 뉴스를 인공지능으로 요약 및 번역한 후 매일",
                    s3Info: {
                        object: {
                            key: "013bf464-e790-4d56-a62d-a972caca10d8",
                            size: 181146,
                            eTag: "91622a5077688e506f6cb85c8b86c74c",
                            sequencer: "0060EF92B6E1A4AE32",
                        },
                    },
                    searchKeywords: [
                        "모야",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-15)",
                        "MoYa",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-15)",
                    ],
                    sourceLanguage: "en",
                    subject: "모야 글로벌 뉴스레터 (2021-07-15)",
                    subjectOriginal: "MoYa 글로벌 뉴스레터 (2021-07-15)",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://image.cnbcfm.com/api/v1/image/106910298-1626199329003-gettyimages-1233961102-AFP_9EX4AQ.jpeg?v=1626199385",
                    newslettersMetadata: [
                        {
                            _id: "MoYa Global News Team<global_news@wisest.co.kr>",
                            newsletterLanguage: "en",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "wisest.co.kr",
                            subscribeLink: null,
                            createdAt: "2021-04-26T08:00:56.901Z",
                            updatedAt: "2021-04-26T08:00:56.901Z",
                        },
                    ],
                },
            ],
        },
    ],
    user_id: "6074e417b00fa600698a7f05",
};

export const newLetterPageOne = {
    pagination: {
        from: 0,
        limit: 20,
        page: 1,
        isPaginated: true,
    },
    total: 1102,
    contents: [
        {
            _id: "2021-07-19",
            docs: [
                {
                    _id: "60f4dafc9edddd0008d38dd8",
                    contentIdentifier:
                        "Z2xvYmFsX25ld3NAd2lzZXN0LmNvLmtyXyEqJF9Nb1lhIOq4gOuhnOuyjCDribTsiqTroIjthLAgKDIwMjEtMDctMTkpXyEqJF9lbl8hKiRfa29fISokXzYwZjRkYWZjOWVkZGRkMDAwOGQzOGRkNw==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-19T01:53:00.522Z",
                    updatedAt: "2021-07-19T01:57:41.230Z",
                    fromEmail: "global_news@wisest.co.kr",
                    fromName: "MoYa Global News Team",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "MoYa Global News Team<global_news@wisest.co.kr>",
                    preview:
                        "MoYa 뉴스 레터는 천안안 세계 주요 뉴스를 인공지능으로 옮긴다. 블루오리진, 베조스와",
                    previewOriginal:
                        "MoYa 뉴스레터는 놓쳐선 안 될 세계 주요 뉴스를 인공지능으로 요약 및 번역한 후 매일",
                    s3Info: {
                        object: {
                            key: "42a9e8fa-4a0d-4797-9b2d-9e0007308cd7",
                            size: 181987,
                            eTag: "4dab0aff0ec98f4b0ff91cdc2c0f0a4e",
                            sequencer: "0060F4DB0765DB54C4",
                        },
                    },
                    searchKeywords: [
                        "모야",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-19)",
                        "MoYa",
                        "글로벌",
                        "뉴스레터",
                        "(2021-07-19)",
                    ],
                    sourceLanguage: "en",
                    subject: "모야 글로벌 뉴스레터 (2021-07-19)",
                    subjectOriginal: "MoYa 글로벌 뉴스레터 (2021-07-19)",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://static.reuters.com/resources/r/?m=02&d=20210718&t=2&i=1569227282&r=LYNXMPEH6H0AF&w=800",
                    readedAt: "2021-07-19T01:57:41.230Z",
                    newslettersMetadata: [
                        {
                            _id: "MoYa Global News Team<global_news@wisest.co.kr>",
                            newsletterLanguage: "en",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "wisest.co.kr",
                            subscribeLink: null,
                            createdAt: "2021-04-26T08:00:56.901Z",
                            updatedAt: "2021-04-26T08:00:56.901Z",
                        },
                    ],
                },
                {
                    _id: "60f4cb42224f100009d032b6",
                    contentIdentifier:
                        "dGVhbUBzb29uc2FsLmNvbV8hKiRf8J+lqeqzoOq4sOunjCDsnpgg6rWs7JuM64+EIOy9mO2FkOy4oOqwgCDrkJjripQg7Iuc64yAIFs37JuUIDE57J28XV8hKiRfa29fISokX2tvXyEqJF82MGY0Y2I0MjIyNGYxMDAwMDlkMDMyYjU=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-19T00:45:54.876Z",
                    updatedAt: "2021-07-19T00:48:55.229Z",
                    fromEmail: "team@soonsal.com",
                    fromName: "순살브리핑 Soonsal",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "순살브리핑 Soonsal<team@soonsal.com>",
                    preview:
                        "미국판 숯불갈비 ▪ 바베큐 그릴 만드는 회사들, 미국에 상장 신청 완료. 생활 소비재들이",
                    previewOriginal:
                        "미국판 숯불갈비 ▪ 바베큐 그릴 만드는 회사들, 미국에 상장 신청 완료. 생활 소비재들이",
                    s3Info: {
                        object: {
                            key: "2f7dec6e-3d94-44d9-8c6d-619ac82ebef5",
                            size: 180426,
                            eTag: "96ad89fa9e9812bc0df4b1cef2c0ed59",
                            sequencer: "0060F4CB465D36B28B",
                        },
                    },
                    searchKeywords: [
                        "🥩고기만",
                        "잘",
                        "구워도",
                        "콘텐츠가",
                        "되는",
                        "시대",
                        "[7월",
                        "19일]",
                        "🥩고기만",
                        "잘",
                        "구워도",
                        "콘텐츠가",
                        "되는",
                        "시대",
                        "[7월",
                        "19일]",
                    ],
                    sourceLanguage: "ko",
                    subject: "🥩고기만 잘 구워도 콘텐츠가 되는 시대 [7월 19일]",
                    subjectOriginal:
                        "🥩고기만 잘 구워도 콘텐츠가 되는 시대 [7월 19일]",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://stibee.com/assets/images/editor/share_gray_web.png",
                    readedAt: "2021-07-19T00:48:55.229Z",
                    newslettersMetadata: [
                        {
                            _id: "순살브리핑 Soonsal<team@soonsal.com>",
                            title: "순살브리핑",
                            categoryIds: [
                                "finance",
                                "recommendation_morning_coffee",
                                "recommendation_freshman_fighting",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "평일 아침 10시",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "soonsal.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "전 세계 금융/경제 뉴스를 살코기만 발라 제공하는 뉴스레터",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/51845",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/soonsal.png",
                            updatedAt: "2021-07-16T03:43:13.587Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f4bed4b904860009786d89",
                    contentIdentifier:
                        "bW9ybmluZ0BpbGJ1bnRvay5jb21fISokX+KYneyVhOuniOyhtOqzvCDtjpjrtoHsnbQg7Lmc6rWs6rCAIOuQnOuLpOuptF8hKiRfa29fISokX2tvXyEqJF82MGY0YmVkNGI5MDQ4NjAwMDk3ODZkODg=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T23:52:52.515Z",
                    updatedAt: "2021-07-19T00:36:42.207Z",
                    fromEmail: "morning@ilbuntok.com",
                    fromName: "ilbuntok",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "ilbuntok<morning@ilbuntok.com>",
                    preview:
                        "일분톡 구독하기</a> 7월 19일 월요일</a> • 페북 우주산업 인수하는 베조스</s",
                    previewOriginal:
                        "일분톡 구독하기</a> 7월 19일 월요일</a> • 페북 우주산업 인수하는 베조스</s",
                    s3Info: {
                        object: {
                            key: "66f932fa-ba3a-4add-99eb-05002fc24087",
                            size: 283257,
                            eTag: "8b52e09b2123b894fb38dbab19574e51",
                            sequencer: "0060F4BEDC38FAA9A8",
                        },
                    },
                    searchKeywords: [
                        "☝아마존과",
                        "페북이",
                        "친구가",
                        "된다면",
                        "☝아마존과",
                        "페북이",
                        "친구가",
                        "된다면",
                    ],
                    sourceLanguage: "ko",
                    subject: "☝아마존과 페북이 친구가 된다면",
                    subjectOriginal: "☝아마존과 페북이 친구가 된다면",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png",
                    readedAt: "2021-07-19T00:36:42.207Z",
                    newslettersMetadata: [
                        {
                            _id: "ilbuntok<morning@ilbuntok.com>",
                            title: "일분톡",
                            categoryIds: [
                                "tech",
                                "recommendation_freshman_fighting",
                            ],
                            confirmationEmail: "no",
                            contentReleaseSchedule: "월, 목 오전 8시 즈음",
                            createdAt: "2021-03-25T06:48:04.722Z",
                            domain: "ilbuntok.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "어렵게 느껴지는 테크 이야기를 쉽게 풀어서 보내주는 뉴스레터",
                            subscribeLink: "http://ilbuntok.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/ilbuntok.png",
                            updatedAt: "2021-07-16T00:28:04.627Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f4b9b67cde5300085520ed",
                    contentIdentifier:
                        "cHBvc2ljLm5ld2JpZUBnbWFpbC5jb21fISokX1vstpzqt7wgMTcw7J287LCoXSBSRTEwMD8g64uk7IucIOuwseuyiO2VtOyalD9fISokX2tvXyEqJF9rb18hKiRfNjBmNGI5YjY3Y2RlNTMwMDA4NTUyMGVj",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T23:31:02.188Z",
                    updatedAt: "2021-07-18T23:31:06.371Z",
                    fromEmail: "pposic.newbie@gmail.com",
                    fromName: "뽀식이",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "뽀식이<pposic.newbie@gmail.com>",
                    preview:
                        "하라면 하겠습니다(의지)🐣🔥🔥 ✋뽀-하(뽀식 하이) 오늘은 하반기 조직개편 발표가 있는",
                    previewOriginal:
                        "하라면 하겠습니다(의지)🐣🔥🔥 ✋뽀-하(뽀식 하이) 오늘은 하반기 조직개편 발표가 있는",
                    s3Info: {
                        object: {
                            key: "8119bbee-a607-45b7-9dc2-e0fab101902c",
                            size: 81425,
                            eTag: "17ae7c5e4fbc581021d9bc45e36af936",
                            sequencer: "0060F4B9B899D6ECB7",
                        },
                    },
                    searchKeywords: [
                        "[출근",
                        "170일차]",
                        "RE100?",
                        "다시",
                        "백번해요?",
                        "[출근",
                        "170일차]",
                        "RE100?",
                        "다시",
                        "백번해요?",
                    ],
                    sourceLanguage: "ko",
                    subject: "[출근 170일차] RE100? 다시 백번해요?",
                    subjectOriginal: "[출근 170일차] RE100? 다시 백번해요?",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/20681_1581260060.png",
                    newslettersMetadata: [
                        {
                            _id: "뽀식이<pposic.newbie@gmail.com>",
                            title: "뽀시래기의 지식 한 장",
                            categoryIds: [
                                "lifestyle",
                                "recommendation_freshman_fighting",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-28T23:49:16.182Z",
                            domain: "gmail.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "실무에 자주 쓰는 용어를 정리해서 보내주는 뉴스레터",
                            subscribeLink:
                                "https://www.notion.so/PPO-SIC-3d6f4b7e0847481c87277376b944208d",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/pposic.png",
                            updatedAt: "2021-03-28T23:49:16.182Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f4b2d8d63bd40009b784c2",
                    contentIdentifier:
                        "Y29tbXVuaXR5QGh1YnNwb3QuY29tXyEqJF9IdWJTcG90IENvbW11bml0eSBOZXdzbGV0dGVyIHwgSnVseSAxOSwgMjAyMV8hKiRfZW5fISokX2tvXyEqJF82MGY0YjJkOGQ2M2JkNDAwMDliNzg0YzE=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T23:01:44.930Z",
                    updatedAt: "2021-07-18T23:01:51.650Z",
                    fromEmail: "community@hubspot.com",
                    fromName: "HubSpot Community Team",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "HubSpot Community Team<community@hubspot.com>",
                    preview:
                        "커뮤니티 리더 Karsten Köhler와 함께하는 AMA에 참여하고 다가오는 아카데미",
                    previewOriginal:
                        "Join our AMA with Community leader Karsten Köhler",
                    s3Info: {
                        object: {
                            key: "2831508e-35c7-40a9-9675-da7b2a2a0179",
                            size: 157806,
                            eTag: "879cb84e8cac91f28997d8b9bb1d229a",
                            sequencer: "0060F4B2DE471100F2",
                        },
                    },
                    searchKeywords: [
                        "HubSpot",
                        "커뮤니티",
                        "뉴스레터",
                        "|",
                        "2021년",
                        "7월",
                        "19일",
                        "HubSpot",
                        "Community",
                        "Newsletter",
                        "|",
                        "July",
                        "19,",
                        "2021",
                    ],
                    sourceLanguage: "en",
                    subject: "HubSpot 커뮤니티 뉴스레터 | 2021년 7월 19일",
                    subjectOriginal:
                        "HubSpot Community Newsletter | July 19, 2021",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://www.hubspot.com/hs-fs/hubfs/Screen%20Shot%202021-07-01%20at%202.38.35%20PM.png?width=1200&upscale=true&name=Screen%20Shot%202021-07-01%20at%202.38.35%20PM.png",
                    newslettersMetadata: [
                        {
                            _id: "HubSpot Community Team<community@hubspot.com>",
                            newsletterLanguage: "en",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: "HubSpot",
                            domain: "hubspot.com",
                            subscribeLink: null,
                            createdAt: "2021-05-16T23:01:51.677Z",
                            updatedAt: "2021-05-18T23:19:42.576Z",
                        },
                    ],
                },
                {
                    _id: "60f4a5832a7e6100094ea598",
                    contentIdentifier:
                        "aGVsbG9Ac2VvdWx3cml0ZXIuY29tXyEqJF/smKTroIjsmKTqsIAg7JeG7JeI64qU642w7JqUIOyeiOyXiOyKteuLiOuLpC5fISokX2tvXyEqJF9rb18hKiRfNjBmNGE1ODMyYTdlNjEwMDA5NGVhNTk3",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T22:04:51.851Z",
                    updatedAt: "2021-07-18T22:04:56.346Z",
                    fromEmail: "hello@seoulwriter.com",
                    fromName: "서울라이터 SEOULWRITER",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "서울라이터 SEOULWRITER<hello@seoulwriter.com>",
                    preview:
                        '사실, 저 아직 미나리를 못 봤는데요. <span style="font-weight: b',
                    previewOriginal:
                        '사실, 저 아직 미나리를 못 봤는데요. <span style="font-weight: b',
                    s3Info: {
                        object: {
                            key: "de81e1fd-06df-44a2-928f-c481053c30c6",
                            size: 191844,
                            eTag: "d77f6fe1922f32876db25627f0a0fb74",
                            sequencer: "0060F4A586E601459F",
                        },
                    },
                    searchKeywords: [
                        "오레오가",
                        "없었는데요",
                        "있었습니다.",
                        "오레오가",
                        "없었는데요",
                        "있었습니다.",
                    ],
                    sourceLanguage: "ko",
                    subject: "오레오가 없었는데요 있었습니다.",
                    subjectOriginal: "오레오가 없었는데요 있었습니다.",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/31225_1621681163.png",
                    newslettersMetadata: [
                        {
                            _id: "서울라이터 SEOULWRITER<hello@seoulwriter.com>",
                            newsletterLanguage: "ko",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/seoulwriter.png",
                            verified: true,
                            visible: false,
                            title: "서울 라이터즈",
                            domain: "seoulwriter.com",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/72985",
                            createdAt: "2021-04-18T22:00:10.231Z",
                            updatedAt: "2021-05-24T05:57:26.131Z",
                            categoryIds: ["lifestyle", "tech"],
                            confirmationEmail:
                                "구독 확인 메일 > 구독 버튼 > 구독 완료",
                            contentReleaseSchedule: "월",
                            shortDescription:
                                "디지털 트렌드, 테크, 크리에이티브, 새로운 아이디어 발상을 위한 모든 것을 큐레이션 하여 전해 드리는 뉴스레터",
                        },
                    ],
                },
                {
                    _id: "60f4a5089e9da10009d0a8f5",
                    contentIdentifier:
                        "b3JhbmdlQHNsb3dhbGsuY28ua3JfISokXyjqtJHqs6ApIFsubGV0dGVyXSA37JuUIOuEt+ynuOyjvCDshozshZzshLnthLAg7KO87JqUIOydtOyKiCDwn42KXyEqJF9rb18hKiRfa29fISokXzYwZjRhNTA4OWU5ZGExMDAwOWQwYThmNA==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T22:02:48.457Z",
                    updatedAt: "2021-07-18T22:03:08.710Z",
                    fromEmail: "orange@slowalk.co.kr",
                    fromName: "오렌지레터",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "오렌지레터<orange@slowalk.co.kr>",
                    preview:
                        "한 주의 시작, 오렌지레터를 놓치지 마세요! 오렌지님은 즐겨 찾는 여름 메뉴가 있나요?",
                    previewOriginal:
                        "한 주의 시작, 오렌지레터를 놓치지 마세요! 오렌지님은 즐겨 찾는 여름 메뉴가 있나요?",
                    s3Info: {
                        object: {
                            key: "7c0f3391-aa6e-44e1-8e5b-ae315c22f821",
                            size: 517972,
                            eTag: "491838153febbaca9c7815af193ff8e6",
                            sequencer: "0060F4A51B8857A4D0",
                        },
                    },
                    searchKeywords: [
                        "(광고)",
                        "[.letter]",
                        "7월",
                        "넷째주",
                        "소셜섹터",
                        "주요",
                        "이슈",
                        "🍊",
                        "(광고)",
                        "[.letter]",
                        "7월",
                        "넷째주",
                        "소셜섹터",
                        "주요",
                        "이슈",
                        "🍊",
                    ],
                    sourceLanguage: "ko",
                    subject:
                        "(광고) [.letter] 7월 넷째주 소셜섹터 주요 이슈 🍊",
                    subjectOriginal:
                        "(광고) [.letter] 7월 넷째주 소셜섹터 주요 이슈 🍊",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/3511_1614134146.png",
                    newslettersMetadata: [
                        {
                            _id: "오렌지레터<orange@slowalk.co.kr>",
                            newsletterLanguage: "ko",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/orangeletter.png",
                            verified: true,
                            visible: false,
                            title: "오렌지레터",
                            domain: "slowalk.co.kr",
                            subscribeLink:
                                "https://slowalk.co.kr/orangeletter/",
                            createdAt: "2021-04-14T07:40:06.142Z",
                            updatedAt: "2021-05-04T00:48:21.792Z",
                            shortDescription:
                                "슬로우워크가 발행하는 한 주간의 이슈, 이벤트, 채용 등을 담은 뉴스레터",
                            categoryIds: ["marketing", "lifestyle"],
                        },
                    ],
                },
                {
                    _id: "60f4a213c0d4080009fb8c15",
                    contentIdentifier:
                        "bnVnZ2V0X2xldHRlckB1Z2V0LmNvLmtyXyEqJF/tmLjsuonsiqTrpbwg6rOE7ZqN7ZWY6ri0IO2WiOuKlOuNsC4uLvCfpKBfISokX2tvXyEqJF9rb18hKiRfNjBmNGEyMTNjMGQ0MDgwMDA5ZmI4YzE0",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T21:50:11.016Z",
                    updatedAt: "2021-07-19T02:56:40.927Z",
                    fromEmail: "nugget_letter@uget.co.kr",
                    fromName: "😉너겟레터",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "😉너겟레터<nugget_letter@uget.co.kr>",
                    preview:
                        '딱 <span style="color: rgb(255, 0, 0);">30초</span>',
                    previewOriginal:
                        '딱 <span style="color: rgb(255, 0, 0);">30초</span>',
                    s3Info: {
                        object: {
                            key: "bbfc0e58-ae8d-4f23-9a62-f5ad9fa7fc75",
                            size: 292678,
                            eTag: "f625e6bb31a8203b80000f22ac3873b8",
                            sequencer: "0060F4A2182F1050BB",
                        },
                    },
                    searchKeywords: [
                        "호캉스를",
                        "계획하긴",
                        "했는데...🤠",
                        "호캉스를",
                        "계획하긴",
                        "했는데...🤠",
                    ],
                    sourceLanguage: "ko",
                    subject: "호캉스를 계획하긴 했는데...🤠",
                    subjectOriginal: "호캉스를 계획하긴 했는데...🤠",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/23534_1624039984.jpg",
                    readedAt: "2021-07-19T02:56:40.927Z",
                    newslettersMetadata: [
                        {
                            _id: "😉너겟레터<nugget_letter@uget.co.kr>",
                            title: "너겟",
                            categoryIds: ["finance"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "월/목 오전 7시",
                            createdAt: "2021-03-25T06:48:04.722Z",
                            domain: "uget.co.kr",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "사회초년생의 금융, 제테크 이야기를 담은 뉴스레터",
                            subscribeLink:
                                "https://page.stibee.com/subscriptions/119368",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/nugget_letter.png",
                            updatedAt: "2021-05-24T10:38:02.645Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f49d96c0d4080009fb8bfb",
                    contentIdentifier:
                        "ZWRpdG9yQGhhbmt5dW5nLmNvbV8hKiRfIuyghOq1reuvvOydtOuDkCwgODAl64OQIuKApuuLueygleyyrSwg7Jik64qYIOyngOybkOq4iCDrhbzsnZhfISokX2tvXyEqJF9rb18hKiRfNjBmNDlkOTZjMGQ0MDgwMDA5ZmI4YmZh",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T21:31:02.706Z",
                    updatedAt: "2021-07-18T21:31:09.328Z",
                    fromEmail: "editor@hankyung.com",
                    fromName: "한경 💌 Issue  Today",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "한경 💌 Issue  Today<editor@hankyung.com>",
                    preview:
                        '페이스북에 공유하기</a></span><span style="list-style: non',
                    previewOriginal:
                        '페이스북에 공유하기</a></span><span style="list-style: non',
                    s3Info: {
                        object: {
                            key: "acd82a38-e525-4705-85b9-1ddbec176b5d",
                            size: 120996,
                            eTag: "7518c54479c759a7aa5adfe26d760a22",
                            sequencer: "0060F49D9C122694D1",
                        },
                    },
                    searchKeywords: [
                        '"전국민이냐,',
                        '80%냐"…당정청,',
                        "오늘",
                        "지원금",
                        "논의",
                        '"전국민이냐,',
                        '80%냐"…당정청,',
                        "오늘",
                        "지원금",
                        "논의",
                    ],
                    sourceLanguage: "ko",
                    subject: '"전국민이냐, 80%냐"…당정청, 오늘 지원금 논의',
                    subjectOriginal:
                        '"전국민이냐, 80%냐"…당정청, 오늘 지원금 논의',
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/35366_1626071061.jpg",
                    newslettersMetadata: [
                        {
                            _id: "한경 💌 Issue  Today<editor@hankyung.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "hankyung.com",
                            subscribeLink: null,
                            createdAt: "2021-04-21T21:52:28.063Z",
                            updatedAt: "2021-05-12T07:49:52.037Z",
                            categoryIds: ["current_issue", "finance"],
                        },
                    ],
                },
                {
                    _id: "60f49cf09c48000008b751b4",
                    contentIdentifier:
                        "bW9uZXlsZXR0ZXJAdXBwaXR5LmNvLmtyXyEqJF8o6rSR6rOgKfCfkrDrspXsoJUg7LWc6rOg6riI66as6rCAIOuCruyVhOynhCDsnbTsnKBfISokX2tvXyEqJF9rb18hKiRfNjBmNDljZjA5YzQ4MDAwMDA4Yjc1MWIz",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T21:28:16.413Z",
                    updatedAt: "2021-07-18T21:28:26.774Z",
                    fromEmail: "moneyletter@uppity.co.kr",
                    fromName: "UPPITY",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "UPPITY<moneyletter@uppity.co.kr>",
                    preview:
                        '#법정최고금리 #라면 #경제뉴스보고또보고 코스피 3,276.91 <span style="',
                    previewOriginal:
                        '#법정최고금리 #라면 #경제뉴스보고또보고 코스피 3,276.91 <span style="',
                    s3Info: {
                        object: {
                            key: "ae4fc261-ce80-4f6a-9365-3dfae88df9a3",
                            size: 256926,
                            eTag: "e13dc11fcf3230498951acb8ea1bb542",
                            sequencer: "0060F49CF952891206",
                        },
                    },
                    searchKeywords: [
                        "(광고)💰법정",
                        "최고금리가",
                        "낮아진",
                        "이유",
                        "(광고)💰법정",
                        "최고금리가",
                        "낮아진",
                        "이유",
                    ],
                    sourceLanguage: "ko",
                    subject: "(광고)💰법정 최고금리가 낮아진 이유",
                    subjectOriginal: "(광고)💰법정 최고금리가 낮아진 이유",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/8466_1626599566.png",
                    newslettersMetadata: [
                        {
                            _id: "UPPITY<moneyletter@uppity.co.kr>",
                            title: "어피티",
                            categoryIds: ["finance", "lifestyle"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "평일 아침 8시",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "uppity.co.kr",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "사회초년생이 꼭 알아야 할 금융정보를 쉽게 이야기해주는 경제 뉴스레터",
                            subscribeLink: "https://uppity.co.kr/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/uppity.png",
                            updatedAt: "2021-03-25T06:48:04.723Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f498e39c48000008b75170",
                    contentIdentifier:
                        "ZWRpdG9yQGhhbmt5dW5nLmNvbV8hKiRf7Jis65OcIOu4jOuenOuTnCDrp4jsvIDtjIXsl5DshJwg7KeA7YKsIOqyg+qzvCDrsoTrprQg6rKDXyEqJF9rb18hKiRfa29fISokXzYwZjQ5OGUzOWM0ODAwMDAwOGI3NTE2Zg==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T21:10:59.735Z",
                    updatedAt: "2021-07-18T21:11:05.770Z",
                    fromEmail: "editor@hankyung.com",
                    fromName: "한경 💌 CMO Insight",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "한경 💌 CMO Insight<editor@hankyung.com>",
                    preview:
                        "BYC는 창립 70년이 지난 장수 기업이다. 다른 기업들처럼 MZ세대를 겨냥한 마케팅에",
                    previewOriginal:
                        "BYC는 창립 70년이 지난 장수 기업이다. 다른 기업들처럼 MZ세대를 겨냥한 마케팅에",
                    s3Info: {
                        object: {
                            key: "d81f36c6-8216-4422-9aed-4e14a62d25ef",
                            size: 162148,
                            eTag: "c9f102caf7f150672b521d028247e8a8",
                            sequencer: "0060F498E729C7B2BA",
                        },
                    },
                    searchKeywords: [
                        "올드",
                        "브랜드",
                        "마케팅에서",
                        "지킬",
                        "것과",
                        "버릴",
                        "것",
                        "올드",
                        "브랜드",
                        "마케팅에서",
                        "지킬",
                        "것과",
                        "버릴",
                        "것",
                    ],
                    sourceLanguage: "ko",
                    subject: "올드 브랜드 마케팅에서 지킬 것과 버릴 것",
                    subjectOriginal: "올드 브랜드 마케팅에서 지킬 것과 버릴 것",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/35366_1626415479.jpg",
                    newslettersMetadata: [
                        {
                            _id: "한경 💌 CMO Insight<editor@hankyung.com>",
                            newsletterLanguage: "ko",
                            thumbnails: "",
                            verified: false,
                            visible: false,
                            title: null,
                            domain: "hankyung.com",
                            subscribeLink: null,
                            createdAt: "2021-04-25T21:10:45.417Z",
                            updatedAt: "2021-05-12T07:50:00.281Z",
                            categoryIds: ["current_issue", "finance"],
                        },
                    ],
                },
                {
                    _id: "60f4967548ff2d0008c6ab6d",
                    contentIdentifier:
                        "Ynl0ZXRlYW0zNjVAZ21haWwuY29tXyEqJF/qsIDsg4HsnbjqsITqs7wg7YC17Luk66i47IqkIPCfmppfISokX2tvXyEqJF9rb18hKiRfNjBmNDk2NzU0OGZmMmQwMDA4YzZhYjZj",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T21:00:37.781Z",
                    updatedAt: "2021-07-18T21:00:45.057Z",
                    fromEmail: "byteteam365@gmail.com",
                    fromName: "DAILY_BYTE",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "DAILY_BYTE<byteteam365@gmail.com>",
                    preview:
                        '가상인간 | 퀵커머스 | 뉴스 모아보기 22살 <a href="https://event.',
                    previewOriginal:
                        '가상인간 | 퀵커머스 | 뉴스 모아보기 22살 <a href="https://event.',
                    s3Info: {
                        object: {
                            key: "be8f0d5c-59d2-4aef-96eb-fe4b8a3fd9c2",
                            size: 219920,
                            eTag: "c7b69d8986cc965e6b3bfab9e8b2a16c",
                            sequencer: "0060F4967BDCA98C54",
                        },
                    },
                    searchKeywords: [
                        "가상인간과",
                        "퀵커머스",
                        "🚚",
                        "가상인간과",
                        "퀵커머스",
                        "🚚",
                    ],
                    sourceLanguage: "ko",
                    subject: "가상인간과 퀵커머스 🚚",
                    subjectOriginal: "가상인간과 퀵커머스 🚚",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/34563_1626538461.png",
                    newslettersMetadata: [
                        {
                            _id: "DAILY_BYTE<byteteam365@gmail.com>",
                            title: "데일리바이트",
                            categoryIds: ["current_issue"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T21:11:08.029Z",
                            domain: "gmail.com",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "비즈니스 뉴스의 흐름과 용어를 쉽게 설명해주는 뉴스레터",
                            subscribeLink: "http://mydailybyte.com",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/mydailybyte.png",
                            updatedAt: "2021-05-06T09:56:59.400Z",
                            verified: true,
                            visible: false,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f49008c0d4080009fb8b85",
                    contentIdentifier:
                        "d2hhdHN1cEBuZXduZWVrLmNvXyEqJF/wn6aUMTAw64WEIOunjOyXkCDtj63smrAg64K066awIOydtOycoOuKlD9fISokX2tvXyEqJF9rb18hKiRfNjBmNDkwMDhjMGQ0MDgwMDA5ZmI4Yjg0",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T20:33:12.153Z",
                    updatedAt: "2021-07-18T20:33:17.202Z",
                    fromEmail: "whatsup@newneek.co",
                    fromName: "NEWNEEK",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "NEWNEEK<whatsup@newneek.co>",
                    preview:
                        "홍수,보호아동,탄소 “독일에서 홍수로 목숨을 잃을 거라곤 생각도 못 했어요.” 지난주에",
                    previewOriginal:
                        "홍수,보호아동,탄소 “독일에서 홍수로 목숨을 잃을 거라곤 생각도 못 했어요.” 지난주에",
                    s3Info: {
                        object: {
                            key: "edd70814-a36e-4ba4-9c04-d31bfa476ebb",
                            size: 258890,
                            eTag: "5a27b8edce7dd79a21e07f27c9de9cac",
                            sequencer: "0060F4900C3C515CF0",
                        },
                    },
                    searchKeywords: [
                        "🦔100년",
                        "만에",
                        "폭우",
                        "내린",
                        "이유는?",
                        "🦔100년",
                        "만에",
                        "폭우",
                        "내린",
                        "이유는?",
                    ],
                    sourceLanguage: "ko",
                    subject: "🦔100년 만에 폭우 내린 이유는?",
                    subjectOriginal: "🦔100년 만에 폭우 내린 이유는?",
                    targetLanguage: "ko",
                    thumbnails: "https://img.stibee.com/10535_1605149766.png",
                    newslettersMetadata: [
                        {
                            _id: "NEWNEEK<whatsup@newneek.co>",
                            title: "뉴닉",
                            categoryIds: [
                                "current_issue",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "no",
                            contentReleaseSchedule: "월/수/금 아침",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "newneek.co",
                            newsletterLanguage: "ko",
                            shortDescription:
                                "밀레니얼 타겟 쉽고 재밌는 시사 뉴스레터",
                            subscribeLink: "https://newneek.co/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/newneek.png",
                            updatedAt: "2021-07-16T00:26:47.485Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
            ],
        },
        {
            _id: "2021-07-18",
            docs: [
                {
                    _id: "60f41613ea08bb0009f19ae9",
                    contentIdentifier:
                        "Y3Jld0Btb3JuaW5nYnJldy5jb21fISokX+KYle+4jyBQbGF5Ym95IG1hbnNpb24gb2YgdGhlIEVhc3RfISokX2VuXyEqJF9rb18hKiRfNjBmNDE2MTNlYTA4YmIwMDA5ZjE5YWU4",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T11:52:51.439Z",
                    updatedAt: "2021-07-19T02:15:19.917Z",
                    fromEmail: "crew@morningbrew.com",
                    fromName: "Morning Brew",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId: "Morning Brew<crew@morningbrew.com>",
                    preview:
                        "의 역사 과 함께 이 문제에 편집자 주 올해 올림픽은 미워하기 쉽습니다. 모든 합법적인",
                    previewOriginal:
                        "The history of and Together with IN THIS ISSUE Ed",
                    s3Info: {
                        object: {
                            key: "c4617dd4-dc89-4704-a23c-38f5dce3de0d",
                            size: 236600,
                            eTag: "70ea6a3df4869f3152b63313ef9b89dc",
                            sequencer: "0060F4161D80452603",
                        },
                    },
                    searchKeywords: [
                        "☕️",
                        "동양의",
                        "플레이보이",
                        "맨션",
                        "☕️",
                        "Playboy",
                        "mansion",
                        "of",
                        "the",
                        "East",
                    ],
                    sourceLanguage: "en",
                    subject: "☕️ 동양의 플레이보이 맨션",
                    subjectOriginal: "☕️ Playboy mansion of the East",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/pile-of-poo_1f4a9.png",
                    readedAt: "2021-07-19T02:15:19.917Z",
                    newslettersMetadata: [
                        {
                            _id: "Morning Brew<crew@morningbrew.com>",
                            title: "Morning Brew",
                            categoryIds: [
                                "current_issue",
                                "finance",
                                "recommendation_4years",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T10:36:49.151Z",
                            domain: "morningbrew.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "월가에서 실리콘벨리까지 당신의 하루에 필요한 정보들을 쏙쏙골라 담은 뉴스레터",
                            subscribeLink: "https://www.morningbrew.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/morningbrew.png",
                            updatedAt: "2021-06-08T00:57:40.454Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f3f5e9debcad00085a0724",
                    contentIdentifier:
                        "bmV3c0BwaXRjaGJvb2suY29tXyEqJF9WQy1iYWNrZWQgZXhpdHMgYXJlIGFib3V0IHRvIGdldCBob3R0ZXJfISokX2VuXyEqJF9rb18hKiRfNjBmM2Y1ZTlkZWJjYWQwMDA4NWEwNzIz",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-18T09:35:37.102Z",
                    updatedAt: "2021-07-18T09:35:57.186Z",
                    fromEmail: "news@pitchbook.com",
                    fromName: "PitchBook News",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "PitchBook News<news@pitchbook.com>",
                    preview:
                        "피치북 2021년 7월 18일 지난 10년 동안 유한 책임 파트너는 뛰어난 수익을 추구하",
                    previewOriginal:
                        'PitchBook July 18, 2021 Presented by <a href="htt',
                    s3Info: {
                        object: {
                            key: "5e26e531-a475-48bc-9106-66ae8ab882a0",
                            size: 178299,
                            eTag: "317b7ba087e5c256a1d155c3eb3038dc",
                            sequencer: "0060F3F5FA54F42BE9",
                        },
                    },
                    searchKeywords: [
                        "VC",
                        "지원",
                        "출구는",
                        "점점",
                        "더",
                        "뜨거워지고",
                        "있습니다.",
                        "VC-backed",
                        "exits",
                        "are",
                        "about",
                        "to",
                        "get",
                        "hotter",
                    ],
                    sourceLanguage: "en",
                    subject: "VC 지원 출구는 점점 더 뜨거워지고 있습니다.",
                    subjectOriginal: "VC-backed exits are about to get hotter",
                    targetLanguage: "ko",
                    thumbnails: "https://my.pitchbook.com/n/44785.2968052.gif",
                    newslettersMetadata: [
                        {
                            _id: "PitchBook News<news@pitchbook.com>",
                            title: "PitchBook ",
                            categoryIds: ["tech", "finance"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T12:17:29.262Z",
                            domain: "pitchbook.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "VC, M&A등 변화하는 세상에 앞서나가는데 필요한 정보를 제공하는 뉴스레터",
                            subscribeLink: "https://pitchbook.com/subscribe",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/pitchbook.png",
                            updatedAt: "2021-04-22T04:29:22.486Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
            ],
        },
        {
            _id: "2021-07-17",
            docs: [
                {
                    _id: "60f2a63cf1be970008bf823a",
                    contentIdentifier:
                        "bmV3c0BwaXRjaGJvb2suY29tXyEqJF9BbGwgdGhlIGJpZyBVUyBWQyByZWNvcmRzIHdpbGwgZmFsbF8hKiRfZW5fISokX2tvXyEqJF82MGYyYTYzY2YxYmU5NzAwMDhiZjgyMzk=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-17T09:43:24.452Z",
                    updatedAt: "2021-07-17T09:43:33.572Z",
                    fromEmail: "news@pitchbook.com",
                    fromName: "PitchBook Research",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "PitchBook Research<news@pitchbook.com>",
                    preview:
                        "피치북 2021년 7월 17일 향후 연구를 개선하는 데 도움을 주세요(그리고 일부 상품도",
                    previewOriginal:
                        "PitchBook July 17, 2021 Help make our upcoming re",
                    s3Info: {
                        object: {
                            key: "d859748b-515d-46e7-bafa-6d5e4111d1ac",
                            size: 180679,
                            eTag: "b51a3c8602d44d7adc4c9a18fccd6ee5",
                            sequencer: "0060F2A64489CE31A1",
                        },
                    },
                    searchKeywords: [
                        "모든",
                        "미국",
                        "VC",
                        "기록이",
                        "떨어질",
                        "것입니다.",
                        "All",
                        "the",
                        "big",
                        "US",
                        "VC",
                        "records",
                        "will",
                        "fall",
                    ],
                    sourceLanguage: "en",
                    subject: "모든 미국 VC 기록이 떨어질 것입니다.",
                    subjectOriginal: "All the big US VC records will fall",
                    targetLanguage: "ko",
                    thumbnails: "https://my.pitchbook.com/n/44761.2968052.gif",
                    newslettersMetadata: [
                        {
                            _id: "PitchBook Research<news@pitchbook.com>",
                            title: "PitchBook",
                            categoryIds: ["tech", "finance"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-27T09:56:36.725Z",
                            domain: "pitchbook.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "VC, M&A등 변화하는 시장에 필요한 정보를 제공하는 뉴스레터",
                            subscribeLink: "https://pitchbook.com/subscribe",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/pitchbook.png",
                            updatedAt: "2021-03-27T09:56:36.725Z",
                            verified: true,
                            visible: false,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f29e5a0410b00009967e60",
                    contentIdentifier:
                        "Y3Jld0Btb3JuaW5nYnJldy5jb21fISokX+KYle+4jyBQZWFrIGNvbW1lcmNpYWxpemF0aW9uXyEqJF9lbl8hKiRfa29fISokXzYwZjI5ZTVhMDQxMGIwMDAwOTk2N2U1Zg==",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-17T09:09:46.654Z",
                    updatedAt: "2021-07-17T09:10:02.458Z",
                    fromEmail: "crew@morningbrew.com",
                    fromName: "Morning Brew",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "Morning Brew<crew@morningbrew.com>",
                    preview:
                        "스테이블코인이란 무엇이며 왜 규제해야 합니까? 2021년 7월 17일 함께 다음은 예입니",
                    previewOriginal:
                        "What is a stablecoin and why should we regulate i",
                    s3Info: {
                        object: {
                            key: "ecadde17-a168-4a8c-86d0-abfcceaf78ce",
                            size: 224856,
                            eTag: "e117c39204c8be61340a3300c446aade",
                            sequencer: "0060F29E6974E266DA",
                        },
                    },
                    searchKeywords: [
                        "☕️",
                        "상용화",
                        "피크",
                        "☕️",
                        "Peak",
                        "commercialization",
                    ],
                    sourceLanguage: "en",
                    subject: "☕️ 상용화 피크",
                    subjectOriginal: "☕️ Peak commercialization",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://media.sailthru.com/5z8/1k4/4/2/5e86546217fa0.jpg",
                    newslettersMetadata: [
                        {
                            _id: "Morning Brew<crew@morningbrew.com>",
                            title: "Morning Brew",
                            categoryIds: [
                                "current_issue",
                                "finance",
                                "recommendation_4years",
                                "recommendation_freshman_fighting",
                                "recommendation_morning_coffee",
                            ],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T10:36:49.151Z",
                            domain: "morningbrew.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "월가에서 실리콘벨리까지 당신의 하루에 필요한 정보들을 쏙쏙골라 담은 뉴스레터",
                            subscribeLink: "https://www.morningbrew.com/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/morningbrew.png",
                            updatedAt: "2021-06-08T00:57:40.454Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f1fb0d8c4cc300082abc4c",
                    contentIdentifier:
                        "bmV3eW9ya2VyQG5ld3NsZXR0ZXIubmV3eW9ya2VyLmNvbV8hKiRfQSBIYXVudGluZyBOZXcgRG9jdW1lbnRhcnkgQWJvdXQgQW50aG9ueSBCb3VyZGFpbl8hKiRfZW5fISokX2tvXyEqJF82MGYxZmIwZDhjNGNjMzAwMDgyYWJjNGI=",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T21:33:01.798Z",
                    updatedAt: "2021-07-19T02:48:28.302Z",
                    fromEmail: "newyorker@newsletter.newyorker.com",
                    fromName: "New Yorker Movie Club",
                    isRead: true,
                    isTranslatedView: true,
                    newslettersMetadataId:
                        "New Yorker Movie Club<newyorker@newsletter.newyorker.com>",
                    preview:
                        "또한, 뉴욕의 임대료에 대한 충격적인 모큐멘터리와 새로운 스트리밍 권장 사항. 요리법의",
                    previewOriginal:
                        "Plus, a shocking mockumentary about rent in New Y",
                    s3Info: {
                        object: {
                            key: "21439cbc-b963-40f1-9a0a-9cba03f0d52f",
                            size: 248466,
                            eTag: "3ad43ad6bc4e69acc03f7c531fd12d83",
                            sequencer: "0060F1FB143A062271",
                        },
                    },
                    searchKeywords: [
                        "Anthony",
                        "Bourdain에",
                        "관한",
                        "잊혀지지",
                        "않는",
                        "새로운",
                        "다큐멘터리",
                        "A",
                        "Haunting",
                        "New",
                        "Documentary",
                        "About",
                        "Anthony",
                        "Bourdain",
                    ],
                    sourceLanguage: "en",
                    subject:
                        "Anthony Bourdain에 관한 잊혀지지 않는 새로운 다큐멘터리",
                    subjectOriginal:
                        "A Haunting New Documentary About Anthony Bourdain",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://sailthru-media.s3.amazonaws.com/composer/images/sailthru-prod-5wd/2019-header-movie%20club%403x.png",
                    readedAt: "2021-07-19T02:48:28.302Z",
                    newslettersMetadata: [
                        {
                            _id: "New Yorker Movie Club<newyorker@newsletter.newyorker.com>",
                            title: "New Yorker Movie Club",
                            categoryIds: ["movie_music"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-26T22:09:10.018Z",
                            domain: "newsletter.newyorker.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "상영하는 영화 및 시네마를 리뷰해주는 뉴스레터",
                            subscribeLink:
                                "https://www.newyorker.com/newsletter/movie-club",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/newyorker.png",
                            updatedAt: "2021-05-03T02:27:18.420Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
            ],
        },
        {
            _id: "2021-07-16",
            docs: [
                {
                    _id: "60f179068599370009f618a2",
                    contentIdentifier:
                        "bmV3c0BwaXRjaGJvb2suY29tXyEqJF9BdXJvcmEgdG8gZ28gcHVibGljIGF0ICQxM0IgdmlhIFNQQUNfISokX2VuXyEqJF9rb18hKiRfNjBmMTc5MDY4NTk5MzcwMDA5ZjYxOGEx",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T12:18:14.749Z",
                    updatedAt: "2021-07-16T12:18:35.889Z",
                    fromEmail: "news@pitchbook.com",
                    fromName: "PitchBook News",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "PitchBook News<news@pitchbook.com>",
                    preview:
                        "피치북 2021년 7월 16일 뉴스레터가 마음에 드시나요? 데이터 출처 (오로라 제공)",
                    previewOriginal:
                        "PitchBook July 16, 2021 Like our newsletter? The",
                    s3Info: {
                        object: {
                            key: "b813261e-eade-4684-95a0-62f885e017a5",
                            size: 563989,
                            eTag: "ac0404b9c61fd936a40c71aed0423338",
                            sequencer: "0060F1791A3FB13E34",
                        },
                    },
                    searchKeywords: [
                        "Aurora,",
                        "SPAC을",
                        "통해",
                        "130억",
                        "달러에",
                        "상장",
                        "Aurora",
                        "to",
                        "go",
                        "public",
                        "at",
                        "$13B",
                        "via",
                        "SPAC",
                    ],
                    sourceLanguage: "en",
                    subject: "Aurora, SPAC을 통해 130억 달러에 상장",
                    subjectOriginal: "Aurora to go public at $13B via SPAC",
                    targetLanguage: "ko",
                    thumbnails: "https://my.pitchbook.com/n/44741.2968052.gif",
                    newslettersMetadata: [
                        {
                            _id: "PitchBook News<news@pitchbook.com>",
                            title: "PitchBook ",
                            categoryIds: ["tech", "finance"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T12:17:29.262Z",
                            domain: "pitchbook.com",
                            newsletterLanguage: "en",
                            shortDescription:
                                "VC, M&A등 변화하는 세상에 앞서나가는데 필요한 정보를 제공하는 뉴스레터",
                            subscribeLink: "https://pitchbook.com/subscribe",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/pitchbook.png",
                            updatedAt: "2021-04-22T04:29:22.486Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
                {
                    _id: "60f1679703671e00089bba5a",
                    contentIdentifier:
                        "aW5mb0BjYXJuZXkuY29fISokX1N1bW1lciBCcmVlemXigKZfISokX2VuXyEqJF9rb18hKiRfNjBmMTY3OTcwMzY3MWUwMDA4OWJiYTU5",
                    subscribeEmail: "news.test@sample.com",
                    createdAt: "2021-07-16T11:03:51.514Z",
                    updatedAt: "2021-07-16T11:03:59.347Z",
                    fromEmail: "info@carney.co",
                    fromName: "The Daily Carnage",
                    isRead: false,
                    isTranslatedView: true,
                    newslettersMetadataId: "The Daily Carnage<info@carney.co>",
                    preview:
                        "기분이 좋아집니다. 우리 마음의 주간 검열을 통해 날고 있습니다. ‌ ‌ ‌ ‌ ‌ ‌",
                    previewOriginal:
                        "Makes us feel fine. Blowin' through the weekly ro",
                    s3Info: {
                        object: {
                            key: "de3ddf95-bfbb-43b1-a849-09917cb0b02f",
                            size: 233831,
                            eTag: "0b03c3b54a658973417fde32111aa69a",
                            sequencer: "0060F1679D8E1DD382",
                        },
                    },
                    searchKeywords: ["여름바람…", "Summer", "Breeze…"],
                    sourceLanguage: "en",
                    subject: "여름바람…",
                    subjectOriginal: "Summer Breeze…",
                    targetLanguage: "ko",
                    thumbnails:
                        "https://carney.co/wp-content/uploads/2021/07/FB-Group-Twitter-Announcement.jpeg",
                    newslettersMetadata: [
                        {
                            _id: "The Daily Carnage<info@carney.co>",
                            title: "Carney",
                            categoryIds: ["marketing"],
                            confirmationEmail: "",
                            contentReleaseSchedule: "",
                            createdAt: "2021-03-25T06:48:04.723Z",
                            domain: "carney.co",
                            newsletterLanguage: "en",
                            shortDescription:
                                "베스트 마케팅 콘텐츠를 골라 매일 보내주는 뉴스레터",
                            subscribeLink: "https://carney.co/daily-carnage/",
                            thumbnails:
                                "https://assets.sample.com/newsletter/web/carney.png",
                            updatedAt: "2021-03-25T06:48:04.723Z",
                            verified: true,
                            visible: true,
                            issue: "",
                        },
                    ],
                },
            ],
        },
    ],
    user_id: "6074e417b00fa600698a7f05",
};
