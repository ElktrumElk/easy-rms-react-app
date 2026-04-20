
export default function modulesFiles({batchKey}) {

    const files = {
    b01: {
        modules: {
            'm01': {
                name: "HTML Basics",
                filesByDate: [
                    {
                        date: "18/04/2026",
                        files: [
                            { name: 'Learn_html.pdf', time: '2:45 PM' },
                            { name: 'The_basics.pdf', time: '2:45 PM' },
                            { name: 'HTML_tags.pdf', time: '3:01 PM' },
                            { name: 'anchorTags.docx', time: '3:02 PM' }
                        ]
                    },
                    {
                        date: "17/04/2026",
                        files: [
                            { name: 'Introduction_to_HTML.pdf', time: '10:15 AM' },
                            { name: 'Basic_Structure.docx', time: '11:30 AM' }
                        ]
                    }
                ]
            },

            'm02': {
                name: "C++ Fundamentals",
                filesByDate: [
                    {
                        date: "18/04/2026",
                        files: [
                            { name: 'Variables.docx', time: '12:00 PM' },
                            { name: 'Object.pdf', time: '1:45 PM' },
                            { name: 'Classes.docx', time: '2:01 PM' },
                            { name: 'loop.docx', time: '2:05 PM' }
                        ]
                    },
                    {
                        date: "16/04/2026",
                        files: [
                            { name: 'Data_Types.pdf', time: '9:20 AM' },
                            { name: 'Operators.docx', time: '9:45 AM' }
                        ]
                    }
                ]
            },

            'm03': {
                name: "Advanced Excel",
                filesByDate: [
                    {
                        date: "18/04/2026",
                        files: [
                            { name: 'sales.pdf', time: '2:45 PM' },
                            { name: 'pivot_tables.xlsx', time: '3:10 PM' },
                            { name: 'charts_and_graphs.pdf', time: '3:25 PM' }
                        ]
                    },
                    {
                        date: "19/04/2026",
                        files: [
                            { name: 'VLOOKUP_Advanced.docx', time: '1:15 PM' },
                            { name: 'Macros_Basics.pdf', time: '2:00 PM' }
                        ]
                    }
                ]
            },

            'm04': {
                name: "Python for Beginners",
                filesByDate: [
                    {
                        date: "18/04/2026",
                        files: [
                            { name: 'Python_Introduction.pdf', time: '4:10 PM' },
                            { name: 'Lists_and_Tuples.docx', time: '4:30 PM' },
                            { name: 'Functions.pdf', time: '5:05 PM' }
                        ]
                    },
                    {
                        date: "15/04/2026",
                        files: [
                            { name: 'Hello_World.py', time: '8:45 AM' },
                            { name: 'Variables_and_Data_Types.pdf', time: '9:10 AM' }
                        ]
                    },
                    {
                        date: "14/04/2026",
                        files: [
                            { name: 'Control_Flow.pdf', time: '11:20 AM' }
                        ]
                    }
                ]
            }

            
        }
    }
};

    const batch = files[batchKey] || { modules: {} };
    const modules = Object.entries(batch.modules).map(([moduleKey, module]) => ({ moduleKey, ...module }));

    return {
        batchKey,
        modules
    };
}