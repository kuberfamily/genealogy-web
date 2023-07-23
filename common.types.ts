import { Session, User } from "next-auth"
import { MouseEventHandler, ReactNode } from "react"

export type showtitleOnhoverProps = {
    text: string,
    position: string
}

export type headerIconProps = {
    Icon: string,
    count?: ReactNode,
    title: string,
}
export type sidebarIconProps = {
    Icon: string;
    title: string;
    isActive: boolean;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface SessionInterface extends Session {
    user: User & {
        id: string;
        name: string;
        avatarUrl: string;
        email: string;
    };
}