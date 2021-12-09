import React, { useEffect, useState } from "react";
import TableComp from "../table/Table";

const ListComp = () => {
  console.log('list')
  const [list, setList] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_ALL_DEV_URI}`;

    async function fetchData(url: string) {
      const data = await fetch(url);
      const res = await data.json();
      setList(res);
    }
    fetchData(url);
  }, []);

  return (
    <>
      <section>{list && <TableComp data={list || []} />}</section>
    </>
  );
};

export default React.memo(ListComp);
