import React from "react";

import styled from "styled-components";

export default function NumberStep(props) {
    const { step } = props;
    const PercentNumberStep = styled.div`
    left: ${step * 33}%;
  `;

    return <PercentNumberStep className="NumberStep">{step}</PercentNumberStep>;
}
