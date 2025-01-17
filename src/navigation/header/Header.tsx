import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from 'react-router-dom'

import { IconButton } from "components/atoms/IconButton";
import { WalletConnect } from "wallet/WalletConnect";

import { ASSETS, ASSET_SRC } from "config";
import { SOCIAL_PATHS } from "paths";
import { LANGUAGE } from "language";
import * as urls from "urls";
import {
    checkDesktop,
    checkWindowResize,
    hideDocumentBody,
    showDocumentBody
} from "window";
import * as S from "./styles";

export default function Header() {
    const [open, setOpen] = React.useState(checkDesktop());
    const [desktop, setDesktop] = React.useState(checkDesktop());

    function handleWindowResize() {
        if (checkDesktop()) {
            setDesktop(true);
            setOpen(true);
        } else {
            setDesktop(false);
            setOpen(false);
        }
    }

    function handleNavStatus() {
        checkDesktop() ? setOpen(true) : setOpen(!open);
    }

    checkWindowResize(handleWindowResize);

    if (open && !checkDesktop()) {
        hideDocumentBody();
    }
    else {
        showDocumentBody();
    }

    function navList() {
        return (
            <S.NC>
                <S.NavPaths>
                    {/* {NAV_PATHS.map((path, index) => (
                            <S.Link key={index} href={path.href}>
                                {path.name}
                            </S.Link>
                        ))} */}
                </S.NavPaths>
                <S.SC>
                    <S.SocialPaths>
                        {SOCIAL_PATHS.map((path, index) => (
                            <S.SocialLink key={index} href={path.href}>
                                <ReactSVG src={`${ASSET_SRC}/${path.svg}`} />
                            </S.SocialLink>
                        ))}
                    </S.SocialPaths>
                    <S.Connect>
                        <WalletConnect />
                    </S.Connect>
                </S.SC>
            </S.NC>
        );
    }

    function getNav() {
        if (desktop) {
            return navList();
        } else {
            return (
                <>
                    <S.NCMobile>
                        <S.MenuContainer>
                            <S.Menu>
                                <IconButton
                                    warning={open}
                                    src={open ? ASSETS.close : ASSETS.menu}
                                    handlePress={handleNavStatus}
                                />
                            </S.Menu>
                        </S.MenuContainer>
                    </S.NCMobile>
                    {open && <S.OpenContainer>{navList()}</S.OpenContainer>}
                </>
            );
        }
    }

    return (
        <S.Wrapper>
            <S.NavContainer>
                <S.LogoContainer>
                    <Link to={urls.base}>
                        <S.LogoContent>
                            <S.LogoHeaderContent>
                                <S.LogoHeader>{LANGUAGE.companyTitle}</S.LogoHeader>
                                <S.Version>
                                    <span>{LANGUAGE.appVersion.toUpperCase()}</span>
                                </S.Version>
                            </S.LogoHeaderContent>
                            <S.LogoSubHeader>{LANGUAGE.companyDescription}</S.LogoSubHeader>
                        </S.LogoContent>
                    </Link>
                </S.LogoContainer>
                {getNav()}
            </S.NavContainer>
        </S.Wrapper>
    )
}