import "./sidebar.scss"
import {Icon} from "@mui/material";
import Image from "next/image";
import sidebarLogo from '@/images/sidebar-logo.svg';

type SidebarItemChild = {
    title: string;
    icon: string;
    isActive?: boolean;
}

type SidebarItem = {
    title: string;

    children: SidebarItemChild[];
}

const sidebarItems:SidebarItem[] = [
    {
        title: 'شناساایی ترندها',
        children: [
            {
                title: 'ترند ویژوالایزر',
                icon: 'star',
            },
        ],
    },
    {
        title: 'تحلیل پتانسیل بازدید صفحات',
        children: [
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
                isActive: true,
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
        ],
    },
    {
        title: 'تحلیل پتانسیل بازدید صفحات',
        children: [
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
        ],
    },
    {
        title: 'تحلیل پتانسیل بازدید صفحات',
        children: [
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
        ],
    },
    {
        title: 'تحلیل پتانسیل بازدید صفحات',
        children: [
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
            {
                title: 'محاسبه نرخ کلیک CTR',
                icon: 'star',
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className={`font-yekan-bakh sidebar`}>
            <div className={"title"}>
                <Image src={sidebarLogo} alt={''} />
            </div>

            {sidebarItems.map((sidebarItem, index) => {
                return (
                    <div key={`sidebar-item-${index}`} className={"sidebar-item"}>
                        <div className={'title'}>{sidebarItem.title}</div>

                        {sidebarItem.children.map((child,childIndex) => {
                            return (
                                <div key={`sidebar-item-${index}-child-${childIndex}`} className={`sidebar-child ${child.isActive?'is-active':''}`}>
                                    <Icon>{child.icon}</Icon> {child.title}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </aside>
    )
}