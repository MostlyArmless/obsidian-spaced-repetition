import { HeadingCache } from "obsidian";
import { getCardContext } from "src/card-functions";

describe("getCardContext", (): void => {
    test("flashcard is inside 3 layers of headings", (): void => {
        const cardLine = 6;
        const headings: HeadingCache[] = [
            {
                position: {
                    start: {
                        line: 0,
                        col: 0,
                        offset: 0,
                    },
                    end: {
                        line: 0,
                        col: 21,
                        offset: 21,
                    },
                },
                heading: "Flashcard test note",
                level: 1,
            },
            {
                position: {
                    start: {
                        line: 2,
                        col: 0,
                        offset: 42,
                    },
                    end: {
                        line: 2,
                        col: 15,
                        offset: 57,
                    },
                },
                heading: "Demo heading",
                level: 2,
            },
            {
                position: {
                    start: {
                        line: 4,
                        col: 0,
                        offset: 59,
                    },
                    end: {
                        line: 4,
                        col: 14,
                        offset: 73,
                    },
                },
                heading: "Subheading",
                level: 3,
            },
        ];

        const context = getCardContext(cardLine, headings);

        expect(context).toEqual("Flashcard test note > Demo heading > Subheading");
    });

    it("flashcard is prior to all headings", (): void => {
        const cardLine = 1;
        const headings: HeadingCache[] = [
            {
                position: {
                    start: {
                        line: 4,
                        col: 0,
                        offset: 61,
                    },
                    end: {
                        line: 4,
                        col: 21,
                        offset: 82,
                    },
                },
                heading: "Flashcard test note",
                level: 1,
            },
            {
                position: {
                    start: {
                        line: 6,
                        col: 0,
                        offset: 103,
                    },
                    end: {
                        line: 6,
                        col: 15,
                        offset: 118,
                    },
                },
                heading: "Demo heading",
                level: 2,
            },
            {
                position: {
                    start: {
                        line: 8,
                        col: 0,
                        offset: 120,
                    },
                    end: {
                        line: 8,
                        col: 14,
                        offset: 134,
                    },
                },
                heading: "Subheading",
                level: 3,
            },
            {
                position: {
                    start: {
                        line: 13,
                        col: 0,
                        offset: 169,
                    },
                    end: {
                        line: 13,
                        col: 18,
                        offset: 187,
                    },
                },
                heading: "Here's a heading",
                level: 1,
            },
            {
                position: {
                    start: {
                        line: 14,
                        col: 0,
                        offset: 188,
                    },
                    end: {
                        line: 14,
                        col: 26,
                        offset: 214,
                    },
                },
                heading: "Containing a subheading",
                level: 2,
            },
            {
                position: {
                    start: {
                        line: 15,
                        col: 0,
                        offset: 215,
                    },
                    end: {
                        line: 15,
                        col: 40,
                        offset: 255,
                    },
                },
                heading: "With no questions inside any of them",
                level: 3,
            },
            {
                position: {
                    start: {
                        line: 17,
                        col: 0,
                        offset: 257,
                    },
                    end: {
                        line: 17,
                        col: 15,
                        offset: 272,
                    },
                },
                heading: "Final heading",
                level: 1,
            },
            {
                position: {
                    start: {
                        line: 22,
                        col: 0,
                        offset: 296,
                    },
                    end: {
                        line: 22,
                        col: 19,
                        offset: 315,
                    },
                },
                heading: "final subheading",
                level: 2,
            },
            {
                position: {
                    start: {
                        line: 24,
                        col: 0,
                        offset: 317,
                    },
                    end: {
                        line: 24,
                        col: 22,
                        offset: 339,
                    },
                },
                heading: "final tiny heading",
                level: 3,
            },
        ];

        const context = getCardContext(cardLine, headings);

        expect(context).toEqual("");
    });
});
