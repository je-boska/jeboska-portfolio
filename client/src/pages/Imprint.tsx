import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getImpressum } from "../queries/impressumQuery";
import { ImpressumType } from "../types";
import BlockContent from "@sanity/block-content-to-react";

const Imprint = () => {
  const [impressum, setImpressum] = useState<ImpressumType | undefined>(
    undefined
  );

  useEffect(() => {
    getImpressum().then((data) => setImpressum(data));
  }, []);

  return (
    <Container className="impressum" mt={20}>
      <div>{impressum && <BlockContent blocks={impressum.body} />}</div>
    </Container>
  );
};

export default Imprint;
