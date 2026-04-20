


export default function ModulesFiles() {
    const date = new Date();

    const [files] = {
        b01: {
            modules: {
                'm01': {
                    filesByDate: [
                        {
                            date: `${date.getUTCDay()}/${date.getUTCMonth() / date.getUTCFullYear()}`,
                            files: [
                                {
                                    name: 'Learn_html.pdf',
                                    time: '2:45 PM'
                                },
                                {
                                    name: 'The_basics.pdf',
                                    time: '2:45 PM'
                                },
                                {
                                    name: 'HTML_tags.pdf',
                                    time: '3:01 PM'
                                },
                                {
                                    name: 'anchorTags.docx',
                                    time: '3:02 PM'
                                },
                            ]
                        }

                    ]
                },
                'm02': {
                    filesByDate: [
                        {
                            date: `${date.getUTCDay()}/${date.getUTCMonth() / date.getUTCFullYear()}`,
                            name: 'c++',
                            files: [
                                {
                                    name: 'Variables.docx',
                                    time: '12:00 PM'
                                },
                                {
                                    name: 'Object.pdf',
                                    time: '1:45 PM'
                                },
                                {
                                    name: 'Classes.docx',
                                    time: '2:01 PM'
                                },
                                {
                                    name: 'loop.docx',
                                    time: '2:05 PM'
                                },
                            ]
                        }

                    ]
                },

                'm03': {
                    filesByDate: [
                        {
                            date: `${date.getUTCDay()}/${date.getUTCMonth() / date.getUTCFullYear()}`,
                            name: 'Advance Excel',
                            files: [
                                {
                                    name: 'Learn_html.pdf',
                                    time: '2:45 PM'
                                },
                                {
                                    name: 'The_basics.pdf',
                                    time: '2:45 PM'
                                },
                                {
                                    name: 'HTML_tags.pdf',
                                    time: '3:01 PM'
                                },
                                {
                                    name: 'anchorTags.docx',
                                    time: '3:02 PM'
                                },
                            ]
                        }

                    ]
                }
            }
        }
    }
}