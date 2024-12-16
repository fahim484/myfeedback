import { IoIosArrowDown } from "react-icons/io";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const currentMonth = monthNames[new Date().getMonth()];
const currentYear = new Date().getFullYear();

const footerData = {
    sections: [
        {
            title: "About",
            menus: [
                {
                    items: [
                        "About MyFeedback",
                        "Investor Relations",
                        "Trust & Safety",
                        "Content Guidelines",
                        "Terms of Service",
                        "Privacy Policy",
                        "Your Privacy Choices",
                    ],
                },
            ],
        },

        {
            title: "MyFeedback",
            menus: [
                {
                    items: [
                        "MyFeedback for business",
                        "Collections",
                        "Talk",
                        "Events",
                        "MyFeedback blog",
                        "Support",
                        "Developers",
                    ],
                },
            ],
        },
        {
            title: "Languages",
            menus: [
                {
                    title: "Languages",
                    items: [
                        { label: "English", icon: <IoIosArrowDown /> },
                        { label: "Spanish" },
                    ],
                },
                {
                    title: "Countries",
                    items: [
                        { label: "Singapore", icon: <IoIosArrowDown /> },
                        { label: "China" },
                    ],
                },
            ],
        },
    ],
    


    partnerSection: {
        image: "Img/home/footer/partner.png",
        title: "Become a Partner",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
    },

    logo: "#",
    copyright: `Copyright © ${currentMonth} ${currentYear} myfeedback, designed by scott.`,
};

const MenuSection = ({ title, menus = [] }) => {
    return (
        <div className="flex flex-row md:flex-col items-start gap-4 p-5 md:p-0">
            {menus.map((menu, index) => (
                <ul key={index}>
                    <p className="text-secondary font-heading font-extrabold text-xl leading-[25px] mb-[11px]">
                        {menu.title || title} {/* Fallback to section title if menu title is undefined */}
                    </p>
                    {menu.items?.map((item, idx) => (
                        <li
                            key={idx}
                            className="font-body mb-[13px] text-primary_dark text-sm leading-[16.41px] cursor-pointer"
                        >
                            {typeof item === 'object' ? ( /* Fix to correctly render object properties */
                                <span className="flex items-center gap-1">
                                    {item.label} {item.icon}
                                </span>
                            ) : (
                                item
                            )}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

const Footer = () => {
    const { sections, partnerSection, logo, copyright } = footerData; // Removed unused `socialIcons`
    return (
        <footer>
            <div className="container mx-auto flex flex-col items-center gap-6 pt-[26px]">
                <div className="grid grid-cols-2 md:grid-cols-3 w-full justify-items-center">
                    {sections.map((section, index) => (
                        <MenuSection
                            key={index}
                            title={section.title}
                            menus={section.menus}
                        />
                    ))}
                </div>

                {/* Add logo and copyright center aligned */}

                <div className="text-sm leading-[16.41px] font-semibold font-body text-secondary my-5 md:mt-10 md:mb-[58px]">
                    {copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;