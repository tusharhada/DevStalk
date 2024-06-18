const MenuData = [
        {
                id: "m1",
                value: "Inspiration",
                href: "/",
                submenu: [
                        {
                                id: "m1a",
                                href: "/shots/popular_projects",
                                head: "Explore Projects",
                                sub_head: "Trending projects to inspire you"
                        },
                        {
                                id:"m1b",
                                href: "/shots/recent",
                                head: "Fresh",
                                sub_head: "Up-and-coming Developers"
                        },
                        {
                                id:"m1c",
                                href: "/shots?list=playoffs",
                                head: "Playoffs",
                                sub_head: "Work users riffing on"
                        },
                        {
                                id:"m1d",
                                href: "/stories",
                                head: "Blogs",
                                sub_head: "Interviews, tutorials and more"
                        },

                ],
        },
        {
                id: "m2",
                value: "Find Work",
                href: "/jobs",
                submenu: [
                        {
                                id: "m2a",
                                href: "/jobs",
                                head: "Job Board",
                                sub_head: "Find your dream job"
                        },
                        {
                                id: "m2b",
                                href: "/freelance-jobs",
                                head: "Freelance Projects",
                                sub_head: "An exclusive list for contract work",
                        }
                ]
        },
        {
                id: "m3",
                value: "Discussion",
                href: "/discussion",
        },
        {
                id: "m4",
                value: "Hire Professionals",
                href: "/jobs",
                submenu: [
                        {
                                id: "m4a",
                                href: "/search_user",
                                head: "Member Search",
                                sub_head: "Find, contact, and hire people",
                        },
                        {
                                id: "m4b",
                                href: "/create_job",
                                head: "List my Job Opening",
                                sub_head: "The #1 job board",
                        },
                        {
                                id: "m4c",
                                href: "/freelance",
                                head: "Post a Freelance Project",
                                sub_head: "Board for Freelance & contact work",
                        },
                ]
        },

];

export default MenuData;
