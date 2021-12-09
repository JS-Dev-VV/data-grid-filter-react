import React, { useContext, useState } from "react";
import { ListContext } from "../../contexts/listContext";
import TableComp from "../table/Table";

const ListComp = () => {
  const listContext = useContext(ListContext);

  return (
    <>
      <section>
        <TableComp data={listContext.list} />
      </section>
    </>
  );
};

export default React.memo(ListComp);
