import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React, { useEffect, useState } from "react";
import HighlightCellRenderer from "../highlight/HighlightCellRenderer";
import ButtonRenderer from "../button-renderer/ButtonRenderer";

// interface fieldListModel {
//   val: string;
//   content: string;
// }

// interface responseModel {
//   no: string;
//   FL: [fieldListModel];
// }

const TableComp = ({ data }: any) => {
  const [devList, setDevList] = useState<any>();

  const defaultColDef = {
    flex: 1,
    filter: true,
    sortable: true,
    resizable: true,
    wrapText: true,
    autoHeight: true,
  };

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      minWidth: 175,
      maxWidth: 250,
      cellRenderer: "highlightCellRenderer",
    },
    {
      headerName: "Resume",
      field: "resumeURL",
      minWidth: 150,
      maxWidth: 150,
      cellRenderer: "buttonRenderer",
    },
    {
      headerName: "Level",
      field: "level",
      minWidth: 150,
      maxWidth: 150,
      cellRenderer: "highlightCellRenderer",
    },
    {
      headerName: "Notable Skills",
      field: "skills",
      minWidth: 175,
      cellRenderer: "highlightCellRenderer",
    },
    {
      headerName: "Status",
      field: "status",
      minWidth: 150,
      maxWidth: 200,
      cellRenderer: "highlightCellRenderer",
    },
  ];

  useEffect(() => {
    const prepareList = (data: any) => {
      let tmpList: any = [];
      let finalList: any = [];

      data.forEach((itemO: any) => {
        let tmpObj: any = {};
        tmpObj["no"] = itemO.no;
        itemO.FL.forEach((itemI: any) => {
          tmpObj[itemI.val.replace(/\s/g, "")] = itemI.content;
        });
        tmpList.push(tmpObj);
      });
      // console.log(tmpList);

      tmpList.forEach((item: any) => {
        let fullName = `${item?.FirstName || ""} ${item?.LastName || ""}`;
        let tmpObj: any = {
          name: fullName.trim(),
          resumeURL: `${item?.PublicProfileLink || "NA"}`,
          level: `${item?.Level || "NA"}`,
          skills: item?.NotableSkills || "NA",
          status: `${item?.Status || "NA"}`,
        };
        finalList.push(tmpObj);
      });
      // console.log(finalList);

      setDevList(finalList);
    };

    prepareList(data);
  }, []);

  return (
    <>
      <div>
        <div className="ag-theme-alpine h-90vh">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={devList}
            suppressMenuHide={true}
            unSortIcon={true}
            suppressRowClickSelection={true}
            defaultColDef={defaultColDef}
            frameworkComponents={{
              buttonRenderer: ButtonRenderer,
              highlightCellRenderer: HighlightCellRenderer,
            }}
            animateRows={true}
            pagination={true}
            paginationPageSize={1000}
            overlayLoadingTemplate={
              '<span class="" style="color: black;">Please wait while your data is loading...</span>'
            }
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default React.memo(TableComp);
