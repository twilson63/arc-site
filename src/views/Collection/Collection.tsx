import Arweave from "arweave";

import { ArweaveCollectionProps } from "@/types";

import { CollectionHeader } from "./CollectionHeader";

import * as S from "./styles";

const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
    timeout: 40000,
    logging: false,
});

export default function _Collection(props: { data: ArweaveCollectionProps }) {
    return (
        <S.Wrapper>
            <CollectionHeader
                id={props.data.id}
                image={props.data.state.image}
                title={props.data.state.title}
                artefactCount={props.data.artefacts}
                totalContributions={Math.floor(
                    +arweave.ar.winstonToAr(
                        props.data.state.totalContributions
                    ) * 1e5
                ) / 1e5}
            />
        </S.Wrapper>
    )
}